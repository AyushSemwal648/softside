import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../views/layouts/Layout.jsx";
import Home from "../views/Pages/Home/Home.jsx";
import About from "../views/Pages/About/About.jsx";
import Productpage from "../views/Pages/Product/Productpage.jsx";
import Buynow from "../views/Pages/Buynow/Buynow.jsx";
import Contact from "../views/Pages/Contactus/Contact.jsx";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Product",
          element: <Productpage />,
        },
        {
          path: "BuyNow",
          element: <Buynow/>,
        },
        {
          path: "Contact",
          element: <Contact/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
