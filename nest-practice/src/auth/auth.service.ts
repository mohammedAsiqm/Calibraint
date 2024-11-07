import {Injectable , CanActivate, ExecutionContext} from "@nestjs/common";
import {UserService} from "../users/user.service"
import {sign,verify} from 'jsonwebtoken'

interface UserCredential{
    email : string,
    password : string
}

interface JwtPayload {
    email: string;
  }

enum TOKEN{
    secretKey = "hsdlkuahseiuweuhiwelkeqlkejqw"
}

@Injectable()
export class AuthService{
    constructor(private readonly userService : UserService){}

    signinService(userCredential : UserCredential){
      let user = this.userService.users.find(user => user.email === userCredential.email)
      if(!user) return {message : "User Not found", statusCode : 401 }
      if(user.password !== userCredential.password) return {message : "Incorrect Password", statusCode : 401}
      let payload : JwtPayload = {email : user.email}
      let token = sign(payload,TOKEN.secretKey)
      return {token ,statusCode : 200}
    }
}

@Injectable()
export class Validator implements CanActivate { 
    constructor(private readonly userService : UserService){}
    canActivate(context: ExecutionContext): boolean {
        try {
            const request = context.switchToHttp().getRequest();
            let token : string = request.headers['authorization']
            let decodedToken =  verify(token,TOKEN.secretKey,{complete : false}) as JwtPayload
            
            if(!this.userService.users.some(userObj => userObj.email === decodedToken.email )) return false
            return true
        } catch (error) {
            return false
        }
      
    }
}