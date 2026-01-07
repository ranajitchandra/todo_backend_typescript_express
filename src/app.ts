
import express, { NextFunction, Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/users/user.route";
import { todosRoutes } from "./modules/todos/todos.route";
import { authRoutes } from "./modules/auth/auth.route";


const app = express()

// middleware body parser
app.use(express.json())
// middleware form data parser
app.use(express.urlencoded())

// initializer DB
initDB()





app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello I am Ranajit!')
})

// user CURD
app.use("/users", userRoutes)

// Users todos
app.use("/todos", todosRoutes)

// auth Route
app.use("/auth", authRoutes)


// prevent route not exist
app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
        path: req.path
    })
})


export default app;