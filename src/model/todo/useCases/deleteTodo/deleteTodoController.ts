import { Request, Response } from "express";
import { prisma } from "../../../../client/prisma";

export class DeleteTodoController {
    async handle(req: Request, res: Response) {
        const { id } = req.params

        const todo = await prisma.todo.delete({
            where:{
                id
            }
        })

    }
}