import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    'Çöpü at',
    'Kitap Oku',
    'Yüz',
    'Yemek Yap'
  ]);
  const [input,setInput] = useState('');
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
