import React from "react";
import poster from "../../assets/homepage/Group 6.png";

function DerwinHunt() {
  return (
    <section className="mx-auto w-full bg-[#E8F9F8] overflow-hidden">
      <div className="py-28 grid grid-cols-1 sm:grid-cols-2 px-7 md:px-14 lg:px-20 xl:px-24 mx-auto 2xl:container">
        <div className="flex  items-center  sm:pr-8 mb-8 sm:mb-0">
          <img
            src={poster}
            alt=""
            className="h-[300px] sm:h-full "
            data-aos="fade-right"
            data-aos-duration="2000"
          />
        </div>
        <div className="flex flex-col justify-center items-start sm:items-start  xl:ml-4">
          <p
            className="text-center  text-[#313131] text-3xl  md:text-[40px] lg:text-5xl xl:text-6xl  font-bold font-body xl:leading-[80px] mb-6 md:text-left"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            About Derwin Hunt
          </p>
          <p
            className="text-base lg:text-lg font-poppins font-normal mb-6 text-left text-[#535353]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Derwin Hunt is a visionary entrepreneur and the CEO of Hunt
            Innovations LLC, dedicated to enhancing safety in everyday life. His
            career is marked by a commitment to innovate and address common
            hazards, driven by acute observations and a relentless pursuit of
            practical solutions. Derwin values diversity, drawing inspiration
            from the myriad paths and backgrounds of individuals around him.
          </p>
          <a
            href="https://theciotoday.com/magazines/brilliant-minds-top-10-influential-ceos-to-watch-2024-derwin-hunt/"
            target="_blank"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
          >
            <div className="flex items-start">
              <div className="flex">
                <a className=" text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg flex   justify-center items-center p-1 px-4 md:p-3 md:px-8 gap-2 md:gap-2.5 rounded-[50px]    md:text-lg tracking-widest hover:bg-[#92C6C2] hover:gap-4 hover:translate-x-3 duration-300 hover:text-white">
                  {/* flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold  rounded-md   */}
                  View Magazine
                  <svg
                    width="27"
                    height="15"
                    viewBox="0 0 27 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default DerwinHunt;
