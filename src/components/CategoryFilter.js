import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [filterTask, setFilterTask] = useState("All")

  function handleClick(category){
    
    setFilterTask(category)

  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
       categories.map((category, index)=>{
          return <button className={filterTask === category?"selected":""} 
          key={index} value={category} onClick={()=>handleClick(category)}>{category}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;