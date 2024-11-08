import {Schema , Prop , SchemaFactory} from "@nestjs/mongoose"
import {Document} from "mongoose"

@Schema({timestamps : true})
export class TodoList extends Document{
    @Prop()
    note : string

}

export const TodoSchema = SchemaFactory.createForClass(TodoList)