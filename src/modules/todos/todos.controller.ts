import { Request, Response } from "express";
import { pool } from "../../config/db";
import { todosServices } from "./todos.servece";



const createTodos = async (req: Request, res: Response) => {
    

    try {
        const result = await todosServices.createTodosQuery(req.body)
        console.log(result.rows[0]);
        res.status(201).json({ success: true, message: "Todos data inserted successfully", data: result.rows[0] })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getAllTodos = async (req: Request, res: Response) => {

    try {
        const result = await todosServices.getAllTodos()
        res.status(200).json({
            success: true,
            message: "Todos Retrived Successfully",
            data: result.rows,
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err
        })
    }
}

const getSingleTodos = async (req: Request, res: Response) => {
    try {
        const result = await todosServices.getSingleTodos(req.params.id);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch todo" });
    }
}

const updateTodos = async (req: Request, res: Response) => {
    const { title, completed } = req.body;

    try {
        const result = await todosServices.updateTodos(title, completed, req.params.id as string);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to update todo" });
    }
}

const deleteTodos = async (req: Request, res: Response) => {
    try {
        const result = await todosServices.deleteTodos(req.params.id!);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Todo not found" });
        }

        res.json({ success: true, message: "Todo deleted", data: null });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to delete todo" });
    }
}



export const todosController = {
    createTodos,
    getAllTodos,
    getSingleTodos,
    updateTodos,
    deleteTodos
}