import React from "react";
import PropTypes from "prop-types";
import vietjet from "../../../resource/vietjet.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import FlightIcon from '@mui/icons-material/Flight';
import { useSelector } from "react-redux";


DetailFlight.propTypes = {};

function DetailFlight({detailFlightItem}) {
  const searchDetailFlightItem = {...detailFlightItem}
  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);
  return (
    <div >
      <div style={{ display: "flex" }}>
        <div style={{marginLeft:"2%"}}>
          <p style={{marginLeft:"2%"}}>{searchDetailFlightItem.time_arrival}</p>
          <p style={{color:"GrayText" , marginTop:"-30%"}}>{searchDetailFlightItem.departure.substring(8,10)} thg {searchDetailFlightItem.departure.substring(5,7)} </p>
        </div>
        <div style={{marginLeft:"15%"}}>
          <p>{infoFlight[0].destination.substring(0, infoFlight[0].departurePlace.length - 9)}</p>
          <p style={{color:"GrayText",marginTop:"-15%"}}>Sân bay {infoFlight[0].destination.substring(0, infoFlight[0].departurePlace.length - 9)}</p>
        </div>
      </div>
      <div style={{display:"flex" ,alignItems:"center" }}>
          <FlightIcon />
        <span style={{marginRight:"13%"}}>{searchDetailFlightItem.time}h</span>
        <div style={{ border:"1px solid lightgrey" , borderRadius:"8px"}} >
          <div style={{display:"flex" , marginLeft:"11%" }}>
            <img src={vietjet} alt="" style={{width:"21%"}}/>
            {/* ------------------------------- */}


            
            <div>
            <h5>{searchDetailFlightItem.airline_name}</h5>
            <span>VJ-627 - Khuyến mãi</span>
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div  style={{display:"flex" ,marginLeft:"13%" }}>
              <BusinessCenterIcon />
              <div>
                  <span>Hành lý 0kg ( mua khi đặt chỗ)</span>
                  <p>Hành lý xách tay 7kg</p>
                 <i style={{color:"blue"}} className="fas fa-info-circle"> Xem giá hành lý mua thêm</i>
              </div>
            </div>
            <div style={{marginLeft:"13%"}}>
            <i className="fas fa-info-circle"> Máy bay</i> <span>{searchDetailFlightItem.airline_name}</span>
            <p><b>Sơ đồ ghế ngồi</b> 3-3</p>
            <p><b>Khoảng cách ghế ngồi</b> 28 Inches ( tiêu chuẩn)</p>
                </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" , marginTop:"3%" }}>
        <div style={{marginLeft:"2%"}}>
          <p style={{marginLeft:"2%"}}>{searchDetailFlightItem.time_departure}</p>
          <p style={{color:"GrayText" , marginTop:"-30%"}}>{searchDetailFlightItem.departure.substring(8,10)} thg {searchDetailFlightItem.departure.substring(5,7)}</p>
        </div>
        <div style={{marginLeft:"15%"}}>
        {/* .substring(0, searchDetailFlightItem[0].departurePlace.length - 10) */}
        {/* {searchDetailFlightItem[0].departurePlace.substring(0, searchDetailFlightItem[0].departurePlace.length - 10)} */}
          <p>{infoFlight[0].departurePlace.substring(0, infoFlight[0].departurePlace.length - 10)}</p>
          <p style={{color:"GrayText",marginTop:"-15%"}}>Sân bay {infoFlight[0].departurePlace.substring(0, infoFlight[0].departurePlace.length - 10)}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailFlight;
