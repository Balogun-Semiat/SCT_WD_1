import React from "react";

const Card = ({ icon, header, text }) => {
  return (
    <div className="w-full sm:w-[280px] h-[300px] bg-white shadow-md rounded-lg  flex flex-col justify-center  gap-3 p-5">
      <div className="bg-gray-100 shadow-sm rounded-full w-fit p-2">{icon}</div>
      <h2 className="text-xl font-semibold text-[#D2691E]">{header}</h2>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Card;
