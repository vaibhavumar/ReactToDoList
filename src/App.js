import React, {useState} from 'react';
import ToDoList from '../src/Components/list';


let keyCount = 1; 

function App() {
  const [input, updateInput] = useState('');
  const [todoList, updateList] = useState([]);

  addToList = (value) => {
    updateList(todoList.concat({
      key: keyCount++ ,
      todos: value
    }));
    updateInput('');
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={(e)=>updateInput(e.target.value)} />
      <button onClick={addToList(input)}>ADD</button>
      <ToDoList todoList={todoList} updateList={updateList}/>    
    </div>
  );
}

export default App;
