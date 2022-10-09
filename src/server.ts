import express from "express";
import { mainRoutes } from './routes/index'

const app = express()

app.use(express.json())

app.use(mainRoutes)


app.listen(3333, () => console.log('server is running in port 3333! 🤖'))