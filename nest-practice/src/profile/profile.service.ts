import { Model, Types} from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Profile } from "./profile.schema";


@Injectable()
export class ProfileService {
    constructor(@InjectModel(Profile.name) private readonly profileModel: Model<Profile>) {}

    async uploadProfile(file: object) {
        return (await this.profileModel.create(file)).save();
    }

    async viewProfile( id: string) : Promise<string> {
        const _id = new Types.ObjectId(id)

        const profile = await this.profileModel.findOne({_id})

        if(!profile){ 
            return ""
        }
        
        return profile.path
    }
}
