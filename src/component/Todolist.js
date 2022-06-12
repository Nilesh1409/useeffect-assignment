import React from "react";

let Todolist = ({todo}) => {
  console.log(todo)
  return (
    <>
      {
        
      todo.map((item) => {

        return <h1 key={item.id} >{item.title}</h1>
      
      })
      }
    </>
  );
}

export default Todolist;