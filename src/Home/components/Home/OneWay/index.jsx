import FlightLandIcon from "@mui/icons-material/FlightLand";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import dateFormat from "dateformat";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import "react-dropdown/style.css";

import InDecrease from "../InDecrease";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFlight } from "../../../../redux/flightSlice";
import { addInfoFlight } from "../../../../redux/infoFlightSlice";
import moment from "moment";

function OneWay(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [infoFlight, setInfoFlight] = useState({
    departurePlace: '',
        destination: '',
        classType: '',
        departure: '',
        quantity: 1,
  });

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

  const [list, setList] = useState([]);

  const onQuantityChange = (quantity) => {
    setQuantity(quantity);
  };
  useEffect(() => {
    var finalChair;
    if (chair === "Phổ thông") {
      finalChair = "PHO_THONG";
    } else if (chair === "Phổ thông đặc biệt") {
      finalChair = "PHO_THONG_DAC_BIET";
    } else if (chair === "Thương gia") {
      finalChair = "THUONG_GIA";
    } else {
      finalChair = "HANG_NHAT";
    }
    const searchFlight = async () => {
      let data = JSON.stringify({
        departurePlace: go,
        destination: arrive,
        classType: finalChair,
        departure: value,
        quantity: quantity,
      });
      setInfoFlight({
        departurePlace: go,
        destination: arrive,
        classType: finalChair,
        departure: value,
        quantity: quantity,
      })

      const response = await axios.post(
        "https://flight-mana.herokuapp.com/api/customers/flights/search",
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      setList(response.data.data);
      console.log(response.data.data);
      
    };
    searchFlight();
  }, [go, arrive, chair, value, quantity]);

  const dispatch = useDispatch();

  const handleAddFlight = () => {
    console.log(list);
    const action1 = addFlight(list);
    const action2 = addInfoFlight(infoFlight);
    
    dispatch(action1);
    dispatch(action2);
  };

  useEffect(() => {
    // newList = list.map((item) => ({ ...item }));
    // console.log(newList);
  }, [list]);


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

              <LocalizationProvider dateAdapter={AdapterDateFns}>
          
                <DatePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" "
                  disablePast
                  value={value}
                  onChange={(newValue) => {
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
            <div style={{ display: "flex", float:"right" }}>
              <Link to="/flightList" className="nav-link">
                <button
                  variant="contained"
                  class="btn btn-primary"
                  type="button"
                  style={{ margin:"0" }}
                  onClick={() => handleAddFlight()}
               
                >
                  {" "}
                  Tìm chuyến bay
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default OneWay;
