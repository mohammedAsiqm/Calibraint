import { readFile, unlink } from "fs/promises";
import { Model, Types } from "mongoose";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Response } from "express";
import { Profile } from "./profile.schema";
import { messages } from "./constants";

@Injectable()
export class ProfileService {
    constructor(@InjectModel(Profile.name) private readonly profileModel: Model<Profile>) {}

    async uploadProfile(file: Express.Multer.File) {
        const fileBuffer = await readFile(file.path);
        file.buffer = fileBuffer;

        await unlink(file.path);

        return (await this.profileModel.create(file)).save();
    }

    async getProfileImage(res: Response, id: string) {
        const _id = new Types.ObjectId(id);

        const profile = await this.profileModel.findOne({ _id });

        if (!profile) {
            throw new NotFoundException(messages.error.ProfileNotFound);
        }

        const bufferStream = Buffer.from(profile.buffer);

        res.write(bufferStream);
        res.end();
    }
}
