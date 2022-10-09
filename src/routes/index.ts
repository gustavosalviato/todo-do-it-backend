import { Router } from "express"

import { todoRoutes } from './todo.route'

const mainRoutes = Router()

mainRoutes.use("/todos", todoRoutes)

export { mainRoutes }