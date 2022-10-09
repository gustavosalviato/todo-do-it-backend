import { Request, Response } from "express";
import { GetTodoUseCase } from "./getTodoUseCase";

export class GetTodoController {
    async handle(req: Request, res: Response) {

        const getTodos = new GetTodoUseCase()

        const result = await getTodos.execute()

        return res.json(result)
    }
}