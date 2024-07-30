import React, { useState, useRef } from "react";
import banner from "../../assets/homepage/Rectangle 35.png";
import img from "../../assets/homepage/3174695.jpg";
import emailjs from "@emailjs/browser";

function Connected() {
  const form = useRef();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_53tlvzq", "template_g795was", form.current, {
        publicKey: "eszDS9SdVLWf5Zeos",
      })
      .then(
        () => {
          setIsEmailSent(true);
          setInputs({
            name: "",
            email: "",
            message: "",
          });
          setIsModalOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    const { name } = e.target;
    setFocus((prev) => ({ ...prev, [name]: true }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setFocus((prev) => ({ ...prev, [name]: false }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className=" bg-[#92C6C2] overflow-hidden  ">
        <div className="px-14 md:px-12 lg:px-20 xl:px-24 py-24 2xl:container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="justify-start hidden md:flex ">
              <img
                src={banner}
                alt=""
                className="w-3/4 lg:w-11/12 "
                data-aos="fade-left"
                data-aos-duration="2000"
              />
            </div>
            <div className="flex flex-col gap-20 my-auto ">
              <h1
                className="text-[#313131] font-body text-4xl md:text-5xl lg:text-6xl  font-semibold leading-[80px]"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Get in touch
              </h1>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className=" w-full border-b border-black border-opacity-50 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                      value={inputs.name}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                        focus.name || inputs.name ? "text-base !-top-6" : ""
                      }`}
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className=" w-full border-b border-black border-opacity-50 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                      value={inputs.email}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                        focus.email || inputs.email ? "text-base  !-top-6" : ""
                      }`}
                    >
                      Email ID
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <input
                      id="message"
                      name="message"
                      type="text"
                      className=" w-full border-b border-black border-opacity-50 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                      value={inputs.message}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                        focus.message || inputs.message ? "text-base  !-top-6" : ""
                      }`}
                    >
                      Message
                    </label>
                  </div>
                </div>
                <div className="flex justify-end ">
                  <button
                    type="submit"
                    className="text-[#313131] flex justify-center items-center  p-3 px-8 gap-2.5 rounded-[50px]   bg-white font-poppins font-normal text-lg cursor-pointer transition-all border-black border-b-[5px] hover:brightness-110 hover:-translate-y-[2px] hover:border-b-[8px]
                                       active:border-b-[3px] active:brightness-90 active:translate-y-[3px]"
                  >
                    Send
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
                  </button>
                </div>
              </form>
            </div>
          </div>

          {isModalOpen && (
        <div className="absolute top-[25%] left-[25%] h-[50%] w-[50%] inset-0 flex  items-center justify-center ">
          <div className="bg-white w-full h-full bg-opacity-75 p-4  lg:p-6 rounded-md shadow-md flex flex-col items-center justify-center">
            <img src={img} className="w-[40%] h-[40%] "/>
            <p className="text-green-600 font-poppins lg:text-sm xl:text-base ">
              Your message has been sent successfully!
            </p>
            <button
              onClick={closeModal}
              className="mt-1 bg-blue-500 text-white px-2 xl:px-4 py-1 rounded-md xl:text-base lg:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
        
      </section>
      
    </>
  );
}

export default Connected;
