import { Router } from "express"

import { todoRoutes } from './todo.routes'

const mainRoutes = Router()

mainRoutes.use("/todos", todoRoutes)

export { mainRoutes }