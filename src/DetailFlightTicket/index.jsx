import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import './style.css'
import vietjet from '../resource/vietjet.png'
import StripeButton from "./StripeButton";

DetailFlightTicket.propTypes = {};

function DetailFlightTicket(props) {
  const list = useSelector((state) => state.flights);
  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);
  console.log(list);

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
    <div style={{   }}>
      <div
        style={{
          width: "50%",
          margin: "5% auto ",
          backgroundColor: "gainsboro",
          border: "1px solid",
          position:"relative",
          borderRadius:"10px"

         
        }}
      >
        <div style={{textAlign:"center"}}>
          <span style={{fontSize:"50px" , color:"#00CED1"}} >CHECKOUT</span>
        </div>
        <div>
          <div style={{padding:"5% 0 5% 3%"}}>
            <span >Tên: Nguyễn Minh Khang</span>
          </div>
          <Container>
          <Row style={{alignItems:"center"}}>
            <Col sm={6} style={{padding:"5% 0 5% 3%"}}>
              <span >Hãng: {list[0].airline_name} </span>
            </Col>
           
            <Col sm={6} style={{padding:"5% 0 5% 3%"}}>
            <img src={vietjet} alt=""  style={{width:"45%"}}/>
            </Col>
          </Row>
          <Row>
            <Col sm={6} style={{padding:"5% 0 5% 3%"}}>
              <span >Chuyến bay: {list[0].flight_name} </span>
            </Col>
            <Col sm={6} style={{padding:"5% 0 5% 3%"}}>
              <span >Hạng ghế: {seat} </span>
            </Col>
           
          </Row>

          <Row>
            <Col sm={6}  style={{padding:"5% 0 5% 3%"}}>
              <span>Số lượng: {infoFlight[0].quantity}</span>
            </Col>
            <Col sm={6}  style={{padding:"5% 0 5% 3%"}}>
              <span>Ngày đặt: {infoFlight[0].departure}</span>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
             
            </Col>
            <Col sm={6} style={{padding:"5% 0 5% 3%"}}>
              <span >Tổng giá:  {numberFormat(
                          list[0].price * infoFlight[0].quantity
                        )}
                        </span>
            </Col>
          </Row>
           <Row>
            <Col sm={6}>
             
            </Col>
            <Col sm={6}>
            {/* <div style={{ display: "flex"}}>
            
                <button
                  variant="contained"
                  class="btn btn-primary"
                  type="button"
                  style={{ margin:"0" , width:" 100%" , marginBottom:"10%" }}
              
               
                >
                  {" "}
                  Thanh Toán
                </button>
             
            </div> */}
      <StripeButton price="648" />

            </Col>
          </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default DetailFlightTicket;
