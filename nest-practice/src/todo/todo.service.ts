import {Injectable} from "@nestjs/common"
import {InjectModel} from "@nestjs/mongoose"
import {Model, Types} from "mongoose"
import {TodoList}  from "./todo.schema"


@Injectable()
export class TodoService {

    constructor(@InjectModel(TodoList.name) private readonly todoModel : Model<TodoList>){}
    
    async addTodoInList(note : string){
        const createdTodo = await new this.todoModel({note}).save()
        return createdTodo
    }

    async updateTodoInList(note : string , id : string){
        try {
            const _id = new Types.ObjectId(id)
            await this.todoModel.updateOne({_id},{$set : {note : note}})
            return {message : "Todo List Updated", statusCode : 200}
        } catch (error) {
            return error
        }
    }

    async deleteTodoInList(id : string){
        try {
            const _id = new Types.ObjectId(id)
            await this.todoModel.deleteOne({_id})
            return {message : `Todo List id : ${id} deleted` , statusCode : 200}
        } catch (error) {
            return error
        }
    }

    async getAllTodoInList(){
        const todoLists = await this.todoModel.find()
        return todoLists
    }
    
}