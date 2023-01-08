import React from "react";
import "./TodoListItem.css"
 import { Todo } from "../type";
interface TodoListItemProps{
    todo:Todo;
    toggleTodo: (selectedTodo:Todo)=>void
}
export const TodoListItem:React.FC<TodoListItemProps> =({todo,toggleTodo})=>{
    return( <li>
        <label className={todo.complete?"completed":undefined}>
            <input type='checkbox' checked={todo.complete} onChange={()=>toggleTodo(todo)}/>
            {todo.text}
        </label>
        </li>
    );
}