import {Injectable } from '@nestjs/common'
interface Users {
    name : string,
    age : number,
    email : string,
    password : string
}


@Injectable()
export class UserService {
    users : Users[] = []
    
    addUser(user : Users) : object {
        try {
        if(this.users.find(userObj => userObj.email === user.email)) return {message : `User email already exist` , statusCode : 400}   
        this.users.push(user)
        return {message : `User ${user.name} added` , statusCode : 200}
        } catch (error) {
          return {message : `User not added. Something went wrong` , statusCode : 400}
        }   
    }

    getAllUsers() : object {
        try {
            return {users : this.users , statusCode : 200}
        } catch (error) {
            return {message : `Something went wrong` , statusCode : 400}
        }
    }

}
