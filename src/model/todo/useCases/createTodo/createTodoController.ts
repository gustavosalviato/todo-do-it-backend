import { Request, Response } from "express";
import { CreateTodoUseCase } from "./createTodoUseCase";

export class CreateTodoController {
    async handle(req: Request, res: Response) {
        const { title, isCompleted } = req.body

        const createTodo = new CreateTodoUseCase()

        const result = await createTodo.execute({ title, isCompleted })

        return res.json(result)
    }
}