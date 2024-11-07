import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UserService} from './users/user.service'
import { AppService } from './app.service';
import {UserModule} from "./users/user.module"
import {AuthModule} from "./auth/auth.module"

@Module({
  imports: [UserModule , AuthModule],
  controllers: [AppController ],
  providers: [AppService , UserService],
})
export class AppModule {}
