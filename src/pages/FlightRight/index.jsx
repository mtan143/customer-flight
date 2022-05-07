import { Paper } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import StraightenIcon from "@mui/icons-material/Straighten";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailFlight from "./DetailFlight";
import DetailTicKet from "./DetailTicket";
import vietjet from "../../resource/vietjet.png";
import { Link } from "react-router-dom";
import TabFlight from "../TabFlight";

// import 'font-awesome/css/font-awesome.min.css';

FlightRight.propTypes = {};

function FlightRight({flight}) {
  const [isToggleFlight, setIsToggleFlight] = useState(false);
  const [isToggleTicket, setIsToggleTicket] = useState(false);
  const searchResult = {...flight}


  const numberFormat = (value) =>
  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(value);

  
  const handleToggleFlight = () => {
    setIsToggleFlight(!isToggleFlight);
  };
  const handleToggleTicket = () => {
    setIsToggleTicket(!isToggleTicket);
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={vietjet} alt="" style={{ width: "10%" }} />
        <div className="logo">{searchResult.airline_name}</div>
      </div>
      {/* ----------------------------------------- */}
      <Container>
        <Row>
          <Col sm={9}>
            <div>
              <div style={{ display: "flex" }}>
                <div className="infomationFlight">
                  <span>{searchResult.time_departure}</span>

                  <p
                    style={{
                      color: "#696969",
                      backgroundColor: "#DCDCDC",
                      borderRadius: "5px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    DAD
                  </p>
                </div>
                <div className="infomationFlight" style={{textAlign:"center"}}>
                  <span style={{ color: "#696969" }}>{searchResult.time}h</span>
                  <p style={{ margin: "-10px 2px" }}>
                    <hr style={{margin:"15% 0"}}></hr>
                  </p>

                  <p style={{ color: "#696969" }}>Bay thẳng</p>
                </div>
                <div className="infomationFlight">
                  <span>{searchResult.time_arrival}</span>

                  <p
                    style={{
                      color: "#696969",
                      backgroundColor: "#DCDCDC",
                      borderRadius: "5px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    SGN
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={3}>
            <div style={{}}>
              <div style={{ color: "rgb(255, 94, 31)", fontSize: "20px" }}>
                {/* <b>776.120 VND</b> */}
                <b>{numberFormat(searchResult.price)}</b>
              </div>
              <div>/khách</div>
            </div>
            <div>
              <Link to="/user" className="nav-link">
                <button
                  variant="contained"
                  class="btn"
                  type="button"
                  style={{ width: "100%", backgroundColor: "rgb(255, 94, 31)" }}
                >
                  Chọn
                </button>
              </Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            {/* <div>
              <button
                variant="contained"
                class="btn btn-primary"
                style={{ marginLeft: "0px", border: "none" }}
                onClick={handleToggleFlight}
              >
                Chi tiết chuyến bay
              </button>

              <button
                variant="contained"
                class="btn btn-primary"
                type="button"
                style={{ marginLeft: "0px" }}
                onClick={handleToggleTicket}
              >
                Chi tiết vé
              </button>
              <button
                variant="contained"
                class="btn btn-primary"
                type="button"
                style={{ marginLeft: "0px" }}
              >
                Hoàn tiền
              </button>
            </div> */}
            <TabFlight flightItem={searchResult} />
       
          </Col>
         
        </Row>
      </Container>
    
      {/* ,
      {isToggleTicket ? (
        <div>
         
        </div>
      ) : (
        <span></span>
      )} */}
    </div>
  );
}

export default FlightRight;
