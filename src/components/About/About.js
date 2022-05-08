import React from "react";
import MyHelmet from "../MyHelmet/MyHelmet";
import aboutImage from "../../img/banner/banner1.jpg";

const About = () => {
  return (
    <section className="max-w-[1100px] font-mono text-gray-600 mx-auto min-h-screen flex justify-center items-center px-2">
      <MyHelmet title="about" />

      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          src={aboutImage}
          alt="about-img"
          className="border-4 border-teal-400 w-full md:w-[50%] rounded-lg shadow-lg"
        />
        <div className="about-info md:ml-4 ml-0 w-full md:w-[50%] ">
          <h2 className=" md:text-6xl  text-center md:text-left  text-4xl font-bold tracking-tighter mb-6 ">
            About
          </h2>
          <p className="text-sm md:text-xl text-center md:text-left ">
            Look around our site to find out more about our fantastic range of
            decorative aggregate and landscaping products, and for ideas and
            inspiration on how to make the most of your outdoor living space.
            Our huge range of decorative garden stones will ensure you find
            something to suit any project. We have a friendly, knowledgeable and
            helpful sales team on hand to help you choose the best possible
            decorative stones as while providing a fast and efficient service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
