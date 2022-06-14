import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import "./style.css";
import { Typography } from "@mui/material";
import NumericInput from "react-numeric-input";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ChildCareIcon from "@mui/icons-material/ChildCare";
InDecrease.propTypes = {};

function InDecrease(props) {
  const [countAdult, setCountAdult] = useState(1);

  const [countChildren, setCountChildren] = useState(0);

  // const [count, setCount] = useState(0);
  const [countBaby, setCountBaby] = useState(0);

  const [isToggle, setIsToggle] = useState(false);

  
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
   
    onQuantityChange(quantity);
  }, [quantity])

  const onQuantityChange = () => {
    props.onChangeQuantity(quantity);
  }

  const handleNumberChange = (value) => {
    setCountAdult(value);
    setQuantity(value + countBaby + countChildren);
    onQuantityChange();

    
  };

  const handleNumberChangeChildren = (value) => {
    setCountChildren(value);
    setQuantity(countAdult + countBaby + value);
    onQuantityChange();
    
  };

  const handleNumberChangeBaby = (value) => {
    setCountBaby(value);
    setQuantity(countAdult + value + countChildren);
    onQuantityChange();
    // console.log(quantity);
    // console.log("baby " + countAdult + countBaby + countChildren);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="inDecrease">
      <label>Số hành khách</label>
      <div className="people1">
        <div className="people" onClick={handleToggle}>
          <PeopleIcon color="primary" />
          {countAdult} Người Lớn
        </div>

        {/* ------------------------------- */}
        {isToggle ? (
          <div className="quanity">
            <div className="decrease">
              <PeopleIcon color="primary" />
              <span> Người lớn</span>
              <div className="numericInput">
                <NumericInput
                  min={1}
                  max={7}
                  value={countAdult}
                  onChange={handleNumberChange}
                  className={"numericInput"}
                  label="Người lớn"
                  style={{float:"right"}}
                />
              </div>
            </div>

            {/* <div className="decrease">
              <AccessibilityNewIcon color="primary" />
              <span> Trẻ em </span>
              <div className="numericInput">
                <NumericInput
                  min={0}
                  max={7}
                  value={countChildren}
                  onChange={handleNumberChangeChildren}
                  className={"numericInput"}
                  style={{float:"right"}}
                  label="Trẻ em"
                />
              </div>
            </div>

            <div className="decrease">
              <ChildCareIcon color="primary" />
              <span> Em bé</span>
              <div className="numericInput">
                <NumericInput
                  min={0}
                  max={7}
                  value={countBaby}
                  onChange={handleNumberChangeBaby}
                  label="Em bé" 
                  className={"numericInput"}
                  style={{float:"right"}}
                />
              </div>
            </div> */}
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default InDecrease;
