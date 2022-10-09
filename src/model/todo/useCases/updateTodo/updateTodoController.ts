import { Request, Response } from "express";
import { prisma } from "../../../../client/prisma";

export class UpdateTodoController {
    async handle(req: Request, res: Response) {
        const { id, title, isCompleted } = req.body

        const todo = await prisma.todo.update({
            where: {
                id
            },
            data: {
                title,
                isCompleted
            }
        })

        return res.json(todo)
    }
}