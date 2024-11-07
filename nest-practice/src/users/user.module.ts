 import {Module , forwardRef} from '@nestjs/common'
 import {userController} from './user.controller'
 import {UserService} from "./user.service"
 import {AuthModule} from "../auth/auth.module"


 @Module({
     imports : [forwardRef(()=> AuthModule)],
     controllers : [userController],
     providers : [UserService],
     exports : [UserService]

 })
 export class UserModule {}