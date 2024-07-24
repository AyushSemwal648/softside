import React from "react";
import Atropos from "atropos/react";
import Award1 from "../../assets/homepage/Group 14.png";
import Award2 from "../../assets/homepage/Group 15.png";
import Award3 from "../../assets/homepage/Group 16.png";
const Awardsdata = [
  {
    id: 1,
    title: "HALL OF FAME 2024",
    subheading: "PASSION VISTA HALL OF FAME",
    img: Award1,
  },
  {
    id: 2,
    title: "Excellence in Innovation in Healthcare & Hospitals",
    subheading: "PASSION VISTA HALL OF FAME",
    img: Award2,
  },
  {
    id: 3,
    title: "Celebrated Entrepreneur",
    subheading: "G1 The Magazine by Harley of London",
    img: Award3,
  },
];

function Awards() {
  return (
    <section className="mx-auto w-full bg-[#92C6C2]">
      <div className="flex flex-col px-14 md:px-12 lg:px-20 xl:px-24 py-24">
        <div className="flex justify-center">
          <h1
            className="text-[#313131] text-center font-body text-4xl md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Awards & Accolades
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8">
          {Awardsdata.map((award, index) => {
            return (
              <div
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                data-aos-delay={`${300 * (index + 1)}`}
              >
                <Atropos shadow={false}>
                  {/* ... */}
                  <div className="mx-auto card lg:h-[430px] xl:h-[450px] lg:w-[290px] xl:w-[360px]  justify-center ">
                    <div className="flex  mb-4 justify-center">
                      <img
                        src={award.img}
                        alt=""
                        className="lg:h-[300px] lg:w-[280px] xl:h-[300px] xl:w-[350px]"
                      />
                    </div>
                    <div>
                      <p className="text-center font-poppins text-xl lg:text-2xl lg:leading-[36px] font-semibold text-[#013A71]">
                        {award.title}
                      </p>
                      <p className="text-center text-base lg:text-lg font-poppins font-normal mt-4">
                        {award.subheading}
                      </p>
                    </div>
                  </div>
                </Atropos>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Awards;
