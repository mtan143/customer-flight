import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./flightSlice";
import infoFlightReducer from "./infoFlightSlice";
import flightId from "./flightId";

export const store = configureStore({
  reducer: {
    flights: flightReducer,
    infoFlight: infoFlightReducer,
    specifyFlight :  flightId,
  },
});
