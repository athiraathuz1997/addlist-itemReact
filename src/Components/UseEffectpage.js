import React ,{useState,useEffect} from 'react'
import { Typography,Button } from '@mui/material'

const UseEffectpage = () => {
    var[page ,setPage]=useState("home page");
    function setHomepage(){
        setPage("home page")
    }
    function setGallerypage(){
        setPage("gallery page")
    }
    function setContactpage(){
        setPage("contact page")
    }
    useEffect(()=>{
        setPage("gallery page")
        console.log("page loading...")},[])
  return (
    <div style={{textAlign:'center'}}>

        <Button variant='contained' color="success" onClick={setHomepage}>Home Page</Button>
        <Button variant='contained' color="secondary" onClick={setGallerypage}>Gallery Page</Button>
        <Button variant='contained' color="error" onClick={setContactpage}>Contact Page</Button>
        <Typography variant='h5'>{page}</Typography>
    </div>
  )
}

export default UseEffectpage