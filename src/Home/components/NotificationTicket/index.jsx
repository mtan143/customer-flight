
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateTimePicker from "@mui/lab/DateTimePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./style.css";
// import hinh2 from "../resource/hinh2.jpg";

const useStyles = makeStyles({
  root: {
    fontFamily: "system-ui",

    flex: 1,
  },
  avatar: {},
  title: {
    textAlign: "center",
    fontFamily: "system-ui",
    color: "rgb(1, 148, 243)",
  },
});

NotificationTicket.propTypes = {
  onSubmit: PropTypes.func,
};

function NotificationTicket(props) {
  const classes = useStyles();
  

  

  const [value, setValue] = useState(new Date());
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const label1 = { inputProps: { "aria-label": "Checkbox demo" } };

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    console.log(!isChecked);
    setIsChecked(!isChecked);
  };

  const [isCheckedTime, setIsCheckedTime] = useState(false);
  const handleOnChangeTime = () => {
    console.log(!isCheckedTime);
    setIsCheckedTime(!isCheckedTime);
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h4">
        Tạo thông báo giá vé
      </Typography>

      <form
        style={{ marginTop: "30px" }}
        
        fullWidth
      >
        <Row>
          <Col sm={5}>
            <label>
              <b>Từ</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1">TP HCM, Việt Nam </option>
              <option value="2">Đà Nẵng, Việt Nam</option>
              <option value="3">Hà Nội, Việt Nam</option>
              <option value="3">Đà Lạt, Việt Nam</option>
              <option value="3">Nha Trang, Việt Nam</option>
              <option value="3">Phú Quốc, Việt Nam</option>
              <option value="3">Huế, Việt Nam</option>
              <option value="3">Vinh, Việt Nam</option>
            </Form.Select>
          </Col>

          <Col sm={2}>
            <div className="notificationIcon" style={{ marginTop: "20%" }}>
              <label></label>
              <FlipCameraAndroidIcon color="primary" />
            </div>
          </Col>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <Col sm={5}>
            <label>
              <b>Đến</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option value="1">Đà Nẵng, Việt Nam </option>
              <option value="2">TP HCM, Việt Nam</option>
              <option value="3">Hà Nội, Việt Nam</option>
              <option value="3">Đà Lạt, Việt Nam</option>
              <option value="3">Nha Trang, Việt Nam</option>
              <option value="3">Phú Quốc, Việt Nam</option>
              <option value="3">Huế, Việt Nam</option>
              <option value="3">Vinh, Việt Nam</option>
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm={5}>
            <label>
              <b>Số hành khách</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option>1 Người lớn , 0 Trẻ em , 0 Em bé</option>
              <option value="1">
                {/* <FaTimes /> */}
                Người lớn{" "}
              </option>
              <option value="2">Trẻ em</option>
              <option value="3">Em bé</option>
            </Form.Select>
          </Col>
          {/* ------------------------------------------------------------------------------------- */}
          <Col sm={2}></Col>
          {/* ------------------------------------------------------------------------------------------------------- */}
          <Col sm={5}>
            <label>
              <b>Hạng ghế</b>
            </label>
            <Form.Select
              aria-label="Default select example"
              className="formselect"
            >
              <option>Phổ thông</option>
              <option value="1">
                {/* <FaTimes /> */}
                Phổ thông đặc biệt{" "}
              </option>
              <option value="2">Thương gia</option>
              <option value="3">Hạng nhất</option>
            </Form.Select>
          </Col>
        </Row>

        <h4 style={{ color: "rgb(1, 148, 243)", marginTop: "80px" }}>
          Ngày bay
        </h4>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Khứ hồi"
            checked={isChecked}
            onChange={handleOnChange}
          />
        </FormGroup>
        <Row>
          <Col sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Ngày đi"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
          </Col>
          <Col sm={6}>
            {isChecked ? (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  label=" Ngày đến"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>
        <br></br>
        <h4 style={{ color: "rgb(1, 148, 243)" }}>Lựa chọn ưu tiên</h4>
        <Row>
          <Col sm={6}>
            <label>Khung giờ ưu tiên</label>
          </Col>
          <Col sm={6}>
            <Switch
              {...label}
              checked={isCheckedTime}
              onChange={handleOnChangeTime}
              defaultChecked
            />
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            {isCheckedTime ? (
              <div>
                <label>Khởi hành</label>
                <br></br>
                <Checkbox defaultChecked />
                <label>00:00 - 06:00</label>
                <br></br>
                <Checkbox />
                <label>06:00 - 12:00</label>
                <br></br>
                <Checkbox />
                <label>12:00 - 18:00</label>
                <br></br>
                <Checkbox />
                <label>18:00 - 24:00</label>
              </div>
            ) : (
              <span></span>
            )}
          </Col>

          <Col sm={6}>
            {isCheckedTime ? (
              <div>
                <label>Chuyến về</label>
                <br></br>
                <Checkbox defaultChecked />
                <label>00:00 - 06:00</label>
                <br></br>
                <Checkbox />
                <label>06:00 - 12:00</label>
                <br></br>
                <Checkbox />
                <label>12:00 - 18:00</label>
                <br></br>
                <Checkbox />
                <label>18:00 - 24:00</label>
              </div>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>

        <h4 style={{ color: "rgb(1, 148, 243)" }}>Cài đặt thông báo</h4>
        <Row>
          <Col sm={3}>
            <div className="settingNotification">
              <NotificationsIcon />
              <label className="settingNotification-title">
                Cài đặt thông báo
              </label>
            </div>
          </Col>
          <Col sm={3}>
            <input type="text" />
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}></Col>
        </Row>
        <Row style={{ marginTop: "15px", marginBottom: "15px" }}>
          <Col sm={3}>
            <div className="settingNotification">
              <AccountBalanceIcon />
              <label className="settingNotification-title">Ngân sách</label>
            </div>
          </Col>
          <Col sm={3}>
            <input type="text" />
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <button
            variant="contained"
            class="btn btn-primary"
            type="button"
            style={{  width: "25%", float: "right" }}
            onClick={() => alert("Tạo thông báo thành công!")}
          >
            Gửi thông báo
          </button>
        </Row>
      </form>
    </div>
  );
}

export default NotificationTicket;
