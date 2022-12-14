import { Router } from "express"
import { CreateTodoController } from "../model/todo/useCases/createTodo/createTodoController";
import { DeleteTodoController } from "../model/todo/useCases/deleteTodo/deleteTodoController";
import { GetTodoController } from "../model/todo/useCases/getTodo/getTodoController";
import { UpdateTodoController } from "../model/todo/useCases/updateTodo/updateTodoController";

const todoRoutes = Router()

const createTodo = new CreateTodoController()
const getTodo = new GetTodoController()
const deleteTodo = new DeleteTodoController()
const updateTodo = new UpdateTodoController()

todoRoutes.post('/', createTodo.handle)
todoRoutes.get('/', getTodo.handle)
todoRoutes.delete('/:id', deleteTodo.handle)
todoRoutes.put('/', updateTodo.handle)

export { todoRoutes }                       
