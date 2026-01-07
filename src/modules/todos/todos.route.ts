
import express from "express";
import { todosController } from "./todos.controller";

const router = express.Router()

// create todos
router.post("/", todosController.createTodos)

// get all todos
router.get("/", todosController.getAllTodos)

// get single todos
router.get("/:id", todosController.getSingleTodos)

// update todos
router.put("/:id", todosController.updateTodos)

// delete todos
router.delete("/:id", todosController.deleteTodos)



export const todosRoutes = router;