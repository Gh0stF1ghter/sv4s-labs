import './footBar.css'

import React from "react";

import { footerLinks } from "../../constants";
import { Link } from "react-router-dom";

const FootBar = () => {
  return (
    <footer>
      <div className="inner_footer">
        <div className="footer_logo">
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
        </div>

        <div className="footer_about">
          {footerLinks.map((link) => (
            <div className="about_block">
              <h3 className="font-bold ">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <p>2023 All Rights reserved</p>
        <div className="terms_of_use">
          <Link to="/" className="text-gray-500 ">
            Terms of use
          </Link>
          <Link to="/" className="text-gray-500 ">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FootBar;
