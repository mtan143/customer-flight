// Module and component of module
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwtDecode from "jwt-decode";
const LoginEmail = () => {
  const [getCookies, setCookies] = useCookies();
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const Navigate = useNavigate();
  function createCookie(time, data) {
    setCookies("Customer", data, { maxAge: time, path: "/" });
  }
  function runScript() {
    try {
      axios
        .post(
          "https://gxyvy04g01backend-production.up.railway.app/Customer/LoginEmail",
          {
            CUSTOMER_EMAIL: getEmail,
            CUS_PASSWORD: getPassword,
          }
        )
        .then((res) => {
          if (res.data.STATUS) {
            console.log(res.data);
            // createCookie(res.data.EXPIRED_TIME,res.data.PACKAGE)
            console.log(
              jwtDecode(res.data.PACKAGE).CUSTOMER_PACKAGE.CUSTOMER_ID
            );
            // console.log(jwtDecode(res.data.PACKAGE).CUSTOMER_PACKAGE);
            
            localStorage.setItem(
              "CUSTOMER_ID",
              jwtDecode(res.data.PACKAGE).CUSTOMER_PACKAGE.CUSTOMER_ID
            );
            localStorage.setItem("token", res.data.PACKAGE)

            setInterval(() => {
              Navigate("/");
              window.location.reload();
            }, 1000);
          } else {
            window.alert(res.data.ERROR);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <section class="vh-100 " style={{ background: " #508bfc" }}>
      <div class="container-login py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5">
                <h3 class="mb-5 text-center">Đăng nhập</h3>
                <div class="form-outline mb-4">
                  <label class="form-label text-left" for="typeEmailX-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    value={getEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control form-control-lg"
                  />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label text-left" for="typePasswordX-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-2"
                    value={getPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control form-control-lg"
                  />
                </div>
                {/* <!-- Checkbox --> */}
                <button
                  class="btn btn-primary btn-lg btn-block button-size "
                  onClick={() => runScript()}
                  type="submit"
                >
                  Login
                </button>
                <hr class="my-4" />
                <p class="text-left-2 ">
                  <Link to="/Login/Tellephone">
                    <b class="colorlogo">Use Phone Number</b>
                  </Link>
                  &ensp;or&ensp;
                  <Link to="/Login/TellephoneOtp">
                    <b class="colorlogo">OTP</b>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoginEmail;
