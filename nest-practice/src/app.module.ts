import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UserService} from './users/user.service'
import { AppService } from './app.service';
import {UserModule} from "./users/user.module"
import {AuthModule} from "./auth/auth.module"
import {TodoModule} from "./todo/todo.module"
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/TodoDB"),
    UserModule , AuthModule , TodoModule],
  controllers: [AppController ],
  providers: [AppService , UserService],
})
export class AppModule {}
