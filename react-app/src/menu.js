import React from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import ToysList from './components/ToysList';
import Home from './components/Home';
import About from './components/About';


export default function Meniu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* <MenuItem onClick={handleClose} component={ToysList} >Toys List</MenuItem> */}
          <MenuItem onClick={handleClose} component={Home} >Home</MenuItem>
          <MenuItem onClick={handleClose} component={About} >About</MenuItem>
        </Menu>
      </div>
    );
  }