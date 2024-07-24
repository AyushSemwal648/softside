import React from "react";
import poster from "../../assets/homepage/Softside banner 2.png";
import icon1 from "../../assets/homepage/icon1.png";
import icon2 from "../../assets/homepage/icon2.png";
import icon3 from "../../assets/homepage/icon3.png";
function Trusted() {
  return (
    <section className="mx-auto w-full overflow-hidden">
      <div className="pt-28 pb-20  px-7 md:px-14 lg:px-20 xl:px-24">
        <div className="flex flex-col items-center justify-center gap-16">
          <p className="text-base  md:text-lg  font-normal font-poppins   text-center text-[#3E3E3E]">
            <span className="font-bold text-[#013A71]">
              Derwin Hunt invented and patented The SoftSide: creating safety,
              comfort, and beauty in a place there never was.
            </span>{" "}
            Derwin designed every detail; from the U-shaped foam cushion that
            will fit over the side of any standard bathtub to the special
            non-slip coating. He feels,{" "}
            <i>
              “Dreams are a series of unanswered questions. Find the solution to
              the questions, and anything becomes real!”
            </i>
          </p>
          <div className="flex  items-center justify-center w-full">
            <img src={poster} alt="" className="w-full object-cover" />
          </div>

          <div className="flex  justify-between w-full">
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
      </div>
    </section>
  );
}

export default Trusted;
