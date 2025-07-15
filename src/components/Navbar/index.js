import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const userData = useSelector((state) => state.user);

  const navbarList = [
    { nav: "Home", path: "/" },
    { nav: "About", path: "/about" },
    { nav: "Services", path: "/services" },
    { nav: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="text-gray-100 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <p>{userData.displayName || "Name is not Available"}</p>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navbarList.map((list, i) => (
                <li key={i}>
                  <Link
                    to={list.path}
                    className={
                      location.pathname === list.path
                        ? "block bg-blue-700 rounded-sm md:bg-transparent text-blue-400"
                        : "text-white"
                    }
                    aria-current="page"
                  >
                    {list.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
