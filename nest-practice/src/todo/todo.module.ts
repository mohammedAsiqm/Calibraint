import {Module} from '@nestjs/common'
import {MongooseModule} from "@nestjs/mongoose"
import {TodoController} from "./todo.controller"
import {TodoService} from "./todo.service"
import {TodoList , TodoSchema} from "./todo.schema"

@Module({
    imports : [MongooseModule.forFeature([{name : TodoList.name , schema : TodoSchema}])],
    controllers : [TodoController],
    providers : [TodoService]
})
export class TodoModule{}
