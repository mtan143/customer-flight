import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "../components/Home";
import NotificationTicket from "../components/NotificationTicket";
import Contact from "../components/Contact";
import HomeIcon from "@mui/icons-material/Home";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LanguageIcon from "@mui/icons-material/Language";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { pink } from "@mui/material/colors";
import "./style.css";
import StatusFlight from "../components/StatusFlight";
import HistoryTicket from "../components/HistoryTicket";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <form className="general-form">
      <Box
        className="form"
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 350,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label="Đặt chỗ cho tôi"
            style={{ marginRight: "auto", fontFamily: "system-ui" }}
            {...a11yProps(0)}
            icon={<HomeIcon color="primary" />}
            iconPosition="start"
          />

          <Tab
            label="Trạng thái chuyến bay"
            style={{ marginRight: "auto", fontFamily: "system-ui" }}
            {...a11yProps(1)}
            icon={<NotificationsActiveIcon color="secondary" />}
            iconPosition="start"
          />

          <Tab
            label="Liên hệ với chúng tôi"
            style={{ marginRight: "auto", fontFamily: "system-ui" }}
            {...a11yProps(2)}
          
            icon={<ContactPhoneIcon color="success" />}
            iconPosition="start"
          />
          <Tab
            label="Thông báo giá vé"
            style={{ marginRight: "auto", fontFamily: "system-ui" }}
            {...a11yProps(3)}
            icon={<AirplanemodeActiveIcon sx={{ color: pink[500] }} />}
            iconPosition="start"
          />

        
        </Tabs>
        <div className="tabVertical" style={{ flexGrow: 1 }}>
          <TabPanel value={value} index={0}>
            <Home />
          </TabPanel>

          <TabPanel value={value} index={1}>
          <StatusFlight />
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Contact />
          </TabPanel>
          <TabPanel value={value} index={3}>
            {/* <HistoryTicket /> */}
            <NotificationTicket />
          </TabPanel>
         
        
        </div>
      </Box>
    </form>
  );
}
