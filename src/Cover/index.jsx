import React from "react";
import cover from "../resource/cover.png";
import header1 from "../resource/header1.png";
import header2 from "../resource/header2.png";
import header3 from "../resource/header3.png";
import header4 from "../resource/header4.jpg";
import header5 from "../resource/header5.jpg";
import header6 from "../resource/header6.jpg";

import { useState } from "react";
import Carousel from "react-simply-carousel";
import "./style.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


Cover.propTypes = {};

function Cover(props) {
  const img = [
    header1,header2,header3,header4,header5,header6
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  return ( 

    <div style={{marginTop:10,  }}>
      <div>
        <img className="cover" src={cover} alt="" />
      </div>
      <div className="carousel">
      <Carousel 
        updateOnItemClick
        arrows
        
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between"
            
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          
         
        }}
        centerMode={true}
        onRequestChange={setActiveSlide}
       
      
        forwardBtnProps={{
          
          children: <ArrowForwardIosIcon style={{color: "white"}}/>,
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            backgroundColor: "transparent",
            border: "none"
                
          }
          
          
        }}
        backwardBtnProps={{
          children: <ArrowBackIosIcon style={{color: "white"}}/>,
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
            backgroundColor: "transparent",
            border: "none"

          }
        }}
        itemsToShow={3}
        speed={400}
        
      >
        
        {img.map((item, index) => (
          <div
            style={{
              width: 500,
              height: 300,
              // border: "30px solid white",
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box"
            }}
            key={index}
          > <img src={item} alt="" />
          </div>
        ))}
      </Carousel>
      </div>
    </div>
  );
}

export default Cover;
