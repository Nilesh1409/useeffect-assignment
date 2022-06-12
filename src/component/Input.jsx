import React from "react";

let Input = ({addTodo}) =>{
    let [input, setInput] = React.useState("");
    
    


    return (
        
        <>
        <input type="text" placeholder="Type Something....." onChange={(e) => setInput(e.target.value)}/>
        <button onClick={()=> addTodo(input)} >ADD</button>
        </>
    )
}

export default Input;