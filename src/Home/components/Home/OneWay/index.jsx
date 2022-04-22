import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import dateFormat from "dateformat";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import qs from 'qs';
import "react-dropdown/style.css";

// import FlightApi from '../../../../SearchApi';
import flight from "../../../../api/flight";
import InDecrease from "../InDecrease";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import FlightList from "../../../../pages/FlightList";

// import SearchFlight from "../../../../SearchApi";

OneWay.propTypes = {};

function OneWay(props) {
  const [seat, setSeat] = React.useState("");

  const handleChange = (event) => {
    setSeat(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOnChange = () => {
    console.log(!isChecked);
    setIsChecked(!isChecked);
  };

  const [value, setValue] = useState(dateFormat(new Date(), "yyyy-mm-dd"));


  //------------------------------------------- Lấy dữ liệu ----------------------------------------------//
  // Dữ liệu "Từ"
  const addrtype = [
    "TP HCM, Việt Nam",
    "Đà Nẵng, Việt Nam",
    "Hà Nội, Việt Nam",
    "Đà Lạt, Việt Nam",
    "Nha Trang, Việt Nam",
    "Phú Quốc, Việt Nam",
    "Huế, Việt Nam",
    "Vinh, Việt Nam",
  ];
  const [go, setGo] = useState("TP HCM, Việt Nam");
  const handleAddrTypeChange = (e) => {
    console.log(addrtype[e.target.value]);
    setGo(addrtype[e.target.value]);
  };
  // Dữ liệu "Đến"
  const addrtypeArrive = [
    "Đà Nẵng, Việt Nam",
    "TP HCM, Việt Nam",
    "Hà Nội, Việt Nam",
    "Đà Lạt, Việt Nam",
    "Nha Trang, Việt Nam",
    "Phú Quốc, Việt Nam", 
    "Huế, Việt Nam",
    "Vinh, Việt Nam",
  ];
  const [arrive, setArrive] = useState("Đà Nẵng, Việt Nam");
  const handleAddrTypeChangeGo = (e) => {
    console.log(addrtypeArrive[e.target.value]);
    setArrive(addrtypeArrive[e.target.value]);
  };

  // Dữ liệu "DataPicket"
  // const [dataPicket , setDataPicket] = useState();
  // const handleChangeDatePick = (name, event) => {
  //   console.log(name);
  //   (setDataPicket(this.e.target.value))
  // };
  // Dữ liệu Hạng ghế
  const dataSeat = [
    "Phổ thông",
    "Phổ thông đặc biệt",
    "Thương gia",
    "Hạng nhất",
  ];
  

  const [chair, setChair] = useState("Phổ thông");
  const handleChangeSeat = (e) => {
    console.log(dataSeat[e.target.value]);
    setChair(dataSeat[e.target.value]);
  };

  const [test, setTest] = useState([]);

  const submitForm = useCallback(() => {
    const searchFlight = async () => {
      const params = {
        "departurePlace": go,
        "destination": arrive,
        "classType": "THUONG_GIA",
        "departure": "2022-05-04",
        "quantity": quantity,
      }
      console.log(params);
      const response = await flight.getAll();
      setTest(response.data);
      console.log(response.data.data);

      // const response = await axios({
      //   method: 'GET',
      //   headers: {
      //     'Content-Type' : 'application/json'
      //   },
      //   data: qs.stringify(params),
      //   url: 'https://flight-mana.herokuapp.com/api/customers/flights/search'
      // })
      // console.log(response['data']);


      // setPage(true);
    };  
    searchFlight();
  }, [go, arrive, chair, value, quantity]);

  
  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  }

    

  useEffect(() => {
    console.log(quantity);
  
  }, [quantity]);

  // const [page, setPage] = useState(false);
  // const handlePage = event => {
  //   setPage(!page)
  // }

  useEffect(() => {
    console.log(value);
  }, [value]);


  

  return (
    <form>
      <Container>
        <Row>
          <Col sm={4}>
            <FlightTakeoffIcon />
            <label>Từ</label>

            <Form.Select
              name="address"
              onChange={(e) => handleAddrTypeChange(e)}
              className="formselect"
            >
              {addrtype.map((address, key) => (
                <option value={key}>{address}</option>
              ))}
            </Form.Select>
          </Col>
          <Col sm={4}>
            <FlightLandIcon />
            <label>Đến</label>
            <Form.Select
              name="addressgo"
              onChange={(e) => handleAddrTypeChangeGo(e)}
              aria-label="Default select example"
              className="formselect"
            >
              {addrtypeArrive.map((addressGo, key) => (
                <option value={key}>{addressGo}</option>
              ))}
            </Form.Select>
          </Col>

          <Col sm={4}>
            <InDecrease onChangeQuantity={onQuantityChange} />
          </Col>
        </Row>

        <br></br>
        <Row>
          <Col sm={4}>
            <div>
              <label>Ngày đi</label>

              <LocalizationProvider dateAdapter={AdapterDateFns} >
                <DatePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" "
                  value={value}
                  onChange={(newValue) =>  {
                    setValue(dateFormat(newValue, "yyyy-mm-dd"));
                    
                  }}
                  
                  // onChange={handleChangeDatePick}
                /> 
              </LocalizationProvider>
           
            </div>
          </Col>
          <Col sm={4}>
            <div className="topping">
              <div className="khuHoi">
                <input
                  type="checkbox"
                  value="khuHoi"
                  name="khuHoi"
                  className="option"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                <label style={{ paddingLeft: "5%" }}> Khứ hồi </label>
              </div>
              {isChecked ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    color="primary"
                    renderInput={(props) => <TextField {...props} />}
                    label=" "
                    value={value}
                    // onChange={handleChangeDatePick}
                  />
                </LocalizationProvider>
              ) : (
                <span></span>
              )}
            </div>
          </Col>
          <Col sm={4}>
            <label>Hạng ghế</label>

            <Form.Select
              name="dataSeat"
              aria-label="Default select example"
              className="formselect"
              onChange={handleChangeSeat}
            >
              {dataSeat.map((dataSeat, key) => (
                <option value={key}>{dataSeat}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          
          <Col sm={12}>
          <div style={{display:"flex" , marginLeft:"49%"}}>
          
          <Link to={"/flightList"} className="nav-link">
            <button
                variant="contained"
                class="btn btn-primary"
                type="button"
                style={{ width: "100%", position:"relative" , left:"155px" }}
                onClick={submitForm}
               
              >
                {" "}
                Tìm chuyến bay
            
              </button>
     
              </Link>

            
           {/* <Routes>
            <Route exact path="/flightList" element={<FlightList />} />
          
          </Routes>  */}
          
              </div>
       
           
              
      
        
          
          {/* </Switch> */}
          {/* </BrowserRouter> */}
        
          </Col>
        </Row>
      </Container>
     
      {/* <ul>
        {test.filter((list) => (
          <li key={list.flightId}>{list.name} </li>
        ))}
      </ul> */}
      <ul>
      {test.filter( test => test.departurePlace === go, test.destination ===arrive , test.classType==="THUONG_GIA" , test.departure="2022-05-04", test.quantity=quantity ).map(flight => (
        <li>
          {flight.name}
        </li>
      ))
      // "departurePlace": go,
      //   "destination": arrive,
      //   "classType": "THUONG_GIA",
      //   "departure": "2022-05-04",
      //   "quantity": quantity, 
          }
          </ul>
    </form>
  );
}

export default OneWay;
