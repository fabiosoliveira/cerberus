/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import Config from './config';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PoolController } from './pool/pool.controller';
import { AutomationController } from './automation/automation.controller';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { PoolService } from './pool/pool.service';
import { AutomationService } from './automation/automation.service';
import { TradeController } from './trade/trade.controller';
import { TradeService } from './trade/trade.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: Config.MAILER_TRANSPORT,
      defaults: {
        secure: false,
        from: Config.DEFAULT_FROM,
      },
    }),
    AuthModule,
  ],
  controllers: [
    AppController,
    UserController,
    PoolController,
    AutomationController,
    TradeController,
  ],
  providers: [
    AppService,
    UserService,
    AuthService,
    JwtService,
    PoolService,
    AutomationService,
    TradeService,
  ],
})
export class AppModule {}
