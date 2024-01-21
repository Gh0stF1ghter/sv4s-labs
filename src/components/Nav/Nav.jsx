import React from "react";
import "./nav.css";
import { useState, useEffect } from "react";
import LogIn from "../LogIn/LogIn";
import NavButton from "../NavButton/NavButton";
import Button from "@mui/material-next/Button";
import IconButton from "@mui/material-next/IconButton";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Box from "@mui/material/Box";

function Nav() {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [smallToggleDropdown, setSmallToggleDropdown] = useState(false)
  const [session, setSession] = useState(false);
  const [logging, setLogging] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openSmallForm, setOpenSmallForm] = useState(false);

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
      setLogging(false);
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
      <Tooltip title="Home">
        <Link href="/" underline="none" className="logo flex-center">
          <img
            src="./logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="logo_img"
          />
          <p className="logo_text">SecureIt</p>
        </Link>
      </Tooltip>

      <NavButton href={`/cctv`} name={"Cameras"} />
      <NavButton href={`/entranceSec`} name={"Entrance Security"} />
      <NavButton href={`/doorSec`} name={"Door Security"} />

      {/* Desktop Navigation */}
      <div className="big_screen">
        {session ? (
          <div className="flex gap-3 md:gap-5">
            <Button
              variant="outlined"
              onClick={() => {
                setSession(false);
                setUser({ name: "", email: "", password: "" });
                localStorage.removeItem("currentUser");
              }}
              className="outline_btn"
            >
              Sign out
            </Button>
            <ClickAwayListener onClickAway={() => setToggleDropdown(false)}>
              <Box>
                <IconButton onClick={() => setToggleDropdown((prev) => !prev)}>
                  <Avatar
                    src="profile.svg"
                    alt="profile"
                    width={37}
                    height={37}
                  />
                </IconButton>
                {/* Dropdown Menu */}
                {toggleDropdown ? (
                  <Box className="dropdown drop-shadow-md">
                    <div className="m-3 ">
                      <Avatar
                        src="profile.svg"
                        width={50}
                        height={50}
                        alt="profile"
                      />
                    </div>
                    <div className="text-center">Hello, {user.name}!</div>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </div>
        ) : (
          <ClickAwayListener onClickAway={() => setOpenForm(false)}>
            <Box sx={{ position: "flex" }}>
              <Button
                variant="outlined"
                type="button"
                onClick={() => setOpenForm((prev) => !prev)}
                className="black_btn"
              >
                Sign In
              </Button>
              {openForm ? (
                <Box className="dropdown drop-shadow-md">
                  {error && (
                    <Alert severity="error" className="w-full rounded-lg">
                      No such user in base
                    </Alert>
                  )}
                  <LogIn
                    user={user}
                    setUser={setUser}
                    logging={logging}
                    handleSubmit={handleLogIn}
                  />
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
        )}
      </div>
      {/* Mobile */}
      <div className="small_screen">
        {session ? (
          <ClickAwayListener onClickAway={() => setSmallToggleDropdown(false)}>
            <Box className="flex">
              <IconButton onClick={() => setSmallToggleDropdown((prev) => !prev)}>
                <Avatar
                  src="profile.svg"
                  width={37}
                  height={37}
                  alt="profile"
                />
              </IconButton>

              {/* Dropdown Menu */}
              {smallToggleDropdown && (
                <Box className="items-center dropdown drop-shadow-md">
                  <div className="m-3">
                    <Avatar
                      className="profile_img"
                      src="profile.svg"
                      width={50}
                      height={50}
                      alt="profile"
                    />
                  </div>

                  <div className="text-center">Hello, {user.name}!</div>

                  <Button
                    variant="outlined"
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                    }}
                    className="black_btn"
                  >
                    Sign Out
                  </Button>
                </Box>
              )}
            </Box>
          </ClickAwayListener>
        ) : (
          <ClickAwayListener onClickAway={() => setOpenSmallForm(false)}>
            <Box>
              <Button
                variant="outlined"
                type="button"
                onClick={() => setOpenSmallForm((prev) => !prev)}
                className="black_btn"
              >
                Sign In
              </Button>
              {openSmallForm && (
                <Box className="dropdown drop-shadow-md">
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
                </Box>
              )}
            </Box>
          </ClickAwayListener>
        )}
      </div>
    </nav>
  );
}

export default Nav;
