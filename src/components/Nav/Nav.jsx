import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [session, setSession] = useState();

  useEffect(() => {
    const getUser = () => {
      //connect with users.json file
      const user = localStorage.getItem("currentUser");
      if (user) {
        setSession(user);
      }
    };
    //get via localstorage
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
          <p className="logo_text">Project</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="big_screen">
          {session?.user ? (
            <div className="profile_btns flex gap-3 md:gap-5">
              <button type="button" onClick={()=> {}} className="outline_btn">
                Sign out
              </button>

              <img
                className="profile_img"
                src="profile.svg"
                alt="profile"
                width={37}
                height={37}
              />
            </div>
          ) : (
            <>
              <button type="button" onClick={() => {}} className="black_btn">
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Mobile */}
        <div className="small_screen">
          {session?.user ? (
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
                <div className="dropdown drop-shadow-md">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Profile
                  </Link>

                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create prompt
                  </Link>

                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      
                    }}
                    className="dropdown_link black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {}}
                    className="black_btn"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
  );
}

export default Nav;
