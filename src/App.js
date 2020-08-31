import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');

  //listen database and fetch with new todos
  useEffect(() => {
    
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //Clicking the button will trigger the adding event
    event.preventDefault(); //It will stop refreshing the page

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput(''); //clearing the input after triggered
  }

  return (
    <div className="App">
      <h1>MY TODO LIST!</h1>

      <form>
      <FormControl>
        <InputLabel> ✅Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add Todo
      </Button>
      
      </form>

      
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
