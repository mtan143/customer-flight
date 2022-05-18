import React from 'react';
import PropTypes from 'prop-types';
import RefundTab from './RefundTab';
import ItemOne from './RefundTab/ItemOne';
import vietjet from '../../../resource/vietjet.png'

Refund.propTypes = {
    
};

function Refund(props) {
    return (
        <div>
            <h4>Chính sách hoàn tiền của bạn</h4>
      <div style={{ border: "1px solid #333", borderRadius: "15px" }}>
        <div style={{margin:"3% 5%"}}>
        <div style={{display: "flex" , alignItems:"center"}}>
          <div>
            <span style={{display:"block"}}>VietJet  <img src={vietjet} style={{width:"12%"}} alt="" /> </span>
           
            <span>Đà Nẵng ra TP HCM</span>
          </div>
          <div>
            <span style={{color:"#999" , width:"38%"}}>Khuyến mãi</span>
          </div>
        </div>
        <div style={{ backgroundColor: "#999" }}>
          <i className="fas fa-check-circle" style={{ color: "green" }}>
            Có thể hoàn tiền lại
          </i>
        </div>
        <div>
          <span>Hoàn lại tiền được áp dụng vì (các) lý do sau:</span>
          <ul>
            {" "}
            <li>Tự hủy (thay đổi kế hoạch)</li>
            <li>Đau ốm (bao gồm dương tính với COVID-19)</li>
            <li>
              Bất khả kháng / các hạn chế của chính phủ liên quan đến COVID-19
            </li>
          </ul>
          <span style={{color:"blue"}}>Xem thêm 5 lý do</span>
        </div>
        </div>
      </div>
        </div>
    );
}

export default Refund;