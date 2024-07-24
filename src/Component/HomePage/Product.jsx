import React from "react";
import product1 from "../../assets/homepage/Ellipse 8.png";
import product2 from "../../assets/homepage/Ellipse 9.png";
import product3 from "../../assets/homepage/Ellipse 10.png";
import product4 from "../../assets/homepage/Ellipse 11.png";
import product from "../../assets/homepage/Group 11.png";
import wallmart from "../../assets/homepage/walmart.png";
import amazon from "../../assets/homepage/amazon.png";
import Atropos from "atropos/react";

function Product() {
  const data = [
    {
      id: 1,
      img: product1,
      title: "Easy accessable",
    },
    {
      id: 1,
      img: product2,
      title: "Easy to use",
    },
    {
      id: 1,
      img: product3,
      title: "Easy Installation",
    },
    {
      id: 1,
      img: product4,
      title: "Easy to move",
    },
  ];

  return (
    <section className="mx-auto bg-[rgb(232,249,248)] overflow-hidden  ">
      <div className="flex flex-col px-7 md:px-14 lg:px-20 xl:px-24 py-28 mx-auto 2xl:container" >
        <div className="title flex justify-center flex-col items-center ">
          <h2
            className=" text-[#313131] font-body text-4xl md:text-5xl lg:text-6xl font-semibold mb-6"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Product Features
          </h2>
          <p
            className="text-[#535353] text-lg md:text-base lg:text-xl font-poppins lg:leading-[27px] text-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            For your standard bathtub.
          </p>
        </div>
      
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-[60px] gap-10  md:gap-16 lg:gap-6 ">
          {/* <div className="relative overflow-hidden h-[180px] w-[180px] md:h-[240px] md:w-[240px] card xl:h-[260px] xl:w-[260px] bg-[#92C6C2] rounded-[20px] gap-6  lg:h-[230px] lg:w-[210px]  cursor-pointer text-2xl font-bold ">
                        <div className="z-10 absolute w-full h-full peer"></div>
                        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full  bg-green-300 transition-all duration-500"></div>
                        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full  bg-green-300 transition-all duration-500">
                            Nice to meet u,<br />Universe
                        </div>
                        <div className="mx-auto flex justify-center items-center flex-col h-[180px] w-[180px]   md:h-[240px] md:w-[240px] card xl:h-[260px] xl:w-[260px] bg-[#92C6C2] rounded-[20px] gap-6  lg:h-[230px] lg:w-[210px]">
                        <img src={product1} alt="" className='h-[80px] md:h-[120px]  xl:h-[150px]' />
                        <p className='font-poppins text-white font-medium text-xl '> Easy accessable</p>
                    </div>
                    </div> */}

          {data.map((product, idx) => {
            return (
               <div className="inline-flex" data-aos="flip-up" data-aos-duration="2000">
                <Atropos
                  shadow={false}
                  rotate={true}
                  className="mx-auto lg:mx-auto"
                >
                  {/* ... */}
                  <div
                    className=" flex justify-center items-center flex-col h-[180px] w-[180px]   md:h-[240px] md:w-[240px] card xl:h-[260px] xl:w-[260px] bg-[#92C6C2] rounded-[20px] gap-6  lg:h-[230px] lg:w-[210px] transform transition-transform duration-300 "
                    data-aos="flip-up"
                    data-aos-duration="2000"
                  >
                    <img
                      src={product.img}
                      alt=""
                      className="h-[80px] md:h-[120px]  xl:h-[150px] "
                    />
                    <p className="font-poppins text-white font-medium text-xl ">
                      {product.title}
                    </p>
                  </div>
                </Atropos>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 md:px-24 bg-[#4F4F4F] py-6 gap-6  md:gap-0 rounded-2xl mt-8">
          <div
            className="flex flex-col items-center gap-4 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <svg
              width="46"
              height="39"
              viewBox="0 0 46 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.5431 37.537C30.5431 37.9352 30.2051 38.2584 29.7888 38.2584H28.2802C27.8638 38.2584 27.5258 37.9352 27.5258 37.537C27.5258 37.1387 27.8638 36.8155 28.2802 36.8155H29.7888C30.2051 36.8155 30.5431 37.1387 30.5431 37.537ZM45.6292 37.537C45.6292 37.9352 45.2913 38.2584 44.8749 38.2584H32.806C32.3896 38.2584 32.0517 37.9352 32.0517 37.537C32.0517 37.1387 32.3896 36.8155 32.806 36.8155H44.8749C45.2913 36.8155 45.6292 37.1387 45.6292 37.537ZM24.5086 37.537C24.5086 37.9352 24.1707 38.2584 23.7543 38.2584H16.2112C15.7949 38.2584 15.4569 37.9352 15.4569 37.537C15.4569 37.1387 15.7949 36.8155 16.2112 36.8155H23.7543C24.1707 36.8155 24.5086 37.1387 24.5086 37.537ZM12.4397 37.537C12.4397 37.9352 12.1018 38.2584 11.6854 38.2584H1.1251C0.708718 38.2584 0.370789 37.9352 0.370789 37.537C0.370789 37.1387 0.708718 36.8155 1.1251 36.8155H11.6854C12.1018 36.8155 12.4397 37.1387 12.4397 37.537ZM1.8794 23.1074C1.8794 22.7091 2.21733 22.3859 2.63371 22.3859H4.77594L4.45687 20.3275C4.39577 19.9336 4.68014 19.5664 5.092 19.5079C5.50687 19.4524 5.88855 19.7215 5.94964 20.1154L6.30191 22.3859H11.6854C12.1018 22.3859 12.4397 22.7091 12.4397 23.1074C12.4397 23.5056 12.1018 23.8289 11.6854 23.8289H2.63371C2.21733 23.8289 1.8794 23.5056 1.8794 23.1074ZM2.63371 16.6141H3.80967L3.4906 14.5557C3.4295 14.1618 3.71388 13.7946 4.12573 13.7361C4.5406 13.6813 4.92228 13.9497 4.98262 14.3436L5.33564 16.6141H11.6854C12.1018 16.6141 12.4397 16.9373 12.4397 17.3356C12.4397 17.7338 12.1018 18.057 11.6854 18.057H2.63371C2.21733 18.057 1.8794 17.7338 1.8794 17.3356C1.8794 16.9373 2.21733 16.6141 2.63371 16.6141ZM11.6854 31.0436C11.2698 31.0436 10.9311 30.7197 10.9311 30.3222C10.9311 29.9246 11.2698 29.6007 11.6854 29.6007C12.101 29.6007 12.4397 29.9246 12.4397 30.3222C12.4397 30.7197 12.101 31.0436 11.6854 31.0436ZM11.6854 28.1577C10.4378 28.1577 9.42247 29.1288 9.42247 30.3222C9.42247 31.5155 10.4378 32.4866 11.6854 32.4866C12.933 32.4866 13.9483 31.5155 13.9483 30.3222C13.9483 29.1288 12.933 28.1577 11.6854 28.1577ZM37.3318 31.0436C36.9162 31.0436 36.5775 30.7197 36.5775 30.3222C36.5775 29.9246 36.9162 29.6007 37.3318 29.6007C37.7475 29.6007 38.0861 29.9246 38.0861 30.3222C38.0861 30.7197 37.7475 31.0436 37.3318 31.0436ZM37.3318 28.1577C36.0842 28.1577 35.0689 29.1288 35.0689 30.3222C35.0689 31.5155 36.0842 32.4866 37.3318 32.4866C38.5795 32.4866 39.5948 31.5155 39.5948 30.3222C39.5948 29.1288 38.5795 28.1577 37.3318 28.1577ZM37.3318 33.9296C35.2522 33.9296 33.5603 32.3113 33.5603 30.3222C33.5603 28.3331 35.2522 26.7148 37.3318 26.7148C39.4115 26.7148 41.1034 28.3331 41.1034 30.3222C41.1034 32.3113 39.4115 33.9296 37.3318 33.9296ZM44.6539 18.9899L42.5863 17.0123L41.8577 8.67783C41.8577 6.68872 40.1658 5.07044 38.0861 5.07044H32.806C32.3896 5.07044 32.0517 5.39367 32.0517 5.79192C32.0517 6.19018 32.3896 6.5134 32.806 6.5134H38.0861C39.3126 6.5134 40.3491 7.50471 40.3513 8.73772L41.0377 16.6141H38.5523L39.5156 14.7722C39.7019 14.4157 39.5503 13.9829 39.1776 13.8039C38.8042 13.6257 38.3524 13.7707 38.1653 14.1272L36.8657 16.6141H32.806C32.3896 16.6141 32.0517 16.9373 32.0517 17.3356C32.0517 17.7338 32.3896 18.057 32.806 18.057H41.5454L43.5873 20.0101C44.0173 20.4213 44.1191 21.3672 44.1206 21.6644V29.6007H42.5516C42.1843 27.157 39.987 25.2718 37.3318 25.2718C34.4202 25.2718 32.0517 27.5373 32.0517 30.3222C32.0517 33.1071 34.4202 35.3725 37.3318 35.3725C39.987 35.3725 42.1843 33.4873 42.5516 31.0436H44.8749C45.2913 31.0436 45.6292 30.7204 45.6292 30.3222V21.6644C45.6292 21.4862 45.6021 19.8961 44.6539 18.9899ZM11.6854 33.9296C9.60577 33.9296 7.91386 32.3113 7.91386 30.3222C7.91386 28.3331 9.60577 26.7148 11.6854 26.7148C13.765 26.7148 15.4569 28.3331 15.4569 30.3222C15.4569 32.3113 13.765 33.9296 11.6854 33.9296ZM29.7888 0.741577H5.65094C3.57131 0.741577 1.8794 2.35985 1.8794 4.34897C1.8794 4.38504 1.88242 4.42039 1.8877 4.45575L2.88942 10.8423H1.1251C0.708718 10.8423 0.370789 11.1655 0.370789 11.5637C0.370789 11.962 0.708718 12.2852 1.1251 12.2852H11.6854C12.1018 12.2852 12.4397 11.962 12.4397 11.5637C12.4397 11.1655 12.1018 10.8423 11.6854 10.8423H4.41463L3.38877 4.29918C3.41668 3.12895 4.42066 2.18453 5.65094 2.18453H29.0345V29.6007H16.9052C16.5379 27.157 14.3406 25.2718 11.6854 25.2718C8.77377 25.2718 6.40525 27.5373 6.40525 30.3222C6.40525 33.1071 8.77377 35.3725 11.6854 35.3725C14.3406 35.3725 16.5379 33.4873 16.9052 31.0436H29.7888C30.2051 31.0436 30.5431 30.7204 30.5431 30.3222V1.46306C30.5431 1.0648 30.2051 0.741577 29.7888 0.741577Z"
                fill="white"
              />
            </svg>

            <p className="font-poppins text-base md:text-xl font-medium text-white text-center  ">
              World Wide Shipping
            </p>
          </div>

          <div
            className="flex flex-col items-center gap-4 "
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <svg
              width="42"
              height="44"
              viewBox="0 0 42 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.4 17.0211C36.4 16.1263 35.7728 15.4 35 15.4C34.2272 15.4 33.6 16.1263 33.6 17.0211C33.6 17.4069 33.6 28.7932 33.6 29.179C33.6 30.0738 34.2272 30.8 35 30.8C35.7728 30.8 36.4 30.0738 36.4 29.179C36.4 28.7932 36.4 17.4069 36.4 17.0211Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M16.8 43.4C18.3456 43.4 19.6 42.1456 19.6 40.6C19.6 39.0544 18.3456 37.8 16.8 37.8C16.1336 37.8 10.4664 37.8 9.8 37.8C8.2544 37.8 7 39.0544 7 40.6C7 42.1456 8.2544 43.4 9.8 43.4C10.4664 43.4 16.1336 43.4 16.8 43.4Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M7 15.4C7 7.66791 13.2679 1.40002 21 1.40002C28.7321 1.40002 35 7.66791 35 15.4"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M36.4 16.8C38.7201 16.8 40.6 19.6199 40.6 23.1C40.6 26.5785 38.7201 29.4 36.4 29.4"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M5.6 17.0211C5.6 16.1263 6.2272 15.4 7 15.4C7.7728 15.4 8.4 16.1263 8.4 17.0211C8.4 17.4069 8.4 28.7932 8.4 29.179C8.4 30.0738 7.7728 30.8 7 30.8C6.2272 30.8 5.6 30.0738 5.6 29.179C5.6 28.7932 5.6 17.4069 5.6 17.0211Z"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M5.6 16.8C3.28076 16.8 1.4 19.6199 1.4 23.1C1.4 26.5785 3.28076 29.4 5.6 29.4"
                stroke="white"
                stroke-miterlimit="10"
              />
              <path
                d="M36.4 29.4C36.4 36.4 32.2 40.6 25.2 40.6H19.6"
                stroke="white"
                stroke-miterlimit="10"
              />
            </svg>

            <p className="font-poppins text-base md:text-xl font-medium text-white text-center   duration-700">
              24x7x365 Support
            </p>
          </div>

          <div
            className="flex flex-col items-center gap-4 group"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <svg
              width="49"
              height="45"
              viewBox="0 0 49 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.5301 23.7653H46.0611V8.18109L46.0539 7.75207H46.0257C45.6269 3.38818 41.9794 0.0274658 37.5486 0.0274658C34.1077 0.0274658 30.9724 2.14519 29.6714 5.32041C29.1825 5.33042 28.6953 5.43359 28.232 5.63101C27.28 6.03668 26.543 6.78881 26.1565 7.74933L26.1353 7.80222C26.0236 8.0797 26.0267 8.38423 26.1439 8.65932C26.2611 8.93466 26.4786 9.14768 26.7562 9.25932L31.866 11.3153C32.0024 11.3702 32.1436 11.3962 32.2823 11.3962C32.7263 11.3962 33.1475 11.1307 33.3231 10.6939L33.3445 10.6408C33.7308 9.68072 33.7201 8.62775 33.3143 7.67594C33.1323 7.24858 32.8799 6.86495 32.5706 6.53659C33.3846 4.51454 35.3541 3.17266 37.5486 3.17266C40.5081 3.17266 42.9158 5.58025 42.9158 8.53971V23.7653H17.9782C17.7537 23.3439 17.3101 23.0562 16.8001 23.0562H10.8907C10.3809 23.0562 9.93733 23.3439 9.71275 23.7653H2.47138C2.03878 23.7653 1.63084 23.9339 1.32179 24.241C1.01501 24.5479 0.845825 24.9556 0.845825 25.3894C0.845825 26.285 1.57509 27.0137 2.4715 27.0137H3.61537V41.116C3.61537 42.2047 4.50154 43.0904 5.59108 43.0904H7.17374V44.2811C7.17374 44.6622 7.48386 44.9724 7.865 44.9724H9.22213C9.60326 44.9724 9.91338 44.6622 9.91338 44.2811V43.0904H39.9612V44.2811C39.9612 44.6622 40.2715 44.9724 40.6526 44.9724H42.0097C42.3909 44.9724 42.7011 44.6622 42.7011 44.2811V43.0904H44.104C45.1935 43.0904 46.0801 42.2046 46.0801 41.116V27.0137H46.5303C46.9639 27.0137 47.3716 26.8445 47.6787 26.5376C47.9854 26.2309 48.1543 25.8231 48.1543 25.3894C48.1541 24.4938 47.4258 23.7653 46.5301 23.7653ZM32.5485 10.3212L32.5271 10.3742C32.4734 10.5083 32.3198 10.5734 32.1862 10.5197L27.0764 8.46369C27.0115 8.4376 26.9605 8.38768 26.9331 8.32323C26.9058 8.25889 26.905 8.18765 26.9314 8.12212L26.9526 8.0691C27.5735 6.52623 29.3343 5.776 30.8764 6.39696C31.6238 6.69755 32.2095 7.27134 32.5253 8.01263C32.841 8.75356 32.8494 9.57337 32.5485 10.3212ZM37.5486 2.31509C35.0972 2.31509 32.888 3.75919 31.8848 5.96091C31.6702 5.81996 31.4404 5.69916 31.1968 5.6011C30.9907 5.51818 30.78 5.45468 30.5674 5.40821C31.7934 2.68514 34.5412 0.885398 37.5488 0.885398C41.657 0.885398 45.0163 4.09838 45.1968 8.20004L45.2033 8.30929V23.7648H43.7736V8.53994C43.7735 5.10762 40.9812 2.31509 37.5486 2.31509ZM10.4144 24.3905C10.4144 24.1277 10.6281 23.914 10.8908 23.914H16.8002C17.063 23.914 17.2769 24.1277 17.2769 24.3905V34.3863H10.4144V24.3905ZM10.4144 35.2442H17.2769V35.7089C17.2769 35.9716 17.063 36.1855 16.8002 36.1855H10.8908C10.6281 36.1855 10.4144 35.9716 10.4144 35.7089V35.2442ZM3.61537 26.1557H2.4715C2.04819 26.1557 1.70376 25.812 1.70376 25.3894C1.70376 25.1848 1.78358 24.9927 1.92762 24.8487C2.07405 24.7032 2.26717 24.6231 2.4715 24.6231H9.55655V26.1556L3.61537 26.1557ZM9.55655 27.0137V30.562H4.47306V27.0137H9.55655ZM9.05545 44.1145H8.03144V43.0905H9.05545V44.1145ZM41.8431 44.1145H40.8189V43.0905H41.8431V44.1145ZM45.2219 41.116C45.2219 41.7317 44.7204 42.2326 44.1038 42.2326H5.59108C4.97464 42.2326 4.47306 41.7317 4.47306 41.116V31.4198H9.55655V35.7089C9.55655 36.4447 10.1551 37.0433 10.8908 37.0433H16.8002C17.5361 37.0433 18.1347 36.4447 18.1347 35.7089V31.4198H45.2219V41.116ZM45.2219 30.562H18.1347V27.0137H45.2219V30.562ZM47.0718 25.931C46.927 26.076 46.7346 26.1557 46.5301 26.1557H46.0798H32.1073H18.1347V24.6231H46.5301C46.9527 24.6231 47.2964 24.9668 47.2964 25.3894C47.2964 25.594 47.2165 25.7861 47.0718 25.931Z"
                fill="white"
              />
              <path
                d="M26.3379 16.5839L27.1367 16.8961L29.0319 12.0467L28.2331 11.7345L26.3379 16.5839Z"
                fill="white"
              />
              <path
                d="M30.7268 13.3636L29.9278 13.0514L28.4754 16.7688L29.2744 17.081L30.7268 13.3636Z"
                fill="white"
              />
              <path
                d="M24.6503 15.2721L25.4491 15.5844L26.9019 11.8669L26.1031 11.5547L24.6503 15.2721Z"
                fill="white"
              />
            </svg>
            <p className="font-poppins text-base md:text-xl font-medium text-white text-center  ">
              Easy Installation
            </p>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p
              className="text-[#313131] text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-body lg:leading-[80px] mb-6"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              Where Luxury
              <br />
              Meets Comfort
            </p>
            <p
              className="text-[#535353] text-sm sm:text-base lg:text-lg font-poppins font-normal mb-6"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Lorem ipsum dolor sit amet consectetur. Sed a <br />
              maecenas venenatis maecenas. Tortor eget <br />
              commodo nullam et ac ullamcorper magna.
            </p>
            <div
              className="flex"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
            >
              <a
                href="/product"
                className=" text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg flex   justify-center items-center p-1 px-4 md:p-3 md:px-8 gap-2 md:gap-2.5 rounded-[50px]    md:text-lg tracking-widest hover:bg-[#92C6C2] hover:gap-4 hover:translate-x-3 duration-300 hover:text-white"
              >
                {/* flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold  rounded-md   */}
                View Product Range
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
              </a>
            </div>
            {/* <div className="flex"> */}
            {/* <a
                href="/product"
                className=" flex items-center justify-center cursor-pointer  p-3 px-8 gap-2.5 rounded-[50px]  text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="500"
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
                  <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white ">
                    View Product Range
                  </span>
                </div>
              </a> */}

            {/* <button className=" flex justify-center items-center  p-3 px-8 gap-2.5 rounded-[50px]  text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg">
                                View Product Range
                                <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z" fill="white" />
                                </svg>
                            </button> */}
            {/* </div> */}
          </div>
          <div className="flex justify-end  items-center mt-8 sm:mt-0 ">
            <img
              src={product}
              alt=""
              className="h-[300px] sm:h-full object-cover"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-20">
          <a
            href="https://www.walmart.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="300"
   
          >
            <button class="font-poppins text-base justify-center  md:flex-row lg:w-[300px] items-center border-2 border-black flex gap-3 px-6 py-2 rounded-[10px] bg-white  font-semibold text-black md:text-2xl text-center  z-30     relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  hover:scale-110  w-full sm:w-auto ">
              Buy on
              <img src={wallmart} alt="" className="h-6 lg:h-8" />
            </button>
          </a>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <button class=" items-end flex  text-base font-poppins justify-center gap-2  px-6 py-2 rounded-[10px] bg-[#FF9900]  font-semibold text-black md:text-2xl text-center  z-30     relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   hover:scale-110 w-full sm:w-auto">
              <img src={amazon} alt="" className="h-4 lg:h-7" />
              Buy on Amazon
            </button>
          </a>
          <a
            href="https://sam.gov/content/home"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            <button class="font-poppins text-base lg:w-[300px] px-6 py-2 rounded-[10px] bg-[#0071CE]  font-semibold text-white md:text-2xl text-center  z-30     relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700   hover:scale-110 w-full sm:w-auto">
              Buy on Sam.gov
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Product;
