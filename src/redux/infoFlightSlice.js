import { createSlice } from "@reduxjs/toolkit";

const infoFlightSlice = createSlice({
  name: "infoFlight",
  initialState: [],
  reducers: {
    addInfoFlight(state, action) {
      state.length = 0;
      state.push(action.payload);
    }
  },
});

const { actions, reducer } = infoFlightSlice;
export const { addInfoFlight } = actions;
export default reducer;