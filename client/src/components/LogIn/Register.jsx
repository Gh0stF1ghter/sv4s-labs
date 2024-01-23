import React from "react";
import "./login.css";
import Button from "@mui/material-next/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setEmail, setName, setPassword } from "../Nav/loginSlice";

function Register({ logging, handleSubmit }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="pb-2 text-center">Log In</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextField
          label="Email"
          variant="outlined"
          onChange={(e) => dispatch(setEmail(e.target.value))}
          type="email"
          placeholder="email"
          required
          autoComplete="on"
          className="form_input "
        />
        <TextField
          label="Name"
          variant="outlined"
          onChange={(e) => dispatch(setName(e.target.value))}
          type="text"
          placeholder="name"
          required
          autoComplete="on"
          className="form_input "
        />
        <TextField
          label="Password"
          variant="outlined"
          onChange={(e) => dispatch(setPassword(e.target.value))}
          type="password"
          placeholder="password"
          required
          autoComplete="on"
          className="form_input"
        />

        <Button
          variant="outlined"
          type="submit"
          disabled={logging}
          className="mt-2 black_btn"
        >
          {logging ? "Signing in" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}

export default Register;
