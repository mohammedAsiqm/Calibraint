import { Controller, Get, Post, UploadedFile, UseInterceptors, Res, Param, BadRequestException } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { profileFileFilter } from "../shared/file-filters";
import { ProfileService } from "./profile.service";
import { messages, profileDestination, profileFileLimit } from "./constants";

@Controller("profile")
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post("upload")
    @UseInterceptors(
        FileInterceptor("file", {
            dest: profileDestination,
            limits: {
                fileSize: profileFileLimit,
            },
            fileFilter: profileFileFilter,
        }),
    )
    async uploadProfile(@UploadedFile() file: Express.Multer.File) {
        if (!file) return new BadRequestException(messages.error.FileIsRequired);

        return this.profileService.uploadProfile(file);
    }

    @Get("/:id")
    async getProfileImage(@Res() res: Response, @Param("id") id: string) {
        return this.profileService.getProfileImage(res, id);
    }
}
