import {Body, Controller , Post} from '@nestjs/common'
import {AuthService} from "./auth.service"

interface SigninDto {
    email : string,
    password : string
}

@Controller("/auth")
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('/signin')
    signIn(@Body() userCredential : SigninDto){
       return this.authService.signinService(userCredential) 
    }
    
}