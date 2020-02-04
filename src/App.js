import React, {useState} from 'react';
import ToDoList from '../src/Components/list';


let keyCount = 1; 

const App = (props) => {
  const [input, updateInput] = useState('');
  const [todoList, updateList] = useState([]);

  const addToList = (value) => {
    updateList(todoList.concat({
      key: keyCount++ ,
      todos: value
    }));
    updateInput('');
  }

  return (
    <div className="App">
      <form onSubmit={}>
        <input type="text" value={input} onChange={(e)=>updateInput(e.target.value)} />
        <button onClick={()=>addToList(input)}>ADD</button>
        <ToDoList todoList={todoList} updateList={updateList}/>
      </form>    
    </div>
  );
}

export default App;
