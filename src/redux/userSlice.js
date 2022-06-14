import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
      current: {},
      settings: {},
  },
  reducers: {
    addInfoFlight(state, action) {
      state.length = 0;
      state.push(action.payload);
    }
  },
});

const { reducer } = userSlice;
export default reducer;