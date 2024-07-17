/* istanbul ignore file */

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
