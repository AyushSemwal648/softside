import React from "react";
import Atropos from "atropos/react";
import blog1 from "../../assets/homepage/Rectangle 30.png";
import blog2 from "../../assets/homepage/Rectangle 32.png";
import blog3 from "../../assets/homepage/Rectangle 34.png";

const Blogdata = [
  {
    id: 1,
    title: "Bathtub Safety Cushion",
    subheading:
      " Bathrooms in both homes and hotels can be hazardous due to their slippery surfaces. The combination of limited mobility and cramped spaces increases the risk of accidents, making bathroom safety........",
    img: blog1,
  },
  {
    id: 2,
    title: "SoftSide Cushion Installation Made Easy",
    subheading:
      "Installing the SoftSide cushion is a breeze with these simple steps : 1 Unpack and Prepare: Remove the the packaging from the SoftSide cushion......",
    img: blog2,
  },
  {
    id: 3,
    title: "Key Features and Benefits of the SoftSide by Hunt",
    subheading:
      " Innovative Design for Enhanced SafetyThe SoftSide by Hunt features a unique C-clamp design, resembling the number 7, which securely grips the bathtub to.......",
    img: blog3,
  },
];
function Blog() {
  return (
    <section className=" w-full overflow-hidden">
      <div className="flex flex-col px-14 md:px-12 lg:px-20 xl:px-24 py-24 2xl:container mx-auto">
        <div className="flex  justify-center text-[#313131]">
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="title font-body text-4xl md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold mb-6 text-center"
          >
            Latest from the Library
          </h1>
          {/* <p className='text-base md:text-base lg:text-lg font-poppins lg:leading-[27px] text-center'>Lorem ipsum dolor sit amet consectetur. Sed a <br /> maecenas venenatis maecenas. </p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8">
          {Blogdata.map((blog, index) => {
            return (
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay={`${300 * (index + 1)}`}
              >
                {/* <Atropos shadow={false}> */}
                  <div className="mx-auto card flex flex-col justify-between border border-opacity-50 rounded-[20px] md:h-[520px] lg:h-[560px] 2xl:h-[650px] hover:shadow-2xl transition-shadow duration-300 ">
                    <div className="flex  mb-4">
                      <img
                        src={blog.img}
                        alt=""
                        className="object-cover w-full"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <p className="font-body  text-xl lg:text-2xl  font-semibold text-[#313131]">
                          {blog.title}
                        </p>
                        <p className="text-sm lg:text-base font-poppins font-normal mt-4 text-[#535353] ">
                          {blog.subheading}
                        </p>
                      </div>
                      <button className="flex justify-center items-center  p-2 px-8 gap-2.5 rounded-[50px] h-16 text-black font-poppins font-bold text-base bg-[#92C6C2] mt-8 border  duration-300 relative group cursor-pointer overflow-hidden  hover:bg-[#92C6C2] ">
                        <div
                          className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-[#1a4e4a]"
                        ></div>
                        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-[#298b83]"></div>
                        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-[#75d4cc]"></div>
                        <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-[#d4ecea]"></div>
                        <p className="z-10 absolute text-[#313131]">
                          Read more
                        </p>
                      </button>
                      {/* <button className=" flex justify-center items-center  p-2 px-8 gap-2.5 rounded-[50px]  text-blackfont-poppins font-normal text-base bg-[#92C6C2] mt-8">
                                        Read more

                                    </button> */}
                    </div>
                  </div>
                {/* </Atropos> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
