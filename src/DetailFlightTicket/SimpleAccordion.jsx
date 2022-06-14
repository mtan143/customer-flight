import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from "react-redux";
import "./style.css";


export default function SimpleAccordion({props}) {
  
  const list = useSelector((state) => state.flights);
  const infoFlight = useSelector((state) => state.infoFlight);
  const infoUser = useSelector((state) => state.infoUser);
  console.log("info flight: ");
  console.log(infoFlight);
  console.log(list);
  console.log("info User");
  console.log(infoUser);

  const specifyFlight = useSelector((state) => state.specifyFlight);
  console.log("specifyFlight: ");
  console.log(specifyFlight);
  const confirmFlightId = useSelector((state) => state.flights);
  console.log("Hiện gias ra");
  console.log(confirmFlightId.filter((x) => x.flight_id === specifyFlight));
  const chosenFlight = confirmFlightId.filter(
    (x) => x.flight_id === specifyFlight
  )[0];
  

  const numberFormat = (value) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(value);
var p = 20;
 var validation =chosenFlight.price * infoFlight[0].quantity
  
   const total= validation - (validation*p/100);
  // const total = -100;
  // props.parentCallback(total);
   
  return (
    <div>

    
      
     
      
    </div>
  );
}
