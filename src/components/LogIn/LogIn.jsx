import React from "react";
import "./login.css";

function LogIn({ user, setUser, logging, handleSubmit }) {
  return (
    <div>
      <div className="pb-2 text-center">Log In</div>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          placeholder="email"
          required
          autoComplete='on'
          className="form_input "
        />

        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="password"
          required
          autoComplete='on'
          className="form_input"
        />

        <button type="submit" disabled={logging} className="mt-2 black_btn">
          {logging ? "Signing in" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default LogIn;
