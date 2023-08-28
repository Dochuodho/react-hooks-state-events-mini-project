import React from "react";

export default function Task({taskName, categoryName, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{categoryName}</div>
      <div className="text">{taskName}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}


