import React,{useState} from 'react'
import { Typography ,Button} from '@mui/material'

const CounterApp = () => {
    var[counter, setCounter]=useState(0);
    function plusButton(){
        setCounter(counter+1);
    }
    function subButton(){
        setCounter(counter-1);
    }
  return (
    <div style={{textAlign:'center'}}>
        <Typography variant='h4'>Counter {counter}</Typography>
        <Button variant="outlined" onClick={plusButton}>+</Button> 
        <Button variant="outlined" onClick={subButton}>-</Button>
    </div>
  )
}

export default CounterApp