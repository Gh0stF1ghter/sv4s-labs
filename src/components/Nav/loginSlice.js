import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: {
      name: "",
      email: "",
      password: "",
      session: false,
      opened: false,
      openedSmall: false,
    },
  },

  reducers: {
    setName: (state, action) => {
      state.value.name = action.payload;
    },
    setEmail: (state, action) => {
      state.value.email = action.payload;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload;
    },
    startSession: (state) => {
      state.value.session = true;
    },
    endSession: (state) => {
      state.value.session = false;
    },
    open: (state) => {
      state.value.opened = true;
    },
    close: (state) => {
      state.value.opened = false;
    },
    openSmall: (state) => {
      state.value.openedSmall = true;
    },
    closeSmall: (state) => {
      state.value.openedSmall = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setName,
  setEmail,
  setPassword,
  startSession,
  endSession,
  open,
  close,
  openSmall,
  closeSmall,
} = loginSlice.actions;

export default loginSlice.reducer;
