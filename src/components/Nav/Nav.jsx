import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react";
import LogIn from "../LogIn/LogIn";
import NavButton from "../NavButton/NavButton";

function Nav() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [session, setSession] = useState(false);
  const [logging, setLogging] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleLogIn = async (e) => {
    e.preventDefault();
    setLogging(true);

    const users = await import("../../constants/profiles.json").then(
      (module) => module.default
    );

    const exists = users.find(
      (x) => x.email === user.email && x.password === user.password
    );

    if (exists) {
      localStorage.setItem("currentUser", user.email);
      localStorage.setItem("userName", exists.name);
      localStorage.setItem("userPass", user.password);
      setUser({ ...user, name: exists.name });
      setSession(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const getUser = () => {
      const user = localStorage.getItem("currentUser");
      if (user) {
        const name = localStorage.getItem("userName");
        const pass = localStorage.getItem("userPass");
        setUser({ name: name, email: user, password: pass });
        setSession(true);
      }
    };
    getUser();
  }, []);

  return (
    <nav className="flex-between">
      <Link to="/" className="logo flex-center">
        <img
          src="./logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="logo_img"
        />
        <p className="logo_text">SecureIt</p>
      </Link>
      <NavButton href={`/cctv`} name={"Cameras"} />
      <NavButton href={`/entranceSec`} name={"Entrance Security"} />
      <NavButton href={`/doorSec`} name={"Door Security"} />
      {/* Desktop Navigation */}
      <div className="big_screen">
        {session ? (
          <div className="flex gap-3 md:gap-5">
            <button
              type="button"
              onClick={() => {
                setSession(false);
                setUser({ name: "", email: "", password: "" });
                localStorage.removeItem("currentUser");
              }}
              className="outline_btn"
            >
              Sign out
            </button>

            <img
              className="profile_img"
              src="profile.svg"
              alt="profile"
              width={37}
              height={37}
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {/* Dropdown Menu */}
            {toggleDropdown && (
              <div className="dropdown drop-shadow-md">
                <div className="m-3 ">
                  <img
                    className="profile_img"
                    src="profile.svg"
                    width={50}
                    height={50}
                    alt="profile"
                  />
                </div>

                <div className="text-center">Hello, {user.name}!</div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex">
            <button
              type="button"
              onClick={() => setOpenForm((prev) => !prev)}
              className="black_btn"
            >
              Sign In
            </button>
            {openForm && (
              <div className="dropdown drop-shadow-md">
                {error && (
                  <div className="w-full text-red-600 bg-red-400 rounded-lg">
                    No such user in base
                  </div>
                )}
                <LogIn
                  user={user}
                  setUser={setUser}
                  logging={logging}
                  handleSubmit={handleLogIn}
                />
              </div>
            )}
          </div>
        )}
      </div>
      {/* Mobile */}
      <div className="small_screen">
        {session ? (
          <div className="flex">
            <img
              className="profile_img"
              src="profile.svg"
              width={37}
              height={37}
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {/* Dropdown Menu */}
            {toggleDropdown && (
              <div className="items-center dropdown drop-shadow-md">
                <div className="m-3">
                  <img
                    className="profile_img"
                    src="profile.svg"
                    width={50}
                    height={50}
                    alt="profile"
                  />
                </div>

                <div className="text-center">Hello, {user.name}!</div>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                  className="black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button
              type="button"
              onClick={() => setOpenForm((prev) => !prev)}
              className="black_btn"
            >
              Sign In
            </button>
            {openForm && (
              <div className="dropdown drop-shadow-md">
                {error && (
                  <div className="w-full text-red-600 bg-red-400 rounded-lg">
                    No such user in base
                  </div>
                )}
                <LogIn
                  user={user}
                  setUser={setUser}
                  logging={logging}
                  handleSubmit={handleLogIn}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
