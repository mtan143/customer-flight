import React from "react";
import PropTypes from "prop-types";
import vietjet from '../../../../resource/vietjet.png'

ItemTwo.propTypes = {};

function ItemTwo(props) {
  return (
    <div>
      <h5>Ước tính tiền hoàn lại</h5>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <span style={{ display: "block" }}>
              VietJet <img src={vietjet} style={{ width: "12%" }} alt="" />{" "}
            </span>

            <span>Đà Nẵng ra TP HCM</span>
          </div>
          <div>
            <span style={{ color: "#999", width: "38%" }}>Khuyến mãi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemTwo;
