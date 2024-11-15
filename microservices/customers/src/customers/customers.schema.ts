import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class customer extends Document {
  @Prop({ required: true })
  customerName: string;

  @Prop({ required: true })
  customerMobileNo: string;

  @Prop({ required: true })
  customerAddress: string;
}

export const customerSchema = SchemaFactory.createForClass(customer);
