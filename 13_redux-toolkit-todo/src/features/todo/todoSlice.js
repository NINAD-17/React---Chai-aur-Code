import { createSlice, nanoid } from "@reduxjs/toolkit"

// initial state
const initialState = {
    todos: []
}

// slice is like a big brother of reducer
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => action.payload !== todo.id);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload? todo.text = action.payload : todo)
        }
    }
})

// export individual functionalities (reducers) - helpful to use in components
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

// export all reducers (for store)
export default todoSlice.reducer;