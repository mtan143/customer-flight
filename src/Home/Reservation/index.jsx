import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "react-datepicker";
// import flag from "../resource/flag.png";
import h10 from "../../resource/h10.jpg";
import h7 from "../../resource/h7.jpg";
import h8 from "../../resource/h8.jpg";
import h9 from "../../resource/h9.jpg";


Reservation.propTypes = {
    
};

function Reservation(props) {
    return (
        <div style={{marginTop:"50px"}}>
             <h1 className="topic">Tại sao lại đặt chỗ ở Traveloka ?</h1>
      <br></br>
      <Container>
        <Row className="flightFacilities">
          <Col sm={3}>
            <div>
            
          
                <img
                  src={h7}
                  alt=""
                 
                />
                <h4>Giải pháp du lịch hoàn thiện</h4>
                <p>Giải pháp toàn diện - giúp bạn tìm chuyến bay và khách sạn khắp Việt Nam và Đông Nam Á một cách tiết kiệm.</p>
              
            </div>
          </Col>
          <Col sm={3}>
            <div>
            
                <img
                  src={h8}
                  alt=""
                 
                
                />
                <h4>Giá rẻ mỗi ngày</h4>
                <p>Giá bạn thấy là giá bạn trả! Dễ dàng so sánh khi không cần phải trả thêm chi phí ẩn! </p>
            
            </div>
          </Col>
          <Col sm={3}>
            <div>
         
                <img
                  src={h9}
                  alt=""
                 
                />
                <h4>Phương thức thanh toán an toàn và linh hoạt</h4>
                <p>Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi, chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking. Không tính phí giao dịch. </p>
             
            </div>
          </Col>

          <Col sm={3}>
            <div>
              
                <img
                  src={h10}
                  alt=""
                 
                />
                <h4>Hỗ trợ khách hàng 24/7</h4>
                <p>Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé </p>
             
            </div>
          </Col>
        </Row>
      </Container>
        </div>
    );
}

export default Reservation;