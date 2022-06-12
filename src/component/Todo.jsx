import React from "react";
import Input from "./Input"
import Todolist from "./Todolist"
import {v4 as uuidv4} from "uuid"

let Todo = () =>{
    let [todo,setTodo] = React.useState([]);
    let [loding,setLoding] = React.useState(false);
    let [error,setError] = React.useState(false);
    let [page, setPage] = React.useState(1);

    console.log({todo})

    let fetchData = () =>{
        setLoding(true);
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=2`)
        .then((res) =>
            // console.log(res)
            res.json()
            
         )
        .then((res) =>  setTodo(res))
        .catch((err) => {
            setError(true)
            console.log(err)})
            .finally(() => {
                setLoding(false);
            })
    }

    React.useEffect(() =>{
        fetchData()
    },[page])
    // fetchData()

    let addTodo = (add) =>{
        let paylod = {
            title : add,
            state : false,
            id : uuidv4(),
        }
        if(add!==""){
       fetch(`http://localhost:3001/todos`,{
           method : "POST",
           body : JSON.stringify(paylod),
           headers : {
               "content-type" : "application/json"
           }
       })
       .then((res) => res.json())
       .then((res) => {
           fetchData();
       })
    }
    }
    let [input, setInput] = React.useState("");

    return loding ? (<h1>Loding...</h1>) 
    :  error ? (<h1>Something went wrong</h1>)
     :
     (
     <> 
     <Input addTodo = {addTodo}/>
     <Todolist todo={todo}/>
     <h3>Page : {page}</h3>
     <button onClick={() => setPage(page-1)} disabled={page===1} >Previous</button>
     <button onClick={() => setPage(page+1)} >Next</button>

    </>
    )
}

export default Todo;