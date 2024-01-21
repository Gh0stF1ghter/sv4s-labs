import React from "react";
import "./login.css";

function LogIn({ user, setUser, logging, handleSubmit }) {
  return (
    <div>
      <div className="login">Log In</div>
      <form onSubmit={handleSubmit} className="login_form">
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type="email"
          placeholder="email"
          required
          autoComplete='on'
          className="form_input"
        />

        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          placeholder="password"
          required
          autoComplete='on'
          className="form_input"
        />

        <button type="submit" disabled={logging} className="submit_btn black_btn">
          {logging ? "Signing in" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default LogIn;
