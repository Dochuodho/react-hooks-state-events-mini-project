import React from "react";

function Task({taskName, categoryName}) {
  return (
    <div className="task">
      <div className="label">{categoryName}</div>
      <div className="text">{taskName}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
