import { Router } from "express"
import { CreateTodoController } from "../model/todo/useCases/createTodo/createTodoController";
import { DeleteTodoController } from "../model/todo/useCases/deleteTodo/deleteTodoController";
import { GetTodoController } from "../model/todo/useCases/getTodo/getTodoController";

const todoRoutes = Router()

const createTodo = new CreateTodoController()
const getTodo = new GetTodoController()
const deleteTodo = new DeleteTodoController()

todoRoutes.post('/', createTodo.handle)
todoRoutes.get('/', getTodo.handle)
todoRoutes.delete('/:id', deleteTodo.handle)

export { todoRoutes }                       
