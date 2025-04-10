import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id:1,
            text: "Hello World!"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            // const thisTodo = state.todos.filter((todo)=> todo.id === action.payload);
            // thisTodo.text = action.payload.text
            // state.todos.push(thisTodo)
            state.todos = state.todos.map((todo)=>(todo.id === action.payload ? action.payload : todo))
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer