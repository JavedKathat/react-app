/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: [{
        id: 0,
        title: "Todo Title",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodo= () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
