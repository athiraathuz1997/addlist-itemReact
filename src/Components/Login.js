import React from 'react'
import {TextField, Button} from '@mui/material';
import Header from './Header';

const Login = () => {
  return (
    <div>
        <Header/>
        <br></br>
        <TextField variant='standard' label='Username' /><br></br><br></br>
        <TextField variant='standard' label='Password'/><br></br><br></br><br></br>
        <Button variant='contained'>Login</Button>
    </div>
  )
}

export default Login