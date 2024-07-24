import { useState } from "react";
import React from "react";
import bg from "../../../assets/homepage/usa.png";
import Connected from "../../../Component/HomePage/Connected";

function Contact() {
  const [inputs, setInputs] = useState({
    name: "",
    last:"",
    email: "",
    message: "",
    phone: "",
  });
  const [focus, setFocus] = useState({
    last:false,
    name: false,
    email: false,
    message: false,
    phone:false,
  });

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

  return (
    <section
      className="  mx-auto"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-14 md:px-12 lg:px-20 xl:px-24 py-24 mx-auto 2xl:container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 flex flex-col gap-16 my-auto ">
            <h1
              className="text-6xl font-body font-semibold leading-[80px]"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Get in touch
            </h1>

            <div className="flex flex-col gap-8 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="relative w-full">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="pl-3 rounded-md w-full border border-black border-opacity-20 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                    value={inputs.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label
                    htmlFor="name"
                    className={`ml-3 absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                      focus.name || inputs.name ? "text-base !-top-6" : ""
                    }`}
                  >
                    First Name
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    id="last"
                    name="last"
                    type="text"
                    className="pl-3 rounded-md w-full border border-black border-opacity-20 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                    value={inputs.last}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label
                    htmlFor="email"
                    className={`ml-3 absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                      focus.last || inputs.last ? "text-base  !-top-6" : ""
                    }`}
                  >
                    Last Name
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="pl-3 rounded-md w-full border border-black border-opacity-20 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                    value={inputs.email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label
                    htmlFor="email"
                    className={`ml-3 absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                      focus.email || inputs.email ? "text-base  !-top-6" : ""
                    }`}
                  >
                    Email ID
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="pl-3 rounded-md w-full border border-black border-opacity-20 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1"
                    value={inputs.phone}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label
                    htmlFor="email"
                    className={`ml-3 absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                      focus.phone || inputs.phone ? "text-base  !-top-6" : ""
                    }`}
                  >
                    Phone no.
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full">
                  <input
                    id="message"
                    name="message"
                    type="text  "
                    className="pl-3 w-full rounded-md border border-black border-opacity-20 focus:outline-none font-poppins text-base leading-[24px] focus:border-b-2 focus:border-blue-700 transition-colors peer bg-inherit py-1 h-28"
                    value={inputs.message}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label
                    htmlFor="message"
                    className={`ml-3 absolute left-0 top-1 cursor-text transition-all font-poppins text-base ${
                      focus.message || inputs.message
                        ? "text-base  !-top-6"
                        : ""
                    }`}
                  >
                    Type your message here
                  </label>
                </div>
              </div>
            </div>

            {/* <input type="text" name="Name" id="" placeholder="Name"
                                className="bg-inherit  pb-2 placeholder:text-black border-b border-black border-opacity-50 focus:outline-none  font-poppins text-base leading-[24px]" />
                            <input type="email" name="Name" id="" placeholder="Email ID"
                                className="placeholder:bg-[#92C6C2] bg-[#92C6C2] pb-2 placeholder:text-black border-b border-black border-opacity-50 focus:outline-none font-poppins text-base leading-[24px]" />
                            <input type="text" name="Name" id="" placeholder="Type your message here"
                                className="placeholder:bg-[#92C6C2] bg-[#92C6C2] pb-2 placeholder:text-black border-b border-black border-opacity-50 focus:outline-none font-poppins text-base leading-[24px]" /> */}
            <div className="flex justify-end ">
              <button
                className=" flex justify-center items-center  p-3 px-8 gap-2.5 rounded-[50px]  text-white bg-black font-poppins font-normal text-lg cursor-pointer transition-all border-black border-b-[5px] hover:brightness-110 hover:-translate-y-[2px] hover:border-b-[8px]
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
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:ml-8">
            <h1 className="font-body text-3xl font-semibold mt-8">
              Contact Us
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center ">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.5" cy="13.5" r="13.5" fill="#92C6C2" />
                  <path
                    d="M13.5373 6.12415C9.85303 6.12415 6.88184 9.18897 6.88184 12.9214C6.88184 16.6841 9.88275 19.7186 13.5373 19.7186C17.2216 19.7186 20.1928 16.6538 20.1928 12.9214C20.1928 9.18897 17.2216 6.12415 13.5373 6.12415ZM17.6673 16.1986C17.489 16.8055 16.6868 17.6855 15.944 17.6855L15.8846 17.6552C14.7852 17.5945 13.2699 16.5324 11.8734 14.8028L11.3683 14.1655C9.97188 12.4359 9.22908 10.7366 9.40735 9.64415C9.5262 8.85518 10.6553 8.21794 11.3089 8.21794C11.6358 8.21794 11.7546 8.36966 11.7843 8.49104C12.1409 9.15863 12.6162 10.3117 12.6162 10.7366V10.7972C12.5271 11.0097 12.3488 11.131 12.2003 11.2221C11.9923 11.3435 11.8734 11.4345 11.8437 11.6469C11.8437 11.7076 11.9032 12.0414 12.8242 13.1945L13.2105 13.68C14.1316 14.8028 14.4287 14.9241 14.4881 14.9241C14.7258 14.9545 14.8149 14.8635 14.9932 14.6814C15.1121 14.5297 15.2606 14.3779 15.4686 14.3476H15.528C15.944 14.4386 16.9542 15.1062 17.5484 15.6221C17.6376 15.6524 17.7861 15.8041 17.6673 16.1986Z"
                    fill="white"
                  />
                </svg>
                <h3 className="text-base font-poppins font-medium">Call us</h3>
              </div>
              <h3 className="text-base font-poppins">+1(502) 724-9833</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.5" cy="13.5" r="13.5" fill="#92C6C2" />
                  <path
                    d="M7.00489 8.224C6.83023 8.224 6.66498 8.26611 6.51771 8.338L12.8627 14.896C13.1577 15.2012 13.612 15.2013 13.9075 14.896L20.2642 8.338C20.117 8.26611 19.9517 8.224 19.7771 8.224H7.00489ZM20.7925 8.878L16.0264 13.804L20.7925 18.328C20.8643 18.1762 20.904 18.0045 20.904 17.824V9.376C20.904 9.19746 20.8628 9.02854 20.7925 8.878ZM5.98358 8.88399C5.91533 9.03272 5.87793 9.20029 5.87793 9.376V17.824C5.87793 18.0045 5.91769 18.1762 5.98945 18.328L10.7497 13.81L5.98358 8.88399ZM15.4923 14.35L14.4416 15.436C13.8614 16.0354 12.9086 16.0362 12.3286 15.436L11.2838 14.356L6.52945 18.868C6.67372 18.9363 6.83487 18.976 7.00489 18.976H19.7771C19.9471 18.976 20.1082 18.9363 20.2525 18.868L15.4923 14.35Z"
                    fill="white"
                  />
                </svg>

                <h3 className="text-base font-poppins font-medium">Email</h3>
              </div>
              <h3 className="text-base font-poppins">huntderwin@gmail.com</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center ">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.5" cy="13.5" r="13.5" fill="#92C6C2" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2401 17.576C16.7968 17.7242 17.3195 17.9808 17.7789 18.3315C18.0889 18.5912 18.2651 18.8758 18.2651 19.166C18.2651 19.6624 17.7651 20.1335 16.9555 20.4932C15.8571 20.9355 14.6822 21.1508 13.5001 21.1264C12.3183 21.1507 11.1437 20.9354 10.0457 20.4932C9.2365 20.1335 8.7361 19.6624 8.7361 19.166C8.7361 18.8758 8.9119 18.5912 9.2221 18.3315C9.68125 17.981 10.2037 17.7243 10.7601 17.576C10.8316 17.5549 10.8918 17.5059 10.9275 17.4398C10.9632 17.3738 10.9715 17.2962 10.9505 17.224C10.9296 17.1518 10.8811 17.0909 10.8157 17.0548C10.7504 17.0188 10.6736 17.0104 10.6021 17.0316C9.9723 17.2015 9.38157 17.4946 8.8633 17.8941C8.4233 18.2628 8.1731 18.6951 8.1731 19.166C8.1731 19.9091 8.8021 20.5605 9.8187 21.013C10.9884 21.4868 12.2402 21.7186 13.5001 21.6947C14.7595 21.7184 16.0109 21.4866 17.1801 21.013C18.1971 20.5603 18.8261 19.9091 18.8261 19.166C18.8261 18.6951 18.5761 18.2628 18.1357 17.8941C17.6174 17.4946 17.0267 17.2016 16.3969 17.0316C16.3255 17.0104 16.2486 17.0187 16.1832 17.0548C16.1179 17.0908 16.0694 17.1517 16.0484 17.2239C16.0274 17.2961 16.0357 17.3737 16.0714 17.4398C16.1071 17.5058 16.1673 17.5548 16.2387 17.576H16.2401ZM13.5001 6.70701C12.9212 6.707 12.3602 6.90983 11.9127 7.28093C11.4652 7.65203 11.1589 8.16844 11.046 8.74218C10.933 9.31592 11.0204 9.91149 11.2933 10.4274C11.5661 10.9433 12.0076 11.3477 12.5424 11.5716C13.0772 11.7955 13.6723 11.825 14.2263 11.6553C14.7803 11.4855 15.2588 11.1268 15.5805 10.6405C15.9021 10.1541 16.0469 9.57004 15.9902 8.98787C15.9335 8.4057 15.6788 7.86141 15.2695 7.44773C15.0374 7.21257 14.7616 7.02607 14.4579 6.89896C14.1543 6.77184 13.8288 6.70661 13.5001 6.70701ZM14.8719 7.85053C15.189 8.17145 15.3862 8.59357 15.4299 9.04495C15.4736 9.49633 15.3611 9.94906 15.1115 10.326C14.8619 10.7029 14.4907 10.9807 14.0611 11.1121C13.6315 11.2435 13.1702 11.2203 12.7556 11.0465C12.3411 10.8727 11.999 10.559 11.7877 10.1589C11.5763 9.75877 11.5088 9.297 11.5966 8.85223C11.6844 8.40745 11.9221 8.00721 12.2692 7.71967C12.6163 7.43214 13.0513 7.27511 13.5001 7.27533C13.755 7.27504 14.0074 7.32572 14.2429 7.42443C14.4783 7.52315 14.6921 7.66796 14.8719 7.85053ZM13.2601 19.3137L9.4471 13.2437C8.5709 11.8492 8.0133 10.2944 8.0133 8.8083C8.00282 8.13414 8.1279 7.46485 8.38096 6.84098C8.63401 6.21712 9.00979 5.65166 9.4855 5.1789C10.5523 4.10697 11.9957 3.50528 13.5001 3.50528C15.0046 3.50528 16.4479 4.10697 17.5147 5.1789C17.9905 5.65164 18.3663 6.21708 18.6193 6.84096C18.8724 7.46483 18.9974 8.13414 18.9869 8.8083C18.9869 10.2944 18.4295 11.849 17.5533 13.2437L13.7375 19.3182C13.7119 19.3589 13.6765 19.3924 13.6345 19.4155C13.5925 19.4385 13.5454 19.4504 13.4977 19.4499C13.4499 19.4495 13.4031 19.4367 13.3615 19.4129C13.32 19.3891 13.285 19.3549 13.2601 19.3137Z"
                    fill="white"
                  />
                </svg>

                <h3 className="text-base font-poppins font-medium">Visit us</h3>
              </div>
              <h3 className="text-base font-poppins">
                Hunt Innovations, LLC <br /> P.O. BOX 315, La Grange, <br /> KY
                40031
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
