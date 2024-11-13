import { BadRequestException } from "@nestjs/common";
import { messages } from "./constants";

export const profileFileFilter = (_req, file, callback) => {
    const allowedImageTypes = ["jpg", "png", "jpeg"];

    const isValidFileType = allowedImageTypes.includes(file.mimetype.split("/")[1]);

    if (isValidFileType) {
        return callback(null, true);
    }

    callback(new BadRequestException(messages.error.ImageTypeIsNotSupported), false);
};
