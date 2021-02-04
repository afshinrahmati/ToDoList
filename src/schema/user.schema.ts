import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class BodyApi extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastname: string;
}
export const BodySchema = SchemaFactory.createForClass(BodyApi);