import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import { showLoading } from '../../utils/helpers'
// import axios from '../../api/axiosClient'
// import ENDPOINT from '../../api/endpoint'
import flight from "../api/flight";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { Container, Grid, Paper } from "@mui/material";
import { Form } from "react-bootstrap";
import { Box } from "@mui/system";
import FlightLeft from "./FlightLeft";
import FlightRight from "./FlightRight";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import NotFound from "./FlightRight/NotFound";

function FlightList(props) {
  const list = useSelector((state) => state.flights);
  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);
  console.log(list);

  

  var seat ;
switch(infoFlight[0].classType) {
  case "PHO_THONG_DAC_BIET" : {
    seat = "Phổ thông đặc biệt";
    break;
  }
  case "THUONG_GIA" : {
    seat = "Thương gia";
    break;
  }
  case "HANG_NHAT" : {
    seat = "Hạng nhất";
    break;
  }
  default  : 
    seat = "Phổ thông"
    break;
  
}

  return (
    <div>
      <Box pt={4}>
        <Container>
          <Grid container spacing={1}>
            {/* tương đương 1 dòng */}
            <Grid item xs={3}>
              <Paper
                elevation={3}
                style={{
                  padding: "20px 16px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Chuyến bay của bạn
              </Paper>
              <Paper elevation={3}>
                {" "}
                <FlightLeft
                  id="1"
   
                />{" "}
              </Paper>
              <Paper elevation={3} style={{ opacity: "0.5" }}>
                {" "}
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper elevation={3}>
                <div style={{ display: "flex" }}>
                  <Paper
                    elevation={3}
                    className="paperHead"
                    style={{ width: "65%", borderRadius: "0 40px 40px 0" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="toast__icon">
                        <button
                          variant="contained"
                          class="btn btn-primary"
                          type="button"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            margin: 0,
                          }}
                        >
                          1
                        </button>
                      </div>
                      <div>
                        <div>
                          <span>
                            <b>{infoFlight[0].departurePlace.substring(0, infoFlight[0].departurePlace.length - 10)} ra {infoFlight[0].destination.substring(0, infoFlight[0].destination.length - 10)} </b>
                            {/* <b>{list.flight_name}</b> */}
                          </span>
                        </div>
                        <div>
                          <span style={{ color: "#696969  " }}>
                            {" "}
                              {infoFlight[0].departure} | {infoFlight[0].quantity} passengers | {seat}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Paper>
                
                  <div>
                  <Link to="/">
                    <button
                      variant="contained"
                      class="btn btn-primary"
                      type="button"
                      style={{
                        width: "100%",
                        margin: "16% 82%",
                        borderRadius: "9px",
                      }}
                    >
                      Đổi tìm kiếm
                    </button>
                    </Link>
                  </div>
                </div>
              </Paper>
              <div style={{ margin: "2% 0" }}>
                <Container>
                  <Row>
                    <Col sm={9}>
                      <Row>
                        <Col sm={3}>Bộ lọc</Col>
                        
                        <Col sm={3}>
                          <Form.Select
                            aria-label="Default select example"
                            className="formselect"
                          >
                            <option value="1">Thời gian bay</option>
                          </Form.Select>
                        </Col>
                        <Col sm={3}>
                          <Form.Select
                            aria-label="Default select example"
                            className="formselect"
                          >
                            <option value="1">Hãng bay</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={3}></Col>
                  </Row>
                </Container>
              </div>
              <ul style={{ listStyle: "none", padding: "0" }}>
                
                {/* {list.map((item) => 
                   (
                    <li key={item.flightId}>
                      <Paper
                        elevation={3}
                        style={{ borderRadius: "20px", margin: "5% 0" }}
                      >
                        <FlightRight flight={item} />
                      </Paper>
                    </li>
                  )
                )} */}
                {list.length === 0 ? <NotFound /> : list.map((item) => 
                   (
                    <li key={item.flightId}>
                      <Paper
                        elevation={3}
                        style={{ borderRadius: "20px", margin: "5% 0" }}
                      >
                        <FlightRight flight={item} />
                      </Paper>
                    </li>
                  )
                )}
              </ul>
              
            </Grid>
          </Grid>
        </Container>  
      </Box>
      {/* {addrtypeArrive.map((addressGo, key) => (
                <option value={key}>{addressGo}</option>
              ))} */}
    </div>
  );
}

export default FlightList;
