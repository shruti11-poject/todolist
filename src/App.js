import React from "react";
import {useState,onclick} from "react";
import './App.css';
import ToDoLists from "./ToDoLists";

const App = () => {

const [inputList, setInputList] = useState("");
const [Items,setItems]=useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);  
  };
  const listofitems=()=>{
    setItems((oldItems)=>{
        return [...oldItems, inputList];//spread items
    });
    setInputList("");
  };
  const deleteItems =(id)=>{
    console.log("deleted");
        setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
            return index !==id;
          });
        });
      };
  return(
    <>
      <div class="main_div">
         <div class="container">
            <br/>
             <h1 class="heading">To Do List</h1>
             <br/>
             <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
             <button onClick={listofitems}>+</button>
           <ol>
          
              {Items.map((itemval,index)=>{
                return <ToDoLists 
                key={index} 
                id={index}
                text={itemval}
                onSelect={deleteItems}
                />
             })}
           </ol>


          </div>
     </div>
    
    </>
  );
};
export default App;