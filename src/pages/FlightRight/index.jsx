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
import { useDispatch } from "react-redux";
import { addFlightId } from "../../redux/flightId";
import { addFlight } from "../../redux/flightSlice";

// import 'font-awesome/css/font-awesome.min.css';

FlightRight.propTypes = {};

function FlightRight({flight}) {
  const [isToggleFlight, setIsToggleFlight] = useState(false);
  const [isToggleTicket, setIsToggleTicket] = useState(false);
  const searchResult = {...flight}

  const dispatch = useDispatch();

  const handleConfirmFlight = () => {
    console.log(searchResult.flight_id);
    const action2 = addFlightId(searchResult.flight_id);
    
    dispatch(action2);
    
  };


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
                    {searchResult.flight_code.substring(0,3)}
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
                      color: "#696969"  ,
                      backgroundColor: "#DCDCDC",
                      borderRadius: "5px",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                     {searchResult.flight_code.substring(3,6)}
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
              <Link to="/confirmFlight" className="nav-link">
                <button
                  variant="contained"
                  class="btn"
                  type="button"
                  // onClick={() => handleConfirmFlight()}
                  onClick={handleConfirmFlight}
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
            
            <TabFlight flightItem={searchResult} />
       
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default FlightRight;
