import React from "react";

import logo from "../../../assets/homepage/Logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#2C2C2C]">
        <div className=" text-white px-5 md:px-12 lg:px-16 xl:px-24  py-8 md:py-14 overflow-x-hidden  2xl:container mx-auto">
          <div className="flex flex-col gap-5  md:flex-row md:justify-between lg:flex-row lg:justify-between ">
            <div className=" flex  flex-col   justify-between md:justify-start md:items-start  gap-2 ">
              <img
                src={logo}
                alt="Logo"
                className="mb-5 h-15 w-32  md:h-20 md:w-48"
              />
              <div className="md:flex flex-col gap-4  hidden">
                <label
                  htmlFor=""
                  className="font-poppins text-lg  font-bold text-left text-[#92C6C2]"
                >
                  Subscribe
                </label>
                <div className=" flex justify-between border rounded-full  items-center pl-3">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className=" w-full font-poppins text-base text-white bg-[#2C2C2C]  placeholder:bg-[#2C2C2C] focus:outline-none border-r border-white "
                  />
                  <button className="font-poppins text-base  text-white flex justify-center items-center  p-3 px-4 sm:px-8 gap-2 ">
                    send
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:justify-between  gap-3 md:gap-10 lg:gap-12 xl:gap-28 ">
              <div className="left flex-col flex items-start gap-5  sm:w-full">
                <h1 className="font-poppins  font-bold text-base md:text-lg md:leading-7 ">
                  Contact
                </h1>
                <div className="flex flex-col items-start">
                  <h5 className="text-base font-poppins leading-[24px] font-medium mb-1">
                    Address
                  </h5>
                  <p
                    className="text-left font-poppins text-sm md:text-base md:leading-[24px] cursor-pointer hover:text-[#92C6C2]"
                    onClick={() =>
                      window.open("https://maps.app.goo.gl/w5QVS7BqvKTVxeJx8")
                    }
                  >
                    Hunt Innovations, LLC <br />
                    P.O. BOX 315, La Grange,
                    <br /> KY 40031
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-base font-poppins leading-[24px] font-medium mb-1">
                    Phone
                  </h5>
                  <p
                    className="whitespace-nowrap text-left font-poppins text-sm md:text-base md:leading-[24px] cursor-pointer hover:text-[#92C6C2]"
                    onClick={() => (window.location.href = "tel:+15027249833")}
                  >
                    +1 (502) 724-9833
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <h5 className="text-base font-poppins leading-[24px] font-medium mb-1">
                    Email
                  </h5>
                  <p
                    className="text-left font-poppins text-sm md:text-base md:leading-[24px] cursor-pointer hover:text-[#92C6C2]"
                    onClick={() => {
                      window.open("mailto:support@softsidebyhunt.com");
                      // window.location.href =
                      //   "mailto:support@softsidebyhunt.com";
                    }}
                  >
                    support@softsidebyhunt.com
                  </p>
                </div>
              </div>
              <ul className=" flex flex-col gap-5">
                <li className="font-poppins font-bold text-base md:text-lg md:leading-7 ">
                  Navigation
                </li>
                <a href="/Product">
                  <li className="font-poppins text-sm md:text-base md:leading-[24px] font-medium  cursor-pointer hover:text-[#92C6C2]">
                    Buy now
                  </li>
                </a>
                <a href="/about">
                  <li className="font-poppins text-sm md:text-base md:leading-[24px] font-medium  cursor-pointer hover:text-[#92C6C2]">
                    About us
                  </li>
                </a>
                <a href="/contact">
                  <li className="font-poppins text-sm md:text-base md:leading-[24px] font-medium  cursor-pointer hover:text-[#92C6C2]">
                    Contact us
                  </li>
                </a>
                <li className="flex gap-2 lg:gap-3 items-center">
                  <a
                    href="https://www.instagram.com/softsidebyhunt/"
                    target="_blank"
                    rel=""
                  >
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                    >
                      <g clip-path="url(#clip0_46_41)">
                        <path
                          d="M9.50001 1.5C11.651 1.5 11.9193 1.5075 12.7633 1.545C13.6064 1.5825 14.1803 1.70775 14.6854 1.89375C15.2079 2.08425 15.6481 2.34225 16.0883 2.7585C16.4908 3.13342 16.8023 3.58694 17.0011 4.0875C17.1966 4.56525 17.3296 5.10975 17.3692 5.9085C17.4064 6.708 17.4167 6.96225 17.4167 9C17.4167 11.0378 17.4088 11.292 17.3692 12.0915C17.3296 12.8903 17.1966 13.434 17.0011 13.9125C16.8029 14.4133 16.4913 14.867 16.0883 15.2415C15.6924 15.6227 15.2137 15.9178 14.6854 16.1063C14.1811 16.2915 13.6064 16.4175 12.7633 16.455C11.9193 16.4903 11.651 16.5 9.50001 16.5C7.34905 16.5 7.08068 16.4925 6.23676 16.455C5.39363 16.4175 4.81968 16.2915 4.31459 16.1063C3.78602 15.9184 3.30722 15.6232 2.91176 15.2415C2.50912 14.8666 2.19762 14.4131 1.99897 13.9125C1.80264 13.4347 1.67043 12.8903 1.63084 12.0915C1.59364 11.292 1.58334 11.0378 1.58334 9C1.58334 6.96225 1.59126 6.708 1.63084 5.9085C1.67043 5.109 1.80264 4.566 1.99897 4.0875C2.19707 3.58663 2.50865 3.13299 2.91176 2.7585C3.30733 2.37692 3.7861 2.0818 4.31459 1.89375C4.81968 1.70775 5.39284 1.5825 6.23676 1.545C7.08068 1.50975 7.34905 1.5 9.50001 1.5ZM9.50001 5.25C8.45019 5.25 7.44338 5.64509 6.70105 6.34835C5.95871 7.05161 5.54168 8.00544 5.54168 9C5.54168 9.99456 5.95871 10.9484 6.70105 11.6517C7.44338 12.3549 8.45019 12.75 9.50001 12.75C10.5498 12.75 11.5566 12.3549 12.299 11.6517C13.0413 10.9484 13.4583 9.99456 13.4583 9C13.4583 8.00544 13.0413 7.05161 12.299 6.34835C11.5566 5.64509 10.5498 5.25 9.50001 5.25ZM14.6458 5.0625C14.6458 4.81386 14.5416 4.5754 14.356 4.39959C14.1704 4.22377 13.9187 4.125 13.6563 4.125C13.3938 4.125 13.1421 4.22377 12.9565 4.39959C12.7709 4.5754 12.6667 4.81386 12.6667 5.0625C12.6667 5.31114 12.7709 5.5496 12.9565 5.72541C13.1421 5.90123 13.3938 6 13.6563 6C13.9187 6 14.1704 5.90123 14.356 5.72541C14.5416 5.5496 14.6458 5.31114 14.6458 5.0625ZM9.50001 6.75C10.1299 6.75 10.734 6.98705 11.1794 7.40901C11.6248 7.83097 11.875 8.40326 11.875 9C11.875 9.59674 11.6248 10.169 11.1794 10.591C10.734 11.0129 10.1299 11.25 9.50001 11.25C8.87012 11.25 8.26603 11.0129 7.82063 10.591C7.37523 10.169 7.12501 9.59674 7.12501 9C7.12501 8.40326 7.37523 7.83097 7.82063 7.40901C8.26603 6.98705 8.87012 6.75 9.50001 6.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_46_41">
                          <rect width="19" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>{" "}
                  </a>
                  <a
                    href="https://www.facebook.com/people/SoftSide/100095187117238/"
                    target="_blank"
                  >
                    <svg
                      className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_46_44)">
                        <path
                          d="M11.0836 10.125H13.0627L13.8544 7.125H11.0836V5.625C11.0836 4.8525 11.0836 4.125 12.6669 4.125H13.8544V1.605C13.5963 1.57275 12.6218 1.5 11.5926 1.5C9.44323 1.5 7.9169 2.74275 7.9169 5.025V7.125H5.5419V10.125H7.9169V16.5H11.0836V10.125Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_46_44">
                          <rect width="19" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/derwin-hunt-b2180515b/ "
                    target="_blank"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700 cursor-pointer"
                    >
                      <g clip-path="url(#clip0_46_35)">
                        <path
                          d="M5.20502 3.74977C5.20482 4.1476 5.04659 4.52905 4.76515 4.81021C4.4837 5.09138 4.10209 5.24922 3.70427 5.24902C3.30644 5.24882 2.92499 5.0906 2.64383 4.80915C2.36266 4.52771 2.20482 4.1461 2.20502 3.74827C2.20522 3.35045 2.36344 2.969 2.64489 2.68783C2.92633 2.40667 3.30794 2.24882 3.70577 2.24902C4.10359 2.24922 4.48504 2.40745 4.76621 2.68889C5.04737 2.97034 5.20522 3.35195 5.20502 3.74977ZM5.25002 6.35977H2.25002V15.7498H5.25002V6.35977ZM9.99002 6.35977H7.00502V15.7498H9.96002V10.8223C9.96002 8.07727 13.5375 7.82227 13.5375 10.8223V15.7498H16.5V9.80227C16.5 5.17477 11.205 5.34727 9.96002 7.61977L9.99002 6.35977Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_46_35">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@derwinhunt" target="_blank">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.6239 5.18613C17.417 4.32559 16.8071 3.64797 16.0326 3.41797C14.6287 3 9 3 9 3C9 3 3.37124 3 1.96738 3.41797C1.19303 3.64797 0.583031 4.32559 0.376066 5.18613C0 6.74582 0 10.0001 0 10.0001C0 10.0001 0 13.2543 0.376066 14.8139C0.583031 15.6744 1.19303 16.3522 1.96738 16.5822C3.37124 17 9 17 9 17C9 17 14.6287 17 16.0326 16.5822C16.8071 16.3522 17.417 15.6744 17.6239 14.8139C18 13.2543 18 10.0001 18 10.0001C18 10.0001 18 6.74582 17.6239 5.18613ZM7.1999 13.0002V7.00004L11.8763 10.0001L7.1999 13.0002Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
              

              {/* <ul className="flex flex-col gap-5">
                <li className="font-poppins font-bold text-base md:text-lg md:leading-7">
                  Pages
                </li>
                <li className="whitespace-nowrap  font-poppins text-sm md:text-base md:leading-[24px] font-medium cursor-pointer hover:text-[#92C6C2]">
                  Privacy policy
                </li>
                <li className="whitespace-nowrap font-poppins text-sm md:text-base md:leading-[24px] font-medium cursor-pointer hover:text-[#92C6C2]">
                  Terms of use
                </li>
              </ul> */}
            </div>
            
          </div>
          <div className="flex flex-col gap-4  md:hidden mt-5 ">
                <label
                  htmlFor=""
                  className="font-poppins text-lg  font-bold text-left text-[#92C6C2]"
                >
                  Subscribe
                </label>
                <div className=" flex justify-between border rounded-full  items-center pl-3">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className=" w-full font-poppins text-base text-white bg-[#2C2C2C]  placeholder:bg-[#2C2C2C] focus:outline-none border-r border-white "
                  />
                  <button className="font-poppins text-base  text-white flex justify-center items-center  p-3 px-4 sm:px-8 gap-2 ">
                    send
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
        </div>
        <div className="bg-[#2C2C2C]  px-5 md:px-12 lg:px-16 xl:px-24   2xl:container mx-auto">
          <div className="flex flex-col md:flex-row justify-between font-poppins text-xs md:text-base md:leading-[24px]  opacity-50 border-t border-[#ffffff] py-4 gap-2">
            <p className="opacity-50 text-white flex justify-center">
              2024 All rights reserved ,{" "}
              <a
                href="https://www.techqilla.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="opacity-50 hover:opacity-100 text-white hover:text-white ml-1">
                  {`Powered by Techqilla`}
                </p>
              </a>{" "}
            </p>

            <div className="flex gap-2 justify-center ">
              <p className="opacity-50 hover:opacity-100 text-white hover:text-white">
                Privacy Policy
              </p>
              <p className="opacity-50 hover:opacity-100 text-white hover:text-white">
              Terms of use
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
