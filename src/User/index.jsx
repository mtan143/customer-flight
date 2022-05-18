import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputField from "../FormControls/InputField";
import SelectField from "../FormControls/SelectField";
import  {Container} from "@mui/material";
import  {Grid} from "@mui/material";
import  {Paper} from "@mui/material";
import { Box } from "@mui/system";
import vietjet from "../resource/vietjet.png";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function User(props) {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));

    // console.log(values);
    navigate("/detailFlightTicket");
  };

  const list = useSelector((state) => state.flights);
  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);
  console.log("user");
  console.log(list);

  const validationSchema = yup.object().shape({
    ho: yup
      .string()
      .required("Please enter your FirstName")
      .test(
        "Should has at least 2 words",
        "Please enter at least 2 words",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    ten: yup.string().required("Please enter your LastName"),
    phone: yup
      .number()
      .required("Please enter your Phone")
      .typeError("Please enter number")
      .min(11, "Please enter at least 11 numbers!")
      // .max(11, 'Please enter at most 11 numbers!')
      .integer(),
    email: yup
      .string()
      .required("Please enter your Email")
      .email("Please enter a valid email address"),
    passengers: yup.array().of(
      yup.object().shape({
        p_Ho: yup.string().required("Please enter your First Name!"),
        p_Ten: yup.string().required("Please enter your Last Name!"),
        p_Ngaysinh: yup.string().required("Please enter your date of birth!"),
        p_Quoctich: yup.string().required("Please enter your nationality!"),
        p_Danhxung:yup.string().ensure().required('Please enter your appelation!')
      })
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, control, form, handleSubmit, reset, formState, watch } =
    useForm(formOptions);
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "tickets",
    control,
  });

  const newVal = parseInt(infoFlight[0].quantity || 0);
  const oldVal = fields.length;
  if (newVal > oldVal) {
    // append tickets to field array
    for (let i = oldVal; i < newVal; i++) {
      append({ name: "", email: "" });
    }
  } else {
    // remove tickets from field array
    for (let i = oldVal; i > newVal; i--) {
      remove(i - 1);
    }
  }

  const select = {
    man: "Ông",
    women: "Bà",
    miss: "Cô",
    // resolver: yupResolver(schema),
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ margin: "1% 7%" }}>
        <h4>Đặt chỗ của tôi</h4>
        <p style={{ color: "#696969" }}>Điền thông tin và xem lại đặt chỗ</p>
      </div>
      <div>
        <h4 style={{ margin: "1% 7%" }}>Thông tin liên hệ</h4>
        <Box pt={4}>
          <Container>
            <Grid container spacing={1}>
              {/* tương đương 1 dòng */}
              <Grid item xs={9}>
                <div>
                  <Paper elevation={3}>
                    <div style={{ margin: "0 5%", padding: "3% 5% 0" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Thông tin liên hệ (nhận vé/phiếu thanh toán)
                      </span>
                      <button
                        style={{
                          color: "blue",
                          border: "none",
                          backgroundColor: "transparent",
                          float: "right",
                        }}
                      >
                        Lưu
                      </button>
                    </div>
                    <hr></hr>
                    <div>
                      <div style={{ display: "flex", margin: "2% 10%" }}>
                        <div style={{ margin: "0 10%" }}>
                          <InputField name="ho" lable="Họ" form={form} />
                          <div className="invalid-feedback">{errors.ho?.message}</div>
                        </div>
                        <div style={{ margin: "0 10%" }}>
                          <InputField
                            name="ten"
                            lable="Tên đệm và Tên"
                            form={form}
                          />
                          <div className="invalid-feedback">{errors.ten?.message}</div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          margin: "0 10%",
                          paddingBottom: "5%",
                        }}
                      >
                        <div style={{ margin: "0 10%" }}>
                          <InputField
                            name="phone"
                            lable="Số điện thoại"
                            id="outlined-number"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            form={form}
                          />
                          <div className="invalid-feedback">{errors.phone?.message}</div>
                        </div>
                        <div style={{ margin: "0 10%" }}>
                          <InputField name="email" lable="Email" form={form} />
                          <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>
                      </div>
                    </div>
                  </Paper>
                  <h4 style={{ margin: "5% 0" }}>Thông tin khách hàng</h4>

                  {/* {[...Array(infoFlight[0].quantity)].map((x, i) => {
                    return <div style={{marginTop: "50px"}}><InfomationUser id={i} form={form}  control={form.control} onSubmit={onSubmit} /></div>
                  })} */}
                  {fields.map((item, i) => (
                    <div>
                      <Paper elevation={3}>
                        <div style={{ margin: "0 5%", padding: "2% 0" }}>
                          <span style={{ fontWeight: "bold" }}>
                            Người Lớn {i + 1}
                          </span>
                          <button
                            style={{
                              color: "blue",
                              border: "none",
                              backgroundColor: "transparent",
                              float: "right",
                            }}
                          >
                            Lưu
                          </button>
                        </div>
                        <hr style={{ margin: "0" }}></hr>
                        <p
                          style={{
                            color: "orange",
                            fontWeight: "bold",
                            margin: "2% 5%",
                          }}
                        >
                          Tên không dấu (Đệm tên họ, Thi Ngoc Anh Nguyen)
                        </p>
                        <div style={{ margin: "0 18%" }}>
                          <p style={{ fontWeight: "bold" }}>Danh xưng</p>
                          <SelectField
                            name="p_Danhxung"
                            data={select}
                            form={form}
                          />
                          <div className="invalid-feedback">{errors.passengers?.[i]?.p_Danhxung?.message}</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            margin: "5% 10%",
                            paddingBottom: "5%",
                          }}
                        >
                          <div style={{ margin: "0 10%" }}>
                            <InputField name="p_Ho" lable="Họ" form={form} />
                            <div className="invalid-feedback">{errors.passengers?.[i]?.p_Ho?.message}</div>
                          </div>
                          <div style={{ margin: "0 10%" }}>
                            <InputField
                              name="p_Ten"
                              lable="Tên đệm và Tên"
                              form={form}
                            />
                            <div className="invalid-feedback">{errors.passengers?.[i]?.p_Ten?.message}</div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            margin: "0 10%",
                            paddingBottom: "5%",
                          }}
                        >
                          <div style={{ margin: "0 10%" }}>
                            <InputField
                              name="p_Ngaysinh"
                              lable="Ngày sinh"
                              form={form}
                            />
                            <div className="invalid-feedback">{errors.passengers?.[i]?.p_Ngaysinh?.message}</div>
                          </div>
                          <div style={{ margin: "0 10%" }}>
                            <InputField
                              name="p_Quoctich"
                              lable="Quốc tịch"
                              form={form}
                            />
                            <div className="invalid-feedback">{errors.passengers?.[i]?.p_Quoctich?.message}</div>
                          </div>
                        </div>
                        <hr></hr>
                        <div>
                          <p
                            style={{
                              fontWeight: "bold",
                              margin: "0 5%",
                              paddingBottom: "15px",
                            }}
                          >
                            Thêm tài khoản Hành khách Thân thiết
                          </p>
                        </div>
                      </Paper>
                    </div>
                  ))}

                  {/* <Link to="/detailFlightTicket"> */}
                  <button
                    variant="contained"
                    class="btn btn-primary"
                    type="submit"
                    onClick={onSubmit}
                    style={{
                      width: "25%",
                      margin: " 3% 0",
                      float: "right",
                    }}
                  >
                    Chọn
                  </button>
                  {/* </Link> */}
                </div>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={3}>
                  <div style={{ margin: "0 5%", paddingTop: "7%" }}>
                    <ConnectingAirportsIcon />
                    <span style={{ marginLeft: "5%" }}>
                      {list[0].airline_name}
                    </span>
                    <span style={{ float: "right" }}>Chi tiết</span>
                  </div>
                  <hr></hr>
                  <div style={{ margin: "0 5%" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Chuyến bay đi *Ngày {list[0].departure.substring(9, 11)}{" "}
                      tháng {list[0].departure.substring(5, 7)} năm{" "}
                      {list[0].departure.substring(0, 4)}
                    </span>
                    <div style={{ display: "flex" }}>
                      <img src={vietjet} alt="" style={{ width: "30%" }} />
                      <div>
                        <span style={{ fontWeight: "bold" }}>
                          {list[0].airline_name}
                        </span>
                        <p
                          style={{
                            color: "#696969",
                            fontSize: "12px",
                            textAlign: "center",
                          }}
                        >
                          Khuyến mãi
                        </p>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <p style={{ margin: "0" }}>
                            {list[0].time_departure}
                          </p>
                          <p
                            style={{
                              backgroundColor: "#999",
                              borderRadius: "5px",
                              fontSize: "12px",
                              textAlign: "center",
                              marginTop: "3px",
                            }}
                          >
                            {list[0].flight_code.substring(0, 3)}
                          </p>
                        </div>
                        <div>
                          <p style={{ margin: "0", textAlign: "center" }}>
                            {list[0].time}h
                          </p>
                          <hr style={{ margin: "0" }}></hr>
                          <span>Bay thẳng</span>
                        </div>
                        <div>
                          <p style={{ margin: "0" }}>{list[0].time_arrival} </p>
                          <p
                            style={{
                              backgroundColor: "#999",
                              textAlign: "center",
                              borderRadius: "5px",
                              fontSize: "12px",
                              marginTop: "3px",
                            }}
                          >
                            {list[0].flight_code.substring(3, 6)}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div style={{ marginTop: "5% " }}>
                          <i
                            className="fas fa-info-circle"
                            style={{ color: "#696969", width: "100%" }}
                          >
                            <span style={{ marginLeft: "8%" }}>
                              Không hoàn tiền
                            </span>
                          </i>
                        </div>
                        <div style={{ marginTop: "5% " }}>
                          <i
                            className="fas fa-check-circle"
                            style={{
                              color: "green",
                              paddingBottom: "10%",
                              width: "100%",
                            }}
                          >
                            <span style={{ marginLeft: "8%" }}>
                              Có áp dụng đổi lịch bay
                            </span>
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </form>
  );
}

export default User;
