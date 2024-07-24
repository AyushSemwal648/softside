import React from "react";
import img1 from "../../assets/homepage/image 10.png";
import img2 from "../../assets/homepage/Group 7.png";
function Miscelleanous() {
  return (
    <section className="bg-[#2B5F71]">
    <div className="px-8 sm:px-12 lg:px-20 xl:px-24 py-10  2xl:container  mx-auto">
      <div className="flex gap-2 flex-col sm:flex-row   sm:gap-9 lg:gap-12 xl:gap-16 2xl:justify-between ">
        <div className="flex flex-col items-start">
          <h5 className="font-poppins md:leading-[24px] text-base sm:text-xs  md:text-base  text-left   text-white ">
            VENDOR CODE - KS00
          </h5>
          <h5 className="font-poppins  md:leading-[24px] text-base sm:text-xs  md:text-base text-left   text-white ">
            UEI: UPN4F1QK53J3
          </h5>
          <h5 className="font-poppins md:leading-[24px] text-base sm:text-xs  md:text-base text-left   text-white ">
            CAGE: 9GQF9
          </h5>
          <h5 className="font-poppins md:leading-[24px] text-base sm:text-xs md:text-base text-left   text-white ">
            MPIN: HuntInno1
          </h5>
        </div>

        <div className=" flex flex-col lg:flex-row gap-4">
          <a href="https://www.nsba.biz/" target="_blank">
            <img
              src={img1}
              alt=""
              className="h-12 sm:h-10 md:h-16 lg:h-20 xl:h-24"
            />
          </a>
          <a href="https://sam.gov/content/home" target="_blank">
            <img
              src={img2}
              alt=""
              className="h-12 sm:h-10 md:h-16 lg:h-20 xl:h-24"
            />
          </a>
        </div>

        <div className=" second flex flex-col items-start">
          <h1 className="font-poppins text-lg sm:text-sm  md:text-xl  mb-2 text-white font-bold">
            Socio-economic:
          </h1>
          <p className="font-poppins  text-base sm:text-xs  md:text-base text-left   text-white">
            Minority-Owned Business <br />
            North American Industry <br />
            Classification System (NAICS)
          </p>
        </div>

        <div className="third ">
          <h1 className="font-poppins text-lg sm:text-sm  md:text-xl  mb-2 text-white font-bold">
            Affiliations:
          </h1>
          <a
            href="https://theciotoday.com/magazines/brilliant-minds-top-10-influential-ceos-to-watch-2024-derwin-hunt/"
            target="_blank"
            className="font-poppins md:leading-[24px] text-base  sm:text-xs  md:text-base text-[#D7E0DF] flex gap-1 items-center cursor-pointer hover:translate-x-2 duration-300"
          >
            The CIO Today
            <div>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z"
                  fill="#92C6C2"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://www.ussbchamber.org/"
            target="_blank"
            className="font-poppins md:leading-[24px] text-base  sm:text-xs  md:text-base text-[#D7E0DF] flex  items-center cursor-pointer hover:translate-x-2 duration-300 whitespace-nowrap "
          >
            U.S Small Business Chamber
            <div>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto"
              >
                <path
                  d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5H13V3.5H0V4.5Z"
                  fill="#92C6C2"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Miscelleanous;
