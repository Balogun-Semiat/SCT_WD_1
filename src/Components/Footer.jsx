import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-center  text-white py-5">
      <p className="mb-2">&copy; 2024 Semiat. All rights reserved.</p>

      <div className="flex items-center justify-center gap-3 mb-1">
        <span className="border border-white rounded-full p-1 text-white">
          <a
            href="https://api.whatsapp.com/send?phone=2347086495645&text=Hi%20Semiat!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className=" text-xl" />
          </a>
        </span>

        <span className="border border-white rounded-full p-1 text-white">
          <a
            href="https://www.linkedin.com/in/semiat-balogun-a4b06b27b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="" />
          </a>
        </span>

        <span className="border border-white rounded-full p-1 text-white">
          <a
            href="https://www.facebook.com/semiat.balogun.18?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="" />
          </a>
        </span>

        <span className="border border-white rounded-full p-1 text-white">
          <a
            href="mailto:balogunsemiat2019@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuMailPlus className="" />
          </a>
        </span>
      </div>

      <p className="text-white text-sm mt-2">Designed by Semiat</p>
    </div>
  );
};

export default Footer;
