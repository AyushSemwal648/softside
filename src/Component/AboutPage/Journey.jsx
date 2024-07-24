import React from "react";
import poster from "../../assets/homepage/journey.png";

function Journey() {
  return (
    <section className="mx-auto w-full overflow-hidden">
      <div className="py-28 grid grid-cols-1 sm:grid-cols-2 px-7 md:px-14 lg:px-20 xl:px-24  mx-auto 2xl:container">
        <div className="flex flex-col items-start pr-4">
          <p className="text-[#313131]  text-3xl  md:text-[40px] lg:text-5xl xl:text-6xl  font-bold font-body xl:leading-[80px] mb-6 md:text-left text-center "    data-aos="fade-down"
            data-aos-duration="2000">
            Our Journey Begins
          </p>
          <p className= "text-[#535353] text-base lg:text-lg font-poppins font-normal mb-6 text-left "    data-aos="fade-up"
            data-aos-duration="2000">
            Long before The SoftSide emerged and before Hunt Innovations LLC
            made its mark, there was a vision. Derwin Hunt imagined a
            revolutionary product that could make every bathtub owner feel
            safer—a creation that not only promised enhanced safety but also
            elevated the aesthetic of any bathroom. <br /> <br /> This vision
            was for everyone: for parents cautiously leaning over the tub as
            their children joyfully splash about; for grandparents in
            rehabilitation centers, supported by loved ones during their
            routines; and for travelers enjoying a moment of relaxation in hotel
            bathtubs. Derwin envisioned a product that would preserve the serene
            experience of a perfect bath, eliminating the fear of slipping with
            a simple reminder to "be careful." His dream was to safeguard this
            sanctuary-like experience, ensuring peace of mind during these
            precious moments.
          </p>
        </div>
        <div className="flex  items-center justify-end">
          <img src={poster} alt="" className="h-[300px] sm:h-full  "     data-aos="fade-left"
            data-aos-duration="2000"/>
        </div>
      </div>
    </section>
  );
}

export default Journey;
