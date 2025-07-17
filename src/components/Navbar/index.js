import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { LuStore } from "react-icons/lu";
import Badge from "@mui/material/Badge";
import { FaCartShopping } from "react-icons/fa6";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const usercartAddedItems = useSelector(
    (state) => state.productData.cartProducts
  );
  const userData = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
          <div
            className="hidden w-full md:w-auto md:flex items-center"
            id="navbar-default"
          >
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
            <div className="ml-10 cursor-pointer">
              <Badge badgeContent={usercartAddedItems.length} color="error">
                <FaCartShopping size={25} onClick={handleClick} />
              </Badge>
              {usercartAddedItems.length === 0 && (
                <Snackbar
                  open={open}
                  autoHideDuration={2000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: "100%" }}
                  >
                    Please Select anyone product
                  </Alert>
                </Snackbar>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
