import React from "react";

import { footerLinks } from "../constants";
import { Link } from "react-router-dom";

const FootBar = () => {
  return (
    <footer className="flex flex-col mt-5 border-t border-gray-100 text-black-100">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-6">
        <div className="flex flex-col items-start justify-start gap-6 ">
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

        <div className="flex flex-wrap flex-1 w-full gap-20 md:justify-end max-md:mt-10">
          {footerLinks.map((link) => (
            <div className="flex flex-col gap-6 text-base min-w-[170px]">
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

      <div className="flex flex-wrap items-center justify-between px-6 py-10 mt-10 border-t border-gray-100 sm:px-16">
        <p>2023 All Rights reserved</p>
        <div className="flex justify-center flex-1 gap-10 sm:justify-end max-sm:mt-4">
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
