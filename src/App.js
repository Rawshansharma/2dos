import React,{useState} from 'react';
import './App.css';


function App() {
  const [newItem,setNewItem] = useState("");
  const [items,setItems] = useState([]);

  function addItem(){
    if(!newItem){
      alert("Enter an item")
    }
  const item = {
    id:Math.floor(Math.random()*1000),
    value:newItem
  };
   
  setItems(oldList => [...oldList , item]);
  setNewItem("");

  }
  function deleteItem(id) {
    const newArray = items.filter(item  => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="App">
       <h1>ToDo List App</h1>
       <input onChange={e => setNewItem(e.target.value)} type="text" placeholder="enter your todos...." />
       <button className='add' onClick={() => addItem()} type="submit">Add</button>
      <ol>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)} className='del'>Del</button> </li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;
