import React, {useState} from 'react';
import List from '../src/Components/list';

function App() {
  const [input, updateInput] = useState('');
  const [todoList, updateList] = useState([]);

  addToList = (value) => {
    updateList(todoList.concat(input));
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={(e)=>updateInput(e.target.value)} />
      <button onClick={addToList(input)}>ADD</button>
      <List todoList={todoList} updateList={updateList}/>    
    </div>
  );
}

export default App;
