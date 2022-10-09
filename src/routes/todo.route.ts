import { Router } from "express"
import { CreateTodoController } from "../model/todo/useCases/createTodo/createTodoController";

const todoRoutes = Router()

const createTodo = new CreateTodoController()

todoRoutes.post('/', createTodo.handle)

export { todoRoutes }                       