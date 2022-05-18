import { createSlice } from "@reduxjs/toolkit";

const flightId= createSlice({
  name: "flightId",
  initialState: 0,
  reducers: {
    addFlightId(state, action) {
      return action.payload;
    }
  },
});

const { actions, reducer } = flightId;
export const { addFlightId } = actions;
export default reducer;