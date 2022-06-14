import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import "./Login.css";
import Login from "./Email";
import LoginTell from "./Tellephone";
import LoginOtp from "./TellephoneOtp";
const AppLogin=()=>{
    return(
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Tellephone' element={<LoginTell />} />
                <Route path='/TellephoneOtp' element={<LoginOtp />} />
            </Routes>
        </>
    )
}
export default AppLogin;