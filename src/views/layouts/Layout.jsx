import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import Logo from "./logo";
import Scroll from "../../Component/Scroll/Scroll";

const Layout = () => {
  AOS.init();
  return (
    <>
      <Navbar />
      <Scroll/>
      <ScrollToTop smooth component={<Logo />} className=" !bg-transparent" />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
