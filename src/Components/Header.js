import React from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material';

const Header = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>Login</Typography>
                </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header