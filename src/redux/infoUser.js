import { createSlice } from "@reduxjs/toolkit";

const infoUser = createSlice({
  name: "infoUser",
  initialState: {},
  reducers: {
    addInfoUser(state, action) {
      return action.payload;
    }
  },
});

const { actions, reducer } = infoUser;
export const { addInfoUser } = actions;
export default reducer;