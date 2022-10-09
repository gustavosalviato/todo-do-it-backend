import express from "express";
import cors from 'cors'
import { mainRoutes } from './routes/index'

const app = express()

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};


app.use(cors(corsOptions))
app.use(express.json())


app.use(mainRoutes)


app.listen(3333, () => console.log('server is running in port 3333! 🤖'))