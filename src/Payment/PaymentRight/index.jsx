import React from "react";
import PropTypes from "prop-types";

PaymentRight.propTypes = {};

function PaymentRight(props) {
  return (
    <div style={{padding:"10%"}}>
      
      <div>
        <span style={{ color: "#696969" }}>Mã đặt chỗ</span>
        <p>8042777777</p>
      </div>
      <hr></hr>
      <div>
        <span style={{ color: "#696969", fontWeight: "bold" }}>Chuyến đi</span>
        <button style={{color:"blue" , border:"none", backgroundColor:"transparent" , float:"right"}}>Chi tiết</button>
      </div>
      <div>
        <b >Chuyến bay</b>
        <p style={{ color: "#696969" ,margin:"0" }}>28 May 2022 - 31 May 2022</p>
        <p style={{ color: "#696969" }}>Đà Nẵng (DAD) --> TP HCM (SGN)</p>
      </div>
      <hr></hr>
      <div>
          <b>Danh sách khách hàng</b>
          <div>
          <span>Ông Minh Tân Nguyễn</span>
          <span style={{float:"right"}}>Người lớn</span>
          </div>
        
      </div>
    
    </div>
  );
}

export default PaymentRight;
