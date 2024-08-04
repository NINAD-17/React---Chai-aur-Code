import {createContext, useContext} from "react"

export const Todocontext = createContext({
    // properties
    todos: [
        {
            id: 1,
            todo: "Todo Msg", // todo is the name/ title of that todo(task)
            completed: false, // isChecked?
        }
    ],
    // functionalities: Note that we only write name of functions and not defination of it here.
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}, // strike through
});

export const useTodo = () => {
    return useContext(Todocontext);
}

export const TodoProvider = Todocontext.Provider;