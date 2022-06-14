import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { Paper } from "@material-ui/core";
import vietjet from "../../resource/vietjet.png";
import nanghang from "../../resource/nanghang.jpg";
// import nanghang from "../../resource/"
import { Col, Row } from "react-bootstrap";
import vali from "../../resource/vali.png";
import car from "../../resource/car.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
ConfirmFlight.propTypes = {};

function ConfirmFlight() {
  const specifyFlight = useSelector((state) => state.specifyFlight);
  console.log("specifyFlight: ");
  console.log(specifyFlight);

  const confirmFlightId = useSelector((state) => state.flights);
  console.log("confirmFlight");
  console.log(confirmFlightId.filter((x) => x.flight_id === specifyFlight));
  const chosenFlight = confirmFlightId.filter(
    (x) => x.flight_id === specifyFlight
  )[0];

  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);

  const numberFormat = (value) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(value);


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
            <Grid item xs={12}>
              <Paper style={{ padding: "2%" }}>
                <h5>Chuyến bay: {chosenFlight.flight_name} </h5>
                <div>
                  <ConnectingAirportsIcon />
                  <span>
                    {chosenFlight.flight_name} |{" "}
                    {chosenFlight.departure.substring(8, 11)} thg{" "}
                    {chosenFlight.departure.substring(5, 7)}{" "}
                    {chosenFlight.departure.substring(0, 4)}
                  </span>
                  <br></br>
                  <span style={{ marginLeft: "25px" }}>
                    {infoFlight[0].quantity} passenger | {seat}
                  </span>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={1} pt={4}>
            <Grid item xs={9}>
              <Paper elevation={3}>
                <div style={{ margin: "0 5%", padding: "2% 0" }}>
                  <span style={{ fontWeight: "bold" , fontSize:"25px" }}>
                    {" "}
                   {chosenFlight.flight_name}
                  </span>
                  <button
                    style={{
                      color: "blue",
                      border: "none",
                      backgroundColor: "transparent",
                      float: "right",
                    }}
                  >
                    Thông tin chuyến bay
                  </button>
                </div>
                <hr style={{ margin: "0" }}></hr>

                <div style={{ margin: "5%  5%" }}>
                  <span style={{ fontWeight: "bold" }}>
                    Chuyến bay đi * Ngày{" "}
                    {chosenFlight.departure.substring(8, 11)} tháng{" "}
                    {chosenFlight.departure.substring(5, 7)} năm{" "}
                    {chosenFlight.departure.substring(0, 4)}
                  </span>
                  <Container>
                    <Row>
                      <Col sm={5}>
                        <div style={{ display: "flex", marginTop: "3%" }}>
                          <img src={vietjet} alt="" style={{ width: "25%" }} />
                          <div>
                            <span style={{ fontWeight: "bold" }}>
                              {chosenFlight.airline_name}
                            </span>
                            <p
                              style={{
                                color: "#696969",
                                fontSize: "12px",
                                textAlign: "center",
                              }}
                            >
                              Khuyến mãi
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col sm={7}>
                        <div style={{ marginTop: "3%" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginLeft: "15%",
                            }}
                          >
                            <div>
                              <p style={{ margin: "0" }}>
                                {chosenFlight.time_departure}
                              </p>
                              <p
                                style={{
                                  backgroundColor: " rgb(220, 220, 220)",
                                  // borderRadius: "8px",
                                  color: "rgb(105, 105, 105)",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  textAlign: "center",
                                }}
                              >
                                {chosenFlight.flight_code.substring(0,3)}
                              </p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                              <p style={{ margin: "0" }}>
                                {chosenFlight.time}h
                              </p>
                              <hr style={{ margin: "0" }}></hr>
                              <span>Bay thẳng</span>
                            </div>
                            <div>
                              <p style={{ margin: "0" }}>
                                {chosenFlight.time_arrival}
                              </p>
                              <p
                                style={{
                                  backgroundColor: " rgb(220, 220, 220)",
                                  // borderRadius: "8px",
                                  color: "rgb(105, 105, 105)",
                                  borderRadius: "5px",
                                  fontSize: "12px",
                                  textAlign: "center",
                                }}
                              >
                                 {chosenFlight.flight_code.substring(3,6)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ---------------------------------------- */}
                <div
                  style={{
                    backgroundColor: "#B0E0E6",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={nanghang} alt="" style={{ width: "10%" }} />
                    <div>
                      <span>
                        Đi máy bay thư giãn hơn bằng cách nâng hạng chuyến bay.
                      </span>
                      <p style={{ margin: "0" }}>Bắt đầu từ +210.600 VND</p>
                    </div>
                  </div>
                  <div>
                    <h4 style={{ color: "rgb(1, 148, 243)" }}>Nâng hạng</h4>
                  </div>
                </div>
              </Paper>
              <h5 style={{ margin: "5% 0 2% 2%" }}>
                Thêm tiện nghi cho chuyến đi của bạn
              </h5>
              <Paper elevation={3}>
                <Container>
                  <Row style={{ alignItems: "center" }}>
                    <Col sm={10}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={vali} alt="" style={{ width: "10%" }} />
                        <div style={{ margin: "20px 15px" }}>
                          <span>Thêm khách sạn.</span>
                          <p style={{ margin: "0" }}>
                            Đặt combo có thể giúp bạn tiết kiệm đến 15%!
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={2}>
                      <div>
                        <h4
                          style={{
                            color: "rgb(1, 148, 243)",
                            fontSize: "50px",
                          }}
                        >
                          +
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Paper>
              <br></br>

              <Paper elevation={3}>
                <Container>
                  <Row style={{ alignItems: "center" }}>
                    <Col sm={10}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={car}
                          alt=""
                          style={{ width: "7%", borderRadius: "5%" }}
                        />

                        <div style={{ margin: "20px 15px" }}>
                          <span>Thêm xe đưa đón sân bay.</span>
                          <p style={{ margin: "0" }}>
                            Cho chuyến đi không âu lo từ/đến sân bay
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col sm={2}>
                      <div>
                        <h4
                          style={{
                            color: "rgb(1, 148, 243)",
                            fontSize: "50px",
                          }}
                        >
                          +
                        </h4>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Paper>
            </Grid>

            <Grid item xs={3}>
              <Paper elevation={3}>
                <div style={{ margin: "0 5%", paddingTop: "7%" }}>
                  <ConnectingAirportsIcon />
                  <span style={{ marginLeft: "5%" }}>Thông tin bổ sung</span>
                  <span style={{ float: "right", color: "blue" }}>
                    Chi tiết
                  </span>
                </div>
                <hr></hr>
                <div style={{ margin: "8%" }}>
                  <h5> {chosenFlight.flight_code.substring(0,3)} →  {chosenFlight.flight_code.substring(3,6)}</h5>
                  <div style={{ marginTop: "5% " }}>
                    <i
                      className="fas fa-info-circle"
                      style={{ color: "#696969", width: "100%" }}
                    >
                      <span style={{ marginLeft: "8%" }}>Không hoàn tiền</span>
                    </i>
                  </div>
                  <div style={{ marginTop: "5% " }}>
                    <i
                      className="fas fa-check-circle"
                      style={{
                        color: "green",
                        paddingBottom: "10%",
                        width: "100%",
                      }}
                    >
                      <span style={{ marginLeft: "8%" }}>
                        Có áp dụng đổi lịch bay
                      </span>
                    </i>
                  </div>
                </div>

                {/* <div style={{ margin: "8%" }}>
                  <h5>DAD →SGN</h5>
                  <div style={{ marginTop: "5% " }}>
                    <i
                      className="fas fa-info-circle"
                      style={{ color: "#696969", width: "100%" }}
                    >
                      <span style={{ marginLeft: "8%" }}>Không hoàn tiền</span>
                    </i>
                  </div>
                  <div style={{ marginTop: "5% " }}>
                    <i
                      className="fas fa-check-circle"
                      style={{
                        color: "green",
                        paddingBottom: "10%",
                        width: "100%",
                      }}
                    >
                      <span style={{ marginLeft: "8%" }}>
                        Có áp dụng đổi lịch bay
                      </span>
                    </i>
                  </div>
                </div> */}
              </Paper>
              <Paper elevation={3}>
                <div style={{ paddingTop: "7%" }}>
                  <span style={{ fontWeight: "bold", margin: "0 7%" }}>
                    Tóm tắt
                  </span>
                </div>
                <hr></hr>
                <Container>
                  <Row>
                    <Col sm={6}>
                      <span>
                        VietJet Air (Người lớn) x{infoFlight[0].quantity}
                      </span>
                    </Col>
                    <Col sm={6}>
                      <span>{numberFormat(chosenFlight.price)}</span>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col sm={6}>
                      <span>VietJet Air (Trẻ em) x{infoFlight[0].quantity}</span>
                    </Col>
                    <Col sm={6}>
                      <span>VND 2.911.640</span>
                    </Col>
                  </Row> */}
                  <hr></hr>
                  <Row style={{ paddingBottom: "7%" }}>
                    <Col sm={6}>
                      <span>Giá bạn trả</span>
                    </Col>
                    <Col sm={6}>
                      <span>
                        {numberFormat(
                          chosenFlight.price * infoFlight[0].quantity
                        )}
                      </span>
                    </Col>
                  </Row>
                </Container>
              </Paper>
              <Link to="/user" className="nav-link">
                <button
                  variant="contained"
                  class="btn btn-primary"
                  type="submit"
                  style={{
                    width: "100%",
                    margin: " 3% 0",
                    float: "right",
                  }}
                >
                  Tiếp tục
                </button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ConfirmFlight;
