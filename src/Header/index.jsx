import Button from "@mui/material/Button";
import React, {useEffect, useState} from "react";
import Logout from "./Logout";
import Navbar from './Navbar/index';



function Header(props) {
  // localStorage.setItem('token', 'đạt đẹp trai')
  // localStorage.setItem('CUSTOMER_ID','CUS13')
  return (
    
    <div>
      {localStorage.getItem('CUSTOMER_ID') ? <Logout /> : <Navbar />}
    </div>
  );
}

export default Header;
