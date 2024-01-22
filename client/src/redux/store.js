import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../components/Nav/dropdownSlice";
import loginReducer from "../components/Nav/loginSlice";
import smallDropdownReducer from "../components/Nav/smallDropdownSlice";

export default configureStore({
  reducer: {
    dropdown: dropdownReducer,
    login: loginReducer,
    smallDropdown: smallDropdownReducer,
  },
});
