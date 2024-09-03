import React from 'react'
import { useTodo } from '../contexts';
import { useState } from 'react';

function TodoItem({ todo }) {
    const [isEdit, setIsEdit] = useState(false);
    const [Msg, setMsg] = useState(todo.todo);
    const {deleteToDo, updateToDo, toggleComplete} = useTodo();

    const editTodo = () =>{
        updateToDo(todo.id, {...todo,todo:Msg})
        setIsEdit(false);
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isEdit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={Msg}
                onChange={(e) => setMsg(e.target.value)}
                readOnly={!isEdit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isEdit) {
                        editTodo();
                    } else setIsEdit((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isEdit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteToDo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;