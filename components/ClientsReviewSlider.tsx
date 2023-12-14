import { MoveLeft, MoveRight } from "lucide-react";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export class ClientsReviewSlider extends Component {
  render() {
    return (
      <div className="w-full h-auto">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          autoPlay={true}
          className="relative w-full  md:w-[800px] h-auto "
        >
          <div className=" w-full h-full flex flex-col  md:flex-row gap-2 py-4 ">
            <div className="md:w-[40%] h-full  flex flex-col  justify-center items-center">
              <div className="  w-44 md:w-52 h-44 md:h-52 ">
                <img
                  className="w-full h-full"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Favatars-99%2F62%2Favatar-375-456327-512.png&f=1&nofb=1&ipt=fb42da24b11d343deb9f1e8e00038d30b7035270058e5699a173385bbfb5ee9b&ipo=images"
                />
              </div>
              <h1 className="my-4 text-xl font-semibold  text-gray-700">
                Hari Bdr
              </h1>
            </div>
            <div className="w-full md:w-[60%] h-full  flex items-center relative p-3 md:p-8 ">
              <div className="absolute -top-4 md:top-16 md:left-0 text-6xl  text-gray-500">
                "
              </div>
              <div className="absolute top-[135px] md:top-44 right-2 md:right-0 text-6xl  text-gray-500">
                "
              </div>
                <p className="font-light text-md md:text-lg text-justify text-gray-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat deleniti amet dolorum ea eos, delectus aperiam vero
                  adipisci tenetur illo eaque minima dicta blanditiis quam
                  labore facere autem impedit rerum?
                </p>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col  md:flex-row gap-2 py-4 ">
            <div className="md:w-[40%] h-full  flex flex-col  justify-center items-center">
              <div className="  w-44 md:w-52 h-44 md:h-52 ">
                <img
                  className="w-full h-full"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Favatars-99%2F62%2Favatar-375-456327-512.png&f=1&nofb=1&ipt=fb42da24b11d343deb9f1e8e00038d30b7035270058e5699a173385bbfb5ee9b&ipo=images"
                />
              </div>
              <h1 className="my-4 text-xl font-semibold  text-gray-700">
                Hari Bdr
              </h1>
            </div>
            <div className="w-full md:w-[60%] h-full  flex items-center relative p-3 md:p-8 ">
              <div className="absolute -top-4 md:top-16 md:left-0 text-6xl  text-gray-500">
                "
              </div>
              <div className="absolute top-[135px] md:top-44 right-2 md:right-0 text-6xl  text-gray-500">
                "
              </div>
                <p className="font-light text-md md:text-lg text-justify text-gray-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quaerat deleniti amet dolorum ea eos, delectus aperiam vero
                  adipisci tenetur illo eaque minima dicta blanditiis quam
                  labore facere autem impedit rerum?
                </p>
            </div>
          </div>
          
        </Carousel>
      </div>
    );
  }
}
