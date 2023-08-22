import React from "react";
import Task from "./Task";

function TaskList({tasks}) {

  const list =  tasks.map((task)=>(
    <Task key={task.text}
     taskName={task.text} 
     categoryName={task.category}/>
    
    ))
  return (
    <div className="tasks">
      {list}
     
  
    </div>
  );
}

export default TaskList;
