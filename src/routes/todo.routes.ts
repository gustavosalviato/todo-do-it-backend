import { Router } from "express"
import { CreateTodoController } from "../model/todo/useCases/createTodo/createTodoController";
import { GetTodoController } from "../model/todo/useCases/getTodo/getTodoController";

const todoRoutes = Router()

const createTodo = new CreateTodoController()
const getTodo = new GetTodoController()

todoRoutes.post('/', createTodo.handle)
todoRoutes.get('/', getTodo.handle)

export { todoRoutes }                       
