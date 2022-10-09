import { Todo } from "@prisma/client";
import { prisma } from "../../../../client/prisma";
import { CreateTodoDTO } from "../../dto/createTodoDTO";

export class CreateTodoUseCase {
    async execute({ title, isCompleted }: CreateTodoDTO) : Promise<Todo> {
        const todo = await prisma.todo.create({
            data: {
                title,
                isCompleted,
            }
        })

        return todo
    }
}