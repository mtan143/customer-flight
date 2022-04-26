// import InputField from "../../Home/InputField";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./stylee.css";

const useStyles = makeStyles({
  root: {
    fontFamily: "system-ui",
    // font-family: 'Sansita Swashed', cursive;
    
  },
  avatar: {},
  title: {
    textAlign: "center",
    fontFamily: "system-ui",
    color: "#00CED1"
  },
});

Contact.propTypes = {};

function Contact(props) {
  const Result = () => {
    return (
      <p>Your message has been successfully. i will contact with you soon</p>
    );
  };
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9yb75mn ",
        "template_zukmpme",
        e.current,
        "mLngXLE8LzsrUsMWE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h3" variant="h4">
        Liên hệ với chúng tôi
      </Typography>


      <form className="contactforuss" onSubmit={sendEmail}>
        <div>
          <div className="formContact">
            <label>
              {" "}
              Họ và tên:{" "}
              <input
                className="inputContact"
                style={{ width: "100%", borderRadius: "10px" }}
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên"
                required
              />
            </label>
            <br />
            <div className="inputForm">
              <label>
                Email:{" "}
                <input
                  className="inputContact"
                  style={{ width: "100%", borderRadius: "10px" }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </label>
            </div>
            <div className="inputForm">
              <label>
                Số điện thoại:{" "}
                <input
                  className="inputContact"
                  style={{ width: "100%", borderRadius: "10px" }}
                  type="text"
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </label>
            </div>
          </div>
          <br />
          <label>
            Chúng tôi có thể giúp gì cho bạn?:{" "}
            <textarea
              className="inputContactHelp"
              style={{ width: "187%", borderRadius: "10px" }}
              id="message"
              rows="3"
              placeholder="Mô tả"
              required
            />
          </label>
          <br />
          <button type="submit" class="btn btn-primary" style={{float:"right " ,margin:"0"}}>
            Gửi
          </button>
          <div className="row">{result ? <Result /> : null}</div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
