import React from "react";
import bg from "../../assets/homepage/image 1.png";

function AboutHerosection() {
  return (
    <section
      className="h-[300px]  md:h-[500px] mx-auto w-full "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-8 md:px-24 flex justify-center items-center ">
        <div className="flex flex-col mt-20 md:mt-40">
          <div className="flex gap-3 items-center justify-center" >
            <h5
              className="font-poppins text-lg font-medium text-white"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              Home
            </h5>
            <svg
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="400"
            >
              <path
                d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 9H26V7H0V9Z"
                fill="white"
              />
            </svg>

            <h5
              className="font-poppins text-lg font-medium text-white"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              About us
            </h5>
          </div>
          <p
            className=" font-body text-4xl md:text-7xl font-bold text-white md:leading-[80px] mb-2 md:mb-5"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="900"
          >
            About Us
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHerosection;
