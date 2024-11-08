import {Controller , Get , Post , Put , Delete , Body, Param} from "@nestjs/common";
import {AddTodoDto} from "./todo.dto"
import {TodoService} from "./todo.service"


@Controller("/todo")
export class TodoController {

    constructor(private readonly todoService : TodoService){}

    @Get("/")
    async getAllTodoLists(){
        const todoLists = await this.todoService.getAllTodoInList()
        return todoLists
    }

    @Post('/addTodo')
    async addTodoInList(@Body() data : AddTodoDto){   
        const addedTodoResponse = await this.todoService.addTodoInList(data.note) 
        return addedTodoResponse
    }

    @Put("/updateTodo/:id")
    async updateTodoInList(@Body('note') note : string , @Param('id') id : string){
        const updatedResponse = await this.todoService.updateTodoInList(note,id)
        return updatedResponse
    }

    @Delete("/deleteTodo/:id")
    async deleteTodoInList(@Param('id') id : string){
        const deletedResponse = await this.todoService.deleteTodoInList(id)
        return deletedResponse
    }
}