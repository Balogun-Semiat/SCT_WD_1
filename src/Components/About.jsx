import React from "react";
import aboutimg from "../images/businessimg.jpg";
import aboutimg2 from "../images/buss.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="about p-10 relative flex flex-col justify-center"
    >
      <h1 className="text-6xl font-extrabold text-gray-800 hidden lg:block mb-5 xl:mb-0">
        About Our <br /> Company
      </h1>
      <h1 className="text-5xl font-bold text-gray-800 block lg:hidden mb-6">
        About Our Company
      </h1>
      <div className="grid md:grid-cols-2  justify-center items-center gap-5 xl:h-[50vh]">
        <div className="">
          <img
            src={aboutimg2}
            alt=""
            className="w-full xl:w-[300px] rounded-md "
          />
        </div>

        <div className="hidden xl:block absolute bottom-10 left-[320px] shadow-lg">
          <img src={aboutimg} alt="aboutimg" className="w-[300px] rounded-md" />
        </div>

        <div>
          <p className="text-xl text-gray-700 mt-4">
            We are a leading web development company dedicated to providing
            top-notch solutions for businesses of all sizes. Our team of
            experienced developers and designers work tirelessly to create
            stunning, user-friendly websites that drive results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
