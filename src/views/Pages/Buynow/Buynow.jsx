import React from "react";
import Connected from "../../../Component/HomePage/Connected";
import QuantityDropdown from "./Dropdown";
import cart from "../../../assets/homepage/Cart.png";


function Buynow() {

  
  

  return (
    <>
      <section className="w-full  overflow-hidden mx-auto 2xl:container">
        <div
          className="mx-7 md:mx-14 lg:mx-20  xl:mx-24  my-10 md:my-24 gap-4
         grid grid-cols-1 md:grid-cols-3 "
        >
          <div className="bg-[#FAFAFA] w-full  col-span-2  rounded-[20px]">
            <div className="flex items-end   border-b border-opacity-30 px-8 py-6 justify-between">
              <div className="flex items-end gap-2">
                <h1 className=" text-2xl lg:text-3xl font-body font-semibold">
                  Shopping Cart
                </h1>
                <h5 className="font-poppins text-base lg:text-lg opacity-50">
                  (1 item){" "}
                </h5>
              </div>

              <h1 className="font-poppins text-base lg:text-lg">Price</h1>
            </div>
            <div className="flex px-8 py-6">
              <div className=" flex w-[25%] h-[150px] md:h-[200px] lg:h-[230px]">
                <img
                  src={cart}
                  alt=""
                  className="h-full object-cover object-right-bottom"
                />
              </div>
              <div className="flex flex-col gap-3 w-[75%] pl-5">
                <div className="flex justify-between">
                  <h1 className="font-body text-xl lg:text-2xl font-semibold">
                    Softside Bathtub Cushion
                  </h1>
                  <h1 className=" font-poppins text-xl lg:text-2xl font-semibold">
                    $149.99
                  </h1>
                </div>
                <p className="font-poppins text-base lg::text-lg w-[70%]">
                  Hunt Innovations LLC wants bathing to become the most carefree
                  experience.
                </p>
                <div>
                  <p className="text-[#0BB161] text-sm  lg:text-base font-poppins">
                    In stock
                  </p>
                  <p className="font-body text-sm  lg:text-base font-semibold">
                    Colour- Off White
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <div className=" flex gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.1875 8.58749H10.3125V17.5875H9.1875V8.58749Z"
                        fill="black"
                      />
                      <path
                        d="M11.4375 8.58749H12.5625V17.5875H11.4375V8.58749Z"
                        fill="black"
                      />
                      <path
                        d="M13.6875 8.58749H14.8125V17.5875H13.6875V8.58749Z"
                        fill="black"
                      />
                      <path
                        d="M4.6875 5.21249H19.3125V6.33749H4.6875V5.21249Z"
                        fill="black"
                      />
                      <path
                        d="M14.7751 5.775H13.7251V4.65C13.7251 4.3125 13.4626 4.05 13.1251 4.05H10.8751C10.5376 4.05 10.2751 4.3125 10.2751 4.65V5.775H9.2251V4.65C9.2251 3.75 9.9751 3 10.8751 3H13.1251C14.0251 3 14.7751 3.75 14.7751 4.65V5.775Z"
                        fill="black"
                      />
                      <path
                        d="M15.375 20.9625H8.625C7.725 20.9625 6.9375 20.2125 6.8625 19.3125L5.8125 5.81249L6.9375 5.73749L7.9875 19.2375C8.025 19.575 8.325 19.8375 8.625 19.8375H15.375C15.7125 19.8375 16.0125 19.5375 16.0125 19.2375L17.0625 5.73749L18.1875 5.81249L17.1375 19.3125C17.0625 20.25 16.275 20.9625 15.375 20.9625Z"
                        fill="black"
                      />
                    </svg>
                    {/* <h5 className="font-poppins text-sm lg:text-base opacity-50">
                      Delete
                    </h5> */}
                  </div>
                  <QuantityDropdown />
                </div>
              </div>
            </div>
            <div className="flex justify-end  border-t border-opacity-30 px-8 py-6 ">
              <div className="flex  ">
                <h1 className="text-lg lg:text-xl font-poppins font-semibold">
                  Subtotal (1 item) :
                </h1>
                <h1 className="text-lg lg:text-xl font-poppins font-semibold">
                  $149.99
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#FAFAFA] w-full  rounded-[20px]">
            <div className="flex flex-col gap-5 py-7 px-6 ">
              <h1 className="font-body text-xl lg:text-2xl font-semibold">
                Order Summary
              </h1>
              <div>
                <h1 className="font-poppins text-xl lg:text-2xl font-semibold">
                  Subtotal (1 item) : $149.99
                </h1>
                <h5 className="font-poppins text-sm lg:text-lg">
                  Inclusive all taxes
                </h5>
              </div>

              <button className="flex gap-2 rounded-[50px] bg-[#92C6C2] text-white items-center font-poppins text-base lg:text-lg justify-center py-2 lg:py-4 px-auto w-full">
                Checkout now
                <svg
                  width="28"
                  height="15"
                  viewBox="0 0 28 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.2071 8.20711C27.5976 7.81658 27.5976 7.18342 27.2071 6.79289L20.8431 0.428932C20.4526 0.0384078 19.8195 0.0384078 19.4289 0.428932C19.0384 0.819457 19.0384 1.45262 19.4289 1.84315L25.0858 7.5L19.4289 13.1569C19.0384 13.5474 19.0384 14.1805 19.4289 14.5711C19.8195 14.9616 20.4526 14.9616 20.8431 14.5711L27.2071 8.20711ZM0.5 8.5H26.5V6.5H0.5V8.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Connected />
    </>
  );
}

export default Buynow;
