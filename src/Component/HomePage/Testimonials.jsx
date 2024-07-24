import React from "react";
import miniImg1 from "../../assets/homepage/Ellipse 12.png";
import miniImg2 from "../../assets/homepage/Ellipse 14.png";
import video from "../../assets/video.mp4";
import Atropos from "atropos/react";

function Testimonials() {
  return (
    <section className="mx-auto w-full ">
      <div className="flex flex-col px-14 md:px-12 lg:px-20 xl:px-24 py-24">
        <div className="flex justify-center">
          <h1
            className="text-[#313131] title font-body text-4xl md:text-5xl lg:text-6xl lg:leading-[80px] font-semibold text-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Hear what our customers say
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8 xl:gap-20">
          <div data-aos="flip-right" data-aos-duration="2000">
            <Atropos shadow={false} rotate={true} className="my-atropos">
              <div className=" card border border-opacity-30 border-black   rounded-[22px] justify-center py-9 px-6 h-[350px] md:h-[400px] lg:min-h-[500px] xl:h-[550px]">
                <div className="flex gap-4 mb-4">
                  <img src={miniImg1} alt="" />
                  <div className="flex flex-col gap-1">
                    <h5>James</h5>
                    <svg
                      width="93"
                      height="17"
                      viewBox="0 0 93 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M27.5 1.61804L28.9328 6.02786L29.0451 6.37336H29.4084L34.0451 6.37336L30.2939 9.09878L30 9.31231L30.1123 9.6578L31.5451 14.0676L27.7939 11.3422L27.5 11.1287L27.2061 11.3422L23.4549 14.0676L24.8877 9.6578L25 9.31231L24.7061 9.09878L20.9549 6.37336L25.5916 6.37336H25.9549L26.0672 6.02786L27.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M46.5 1.61804L47.9328 6.02786L48.0451 6.37336H48.4084L53.0451 6.37336L49.2939 9.09878L49 9.31231L49.1123 9.6578L50.5451 14.0676L46.7939 11.3422L46.5 11.1287L46.2061 11.3422L42.4549 14.0676L43.8877 9.6578L44 9.31231L43.7061 9.09878L39.9549 6.37336L44.5916 6.37336H44.9549L45.0672 6.02786L46.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M65.5 1.61804L66.9328 6.02786L67.0451 6.37336H67.4084L72.0451 6.37336L68.2939 9.09878L68 9.31231L68.1123 9.6578L69.5451 14.0676L65.7939 11.3422L65.5 11.1287L65.2061 11.3422L61.4549 14.0676L62.8877 9.6578L63 9.31231L62.7061 9.09878L58.9549 6.37336L63.5916 6.37336H63.9549L64.0672 6.02786L65.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M84.5 1.61804L85.9328 6.02786L86.0451 6.37336H86.4084L91.0451 6.37336L87.2939 9.09878L87 9.31231L87.1123 9.6578L88.5451 14.0676L84.7939 11.3422L84.5 11.1287L84.2061 11.3422L80.4549 14.0676L81.8877 9.6578L82 9.31231L81.7061 9.09878L77.9549 6.37336L82.5916 6.37336H82.9549L83.0672 6.02786L84.5 1.61804Z"
                        stroke="black"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-poppins lg:text-2xl lg:leading-[36px] font-normal">
                    Gave this to Christine's mother over Thanksgiving and just
                    came to their house to visit and they LOVE it! Apparently.
                    Just went to the bathroom and happened to see it.
                  </p>
                </div>
              </div>
            </Atropos>
          </div>

          <div
            className="flex justify-center items-center card border border-opacity-30 border-black  rounded-[22px] h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px]"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <video
              controls
              autoplay
              loop
              muted
              className=" rounded-[22px]   object-cover h-full w-full"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div data-aos="flip-right" data-aos-duration="2000">
            <Atropos shadow={false} className="my-atropos">
              <div className="card border border-opacity-30 border-black  rounded-[22px] justify-center py-9 px-6 h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
                <div className="flex gap-4 mb-4">
                  <img src={miniImg2} alt="" />
                  <div className="flex flex-col gap-1">
                    <h5>James</h5>
                    <svg
                      width="93"
                      height="17"
                      viewBox="0 0 93 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M27.5 1.61804L28.9328 6.02786L29.0451 6.37336H29.4084L34.0451 6.37336L30.2939 9.09878L30 9.31231L30.1123 9.6578L31.5451 14.0676L27.7939 11.3422L27.5 11.1287L27.2061 11.3422L23.4549 14.0676L24.8877 9.6578L25 9.31231L24.7061 9.09878L20.9549 6.37336L25.5916 6.37336H25.9549L26.0672 6.02786L27.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M46.5 1.61804L47.9328 6.02786L48.0451 6.37336H48.4084L53.0451 6.37336L49.2939 9.09878L49 9.31231L49.1123 9.6578L50.5451 14.0676L46.7939 11.3422L46.5 11.1287L46.2061 11.3422L42.4549 14.0676L43.8877 9.6578L44 9.31231L43.7061 9.09878L39.9549 6.37336L44.5916 6.37336H44.9549L45.0672 6.02786L46.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M65.5 1.61804L66.9328 6.02786L67.0451 6.37336H67.4084L72.0451 6.37336L68.2939 9.09878L68 9.31231L68.1123 9.6578L69.5451 14.0676L65.7939 11.3422L65.5 11.1287L65.2061 11.3422L61.4549 14.0676L62.8877 9.6578L63 9.31231L62.7061 9.09878L58.9549 6.37336L63.5916 6.37336H63.9549L64.0672 6.02786L65.5 1.61804Z"
                        fill="black"
                        stroke="black"
                      />
                      <path
                        d="M84.5 1.61804L85.9328 6.02786L86.0451 6.37336H86.4084L91.0451 6.37336L87.2939 9.09878L87 9.31231L87.1123 9.6578L88.5451 14.0676L84.7939 11.3422L84.5 11.1287L84.2061 11.3422L80.4549 14.0676L81.8877 9.6578L82 9.31231L81.7061 9.09878L77.9549 6.37336L82.5916 6.37336H82.9549L83.0672 6.02786L84.5 1.61804Z"
                        stroke="black"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-poppins lg:text-2xl lg:leading-[36px] font-normal">
                    Gave this to Christine's mother over Thanksgiving and just
                    came to their house to visit and they LOVE it! Apparently.
                    Just went to the bathroom and happened to see it.
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
