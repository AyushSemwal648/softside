import React, { useRef, useState } from "react";
import bg from "../../assets/homepage/bg.png";
import bg2 from "../../assets/homepage/banner2.png";
import bg3 from "../../assets/homepage/banner3.png";
import "hover.css/css/hover-min.css";
import icon1 from "../../assets/homepage/icon1.png";
import icon2 from "../../assets/homepage/icon2.png";
import icon3 from "../../assets/homepage/icon3.png";
import "./styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

{/* <SwiperSlide>Slide 2</SwiperSlide>; */}

function Herosection() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* <section
        className="h-[500px]  md:min-h-screen mx-auto w-full overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }} 
        > */}
        <SwiperSlide
          className="h-[500px]  md:min-h-screen mx-auto w-full overflow-hidden "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-8 md:px-24 flex items-center 2xl:container mx-auto">
            <div className="flex flex-col mt-20 md:mt-40">
              <p
                className=" font-body text-4xl md:text-6xl font-bold text-white md:leading-[80px] mb-2 md:mb-5"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Meet Your <br /> Bathroom's <br />
                <span
                  className=" px-2 md:px-4 py-0 md:py-1 bg-[#92C6C2]  md:ml-[-15px] leading-[55px] md:leading-[100px]"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Missing Piece
                </span>
              </p>
              <p
                className="text-white font-poppins font-normal text-lg md:text-2xl mb-2  md:mb-8 "
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Versatile. Cozy. Revolutionary.
              </p>
              <div
                className="flex"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <a
                  href="/product"
                  className="flex   justify-center items-center p-1 px-4 md:p-3 md:px-8 gap-2 md:gap-2.5 rounded-[50px]  text-black bg-white font-poppins font-normal text-base md:text-lg tracking-widest hover:bg-[#92C6C2] hover:gap-4 hover:translate-x-3 duration-300 hover:text-white"
                >
                  {/* flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold  rounded-md   */}
                  View Product Range
                  <svg
                    width="27"
                    height="15"
                    viewBox="0 0 27 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="h-[500px]  md:min-h-screen mx-auto w-full overflow-hidden "
          style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-8 md:px-24 flex items-center 2xl:container mx-auto">
            <div className="flex flex-col mt-20 md:mt-40">
              <p
                className=" font-body text-4xl md:text-6xl font-bold text-white md:leading-[80px] mb-2 md:mb-5"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Meet Your <br /> Bathroom's <br />
                <span
                  className=" px-2 md:px-4 py-0 md:py-1 bg-[#92C6C2]  md:ml-[-15px] leading-[55px] md:leading-[100px]"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Missing Piece
                </span>
              </p>
              <p
                className="text-white font-poppins font-normal text-lg md:text-2xl mb-2  md:mb-8 "
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Versatile. Cozy. Revolutionary.
              </p>
              <div
                className="flex"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <a
                  href="/product"
                  className="flex   justify-center items-center p-1 px-4 md:p-3 md:px-8 gap-2 md:gap-2.5 rounded-[50px]  text-black bg-white font-poppins font-normal text-base md:text-lg tracking-widest hover:bg-[#92C6C2] hover:gap-4 hover:translate-x-3 duration-300 hover:text-white"
                >
                  {/* flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold  rounded-md   */}
                  View Product Range
                  <svg
                    width="27"
                    height="15"
                    viewBox="0 0 27 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="h-[500px]  md:min-h-screen mx-auto w-full overflow-hidden"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-8 md:px-24 flex items-center 2xl:container mx-auto">
            <div className="flex flex-col mt-20 md:mt-40">
              <p
                className=" font-body text-4xl md:text-6xl font-bold text-white md:leading-[80px] mb-2 md:mb-5"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Meet Your <br /> Bathroom's <br />
                <span
                  className=" px-2 md:px-4 py-0 md:py-1 bg-[#92C6C2]  md:ml-[-15px] leading-[55px] md:leading-[100px]"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  Missing Piece
                </span>
              </p>
              <p
                className="text-white font-poppins font-normal text-lg md:text-2xl mb-2  md:mb-8 "
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Versatile. Cozy. Revolutionary.
              </p>
              <div
                className="flex"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="300"
              >
                <a
                  href="/product"
                  className="flex   justify-center items-center p-1 px-4 md:p-3 md:px-8 gap-2 md:gap-2.5 rounded-[50px]  text-black bg-white font-poppins font-normal text-base md:text-lg tracking-widest hover:bg-[#92C6C2] hover:gap-4 hover:translate-x-3 duration-300 hover:text-white"
                >
                  {/* flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold  rounded-md   */}
                  View Product Range
                  <svg
                    width="27"
                    height="15"
                    viewBox="0 0 27 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* </section> */}
      </Swiper>
      <div className="flex  px-4 sm:px-8 md:px-24  py-6 gap-4 md:gap-0  overflow-hidden mx-auto 2xl:container">
        <div className="flex  justify-between w-full  md:h-[120px] lg:h-[150px] items-center">
          <div className="flex   sm:gap-2">
            <img src={icon3} alt="" className="h-8 sm:h-10 md:h-14" />
            <div
              className="flex flex-col"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h3 className="text-[#313131] font-poppins font-semibold  sm:text-2xl lg:text-3xl">
                450+
              </h3>
              <h5 className="text-[#535353] font-poppins text-sm md:text-xl lg:text-2xl ">
                Products Sold
              </h5>
            </div>
          </div>
          <div className="flex   sm:gap-2">
            <img src={icon2} alt="" className="h-8 sm:h-10 md:h-14" />
            <div
              className="flex flex-col"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h3 className="text-[#313131] font-poppins font-semibold sm:text-2xl lg:text-3xl">
                362
              </h3>
              <h5 className="text-[#535353] font-poppins text-sm  md:text-xl lg:text-2xl ">
                Happy Clients
              </h5>
            </div>
          </div>
          <div className="flex   sm:gap-2">
            <img src={icon1} alt="" className="h-8 sm:h-10 md:h-14" />
            <div
              className="flex flex-col"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h3 className="font-poppins font-semibold sm:text-2xl lg:text-3xl">
                10+
              </h3>
              <h5 className="font-poppins text-sm  md:text-xl lg:text-2xl ">
                Awards
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
