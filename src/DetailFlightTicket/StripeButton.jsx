import React, {useState, useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const StripeButton = ({ price }) => {

  const infoFlight = useSelector((state) => state.infoFlight);
  const infoUser = useSelector((state) => state.infoUser);
  console.log("info flight: ");
  console.log(infoFlight);

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

  const navigate = useNavigate();

  var seat ;
  switch(infoFlight[0].classType) {
    case "PHO_THONG_DAC_BIET" : {
      seat = "PTDB";
      break;
    }
    case "THUONG_GIA" : {
      seat = "TGXX";
      break;
    }
    case "HANG_NHAT" : {
      seat = "HNXX";
      break;
    }
    default  : 
      seat = "PTXX"
      break;
    
  }
    const publishableKey =
      "pk_test_51KngQCBYT6EzWmc5ug7gl9wEunNCIvYqmKFpQP80ZjIcFMwAlkKeUCU5pCGib32inufn33jI0taYcKyfC5sG140q009aj34fXB";
    const stripePrice = price;
  
    const onToken = (token) => {
      axios
        .post("https://flight-mana.herokuapp.com/api/payment", {
          amount: stripePrice,
          token,
        })
        .then((response) => {
          
          console.log(response.data.data.chargeId);
          let data = JSON.stringify( {
            ...infoUser,
            totalPrice: price,
            chargeId: response.data.data.chargeId,
            userId: localStorage.getItem('CUSTOMER_ID') || "",
            classFlightCode: String(specifyFlight).padStart(4,'0').concat(seat),
            voucherCode: localStorage.getItem('VOUCHER_CODE') || "",
            giftCode: localStorage.getItem('GIFT_CODE') || "",
            token: localStorage.getItem('token'),
            
          })
         console.log(data);
          axios.post("https://flight-mana.herokuapp.com/api/customers/tickets/create" ,
          data
          , { headers: { "Content-Type": "application/json" } })
          .then((res) => {
            console.log(res.data.data);
            alert("Bạn đã thanh toán thành công! Hãy kiểm tra email của bạn")

            //Check Customer ID
           if (localStorage.getItem('CUSTOMER_ID')) {

            //Check if have voucher code
             if (localStorage.getItem('VOUCHER_CODE')) {
               let applyVoucher = JSON.stringify({
                 code: localStorage.getItem('VOUCHER_CODE'),
                 typeVoucher: 'FLIGHT',
                 transactionId: res.data.data,
                 amount: price
               })
               //Apply Voucher
               axios({
                url: `https://api.votuan.xyz/api/v1/user/voucher/pre-order`,
                data: applyVoucher,
                method: 'post',
                headers: {
                  'user_id': localStorage.getItem("CUSTOMER_ID"),
                  'partner_id': 'E56063A4-24D1-45F1-BBE6-095E66213C58',
                  'app_id': 'vy04',
                  'Content-Type': 'application/json'
                }
              })
              .then(res => {
                console.log(res);
                let updateVoucher = JSON.stringify({
                  typeVoucher: 'FLIGHT',
                  orderId: res.data.data.orderId
                })
                axios({
                  url: `https://api.votuan.xyz/api/v1/user/voucher/state`,
                  data: updateVoucher,
                  method: 'put',
                  headers: {
                    'user_id': localStorage.getItem("CUSTOMER_ID"),
                    'partner_id': 'E56063A4-24D1-45F1-BBE6-095E66213C58',
                    'app_id': 'vy04',
                    'Content-Type': 'application/json'
                  }
                })
                .then(res => console.log(res))
                .catch(err => {
                  alert(err);
                  console.log(err);
                });
              })
              .then(res => console.log(res))
                .catch(err => {
                  alert(err);
                  console.log(err);
                });
             }


             //Check if have gift code
             if (localStorage.getItem('GIFT_CODE')) {
              let applyVoucher = JSON.stringify({
                code: localStorage.getItem('GIFT_CODE'),
                typeVoucher: 'FLIGHT',
                transactionId: res.data.data,
                amount: price
              })
              //Apply Gift
              axios({
               url: `https://api.votuan.xyz/api/v1/user/gift-card/pre-order`,
               data: applyVoucher,
               method: 'post',
               headers: {
                 'user_id': localStorage.getItem("CUSTOMER_ID"),
                 'partner_id': 'E56063A4-24D1-45F1-BBE6-095E66213C58',
                 'app_id': 'vy04',
                 'Content-Type': 'application/json'
               }
             })
             .then(res => {
               console.log(res);
               let updateVoucher = JSON.stringify({
                 typeVoucher: 'FLIGHT',
                 orderId: res.data.data.orderId
               })
               axios({
                 url: `https://api.votuan.xyz/api/v1/user/gift-card/state`,
                 data: updateVoucher,
                 method: 'put',
                 headers: {
                   'user_id': localStorage.getItem("CUSTOMER_ID"),
                   'partner_id': 'E56063A4-24D1-45F1-BBE6-095E66213C58',
                   'app_id': 'vy04',
                   'Content-Type': 'application/json'
                 }
               })
               .then(res => console.log(res))
               .catch(err => {
                 alert(err);
                 console.log(err);
               });
             })
             .then(res => console.log(res))
               .catch(err => {
                 alert(err);
                 console.log(err);
               });
            }
            localStorage.removeItem("VOUCHER_CODE");
            localStorage.removeItem("GIFT_CODE");
            navigate('/collaps');
           }
           else {
            localStorage.removeItem("VOUCHER_CODE");
            localStorage.removeItem("GIFT_CODE"); 
            navigate('/');
           }
          })
          .catch((err) => {
            alert(err);
            console.log(err);
          })
        
        })
        .catch((error) => {
          console.log(error);
          alert("Payment failed");
        });
      }

      const numberFormat = (value) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(value);
  
    return (
        <div  style={{margin:"5%"}}>
      <StripeCheckout
        amount={stripePrice}
        label="Thanh Toán"
        name="Flight Confirm"
        image="https://scr.vn/wp-content/uploads/2020/07/avt-cute.jpg.webp"
        description={`Your total is ${numberFormat(price)}`}
        panelLabel="Thanh Toán"
        token={onToken}
        stripeKey={publishableKey}
        currency="VND"
      />
      </div>
    );
  };
  export default StripeButton;