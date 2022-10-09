import { Todo } from "@prisma/client";
import { prisma } from "../../../../client/prisma";

export class GetTodoUseCase {
    async execute(): Promise<Todo[]> {
        const todos = await prisma.todo.findMany({
            orderBy: {
                title: 'asc'
            }
        })

        return todos
    }
}