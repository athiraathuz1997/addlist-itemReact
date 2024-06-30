import React , {useState}from 'react';
import {Typography, Button} from '@mui/material';

const StateBase = () => {
    var [name,setName]=useState("React")

    function setChange(){
        setName("react");
        console.log(setName)
    }
  return (
    <div style={{textAlign:'center'}}>
       <Typography variant='h4'>Welcome {name}</Typography><br></br><br></br>
       <Button variant="contained" color="secondary" onClick={setChange}>Change</Button>
    </div>
  )
}

export default StateBase