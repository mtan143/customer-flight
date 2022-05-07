import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import visa from "../../resource/visa.png";
import { Switch } from "@mui/material";
import PropTypes from "prop-types";

PaymentLeft.propTypes = {};

function PaymentLeft(props) {
  return (
    <div >
      <div style={{padding:"5% 5% 10%" }} >
        <Container>
          <Row>
            <Col sm={4}>
              <h5 style={{ lineHeight: "70px" }}>Thẻ thanh toán</h5>
            </Col>
            <Col sm={8}>
              <img src={visa} alt="" style={{ width: "70%" }} />
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col sm={12}>
              <p style={{ margin: "0px" }}>Số thẻ tín dụng </p>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="16 chữ số mặt trên mặt thẻ"
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col sm={6}>
              <p style={{ margin: "0px" }}>Hiệu lực đến</p>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="16 chữ số mặt trên mặt thẻ"
              />
            </Col>
            <Col sm={6}>
              <p style={{ margin: "0px" }}>Hiệu lực đến</p>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="16 chữ số mặt trên mặt thẻ"
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "20px" }}>
            <Col>
              <label>Tên trên thẻ</label>
              <input
                style={{ width: "100%" }}
                type="text"
                placeholder="Tên trên thẻ"
              />
            </Col>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Switch defaultChecked /> Nhập mã giảm giá
          </Row>
          <Row>
            <Col sm={6}>
              <span>VietJetAir (Người Lớn)x1</span>
            </Col>
            <Col sm={6}>
              <span> 1.417.840 VND</span>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm={6}>
              <span>Tổng giá tiền</span>
            </Col>
            <Col sm={6}>
              <span>
                {" "}
                <b> 1.417.840 VND</b>
              </span>
            </Col>
          </Row>
          <button
            variant="contained"
            class="btn"
            type="button"
            style={{
              width: "46%",
              backgroundColor: "rgb(255, 94, 31)",
              color: "white",
              float: "right",
            }}
          >
            Thanh toán thẻ thanh toán
          </button>
        </Container>
      </div>
    </div>
  );
}

export default PaymentLeft;
