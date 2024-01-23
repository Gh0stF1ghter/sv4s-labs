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
import { useSelector, useDispatch } from "react-redux";
import { toggleDropdown, removeDropdown } from "./dropdownSlice";
import { toggleSmallDropdown, removeSmallDropdown } from "./smallDropdownSlice";
import {
  setName,
  setEmail,
  setPassword,
  open,
  close,
  openSmall,
  closeSmall,
  startSession,
  endSession,
} from "./loginSlice";
import axios from "axios";

function Nav() {
  const dropdown = useSelector((state) => state.dropdown.value);
  const smallDropdown = useSelector((state) => state.smallDropdown.value);
  const form = useSelector((state) => state.login.value.opened);
  const smallForm = useSelector((state) => state.login.value.openedSmall);
  const session = useSelector((state) => state.login.value.session);

  const user = useSelector((state) => state.login.value);

  const dispatch = useDispatch();

  const [logging, setLogging] = useState(false);
  const [error, setError] = useState(false);

  const signOut = () => {
    dispatch(endSession());
    dispatch(setEmail(""));
    dispatch(setName(""));
    dispatch(setPassword(""));
    localStorage.removeItem("currentUser");
    setLogging(false);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    setLogging(true);

    const response = await axios.post("http://localhost:3001/login", user);

    if (response.data.success) {
      const exists = response.data.user;
      localStorage.setItem("currentUser", user.email);
      localStorage.setItem("userName", exists.name);
      localStorage.setItem("userPass", user.password);
      dispatch(setName(exists.name));
      dispatch(startSession());
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
        dispatch(setEmail(user));
        dispatch(setName(name));
        dispatch(setPassword(pass));
        dispatch(startSession());
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
                signOut();
              }}
              className="outline_btn"
            >
              Sign out
            </Button>
            <ClickAwayListener onClickAway={() => dispatch(removeDropdown())}>
              <Box>
                <IconButton onClick={() => dispatch(toggleDropdown())}>
                  <Avatar
                    src="profile.svg"
                    alt="profile"
                    width={37}
                    height={37}
                  />
                </IconButton>
                {/* Dropdown Menu */}
                {dropdown ? (
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
          <ClickAwayListener onClickAway={() => dispatch(close())}>
            <Box sx={{ position: "flex" }}>
              <Button
                variant="outlined"
                type="button"
                onClick={() => dispatch(open())}
                className="black_btn"
              >
                Sign In
              </Button>
              {form ? (
                <Box className="dropdown drop-shadow-md">
                  {error && (
                    <Alert severity="error" className="w-full rounded-lg">
                      No such user in base
                    </Alert>
                  )}
                  <LogIn logging={logging} handleSubmit={handleLogIn} />
                </Box>
              ) : null}
            </Box>
          </ClickAwayListener>
        )}
      </div>
      {/* Mobile */}
      <div className="small_screen">
        {session ? (
          <ClickAwayListener
            onClickAway={() => dispatch(removeSmallDropdown())}
          >
            <Box className="flex">
              <IconButton onClick={() => dispatch(toggleSmallDropdown())}>
                <Avatar
                  src="profile.svg"
                  width={37}
                  height={37}
                  alt="profile"
                />
              </IconButton>

              {/* Dropdown Menu */}
              {smallDropdown && (
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
                      dispatch(removeSmallDropdown());
                      signOut();
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
          <ClickAwayListener onClickAway={() => dispatch(closeSmall())}>
            <Box>
              <Button
                variant="outlined"
                type="button"
                onClick={() => dispatch(openSmall())}
                className="black_btn"
              >
                Sign In
              </Button>
              {smallForm && (
                <Box className="dropdown drop-shadow-md">
                  {error && (
                    <div className="w-full text-red-600 bg-red-400 rounded-lg">
                      No such user in base
                    </div>
                  )}
                  <LogIn logging={logging} handleSubmit={handleLogIn} />
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
