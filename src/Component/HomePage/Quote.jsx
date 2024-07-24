import React from 'react'
import poster from "../../assets/homepage/Group 12.png"
function Quote() {
    return (
        <section className="mx-auto w-full 2xl:container">
            <div className="my-28 grid grid-cols-1 sm:grid-cols-2 mx-7 md:mx-14 lg:mx-20 xl:mx-24 ">
                <div className='flex  items-center justify-center sm:pr-8 mb-8 sm:mb-0'>
                    <img src={poster} alt="" className='h-[350px] sm:h-full' />
                </div>
                <div className='flex flex-col justify-center items-start sm:items-start lg:items-end xl:items-start  xl:ml-32'>
                    <p className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold font-body lg:leading-[80px] mb-6 text-left'>
                        Where Luxury
                        <br />
                        Meets Comfort
                    </p>
                    <p className='text-base lg:text-lg font-poppins font-normal mb-6 text-left'>
                        Lorem ipsum dolor sit amet consectetur. Sed a <br />
                        maecenas venenatis maecenas. Tortor eget <br />
                        commodo nullam et ac ullamcorper magna.
                    </p>
                    <div className="flex items-start">
                        <div className=" flex items-center justify-center cursor-pointer  p-3 px-8 gap-2.5 rounded-[50px]  text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg">
                            <div className="relative inline-flex items-center justify-start  pl-4 pr-12 overflow-hidden font-semibold shadow text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#2C2C2C] group">

                                <span className="absolute right-0 pr-4 duration-300 ease-out group-hover:translate-x-12">
                                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z" fill="white" />
                                    </svg>
                                </span>
                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-300">
                                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z" fill="white" />
                                    </svg>
                                </span>
                                <span className="relative w-full text-center transition-colors duration-300 ease-in-out group-hover:text-white ">
                                    View Product Range
                                </span>
                            </div>
                        </div>
                        {/* 
                        <button className=" flex justify-center items-center  p-3 px-8 gap-2.5 rounded-[50px]  text-white bg-[#2C2C2C]  font-poppins font-normal text-base lg:text-lg">
                            View Product Range
                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.7071 8.20711C27.0976 7.81658 27.0976 7.18342 26.7071 6.79289L20.3431 0.428932C19.9526 0.0384078 19.3195 0.0384078 18.9289 0.428932C18.5384 0.819457 18.5384 1.45262 18.9289 1.84315L24.5858 7.5L18.9289 13.1569C18.5384 13.5474 18.5384 14.1805 18.9289 14.5711C19.3195 14.9616 19.9526 14.9616 20.3431 14.5711L26.7071 8.20711ZM0 8.5H26V6.5H0V8.5Z" fill="white" />
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote