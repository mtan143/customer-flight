import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
    const publishableKey =
      "pk_test_51KngQCBYT6EzWmc5ug7gl9wEunNCIvYqmKFpQP80ZjIcFMwAlkKeUCU5pCGib32inufn33jI0taYcKyfC5sG140q009aj34fXB";
    const stripePrice = price * 100;
  
    const onToken = (token) => {
      console.log(token);
      axios
        .post("https://flight-mana.herokuapp.com/api/payment", {
          amount: stripePrice,
          token,
        })
        .then((response) => {
          console.log(response);
          alert("payment success");
        })
        .catch((error) => {
          console.log(error);
          alert("Payment failed");
        });
    };
  
    return (
        <div  style={{margin:"5%"}}>
      <StripeCheckout
        amount={stripePrice}
        label="Thanh Toán"
        name="Wolf Elite"
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is ${price}`}
        panelLabel="Thanh Toán"
        token={onToken}
        stripeKey={publishableKey}
        currency="INR"
      />
      </div>
    );
  };
  
  export default StripeButton;