import React from "react";
import { useState, useEffect } from "react";

function Navbar() {

  // const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );

   const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
        className={` max-w-screen-2xl container mx-auto md:px-4 px-2 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-200 transition-all ease-in-out"
            : ""
        }`}
      >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div className=" flex items-center space-x-2  mr-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="Logo"
              className="w-12 h-12 border-2 border-black rounded-full object-cover ml-2"
            />
            <a className=" text-2xl font-bold cursor-pointer">Library4u</a>
          </div>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className=" px-1 py-1 border rounded-md flex items-center gap-2 bg-white ">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 "
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-6 opacity-70 mr-1  dark:text-slate-900"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* {authUser ? (
                        <Logout />
                      ) : ( */}
          <div className="">
            <a
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              // onClick={() =>
              //   document.getElementById("my_modal_3").showModal()
              // }
            >
              Login
            </a>
            {/* <Login /> */}
          </div>
          {/* )
                      } */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
