import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from 'react';
import { useState } from "react";
import LoginEmail from "../../Login/Email";
// import Register from "../../Register/Register";
// import flag from "../resource/flag.png" ;
import flag from "../../resource/flag.png";
import './style.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

Navbar.propTypes = {};

function Navbar(props) {
  const navigate = useNavigate();
  
  
  const test = (checkvalue) => {
    if (checkvalue == null) {
      return (
        <>
          <Button color="inherit">Đăng nhập</Button>
          <Button color="inherit">Đăng ký</Button>
        </>
      );
    } else {
      return <Button color="inherit">Logout</Button>;
    }
  };

  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    navigate("/loginEmail");
    
  };
  const handleClickOpenRegister   = () => {
    setOpenRegister(true);
   
    navigate( "/register");

  };

  const handleClose = () => {
    setOpenRegister(false);
  };

  const handleClickPage = () => {
    navigate( "/");
  }
  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }} style={{ zIndex: 1090 }}>
          <AppBar position="static" style={{ backgroundColor: "white" }}>
            <Toolbar
              className="navBar"
              style={{
                color: "black",
                backgroundColor: "white",
                width: 1200,
                margin: "auto",
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                style={{ color: "blue" }}
              >
                <MenuIcon />
              </IconButton>
              <Typography style={{cursor: "pointer"}} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClickPage}>
                Traveloka
              </Typography>
              <div>
               
               
              </div>
            
              <Button color="inherit" onClick={handleClickOpen}>
                Đăng nhập
              </Button>
             
             
              <Button color="inherit" onClick={handleClickOpenRegister}>
                Đăng ký
              </Button>
              
             

              <img src={flag} alt="flag" />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
