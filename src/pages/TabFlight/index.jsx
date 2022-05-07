import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import  { useState } from "react";
import DetailFlight from '../FlightRight/DetailFlight';
import DetailTicket from '../FlightRight/DetailTicket';
import Refund from '../FlightRight/Refund';

function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
 
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabFlight({flightItem}) {
  const searchFlightItem = {...flightItem}
  const [value, setValue] = React.useState(0);
  const [isToggleFlight, setIsToggleFlight] = useState(false);
  const [isToggleTicket, setIsToggleTicket] = useState(false);
  const [isToggleRefund, setIsToggleRefund] = useState(false);
  

  
  const handleToggleFlight = () => {
    setIsToggleFlight(!isToggleFlight);
    setIsToggleRefund(false);
    setIsToggleTicket(false);
  };

  const handleToggleTicket = () => {
    setIsToggleTicket(!isToggleTicket)
    setIsToggleFlight(false);
    setIsToggleRefund(false);
  }

  const handleToggleRefund = () => {
    setIsToggleRefund(!isToggleRefund);
    setIsToggleFlight(false);
    setIsToggleTicket(false);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="white">
          <Tab label="Chi tiết chuyến bay" {...a11yProps(0)} onClick={handleToggleFlight} />
          <Tab label="Chi tiết vé" {...a11yProps(1)} onClick={handleToggleTicket} />
          <Tab label="Hoàn tiền" {...a11yProps(2)} onClick={handleToggleRefund} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}  >
      {isToggleFlight ? (
        <div>
         
            <DetailFlight detailFlightItem={searchFlightItem} />
         
        </div>
      ) : (
        
        <span></span>
      )}
      </TabPanel>
      <TabPanel value={value} index={1}>
      
        {isToggleTicket ? (
        <div>
            <DetailTicket />
        </div>
      ) : (
        
        <span></span>
      )}
      </TabPanel>
      <TabPanel value={value} index={2}>
       
        {isToggleRefund ? (
        <div>
         
            <Refund />
         
        </div>
      ) : (
        
        <span></span>
      )}
      </TabPanel>
      
    </Box>
   
    </div>
   
  );
}