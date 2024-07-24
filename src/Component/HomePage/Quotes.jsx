import React from 'react'
import bg from "../../assets/homepage/Group 4.png"

function Quotes() {
    return (
        <section className="h-[330px] md:h-[513px] mx-auto w-full " style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="px-8 md:px-24 pt-[100px] md:pt-[200px]  2xl:container mx-auto" data-aos="flip-right" data-aos-duration= "2000">
                <h1 className='font-body text-4xl md:text-5xl lg:text-6xl font-semibold text-white lg:leading-[80px] mb-2'>
                    The Soft Side Cushion
                </h1>
                <p className='font-body text-lg lg:text-2xl font-semibold text-white' >Transform your bathtub with The SoftSide 
                <br /> — where safety meets style! </p>
            </div>
        </section>
    )
}

export default Quotes