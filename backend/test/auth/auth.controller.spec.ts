import { Test, TestingModule } from '@nestjs/testing';
import { authServiceMock } from './auth.service.mock';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { AuthController } from '../../src/auth/auth.controller';
import {
  bannedUserMock,
  userServiceMock,
} from '../../test/user/user.service.mock';
import { mailerServiceMock } from './mailer.service.mock';
import { AuthDTO } from 'src/auth/auth.dto';
import { UserDTO } from 'src/user/user.dto';
import { Status } from 'commons/models/status';
import { ChainId } from 'commons/models/chainId';

jest.mock('ethers', () => {
  return {
    ethers: {
      verifyMessage: (message: string, secret: string) => {
        if (!message || !secret) throw new Error();
        return '0x123';
      },
    },
  };
});

describe('AuthController Tests', () => {
  const authDto = {
    secret: 'abc123',
    timestamp: Date.now(),
    wallet: '0x123',
  } as AuthDTO;

  const userDto = {
    address: '0x123',
    name: 'LuizTools',
    email: 'contato@luiztools.com.br',
    id: 'abc123',
    activationCode: '123456',
    activationDate: new Date(),
    network: ChainId.MAINNET,
    planId: 'Gold',
    privateKey: 'abc123',
    status: Status.NEW,
  } as UserDTO;

  let authController: AuthController;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [userServiceMock, mailerServiceMock, authServiceMock],
    }).compile();

    authController = moduleFixture.get<AuthController>(AuthController);
  });

  it('Should be defined', () => {
    expect(authController).toBeDefined();
  });

  it('Should sign in', async () => {
    const result = await authController.signin(authDto);
    expect(result).toEqual('abc123');
  });

  it('Should NOT sign in (oudated)', async () => {
    const oneHourAgo = Date.now() - 1 * 60 * 60 * 1000;
    await expect(
      authController.signin({ ...authDto, timestamp: oneHourAgo }),
    ).rejects.toEqual(new BadRequestException('Timestamp too old.'));
  });

  it('Should NOT sign in (invalid secret)', async () => {
    await expect(
      authController.signin({ ...authDto, secret: null! }),
    ).rejects.toEqual(new BadRequestException('Invalid secret.'));
  });

  it('Should NOT sign in (wrong wallet)', async () => {
    await expect(
      authController.signin({ ...authDto, wallet: '0x456' }),
    ).rejects.toEqual(
      new UnauthorizedException("Wallet and secret doesn't match."),
    );
  });

  it('Should NOT sign in (banned)', async () => {
    userServiceMock.useValue.getUserByWallet.mockResolvedValue(bannedUserMock);
    await expect(authController.signin({ ...authDto })).rejects.toEqual(
      new UnauthorizedException('Banned user.'),
    );
  });

  it('Should sign up', async () => {
    const result = await authController.signup(userDto);
    expect(result).toBeDefined();
    expect(result.status).toEqual(Status.NEW);
  });

  it('Should activate', async () => {
    const result = await authController.activate(userDto.address, '123456');
    expect(result).toEqual('abc123');
  });
});
