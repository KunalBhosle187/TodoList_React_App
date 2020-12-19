import React from 'react'
import "./TodoList.css"

function TodoList(props) {
   
    return (
        <>
            <div className="list">
                <h2 onClick={() =>{
                    props.onSelect(props.id);
                    }}>X</h2>   
                <li>{props.text}</li>
                
           </div>

        </>
    )
}

export default TodoList
