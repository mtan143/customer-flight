import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import flag from "../resource/flag.png" ;
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from 'react';
import {useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactDimmer } from "react-dimmer";
import "./styles.css";
import  {Menu}  from "./Menu";
import dollar from "../resource/dollar.png"
import { useNavigate } from "react-router-dom";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

Logout.propTypes = {
    
};

function Logout(props) {
 
const navigate = useNavigate();
    const [isMenuOpen, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu((prevState) => !prevState);
      };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('exp');
    localStorage.removeItem('CUSTOMER_ID')
    navigate("/");
    window.location.reload();
    
  }
  const handleTransactionHistory = () => {
    navigate("/collaps");
  }
  
  const handlePage = () => {
    navigate("/");
  }
  
    return (
        <div>
              <div >
        <Box sx={{ flexGrow: 1 }} style={{zIndex:1090}}  >
          <AppBar position="static" style={{backgroundColor:"white"}} >
            <Toolbar className="navBar" style={{ color: "black", backgroundColor: "white" ,width:1200 , margin:"auto" }}>
           
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Menu"
                sx={{ mr: 1 }}
                style={{ color: "blue" }}
              >
         <GiHamburgerMenu className="menu-btn" onClick={handleMenu} />
      
         <Menu isMenuOpen={isMenuOpen} />
         <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
   
   
              </IconButton>
              <Typography  onClick={handlePage} style={{cursor:"pointer"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Traveloka
              </Typography>
              <div style={{display:"flex" , float:"right"}} >
            
              {/* <AirlineSeatReclineNormalIcon color="primary" /> */}
                <Button   color="inherit"  style={{marginRight:"20px"}} onClick={handleTransactionHistory} >Đặt chỗ của tôi</Button>
                <Button color="inherit" style={{marginRight:"20px"}}><a  className="profile" href={`https://gxy-vy-04-g01-customer-profile.vercel.app/${localStorage.getItem('token')}/Profile`} target='_blank' rel="noreferrer">Profile</a></Button>
               
                
               
            {/* <span style={{fontSize:"20px"}}>10$ </span> </div> */}
               
          
                <Button onClick={handleLogOut} style={{marginRight:"20px"}} color="inherit">Đăng xuất</Button>
              </div>
              
              
              {/* <Button color="inherit">Đăng nhập</Button>
              <Button color="inherit">Đăng ký</Button>  */}


              {/* <img src={flag} alt="flag" /> */}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
            
        </div>
    );
}

export default Logout;