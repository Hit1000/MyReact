import { useContext, createContext } from "react";


export const todoContext = createContext({
    todos:[
        {id:1, todo:"massage", completed:false},
    ],
    addToDo:(todo)=>{},
    deleteToDo:(id)=>{},
    updateToDo:(id, todo)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo = () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider