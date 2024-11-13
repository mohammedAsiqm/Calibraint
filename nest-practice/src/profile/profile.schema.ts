import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
export class Profile extends Document {
    @Prop()
    path: string;

    @Prop()
    size: number;

    @Prop()
    filename: string;

    @Prop()
    fieldname: string;

    @Prop()
    mimetype: string;

    @Prop()
    originalname: string;

    @Prop()
    encoding: string;

    @Prop()
    destination: string;

    @Prop()
    buffer: Buffer;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
