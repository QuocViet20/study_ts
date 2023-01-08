
import React, { ChangeEvent, FormEvent, useState } from "react";
import { TodoListItem } from "./components/TodoListItem.tsx";
import { Todo,AddTodo } from "./type";

const initialTodos:Array<Todo> =[];

const App: React.FC = () =>{

  const [todos,setTodos]=useState(initialTodos)
const [newTodo, setNewTodo] = useState(" ");

const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
  setNewTodo(e.target.value)
}

const addTodo:AddTodo=(newTodo:string)=>{
  newTodo.trim()!=="" && setTodos([...todos,{text:newTodo,complete:false}])
}
const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
 e.preventDefault();
newTodo.trim() !== "" &&
  setTodos([...todos, { text: newTodo, complete: false }]);
 setNewTodo("");
}
  const toggleTodo= (selectedTodo:Todo)=>{
    const newTodos=todos.map(todo=>{
      if(todo===selectedTodo){
        return {...todo,complete:!todo.complete}
      }
      return todo;
    })
    setTodos(newTodos);
  }
  return (
    <React.Fragment>
      <form>
        <input type='text' value={newTodo} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
      <ul> {todos.map(todo=>(
        <li>
          <TodoListItem todo= {todo} toggleTodo={toggleTodo}/>
        </li> 
      ))}</ul>
    </React.Fragment>
  );
}

export default App;
