import React from "react";

import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineExposure } from "react-icons/md";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="p-6 bg-white border-2xl shadow-xl hover:shadow-2xl transition max-h-[430px]">
      <img
        className="rounded-tr-[60px] rounded-bl-[60px] w-full mb-6 max-h-[8rem]"
        src={image}
        alt="house"
      ></img>
      <div className="flex flex-row gap-3 text-sm">
        <div className="bg-green-500 text-white rounded-full px-3 font-medium">
          {type}
        </div>
        <div className="bg-blue-700 text-white rounded-full px-3">
          {country}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="pt-2 font-bold max-w-[220px]">{address}</div>
        <div className="flex items-center gap-[2px] text-gray-500 font-medium leading-3">
          <MdOutlineBedroomChild />
          {bedrooms}
        </div>
        <div className="flex items-center gap-[2px] text-gray-500 font-medium leading-3">
          <MdOutlineBathroom /> {bathrooms}
        </div>
        <div className="flex items-center gap-[2px] text-gray-500 font-medium leading-3">
          <MdOutlineExposure />
          {surface}
        </div>
        <div className="text-blue-700 font-bold">${price}</div>
      </div>
    </div>
  );
};

export default House;
