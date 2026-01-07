import { pool } from "../../config/db"


// Record<string, unknown> == object or {}, or {key, value is unknow}
const createTodosQuery = async (payload: Record<string, unknown>) => {
    const { user_id, title } = payload

    const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1, $2) RETURNING *`, [user_id, title])
    return result
}

const getAllTodos = async () => {
    const result = await pool.query(`SELECT * FROM todos`)
    return result
}

const getSingleTodos = async (todos_id: any) => {
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [todos_id]);
    return result
}

const updateTodos = async (title: string, completed: string, todos_id: string) => {
    const result = await pool.query(
        "UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
        [title, completed, todos_id]
    );
    return result
}

const deleteTodos = async (todo_id: string) => {
    const result = await pool.query(
        "DELETE FROM todos WHERE id=$1 RETURNING *",
        [todo_id]
    );
    return result
}

export const todosServices = {
    createTodosQuery,
    getAllTodos,
    getSingleTodos,
    updateTodos,
    deleteTodos
}