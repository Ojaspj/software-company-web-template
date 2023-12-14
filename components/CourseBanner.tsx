import { MoveLeft, MoveRight } from "lucide-react";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wrapper from "./Wrapper";

export class CourseBanner extends Component {
  render() {
    return (
      <div className="w-full h-auto">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <button
                type="button"
                onClick={clickHandler}
                title="Previous"
                className="absolute top-[280px] md:top-[435px] left-[10px] md:left-[100px] z-10   bg-transparent border-2 rounded-full w-10 h-10 flex items-center justify-center text-white "
              >
                <MoveLeft />
              </button>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <button
                type="button"
                onClick={clickHandler}
                title="Previous"
                className="absolute top-[280px]  md:top-[435px] left-[55px] md:left-[145px] z-10  bg-transparent border-2 rounded-full w-10 h-10 flex items-center justify-center text-white"
              >
                <MoveRight />
              </button>
            );
          }}
          className="relative"
        >
          <div className="w-full h-[40vh] lg:h-[60vh]  ">
            <div className="absolute w-full h-[40vh] lg:h-[60vh] bg-black/40 top-0"></div>
            <div className=" mx-2 md:mx-[100px] text-left absolute top-16 md:top-44  h-auto w-full   md:w-1/2 text-white  ">
              <h1 className=" text-sm md:text-md font-semibold">EDUCATION BENEFITS</h1>
              <h1 className=" text-3xl md:text-5xl font-semibold my-2">
                Access More than 100+ Online Tutorials{" "}
              </h1>
              <div className=" w-full md:w-[70%] my-1 md:my-4">
                <p className="font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptatum, quidem, in, eum voluptatem quos dolorum quae
                  voluptates doloremque atque dolorem nobis. Quisquam, quibusdam
                  labore. Quae, quia. Quisquam, quibusdam labore. Quae, quia.
                </p>
              </div>
            </div>
            <img
              className="w-full h-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2FVd3bj2jPe%2Fvideoblocks-smiling-man-using-laptop-computer-at-kitchen-table-young-business-man-smiling-while-working-on-laptop-at-home-happy-student-studying-online-on-notebook-male-person-browsing-internet_r7vgz7bqe_thumbnail-1080_01.png&f=1&nofb=1&ipt=46acdb16d2346e716da66e5a3767b8c918c806eec8edce8240540a5c36dc1182&ipo=images"
            />
          </div>
          <div className="w-full h-[40vh] lg:h-[60vh]  ">
            <div className="absolute w-full h-[40vh] lg:h-[60vh] bg-black/40 top-0"></div>
            <div className=" mx-2 md:mx-[100px] text-left absolute top-16 md:top-44  h-auto w-full   md:w-1/2 text-white  ">
              <h1 className=" text-sm md:text-md font-semibold">EDUCATION BENEFITS</h1>
              <h1 className=" text-3xl md:text-5xl font-semibold my-2">
                Access More than 100+ Online Tutorials{" "}
              </h1>
              <div className=" w-full md:w-[70%] my-1 md:my-4">
                <p className="font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptatum, quidem, in, eum voluptatem quos dolorum quae
                  voluptates doloremque atque dolorem nobis. Quisquam, quibusdam
                  labore. Quae, quia. Quisquam, quibusdam labore. Quae, quia.
                </p>
              </div>
            </div>
            <img
              className="w-full h-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2FVd3bj2jPe%2Fvideoblocks-smiling-man-using-laptop-computer-at-kitchen-table-young-business-man-smiling-while-working-on-laptop-at-home-happy-student-studying-online-on-notebook-male-person-browsing-internet_r7vgz7bqe_thumbnail-1080_01.png&f=1&nofb=1&ipt=46acdb16d2346e716da66e5a3767b8c918c806eec8edce8240540a5c36dc1182&ipo=images"
            />
          </div>
          
          
        </Carousel>
      </div>
    );
  }
}
