import React from "react";
import poster from "../../assets/homepage/projects.png";

function Personal() {
  return (
    <section className=" w-full bg-[#E8F9F8] overflow-hidden">
      <div className="py-28 px-7 md:px-14 lg:px-20 xl:px-24  mx-auto 2xl:container">
      <div className=" grid grid-cols-1 sm:grid-cols-2 ">
        <div className="flex  items-center  sm:pr-8 mb-8 sm:mb-0">
          <img
            src={poster}
            alt=""
            className="h-[300px] sm:h-full "
            data-aos="fade-right"
            data-aos-duration="2000"
          />
        </div>
        <div className="flex flex-col justify-center items-start   xl:ml-4">
          <h1
            className="text-[#313131] text-3xl  md:text-[40px] lg:text-5xl xl:text-6xl  font-bold font-body xl:leading-[80px] mb-6 md:text-left text-center "
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            CORE COMPETENCIES
          </h1>
          <div>
            <h3 className="text-[#313131] text-lg lg:text-xl font-poppins font-semibold mb-4">The SoftSide Cushion: Bathtub Safety & Aesthetic Enhancement</h3>
            <ul>
              <li className="mb-2">
                <h3 className="font-poppins  font-semibold text-base lg:text-lg text-[#313131] ">
                  Superior Tub Surface Security:
                </h3>
                <p className="font-poppins text-base lg:text-lg text-[#535353]">
                  The SoftSide's secure on-the-tub surface sets a new standard
                  for stability, ensuring a firm grip that eliminates the risk
                  of slips and slides
                </p>
              </li>
              <li className="mb-2">
                <h3 className="font-poppins  font-semibold text-base lg:text-lg text-[#313131]">
                  Advanced Splash & Drip Absorption:
                </h3>
                <p className="font-poppins text-base lg:text-lg text-[#535353]">
                  Engineered for excellence, the SoftSide cushion excels in
                  absorbing splashes and drips, preventing water from spreading
                  and creating an unsafe environment
                </p>
              </li>
              <li className="mb-2">
                <h3 className="font-poppins  font-semibold text-base lg:text-lg text-[#313131]">
                  Unmatched Impact Absorption:
                </h3>
                <p className="font-poppins text-base lg:text-lg text-[#535353]">
                  It effectively mitigates the impact of falls, offering
                  unparalleled protection for safety
                </p>
              </li>
              <li className="mb-2">
                <h3 className="font-poppins  font-semibold text-base lg:text-lg text-[#313131]">
                  Timeless Aesthetic Enhancement:
                </h3>
                <p className="font-poppins text-base lg:text-lg text-[#535353]">
                  {" "}
                  Combing safety and style, the SoftSide cushion transforms the
                  bathtub with a classic new look
                </p>
              </li>
            </ul>
          </div>

          {/* <p
            className="text-[#535353] text-base lg:text-lg font-poppins font-normal mb-6 text-left"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            The bathroom, especially the bathtub, serves as a sanctuary for
            meaningful personal moments. Parents wrap their children in warm
            towels, caretakers assist the elderly in soothing baths, and
            individuals find solace and self-care. Recognizing these profound
            experiences, Derwin Hunt envisioned creating a legacy that would
            make his daughters proud by offering safer, happier, and more
            beautiful bathing experiences. He redefined expectations by
            combining comfort, assurance, and protection with aesthetic
            enhancement, proving that practical devices can also contribute to
            the beauty of our bathrooms.
          </p> */}
        </div>
      </div>
      </div>
      
    </section>
  );
}

export default Personal;
