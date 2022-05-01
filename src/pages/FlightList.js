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

function FlightList(props) {
  const list = useSelector((state) => state.flights);
  console.log("result: ", list);

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
                  name="Sai Gon to Da Lat"
                  date="22/09/2022"
                />{" "}
              </Paper>
              <Paper elevation={3} style={{ opacity: "0.5" }}>
                {" "}
                <FlightLeft />{" "}
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
                            <b>Đà Nẵng (DAD) ra TP HCM (SGN)</b>
                          </span>
                        </div>
                        <div>
                          <span style={{ color: "#696969  " }}>
                            {" "}
                            Ngày tháng năm | 1 passengers | Phổ thông
                          </span>
                        </div>
                      </div>
                    </div>
                  </Paper>
                  <div>
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
                            <option value="1">Điểm dừng</option>
                          </Form.Select>
                        </Col>
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
                            <option value="1">Hãng hàng không</option>
                          </Form.Select>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={3}></Col>
                  </Row>
                </Container>
              </div>

              <Paper elevation={3} style={{ borderRadius: "20px" }}>
                {" "}
                <FlightRight />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default FlightList;
