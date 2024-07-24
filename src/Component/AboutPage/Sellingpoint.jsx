import React from "react";
import poster from "../../assets/homepage/about.png";
import ai from "../../assets/UniqueSvg/ai.svg";
import ec from "../../assets/UniqueSvg/ec.svg";
import it from "../../assets/UniqueSvg/it.svg";
import lock from "../../assets/UniqueSvg/lock.svg";
import Maintenance from "../../assets/UniqueSvg/Maintenance.svg";
import pencil from "../../assets/UniqueSvg/pencil.svg";
function Sellingpoint() {
  const Pointsdata = [
    {
      id: 1,
      title: "Safety Redefined:",
      subheading:
        "Our products minimize the risk of slips and falls, ensuring a worry-free bathroom experience for all ages.",
      img: lock,
    },
    {
      id: 2,
      title: "Aesthetic Integration:",
      subheading:
        "Our designs seamlessly blend with existing bathroom decor, providing essential safety features without compromising style.",
      img: ai,
    },
    {
      id: 3,
      title: "Universal Design:",
      subheading:
        "Our designs seamlessly blend with existing bathroom decor, providing essential safety features without compromising style.",
      img: pencil,
    },
    {
      id: 4,
      title: "Durability and Ease of Maintenance:",
      subheading:
        "Made from high-quality materials, our products are durable and easy to clean, maintaining a fresh look for years.",
      img: Maintenance,
    },
    {
      id: 5,
      title: "Innovative Technology",
      subheading:
        "We use the latest safety and design technology, ensuring our products are always at the forefront of the industry.",
      img: it,
    },
    {
      id: 6,
      title: "Emotional Connection:",
      subheading:
        "Our products provide peace of mind, preserving serene moments in the bathroom as safe havens for relaxation and care.",
      img: ec,
    },
  ];
  return (
    <section className="mx-auto w-full overflow-hidden">
      <div className="py-14   px-7 md:px-14 lg:px-20 xl:px-24">
        <div className="flex justify-center">
          <h1
            className="title font-body text-3xl  md:text-[40px] lg:text-5xl xl:text-6xl lg:leading-[80px] font-semibold text-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Unique Selling Points
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8">
          {Pointsdata.map((point, idx) => (
            <div key ={idx} className="rounded-[10px] justify-center py-6 px-6 group hover:bg-[#2B5F71] transition-all duration-300 ease-in-out">
              <div className="flex justify-center items-center bg-[#E8F9F8] group-hover:bg-white rounded-[10px] h-20 w-20 transition-all duration-300 ease-in-out mb-3">
                <img src={point.img} alt="" />
              </div>
              <div className=" flex flex-col gap-2">
                <h1 className="text-lg lg:text-2xl font-poppins font-bold text-[#313131] group-hover:text-white transition-all duration-300 ease-in-out ">
                {point.title}
                </h1>
                <p className="font-poppins text-sm lg:text-lg text-[#535353] group-hover:text-white transition-all duration-300 ease-in-out ">
                 {point.subheading}
                </p>
              </div>
            </div>
          ))}

         
          {/* <ul className="text-base lg:text-lg font-poppins font-normal  text-left ">
            <li className="mb-6 flex " data-aos="fade-right"  data-aos-duration = "2000"  data-aos-delay="200">
              <div className="mr-2">
                <svg
                  width="20"
                  height="27"
                  viewBox="0 0 20 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_708_65)">
                    <path
                      d="M18.9619 11.2604H17.2742V7.25571C17.2742 3.25707 14.0126 0.00390625 9.99998 0.00390625C5.98731 0.00390625 2.72583 3.2592 2.72583 7.26044V11.2604H1.05683C0.478526 11.2604 0 11.7179 0 12.294V24.3935C0 25.8314 1.18403 27.0001 2.62745 27.0001H17.3913C18.8347 27.0001 20 25.8314 20 24.3935V12.294C20 11.7179 19.5402 11.2604 18.9619 11.2604ZM4.81775 7.26044C4.81775 4.40948 7.14206 2.09004 9.99998 2.09004C12.8579 2.09004 15.1823 4.40734 15.1823 7.25571V11.2604H4.81775V7.26044ZM17.9081 24.3935C17.9081 24.6811 17.68 24.9162 17.3913 24.9162H2.62745C2.33876 24.9162 2.09192 24.6811 2.09192 24.3935V13.3443H17.9081V24.3935Z"
                      fill="black"
                    />
                    <path
                      d="M10.0001 22.2552C10.5784 22.2552 11.046 21.7882 11.046 21.2121V17.4571C11.046 16.881 10.5783 16.4141 10.0001 16.4141C9.42177 16.4141 8.9541 16.881 8.9541 17.4571V21.2121C8.9541 21.7882 9.42176 22.2552 10.0001 22.2552Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_708_65">
                      <rect width="20" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="font-semibold md:whitespace-nowrap">Safety Redefined:</h2>
              <p>
                Our products minimize the risk of slips and falls, ensuring a
                worry-free bathroom experience for all ages.
              </p>
            </li>
            <li className="mb-6 flex   "  data-aos="fade-right"  data-aos-duration = "2000"  data-aos-delay="400">
              <div className="mr-2">
                <svg
                  width="21"
                  height="32"
                  viewBox="0 0 21 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.71831 10.1408C1.71831 15.1892 5.8108 19.2817 10.8592 19.2817C15.9075 19.2817 20 15.1892 20 10.1408C20 5.0925 15.9075 1 10.8592 1C5.8108 0.999999 1.71831 5.0925 1.71831 10.1408Z"
                    stroke="#302C2A"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <path
                    d="M1.71843 21.8591C1.71843 26.9075 5.81093 31 10.8593 31C15.9076 31 20.0001 26.9075 20.0001 21.8591C20.0001 16.8108 15.9076 12.7183 10.8593 12.7183C5.81093 12.7183 1.71843 16.8108 1.71843 21.8591Z"
                    stroke="#302C2A"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <path
                    d="M11.8382 13.0493L16.0917 17.338"
                    stroke="#302C2A"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <path
                    d="M8.24651 13.3169L13.5282 18.6408"
                    stroke="#302C2A"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                  <path
                    d="M5.67613 14.5564L9.92261 18.8381"
                    stroke="#302C2A"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                  />
                </svg>
              </div>
              <span className="font-semibold flex md:whitespace-nowrap">Aesthetic Integration:</span>
              Our designs seamlessly blend with existing bathroom decor,
              providing essential safety features without compromising style.
            </li>
            <li className="mb-6 flex   "  data-aos="fade-right"  data-aos-duration = "2000"  data-aos-delay="600">
              <div className="mr-2">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_708_80)">
                    <path
                      d="M22.1265 6.70226C22.5486 6.38712 22.499 5.73009 22.1265 5.35763L17.6306 0.861616C17.2581 0.489162 16.6584 0.489162 16.286 0.861616L8.99426 8.14067L1.71234 15.4099C1.33657 17.7411 0.950979 20.082 0.575195 22.4132L7.55211 21.2497C11.3239 17.4779 13.1063 15.7023 14.9052 13.9101C16.7042 12.1179 18.4735 10.3554 22.1265 6.70226Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-miterlimit="6.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.874 8.95747L19.9533 8.87814C20.1997 8.63168 20.1997 8.23209 19.9533 7.98563L14.9355 2.96777C14.689 2.72131 14.2894 2.72131 14.043 2.96777L13.9637 3.0471C13.7172 3.29356 13.7172 3.69315 13.9637 3.93961L18.9815 8.95747C19.2279 9.20393 19.6275 9.20393 19.874 8.95747Z"
                      fill="black"
                    />
                    <path
                      d="M4.74457 22.3108L0.733643 18.2998L0.575195 22.4131L4.74457 22.3108Z"
                      fill="black"
                    />
                    <path
                      d="M8.09545 20.6616L8.17478 20.5822C8.42124 20.3358 8.42124 19.9362 8.17478 19.6897L3.15698 14.6719C2.91052 14.4254 2.51094 14.4254 2.26448 14.6719L2.18515 14.7512C1.93869 14.9977 1.93869 15.3973 2.18515 15.6437L7.20295 20.6616C7.44941 20.908 7.849 20.908 8.09545 20.6616Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_708_80">
                      <rect width="23" height="23" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold md:whitespace-nowrap">Universal Design:</span>
              Crafted to meet diverse needs, our solutions cater to busy
              professionals, caretakers, and families with young children.
            </li>
            <li className="mb-6 flex   "  data-aos="fade-right"  data-aos-duration = "2000"  data-aos-delay="800">
              <div className="mr-2">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_708_345)">
                    <path
                      d="M25.0653 16.2785L22.534 13.7472C22.4557 13.6689 22.3627 13.6067 22.2604 13.5643C22.158 13.5218 22.0483 13.5 21.9375 13.5C21.8267 13.5 21.717 13.5218 21.6146 13.5643C21.5123 13.6067 21.4193 13.6689 21.341 13.7472L13.5 21.5881V25.3125H17.2244L25.0653 17.4716C25.1437 17.3932 25.2058 17.3003 25.2483 17.1979C25.2907 17.0955 25.3125 16.9858 25.3125 16.875C25.3125 16.7642 25.2907 16.6545 25.2483 16.5522C25.2058 16.4498 25.1437 16.3568 25.0653 16.2785ZM16.5256 23.625H15.1875V22.2869L19.4062 18.0682L20.7444 19.4063L16.5256 23.625ZM21.9375 18.2131L20.5994 16.875L21.9375 15.5369L23.2756 16.875L21.9375 18.2131Z"
                      fill="black"
                    />
                    <path
                      d="M16.875 10.9688V9.28125H15.0676C14.9891 8.97925 14.8684 8.68982 14.7092 8.42147L15.9891 7.14184L14.7957 5.94844L13.516 7.22832C13.2477 7.06913 12.9582 6.94847 12.6562 6.8699V5.0625H10.9688V6.8699C10.6668 6.94847 10.3773 7.06913 10.109 7.22832L8.82934 5.94844L7.63594 7.14184L8.91582 8.42147C8.75659 8.68982 8.63593 8.97925 8.5574 9.28125H6.75V10.9688H8.5574C8.63593 11.2707 8.75659 11.5602 8.91582 11.8285L7.63594 13.1082L8.82934 14.3016L10.109 13.0219C10.3774 13.181 10.6668 13.3016 10.9688 13.3801V15.1875H12.6562V13.3801C12.9582 13.3015 13.2477 13.1809 13.516 13.0217L14.7957 14.3016L15.9891 13.1082L14.7092 11.8285C14.8684 11.5602 14.9891 11.2707 15.0676 10.9688H16.875ZM11.8125 11.8125C11.4787 11.8125 11.1525 11.7135 10.875 11.5281C10.5975 11.3427 10.3812 11.0791 10.2535 10.7708C10.1257 10.4624 10.0923 10.1231 10.1574 9.79578C10.2225 9.46844 10.3833 9.16776 10.6193 8.93176C10.8553 8.69576 11.1559 8.53504 11.4833 8.46992C11.8106 8.40481 12.1499 8.43823 12.4583 8.56595C12.7666 8.69368 13.0302 8.90997 13.2156 9.18748C13.401 9.46498 13.5 9.79124 13.5 10.125C13.4994 10.5724 13.3215 11.0013 13.0051 11.3176C12.6888 11.634 12.2599 11.8119 11.8125 11.8125Z"
                      fill="black"
                    />
                    <path
                      d="M10.125 25.3125H5.0625C4.61509 25.312 4.18614 25.1341 3.86978 24.8177C3.55341 24.5014 3.37547 24.0724 3.375 23.625V3.375C3.37547 2.92759 3.55341 2.49864 3.86978 2.18228C4.18614 1.86591 4.61509 1.68797 5.0625 1.6875H18.5625C19.0099 1.68797 19.4389 1.86591 19.7552 2.18228C20.0716 2.49864 20.2495 2.92759 20.25 3.375V11.8125H18.5625V3.375H5.0625V23.625H10.125V25.3125Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_708_345">
                      <rect width="27" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold md:whitespace-nowrap">
                Durability and Ease of Maintenance:
              </span>
              Made from high-quality materials, our products are durable and
              easy to clean, maintaining a fresh look for years.
            </li>
            <li className="mb-6 flex   "  data-aos="fade-right"  data-aos-duration = "2000"  data-aos-delay="1000">
              <div className="mr-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_708_350)">
                    <path
                      d="M19.0962 0H1.93025C0.876944 0 0 0.844235 0 1.92072V14.7076C0 15.2301 0.208745 15.7298 0.569608 16.0932C0.928183 16.4543 1.41784 16.6651 1.93025 16.6651H7.1812C7.05237 18.5265 6.32543 19.632 6.2902 19.6851C6.11132 19.9358 6.08852 20.2698 6.22672 20.5459C6.36533 20.8229 6.6483 21 6.95426 21H14.0722C14.3783 21 14.6614 20.8168 14.8 20.5396C14.9381 20.2631 14.9149 19.9411 14.7356 19.6905C14.6996 19.6364 13.9715 18.5265 13.8424 16.6651H19.0962C20.1633 16.6651 21 15.7739 21 14.7076V1.92072C21 0.844235 20.1633 0 19.0962 0ZM1.93025 1.64902H19.0962C19.2611 1.64902 19.3761 1.76008 19.3761 1.92072V10.7686H1.6239V1.92072C1.6239 1.75164 1.77067 1.64902 1.93025 1.64902ZM12.7665 19.351H8.25839C8.50718 18.6889 8.74694 17.7894 8.81002 16.6651H12.2135C12.2768 17.7894 12.5171 18.6889 12.7665 19.351ZM19.0962 15.0161H1.93025C1.76535 15.0161 1.6239 14.8716 1.6239 14.7076V12.4176H19.3761V14.7077C19.3761 14.8637 19.2669 15.0161 19.0962 15.0161Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_708_350">
                      <rect width="21" height="21" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold md:whitespace-nowrap">Innovative Technology:</span>
              We use the latest safety and design technology, ensuring our
              products are always at the forefront of the industry.
            </li>
            <li className="mb-6 flex   "  data-aos="fade-right"  data-aos-duration = "2000"  data-aos-delay="1200">
              <div className="mr-2">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_708_361)">
                    <path
                      d="M22.75 14.625H17.875C17.4442 14.6255 17.0312 14.7969 16.7265 15.1015C16.4219 15.4061 16.2505 15.8192 16.25 16.25V17.875H11.7115L8.12503 14.2885V9.75H9.75003C10.1809 9.74951 10.5939 9.57814 10.8985 9.2735C11.2032 8.96886 11.3745 8.55583 11.375 8.125V3.25C11.3745 2.81918 11.2032 2.40614 10.8985 2.1015C10.5939 1.79686 10.1809 1.62549 9.75003 1.625H4.87503C4.4442 1.62549 4.03117 1.79686 3.72653 2.1015C3.42189 2.40614 3.25052 2.81918 3.25003 3.25V8.125C3.25052 8.55583 3.42189 8.96886 3.72653 9.2735C4.03117 9.57814 4.4442 9.74951 4.87503 9.75H6.50003V14.2885L2.67559 18.1131C2.60011 18.1885 2.54023 18.278 2.49938 18.3766C2.45853 18.4752 2.4375 18.5808 2.4375 18.6875C2.4375 18.7942 2.45853 18.8998 2.49938 18.9984C2.54023 19.097 2.60011 19.1865 2.67559 19.2619L6.73809 23.3244C6.81351 23.3999 6.90306 23.4598 7.00162 23.5006C7.10019 23.5415 7.20584 23.5625 7.31253 23.5625C7.41922 23.5625 7.52487 23.5415 7.62343 23.5006C7.722 23.4598 7.81155 23.3999 7.88697 23.3244L11.7115 19.5H16.25V21.125C16.2505 21.5558 16.4219 21.9689 16.7265 22.2735C17.0312 22.5781 17.4442 22.7495 17.875 22.75H22.75C23.1809 22.7495 23.5939 22.5781 23.8985 22.2735C24.2032 21.9689 24.3745 21.5558 24.375 21.125V16.25C24.3745 15.8192 24.2032 15.4061 23.8985 15.1015C23.5939 14.7969 23.1809 14.6255 22.75 14.625ZM4.87503 3.25H9.75003V8.125H4.87503V3.25ZM7.31253 21.601L4.39898 18.6875L7.31253 15.774L10.2261 18.6875L7.31253 21.601ZM17.875 21.125V16.25H22.75V21.125H17.875Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_708_361">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold md:whitespace-nowrap">Emotional Connection:</span>
              Our products provide peace of mind, preserving serene moments in
              the bathroom as safe havens for relaxation and care.
            </li>
          </ul> */}
        </div>
        {/* <div className="hidden md:flex  items-center justify-center ">
          <img src={poster} alt="" className="h-[350px] sm:h-full" />
        </div> */}
      </div>
    </section>
  );
}

export default Sellingpoint;
