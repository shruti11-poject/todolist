import react from "react";

import "./index.css";
 
 const ToDoLists = (props) =>{

      
  return( 
      <>
      <div className="todo_style">
         <button type="button" className="btn btn-outline-dark close_button" 
         onClick={()=>{
             props.onSelect(props.id);
         }}>x</button>
          <li>{props.text}</li>
      </div> 
  </>
  );
};
 export default ToDoLists;