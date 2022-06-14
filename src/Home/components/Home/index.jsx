import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MulCity from "./MulCity";
import OneWay from "./OneWay";
import "./style.css";
import jwtDecode from "jwt-decode";

Home.propTypes = {};

function Home(props) {
  const [formData, setformData] = useState({
    isAgree: false,
    gender: "",
  });

  const [show , setShow] = useState (true);
  const handleChange = event => {
      const target = event.target
      const name = event.target.name
      const value = target.value
      setformData({
          ...formData,
          [name] : value
      })
      // setShow(!show)
      setShow(true)

  }
  // console.log(jwtDecode(localStorage.getItem('token')));
  return (
    <div className="font" style={{fontFamily: 'system-ui'}}>
      <Container>
        <Row>
          <Col sm={4}>
            <div>
            <input type="radio" value="oneWay" defaultChecked name="gender" onChange={handleChange} />
            <label className="radio">Một chiều / khứ hồi </label>
            </div>
          </Col>
          <Col sm={4}>
            {/* <div>
            <input type="radio" value="mulCity" name="gender"  onChange={handleChange} /> 
           <label className="radio">Nhiều thành phố </label>
            </div> */}
          </Col>
          <Col sm={4}></Col>
        </Row>
        <br></br>
        
        {show ? <OneWay /> : <MulCity />}
      </Container>
    </div>
  );
}

export default Home;
