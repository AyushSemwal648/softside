import React, { useState } from "react";
import Product1 from "../../../assets/homepage/Product.png";
import Prop1 from "../../../assets/homepage/prop1.png";
import Prop2 from "../../../assets/homepage/prop2.png";
import Prop3 from "../../../assets/homepage/prop3.png";
import Prop4 from "../../../assets/homepage/prop4.png";
import Prop5 from "../../../assets/homepage/prop5.png";
import Prop6 from "../../../assets/homepage/prop6.png";
import Connected from "../../../Component/HomePage/Connected";

function Productpage() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const images = [Prop1, Prop2, Prop3, Prop4, Prop5, Prop6];

  return (
    <>
      <section className="w-full mx-auto overflow-hidden  ">
        <div className="mx-7 md:mx-14 lg:mx-20  xl:mx-24 grid grid-cols-1 md:grid-cols-2 my-10 md:my-24">
          <div className="flex flex-col h-full items-center">
            <img
              src={Product1}
              alt=""
              className="w-[90%] md:w-full h-[400px] sm:h-[500px]  lg:h-[600px] object-cover object-right-bottom"
            />
            <div className="flex justify-between mt-5 w-[90%] md:w-full ">
              {images.map((imageUrl, index) => (
                <img
                  key={index} // Use index as the key (not recommended for production)
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="h-14 sm:h-16 md:h-14 lg:h-20  object-cover"
                />
              ))}
            </div>
          </div>
          <div className=" m-8 md:m-0 flex flex-col ">
            <div className="card  md:ml-10   ">
              <p className="text-[#313131] font-body text-3xl  md:text-5xl xl:text-6xl font-semibold  xl:leading-[80px] mb-5 md:mb-5 ">
                Softside Bathtub
                <br />
                Cushion
              </p>
              <div className="flex  flex-col mb-8">
                <p className=" text-xl md:text-2xl lg:text-3xl font-semibold font-poppins mb-5 text-[#313131]">
                  $149.99
                </p>
                <p className=" text-lg md:text-2xl  font-body font-semibold text-[#313131]">
                  Colour- Off White
                </p>
              </div>
              <div className="flex items-center mb-10">
                <div className="flex items-center justify-center  rounded-full border border-black p-3">
                  <button
                    className=" font-bold py-2 px-4 flex items-center justify-center"
                    onClick={decrement}
                  >
                    <svg
                      width="14"
                      height="1"
                      viewBox="0 0 14 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line y1="0.5" x2="14" y2="0.5" stroke="black" />
                    </svg>
                  </button>
                  <span className="text-2xl font-poppins border-x border-opacity-30 border-black px-6 py-2 ">
                    {count}
                  </span>
                  <button
                    className="flex items-center justify-center font-bold py-2 px-4 "
                    onClick={increment}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="4.37114e-08"
                        y1="6.5"
                        x2="13"
                        y2="6.5"
                        stroke="black"
                      />
                      <line
                        x1="6.5"
                        y1="2.18557e-08"
                        x2="6.5"
                        y2="13"
                        stroke="black"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex mb-8 items-center gap-6 ">
                <a
                  href="/buynow"
                  className=" flex items-center justify-center cursor-pointer  p-3 px-8 gap-2.5 rounded-[50px]  text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg"
                >
                  <div className="relative inline-flex items-center justify-start  pl-4 pr-12 overflow-hidden font-semibold shadow text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#2C2C2C] group">
                    <span className="absolute right-0 pr-4 duration-300 ease-out group-hover:translate-x-12">
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
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-300">
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
                    </span>
                    <span className="relative w-full text-center transition-colors duration-300 ease-in-out group-hover:text-white ">
                      Add To Cart
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-12 md:mx-24 mb-20 flex flex-col ">
          <div className="flex flex-col">
            <div className="flex justify-between border-b border-[black] pb-2 mb-8">
              <h1 className="font-body text-2xl font-semibold text-[#313131]">Description</h1>
            </div>
            <p className="font-poppins text-base md:text-lg text-[#535353] mb-6 ">
              Hunt Innovations LLC wants bathing to become the most carefree
              experience it can be; one where safety and coziness are
              brilliantly entwined. The SoftSide is a new, innovative bathtub
              cushion — designed to protect you in any tub, any shower; with
              comfort, support, and refreshing peace of mind. <br /> <br /> With
              a secure, on-the-tub surface, The SoftSide won't slip or slide.
              Delivering powerful results, this cushion absorbs splashes and
              drips as well as the impact of any falls; keeping you safe while
              giving your bathtub a classic new look. <br />
              Created with durable, high-quality materials, Derwin Hunt made
              this cushion waterproof; resisting anything from mildew to
              bacteria. Not only is it versatile, The SoftSide is easy to clean;
              so it'll stay as lush ad cozy as the day you take it home. <br />{" "}
              <br /> This revolutionary cushion is the first and only one of its
              kind — and it's made to enhance any bathtub. Revel in your best
              bath yet with The SoftSide!
            </p>
            <h3 className="font-body text-xl md:text-2xl font-semibold mb-6 text-[#313131] ">
              {" "}
              Here’s Why Every Bathroom Needs The SoftSide:
            </h3>
            <ul className="font-poppins text-base md:text-lg text-[#535353] list-disc ml-5">
              <li>
                Bring your bath decor together in ways you’ve never been able to
                do before!
              </li>
              <li>
                Indulge in a fabulous pedicure or shave your legs with ease —
                all in the luxurious privacy of your bathroom
              </li>
              <li>
                Start sitting on the edge of your tub with The SoftSide resting
                beneath you; basking in a fresh bath without worrying about
                slipping.
              </li>
              <li>
                Take away the challenge in helping a loved one or patient out of
                the tub; because when you leverage a thoughtfully designed
                resource, an asset like The SoftSide can be a game-changer.
              </li>
              <li>
                Inspire your guests to feel right at home; leaning into
                spectacular comfort, beauty, and safety.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Connected />
    </>
  );
}

export default Productpage;
