import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlightIcon from "@mui/icons-material/Flight";
import { Container } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { default as React, useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";
import celebrating from "../resource/celebrating.png";
import vietjet from "../resource/vietjet.png";
import StripeButton from "./StripeButton";
import axios from "axios";
import "./style.css";
import Select from "react-select";

DetailFlightTicket.propTypes = {};

function DetailFlightTicket(props) {

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

  var seat;
  switch (infoFlight[0].classType) {
    case "PHO_THONG_DAC_BIET": {
      seat = "Phổ thông đặc biệt";
      break;
    }
    case "THUONG_GIA": {
      seat = "Thương gia";
      break;
    }
    case "HANG_NHAT": {
      seat = "Hạng nhất";
      break;
    }
    default:
      seat = "Phổ thông";
      break;
  }

  var total = chosenFlight.price * infoFlight[0].quantity;
  var countPrice = total;
  console.log(countPrice);
  const [gStatus, setGStatus] = useState(true);
  const [vStatus, setVStatus] = useState(false);
  const [giftValue, setGiftValue] = useState(0);
  const [voucherValue, setVoucherValue] = useState(0);

  const sum = total - giftValue - voucherValue;
  const [vouchers, setVouchers] = useState([]);
  const [gifts, setGifts] = useState([]);

  // useEffect(() => {
  //   axios({
  //     url: "https://api.votuan.xyz/api/v1/user/voucher/eligible?typeVoucher=FLIGHT",
  //     method: "get",
  //     headers: {
  //       user_id: localStorage.getItem("CUSTOMER_ID"),
  //       partner_id: "851eb909-58ef-4eaf-83e1-0404701c3524",
  //       app_id: "vy04",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data.data.vouchers);
  //       setVouchers(res.data.data.vouchers);
  //     })
  //     .catch((err) => console.log(err));

  //   axios({
  //     url: "https://api.votuan.xyz/api/v1/user/voucher/eligible?typeVoucher=FLIGHT",
  //     method: "get",
  //     headers: {
  //       user_id: localStorage.getItem("CUSTOMER_ID"),
  //       partner_id: "851eb909-58ef-4eaf-83e1-0404701c3524",
  //       app_id: "vy04",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data.data.vouchers);
  //       setGifts(res.data.data.vouchers);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
        .post("https://gxyvy04g01backend-production.up.railway.app/Customer/getAvailableVoucher", {
          TOKEN: localStorage.getItem('token'),
          APP_ID: "FLIGHT"
        })
        .then(res => {
          setGifts(res.data.GIFTVOUCHER || []);
          setVouchers(res.data.VOUCHERS || []);
        })
  }, [])

  const handleVoucher = (e) => {
    console.log(e.value);
    axios({
      url: `https://api.votuan.xyz/api/v1/user/voucher/check-condition?amount=${sum}&code=${e.value}&typeVoucher=FLIGHT`,
      method: "get",
      headers: {
        user_id: localStorage.getItem("CUSTOMER_ID"),
        partner_id: "E56063A4-24D1-45F1-BBE6-095E66213C58",
        app_id: "vy04",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("ÁP DỤNG VOUCHER THÀNH CÔNG");
        localStorage.setItem("VOUCHER_CODE", e.value);
        setVoucherValue(res.data.data.amount);
        countPrice -= res.data.data.amount;
        if (countPrice < 0) setGStatus(false);
      })
      .catch((err) => {
        localStorage.removeItem("VOUCHER_CODE");
        window.alert("KHÔNG ĐỦ ĐIỀU KIỆN ĐỂ SỬ DỤNG VOUCHER");
        setVoucherValue(0);
      });
  };

  const handleGift = (e) => {
    console.log(e.value);
    axios({
      url: `https://api.votuan.xyz/api/v1/user/gift-card/check-condition?amount=${total}&code=${e.value}&typeVoucher=FLIGHT`,
      method: "get",
      headers: {
        user_id: localStorage.getItem("CUSTOMER_ID"),
        partner_id: "E56063A4-24D1-45F1-BBE6-095E66213C58",
        app_id: "vy04",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        window.alert("ÁP DỤNG GIFT THÀNH CÔNG");
        localStorage.setItem("GIFT_CODE", e.value);
        setGiftValue(res.data.data.amount);
        countPrice -= res.data.data.amount;
        setVStatus(true);
        if (countPrice < 0) setVStatus(false);
      })
      .catch((err) => {
        window.alert("KHÔNG ĐỦ ĐIỀU KIỆN ĐỂ SỬ DỤNG GIFT");
        localStorage.removeItem("GIFT_CODE");
        setVoucherValue(0);
        setVStatus(false);
      });
  };
  return (
    <div>
      <main class="page payment-page">
        <section class="payment-form dark">
          <div class="container" style={{ width: "50%" }}>
            <div>
              <div class="products">
                <div
                  class="card-details"
                  style={{ backgroundColor: "#f7fbff" }}
                >
                  <h2 style={{ textAlign: "center", color: "blue" }}>
                    Payment
                  </h2>

                  <h3 class="title">Details Flights</h3>
                  <div class="row">
                    <div>
                      <div>
                        <div style={{ display: "flex", margin: "5% 0" }}>
                          <div style={{ marginLeft: "2%", marginTop: "5%" }}>
                            <p style={{ marginLeft: "2%", margin: "0" }}>
                              {chosenFlight.time_arrival}
                            </p>
                            <p style={{ color: "GrayText" }}>
                              {infoFlight[0].departure.substring(8, 10)} thg{" "}
                              {infoFlight[0].departure.substring(5, 7)}{" "}
                            </p>
                          </div>
                          <div style={{ marginLeft: "15%", marginTop: "5%" }}>
                            <p style={{ margin: "0" }}>
                              {infoFlight[0].destination.substring(
                                0,
                                infoFlight[0].departurePlace.length - 9
                              )}
                            </p>
                            <p style={{ color: "GrayText", margin: "0" }}>
                              Sân bay{" "}
                              {infoFlight[0].destination.substring(
                                0,
                                infoFlight[0].departurePlace.length - 9
                              )}
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "10% 0",
                          }}
                        >
                          <FlightIcon />
                          <span style={{ marginRight: "13%" }}>
                            {chosenFlight.time}h
                          </span>
                          <div
                            style={{
                              border: "1px solid lightgrey",
                              borderRadius: "8px",
                            }}
                          >
                            <div style={{ display: "flex", marginLeft: "11%" }}>
                              <img
                                src={vietjet}
                                alt=""
                                style={{ width: "21%" }}
                              />
                              {/* ------------------------------- */}

                              <div>
                                <h5>{infoFlight[0].airline_name}</h5>
                                <span>VJ-627 - Khuyến mãi</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: "flex", marginTop: "5%" }}>
                          <div style={{ marginLeft: "2%" }}>
                            <p style={{ margin: "0 2%" }}>
                              {chosenFlight.time_departure}
                            </p>
                            <p style={{ color: "GrayText", margin: "0" }}>
                              {infoFlight[0].departure.substring(8, 10)} thg{" "}
                              {infoFlight[0].departure.substring(5, 7)}
                            </p>
                          </div>
                          <div style={{ marginLeft: "15%" }}>
                            <p>
                              {infoFlight[0].departurePlace.substring(
                                0,
                                infoFlight[0].departurePlace.length - 10
                              )}
                            </p>
                            <p style={{ color: "GrayText", marginTop: "-15%" }}>
                              Sân bay{" "}
                              {infoFlight[0].departurePlace.substring(
                                0,
                                infoFlight[0].departurePlace.length - 10
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------------------------------------------------------------------------------- */}
                <h3 class="title">Checkout</h3>
                <div class="item" style={{ padding: "5% 10%" }}>
                  {infoUser.passengers.map((x, i) => (
                    <>
                      <p class="item-name" style={{ margin: "5% 0" }}>
                        {" "}
                        {i + 1}. {x.appellation} {x.firstName} {x.lastName}{" "}
                      </p>
                      <p>Ngày sinh: {x.dateOfBirth}</p>
                      <p>Giá vé: {numberFormat(chosenFlight.price)}</p>
                    </>
                  ))}
                </div>
                <div style={{ marginBottom: "10%" }}>
                  {localStorage.getItem("token") ? (
                    <div>
                      <>
                        {gStatus ? (
                          <Select
                            className="select"
                            placeholder="Select your gift..."
                            onChange={handleGift}
                            options={gifts.map((item) => ({
                              value: item.giftCardCode,
                              label: `${item.title} - ${item.description}`,
                              // label: `${item.title} - ${item.giftCardCode}`,
                            }))}
                          />
                        ) : (
                          <span></span>
                        )}
                        {(vStatus === true || gifts.length === 0) ? (
                          <div style={{ marginTop: "20px" }}>
                            <Select
                              placeholder="Select your voucher..."
                              onChange={handleVoucher}
                              options={vouchers.map((v) => ({
                                value: v.voucherCode,
                                label: `${v.title} - ${v.description}`,
                                // label: `${v.title} - ${v.voucherCode}`,
                              }))}
                            />
                          </div>
                        ) : (
                          <span></span>
                        )}
                      </>
                    </div>
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      <img src={celebrating} alt="" style={{ width: "15%" }} />
                      <p
                        style={{
                          fontSize: "20px",
                          marginTop: "20px",
                          fontWeight: "bold",
                        }}
                      >
                        Cần đăng nhập để tích điểm
                      </p>
                    </div>
                  )}
                </div>

                <div class="total" style={{ padding: "5% 10%" }}>
                  Subtotal
                  <span class="price">
                    {" "}
                    {numberFormat(chosenFlight.price * infoFlight[0].quantity)}
                  </span>
                </div>
                {localStorage.getItem("CUSTOMER_ID") ? (
                  <>
                    <div class="total" style={{ padding: "5% 10%" }}>
                      Gift Discount
                      <span
                        class="price"
                        style={
                          giftValue > 0 ? { color: "red" } : { color: "black" }
                        }
                      >
                        {" "}
                         {numberFormat(giftValue)}
                      </span>
                    </div>
                    <div class="total" style={{ padding: "5% 10%" }}>
                      Voucher Discount
                      <span
                        class="price"
                        style={
                          voucherValue > 0
                            ? { color: "red" }
                            : { color: "black" }
                        }
                      >
                        {" "}
                         {numberFormat(voucherValue)}
                      </span>
                    </div>
                  </>
                ) : (
                  <span></span>
                )}
                <div class="total" style={{ padding: "5% 10%" }}>
                  Total
                  <span class="price"> {numberFormat(sum)}</span>
                </div>

                <div style={{ width: "24%" }}>
                  <StripeButton price={sum} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DetailFlightTicket;
