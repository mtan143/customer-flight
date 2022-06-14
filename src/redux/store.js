import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";
import infoFlightReducer from "./infoFlightSlice";
import flightId from "./flightId";
import infoUser from "./infoUser";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    infoFlight: infoFlightReducer,
    specifyFlight :  flightId,
    infoUser : infoUser,
    user: userReducer,
  },
});
