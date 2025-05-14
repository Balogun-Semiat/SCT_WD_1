import React from "react";
import Card from "./Card";
import { FaAccusoft } from "react-icons/fa";

const Solutions = () => {
  return (
    <div id="solutions" className="bg-gray-200 p-10">
      <h1 className="text-6xl font-extrabold text-gray-800 hidden lg:block mb-5">
        What We <br /> Offer
      </h1>
      <h1 className="text-5xl font-bold text-gray-800 block lg:hidden mb-5">
        What We Offer
      </h1>

      <div className="flex flex-wrap gap-10 mt-7">
        <Card
          icon={<FaAccusoft size={"40px"} />}
          header={"Business Website Development"}
          text={
            "Establish your online presence with a sleek, responsive and professional website"
          }
        />
        <Card
          icon={<FaAccusoft size={"40px"} />}
          header={"Custm Web Applications"}
          text={
            "FRom dashboard to booking systems, we build scalable web apps tailored to your workflow"
          }
        />
        <Card
          icon={<FaAccusoft size={"40px"} />}
          header={"E-Commerce Development"}
          text={"Sell online with high-performance storefronts that converts"}
        />
        <Card
          icon={<FaAccusoft size={"40px"} />}
          header={"Site Optimization and Maintenance"}
          text={
            "Improved speed, mobile performance, SEO, and maintain reliability"
          }
        />
      </div>
    </div>
  );
};

export default Solutions;
