import { InvertColorsOffRounded } from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
// import { default as React, default as React } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useCallback, useState } from "react";
import { Icon } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./style.css";
import { red } from "@mui/material/colors";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import VerticalTabs from "../../VerticalTabs";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from "axios";


StatusFlight.propTypes = {};

function StatusFlight(props) {
  
  const [input, setInput] = useState('');
  const [res, setRes] = useState('');

  const submitForm = useCallback((e) => {
    e.preventDefault();
    const searchFlight = async () => {
      const response = await axios.get(
        `https://flight-mana.herokuapp.com/api/customers/flights/status?flightCode=${input}`, 
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      if (response.data.data === "Ha_Canh")
      {
        setRes('Đã Hạ Cánh');
      } if  (response.data.data ==="Khoi_Tao")
      {
        setRes('Đã Khởi Tạo')
      }
      if  (response.data.data ==="Cat_Canh")
      {
        setRes('Đã Cất Cánh')
      }
      if  (response.data.data ==="Huy")
      {
        setRes('Đã Hủy')
      }
      if  (response.data.data ==="Delay")
      {
        setRes('Đã Hoãn')
      }
      if  (response.data.data ==="Archive")
      {
        setRes('Đã lưu trữ')
      }
    };
    searchFlight();
  }, [input]);

  return (
    <div>
      <div>
        <Row>
          <Col sm={12}>
            <div>
              <AirplanemodeActiveIcon />
              <label for="flightCode" style={{marginLeft:"15px"}}>Mã chuyến bay :</label>

              <input
                className="input"
                type="text"
                id="flightCode"
                value={input}
                onChange={e => 
                  setInput(e.target.value)}
                name="firstname"
                placeholder="Nhập mã chuyến bay"
                width="100%"
              />
              <span style={{marginRight: "75px" , float:"right"}}>Tình trạng chuyến bay: {res}</span>
            </div>
          </Col>
        </Row>

       
        <div>
        <Alert severity="error" style={{paddingLeft:"35%" , marginTop:"20px"}} >Thông tin chuyến bay chỉ mang tính chất tham khảo</Alert>
        </div>
       
    
        <button variant="contained"  className="btn btn-primary" onClick={submitForm} type="submit" style={{marginTop: "15%"}}>
          Tìm tình trạng chuyến bay 
        </button>
      </div>
    </div>
  );
}

export default StatusFlight;
