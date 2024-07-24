import React from "react";

function Youtube() {
  return (
    <section className=" w-full overflow-hidden">
      <div className="flex flex-col px-8 md:px-14 lg:px-20 xl:px-24 py-24 2xl:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3  md:gap-6">
          <div className="col-span-2 mb-6 md:mb-0">
            <iframe
            className="w-full h-96 md:h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qKelsicF8U8?si=gFxi8ax5woTu2fE9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div>
                <h3 className="font-body text-lg text-center md:text-start md:text-3xl font-semibold">The Solution, the Patented SoftSide</h3>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <div>
              <iframe
              className="w-full "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XTKT2t2ywD4?si=bSAvCbDqkUTm_gxU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
              className="w-full "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OguGtPzvP2M?si=cua8Uq7uKlavFzBO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youtube;
