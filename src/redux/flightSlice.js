import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flights",
  initialState: [],
  reducers: {
    addFlight(state, action) {
      state.slice(0, state.length);
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = flightSlice;
export const { addFlight } = actions;
export default reducer;
