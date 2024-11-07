import {Module , forwardRef} from "@nestjs/common"
import {AuthController} from './auth.controller'
import {AuthService , Validator} from "./auth.service"
import {UserModule} from "../users/user.module"


@Module({
    imports : [forwardRef(()=> UserModule)],
    controllers : [AuthController],
    providers : [AuthService , Validator],
    exports : [Validator]
})
export class AuthModule{}