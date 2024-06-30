import React,{useState} from 'react'
import { Typography, TextField, Button } from '@mui/material'
const Todo = () => {
  var [todo,setTodo]=useState([])
  var[inpvalue,Setinpvalue]=useState('')
  function handleChange(e){
  Setinpvalue(e.target.value)
  }
  function handleOnclick(){
    setTodo([...todo,inpvalue])
    Setinpvalue('')
  }
  function handledelete(index){
    const newtodos=[...todo];
    newtodos.splice(index,1);
    setTodo([...newtodos])
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant='h5'>ToDo List</Typography><br></br>
      <TextField id="outlined-basic" label="Enter the ToDo List" variant="outlined" value={inpvalue} onChange={handleChange}/>    
      <Button variant="outlined" onClick={handleOnclick}>ADD</Button>
      <ul>
        {
          todo.map((value)=>(
            <li key={value}>{value}
            <button onClick={handledelete}>Delete</button></li>
            
          ))
        }
       
      </ul>
    </div>
  )
}

export default Todo