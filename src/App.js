import './App.css';
import TodoList from './TodoList';
import React ,{useState} from "react";

function App() {
  
  const year = new Date().getFullYear();
  const todaysDate = new Date().toDateString();
  const [inputList, setinputList] = useState('');
  const [items, setItems] = useState([]);
  
  const deleteItem = (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index )=>{
            return index !== id;
      })
    })  
}

  const itemEvent = (event) =>{
    setinputList(event.target.value);
  }
  const listOfItems=()=>{
        setItems((oldItems)=>{
          return[...oldItems,inputList];
        });
        setinputList("")
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <h5>{todaysDate}</h5>
        <h1>Todo List</h1>
        <div className="mid_div">
         <input value={inputList} type="text" placeholder="Add todos" onChange={itemEvent}/>
         <button className="todo_button" onClick={listOfItems}>+</button>
        </div>

          <ol>
          {/*  */}

          {items.map((itemval,index) => {
           return <TodoList 
           key={index} 
           id={index}
           text={itemval}
           onSelect={deleteItem}/>
          })}

          </ol>  
        <h4>Copyright © {year}</h4> 
      </div> 
      
    </div>
  );
}

export default App;
