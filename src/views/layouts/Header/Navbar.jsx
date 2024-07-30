import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../../assets/homepage/Logo.png";
import { useNavigate } from "react-router-dom";
import "./navabar.css";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const clicked = () => {
    setToggle(!toggle);
  };

  const handleLinkClickk = (e, linkName) => {
    e.preventDefault();
    setActiveLink(linkName);
    navigate(linkPaths[linkName]);
    setToggle(false);
  };

  const linkPaths = {
    Home: "/",
    "About us": "/About#section1",
    Product: "/Product",
    "Contact us": "/contact",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    // const handleScroll = () => {
    //   if (window.scrollY > window.innerHeight) {
    //     setIsSticky(true);
    //   } else {
    //     setIsSticky(false);
    //   }
    // };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <>
      <section >
        <nav
          className={`bg-[#2C2C2C] navbar-transition p-2 flex justify-between items-center px-5 md:px-12 lg:px-20 xl:px-24 transition-all duration-500 ease-in-out ${
            isSticky
              ? "fixed top-0 left-0 w-full h-[60px] md:h-[80px] z-30"
              : "relative h-auto"
          }`}
        >
          {/* <nav
          className={`bg-[#2C2C2C] p-2 flex justify-between items-center px-5 md:px-12 lg:px-20 xl:px-24 transition-all duration-500 ease-in-out ${
            isSticky ? "transition-all duration-500 ease-in-out fixed top-0 left-0 w-full h-[60px] md:h-[80px] z-30" : "relative"
          }`}
        > */}
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                // className="h-[60px] sm:h-[70px] lg:h-[90px]"
                className={`h-[50px] sm:h-[70px] lg:h-[90px] ${
                  isSticky ? "!h-[50px] sm:!h-[60px] " : ""
                }`}
              />
            </a>
          </div>

          <div
            className={`bg-[#2C2C2C] fixed min-h-[60vh] ${
              toggle
                ? "z-20 top-0 h-screen w-full"
                : "md:static min-h-fit top-[-100%]"
            } left-0 flex md:items-center justify-between md:justify-center`}
          >
            {/* Navbar menu in the center */}
            <ul className="font-poppins flex pl-8 md:pl-0 pt-14 md:pt-0 text-2xl md:text-sm flex-col md:flex-row gap-8 md:gap-5 lg:gap-8 text-white font-roboto md:items-center">
              {["Home", "About us", "Product", "Contact us"].map((link) => (
                <a
                  key={link}
                  href={linkPaths[link]}
                  onClick={(e) => handleLinkClickk(e, link)}
                  className={`transition-all duration-300 ease-in-out hover:bg-[#92C6C2] hover:rounded-[40px] hover:px-8 hover:py-3 hover:text-white ${
                    activeLink === link ? "text-[#92C6C2]" : "text-white"
                  }`}
                >
                  <li>{link}</li>
                </a>
              ))}
            </ul>
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clicked();
                }}
                className="m-5 text-4xl cursor-pointer md:hidden"
              >
                <rect
                  x="1.41406"
                  width="29"
                  height="2"
                  rx="1"
                  transform="rotate(45 1.41406 0)"
                  fill="#D9D9D9"
                />
                <rect
                  width="29"
                  height="2"
                  rx="1"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.5063 0)"
                  fill="#D9D9D9"
                />
              </svg>
          
          </div>

          {/* Call button on the right */}
          <div className="flex justify-center items-center gap-4">
            <a href="/product">
              <button className="font-poppins text-sm text-white transition-all duration-300 ease-in-out bg-[#92C6C2] rounded-[40px] px-4 py-3 md:px-8 md:py-3 hover:scale-110">
                Buy now
              </button>
            </a>

            <a href="/buynow">
              <svg
                className="hover:scale-125 transition-all duration-300 ease-in-out"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.98801 6C9.98801 4.72599 10.9684 3.75 12.1092 3.75C13.25 3.75 14.2303 4.72599 14.2303 6V6.25H9.98801V6ZM8.48801 7.75V9C8.48801 9.41421 8.8238 9.75 9.23801 9.75C9.65223 9.75 9.98801 9.41421 9.98801 9V7.75H14.2303V9C14.2303 9.41421 14.5661 9.75 14.9803 9.75C15.3946 9.75 15.7303 9.41421 15.7303 9V7.75H17.1547L18.0013 19.25H6.21704L7.06366 7.75H8.48801ZM8.48801 6.25V6C8.48801 3.9603 10.0786 2.25 12.1092 2.25C14.1398 2.25 15.7303 3.9603 15.7303 6V6.25H17.8515C18.2444 6.25 18.5706 6.55314 18.5995 6.94493L19.5565 19.9449C19.5719 20.1529 19.4999 20.3578 19.358 20.5105C19.2161 20.6632 19.017 20.75 18.8086 20.75H5.40979C5.20131 20.75 5.00224 20.6632 4.86034 20.5105C4.71844 20.3578 4.64651 20.1529 4.66182 19.9449L5.61887 6.94493C5.64772 6.55314 5.974 6.25 6.36685 6.25H8.48801Z"
                  fill="white"
                />
              </svg>
            </a>

            {!toggle ? (
              <svg
                width="29"
                height="18"
                viewBox="0 0 29 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clicked();
                }}
                className="text-4xl cursor-pointer md:hidden"
              >
                <rect width="29" height="2" rx="1" fill="#D9D9D9" />
                <rect x="8" y="8" width="21" height="2" rx="1" fill="#D9D9D9" />
                <rect y="16" width="29" height="2" rx="1" fill="#D9D9D9" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  clicked();
                }}
                className="text-4xl cursor-pointer md:hidden"
              >
                <rect
                  x="1.41406"
                  width="29"
                  height="2"
                  rx="1"
                  transform="rotate(45 1.41406 0)"
                  fill="#D9D9D9"
                />
                <rect
                  width="29"
                  height="2"
                  rx="1"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.5063 0)"
                  fill="#D9D9D9"
                />
              </svg>
            )}
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
