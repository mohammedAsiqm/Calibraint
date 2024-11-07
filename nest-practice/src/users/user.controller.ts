import {Controller , Get, Post , Body, UseGuards} from '@nestjs/common'
import {UserService} from "./user.service"
import {Validator} from "../auth/auth.service"

class RegisterUserDTO{
    name : string
    age : number
    email : string
    password : string
}

@Controller('users')
export class userController{

    constructor(private readonly userService : UserService){}
    @Post('/register')
    registerUser(@Body() user : RegisterUserDTO ){
       return this.userService.addUser(user)
    }

    @Get('/')
    @UseGuards(Validator)
    getUsers(){
        return this.userService.getAllUsers()
    }
}
