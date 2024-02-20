import { useState } from 'react';
import {Todos} from './components/Todos'
import { CreateTodo } from './components/CreateTodo'

function App() {
  const [todos,setTodos] = useState([]); //global state variable to hit the backend and change the state of the site
  
  fetch("http://localhost:3000/todo") 
  .then( async function(res){
    const json= await res.json();
    setTodos(json.todos);
  })
  return (
    <div>
      <CreateTodo>
      </CreateTodo>

      <Todos todos={todos}></Todos> 
   </div> 
    
  );
}

export default App
