import React from "react";
import PropTypes from "prop-types";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

FlightLeft.propTypes = {};

function FlightLeft(props) {
  const list = useSelector((state) => state.flights);
  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);
  console.log(list);

  return (
    <div className="body">
      <div className="toast__icon">
        {/* <LooksOneIcon style={{fontSize:"50px"}} /> */}
        <button
                  variant="contained"
                  class="btn btn-primary"
                  type="button"
                  style={{width:"40px" , height:"40px", borderRadius:"50%", margin:0}}
                 
                >
                 
                  {props.id}
                </button>
      </div>
      <div className="toast__body">
        <p className="toast__title"> 
                    {infoFlight[0].departure.substring(8, 11)} thg{" "}
                    {infoFlight[0].departure.substring(5, 7)}{" "}
                    {infoFlight[0].departure.substring(0, 4)}</p>
        <h4 className="toast__msg">{infoFlight[0].departurePlace.substring(0, infoFlight[0].departurePlace.length - 10)} ra {infoFlight[0].destination.substring(0, infoFlight[0].destination.length - 10)} </h4>
        
      </div>
    </div>
  );
}

export default FlightLeft;
