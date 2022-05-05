import React, { useState } from "react";
import slider1 from "../../img/banner/banner1.jpg";
import slider2 from "../../img/banner/banner2 (1).jpg";
import slider3 from "../../img/banner/banner3.jpg";
import slider4 from "../../img/banner/banner4.jpg";
import slider5 from "../../img/banner/banner5.jpg";
import slider6 from "../../img/banner/banner2 (2).jpg";
import slider7 from "../../img/banner/banner2 (3).jpg";
import {
  ArrowNarrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const bannerItems = [
    {
      img: slider1,
      title: "Ocean Blue Pebbles 20mm",
      description:
        "At Stone Warehouse, we offer a huge range of gravel, chippings and aggregate suitable for a variety of applications to help put the finishing touches on your outdoor projects.From decorative pea gravel to gravel stones for landscaping, ",
      url: "/inventory",
    },
    {
      img: slider2,
      title: "Snow White Pebbles 20-30mm",
      description:
        "At Stone Warehouse, we offer a huge range of gravel, chippings and aggregate suitable for a variety of applications to help put the finishing touches on your outdoor projects.From decorative pea gravel to gravel stones for landscaping, ",

      url: "/inventory",
    },
    {
      img: slider3,
      title: "Red Granite Chippings 20mm",
      description:
        "At Stone Warehouse, we offer a huge range of gravel, chippings and aggregate suitable for a variety of applications to help put the finishing touches on your outdoor projects.From decorative pea gravel to gravel stones for landscaping, ",

      url: "/inventory",
    },
    {
      img: slider4,
      title: "Yorkshire Cream Pebbles 20mm",
      description:
        "At Stone Warehouse, we offer a huge range of gravel, chippings and aggregate suitable for a variety of applications to help put the finishing touches on your outdoor projects.From decorative pea gravel to gravel stones for landscaping, ",

      url: "/inventory",
    },
  ];
  const handleLeftBtn = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(bannerItems.length - 1);
    }
  };
  const handleRightBtn = () => {
    if (index === bannerItems.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <section className=" font-mono text-gray-600 md:mb-12 ">
      <div className="">
        <div className="curoselItems relative flex flex-col items-center">
          <div
            style={{ zIndex: 9 }}
            className="curoselInfo absolute h-full   w-full mx-auto px-2 md:w-4/5  flex flex-col justify-center items-center text-white"
          >
            <h2 className="text-2xl md:text-4xl lg:text-6xl z-auto  capitalize font-bold  mb-4 md:mb-6 text-center ">
              {bannerItems[index]?.title}
            </h2>
            <p className="md:text-xl text-xs text-center my-2 md:my-4">
              {bannerItems[index]?.description}
            </p>
            <Link
              to={bannerItems[index]?.url}
              className=" btn-hover flex py-2 items-center px-4 rounded-md  border border-white  md:text-xl text-sm "
            >
              Explore Now <ArrowNarrowRightIcon className="h-6 ml-2" />{" "}
            </Link>
          </div>
          <img
            src={bannerItems[index]?.img}
            alt="slider"
            className="h-full lg:h-[600px] md:h-[500px] min-w-full  blur-[1.5px] object-cover"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      <div className="slider-btn flex justify-center mt-1 mb-4">
        <button
          onClick={handleLeftBtn}
          className="border shadow rounded-full p-1 mr-1 bg-white hover:bg-teal-100 duration-150 ease-in-out"
        >
          <ChevronLeftIcon className=" h-6 md:h-8 text-gray-600 " />
        </button>
        <button
          onClick={handleRightBtn}
          className=" border shadow rounded-full p-1 bg-white  hover:bg-teal-100 duration-150 ease-in-out"
        >
          <ChevronRightIcon className="h-6 md:h-8  text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
