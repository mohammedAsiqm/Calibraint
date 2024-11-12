import { createReadStream } from "fs";
import { join } from "path";
import { Controller, Get, Post, UploadedFile, UseInterceptors, Res, Param } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";

import { ProfileService } from "./profile.service";

@Controller("profile")
@UseInterceptors(FileInterceptor("file", { dest: "uploads" }))
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post("upload")
    uploadProfile(@UploadedFile() file: Express.Multer.File) {
        return this.profileService.uploadProfile(file);
    }

    @Get("/:id")
    async getProfile(@Res() res: Response, @Param("id") id: string) {
        const profilePath = await this.profileService.viewProfile(id);

        if (profilePath.trim() === "") {
            return res.json({ message: "no profile found" });
        }

        const file = createReadStream(join(profilePath));
        file.pipe(res);
    }
}
