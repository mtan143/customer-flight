import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputField from "../FormControls/InputField";
import SelectField from "../FormControls/SelectField";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import vietjet from "../resource/vietjet.png";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { addInfoUser } from "../redux/infoUser";

function User(props) {
  const specifyFlight = useSelector((state) => state.specifyFlight);
  console.log("specifyFlight: ");
  console.log(specifyFlight);

  const confirmFlightId = useSelector((state) => state.flights);
  console.log("confirmFlight");
  console.log(confirmFlightId.filter((x) => x.flight_id === specifyFlight));
  const chosenFlight = confirmFlightId.filter(
    (x) => x.flight_id === specifyFlight
  )[0];
  
  const navigate = useNavigate();
 
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
   


      // console.log(list);
      const action1 = addInfoUser({
        ...values,
          totalPrice:chosenFlight.price * infoFlight[0].quantity
      });
      // console.log({
      //   ...values,
      //   totalPrice:chosenFlight.price * infoFlight[0].quantity
      
      // });
   
      
      dispatch(action1);
     
    
    navigate("/detailFlightTicket");
  };

  const list = useSelector((state) => state.flights);
  const infoFlight = useSelector((state) => state.infoFlight);
  console.log("info flight: ");
  console.log(infoFlight);
  console.log("user");
  console.log(list);

  

  const validationSchema = yup.object().shape({
    firstName: yup
      .string().matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
            'Sorry, please enter only letters (a-z)'
        )
    
      .required("Please enter your FirstName"),
      // .test(
      //   "Should has at least 2 words",
      //   "Please enter at least 2 words",
       
      //   (value) => {
      //     return value.split(" ").length >= 2;
      //   }
      // ),
      
    lastName: yup.string().required("Please enter your LastName"),
    phoneNumber: yup
      .number()
      .required("Please enter your phoneNumber")
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
        firstName: yup.string().required("Please enter your First Name!"),
        lastName: yup.string().required("Please enter your Last Name!"),
        dateOfBirth: yup.string().required("Please enter your date of birth!"),
        nationality: yup.string().required("Please enter your nationality!"),
        appellation: yup
          .string()
          .ensure()
          .required("Please enter your appelation!"),
      })
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, control, form, handleSubmit, formState, watch } =
    useForm(formOptions);
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "passengers",
    control,
  });

  const numberOfPassengers = infoFlight[0].quantity;

  useEffect(() => {
    // update field array when ticket number changed
    const newVal = parseInt(numberOfPassengers || 0);
    const oldVal = fields.length;
    if (newVal > oldVal) {
      // append tickets to field array
      for (let i = oldVal; i < newVal; i++) {
        append({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          nationality: "",
          appellation: "",
        });
      }
    } else {
      // remove tickets from field array
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1);
      }
    }
  }, [numberOfPassengers]);

  const select = {
    man: "??ng",
    women: "B??",
    miss: "C??",
    // resolver: yupResolver(schema),
  };

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ margin: "1% 7%" }}>
        <h4 style={{color:"#1BA0E2"}}>?????t ch??? c???a t??i</h4>
        <p style={{ color: "#696969" }}>??i???n th??ng tin v?? xem l???i ?????t ch???</p>
      </div>
      <div>
        <h4 style={{ margin: "1% 7%" ,color:"#1BA0E2"}}>Th??ng tin li??n h???</h4>
        <Box pt={4}>
          <Container>
            <Grid container spacing={1}>
              {/* t????ng ??????ng 1 d??ng */}
              <Grid item xs={9}>
                <div>
                  <Paper elevation={3}>
                    <div style={{ margin: "0 5%", padding: "3% 5% 0" }}>
                      <span style={{ fontWeight: "bold" }}>
                        Th??ng tin li??n h??? (nh???n v??/phi???u thanh to??n)
                      </span>
                    
                    </div>
                    <hr></hr>
                    <div>
                      <div style={{ display: "flex", margin: "2% 10%" }}>
                        <div className="form-row">
                          <div className="form-group col-6">
                            <label>H??? *</label>
                            <input
                              name="firstName"
                              {...register("firstName")}
                              type="text"
                              className={`form-control ${
                                errors.firstName ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.firstName?.message}
                            </div>
                          </div>
                          <div className="form-group col-6">
                            <label>T??n *</label>
                            <input
                              name="lastName"
                              {...register("lastName")}
                              type="text"
                              className={`form-control ${
                                errors.lastName ? "is-invalid" : ""
                              }`}
                            />
                            <div className="invalid-feedback">
                              {errors.lastName?.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        margin: "0 10%",
                        paddingBottom: "5%",
                      }}
                    >
                      <div className="form-row">
                        <div className="form-group col-6">
                          <label>S??? ??i???n tho???i *</label>
                          <input
                            name="phoneNumber"
                            {...register("phoneNumber")}
                            type="text"
                            className={`form-control ${
                              errors.phoneNumber ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.phoneNumber?.message}
                          </div>
                        </div>
                        <div className="form-group col-6">
                          <label>Email *</label>
                          <input
                            name="email"
                            {...register("email")}
                            type="text"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </Paper>
                  <h4 style={{ margin: "5% 0", color:"#1BA0E2" , fontWeight:"bold" }}>Th??ng tin kh??ch h??ng</h4>
                  <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"  }}>
                  <Paper elevation={3}>
                    {fields.map((item, i) => (
                      <div>
                        
                        <div
                          key={item.id}
                          className="list-group list-group-flush"
                          style={{padding:"5%"}}
                        >
                          <div className="list-group-item">
                            <h5 className="card-title">H??nh kh??ch {i + 1}</h5>
                            <div className="form-row">
                              <div className="form-group">
                                <label>Danh x??ng *</label>
                                <select
                                  name={`passengers[${i}]appellation`}
                                  // {...register("appellation")}
                                  {...register(`passengers.${i}.appellation`)}
                                  className={`form-control ${
                                    errors.passengers?.[i]?.appellation
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                >
                                  {["", "??ng", "B??", "C??"].map((i) => (
                                    <option key={i} value={i}>
                                      {i}
                                    </option>
                                  ))}
                                </select>
                                <div className="invalid-feedback">
                                  {errors.passengers?.[i]?.appellation.message}
                                </div>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-6">
                                <label>H??? *</label>
                                <input
                                  name={`passengers[${i}]firstName`}
                                  {...register(`passengers.${i}.firstName`)}
                                  type="text"
                                  className={`form-control ${
                                    errors.passengers?.[i]?.firstName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                <div className="invalid-feedback">
                                  {errors.passengers?.[i]?.firstName?.message}
                                </div>
                              </div>
                              <div className="form-group col-6">
                                <label>T??n *</label>
                                <input
                                  name={`passengers[${i}]lastName`}
                                  {...register(`passengers.${i}.lastName`)}
                                  type="text"
                                  className={`form-control ${
                                    errors.passengers?.[i]?.lastName
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                <div className="invalid-feedback">
                                  {errors.passengers?.[i]?.lastName?.message}
                                </div>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group col-6">
                                <label>Ng??y sinh *</label>
                                <input
                                  name={`passengers[${i}]dateOfBirth`}
                                  {...register(`passengers.${i}.dateOfBirth`)}
                                  type="date"
                                  className={`form-control ${
                                    errors.passengers?.[i]?.dateOfBirth
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                />
                                <div className="invalid-feedback">
                                  {errors.passengers?.[i]?.dateOfBirth?.message}
                                </div>
                              </div>
                              <div className="form-group col-6">
                                <label>Qu???c t???ch *</label>
                                <select
                                  name={`passengers[${i}]nationality`}
                                  {...register(`passengers.${i}.nationality`)}
                                  type="text"
                                  className={`form-control ${
                                    errors.passengers?.[i]?.nationality
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                >
                                  {["", "Vi???t Nam ", "Anh", "M???" ,"Ph??p","Nga","Ukraina", "Italia","Malaysia", "Indonesia" , "Columbia", "H??n Qu???c", "L??o", "Singapore" , "T??y Ban Nha"].map((i) => (
                                    <option key={i} value={i}>
                                      {i}
                                    </option>
                                  ))}
                                </select>
                                <div className="invalid-feedback">
                                  {errors.passengers?.[i]?.nationality?.message}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Paper>
                  </div>
                  {/* <Link to="/detailFlightTicket"> */}
                  <button
                    variant="contained"
                    class="btn btn-primary"
                    type="submit"
                    onClick={onSubmit}
                    // onClick={() => handleAddFlight()}
                    style={{
                      width: "25%",
                      margin: " 3% 0",
                      float: "right",
                    }}

                  >
                    Ch???n
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
                    <span style={{ float: "right" , color:"#1BA0E2"}}>Chi ti???t</span>
                  </div>
                  <hr></hr>
                  <div style={{ margin: "0 5%" }}>
                    <span style={{ fontWeight: "bold" }}>
                      Chuy???n bay ??i *Ng??y {list[0].departure.substring(8, 11)}{" "}
                      th??ng {list[0].departure.substring(5, 7)} n??m{" "}
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
                          Khuy???n m??i
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
                          <span>Bay th???ng</span>
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
                              Kh??ng ho??n ti???n
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
                              C?? ??p d???ng ?????i l???ch bay
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
