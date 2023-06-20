import React, { useEffect } from "react";

import { houseData } from "../components/data";
import { useParams, Link } from "react-router-dom";

import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineExposure } from "react-icons/md";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = houseData.find((house) => {
    return house.id === parseInt(id);
  });
  // console.log(house);

  return (
    <section className="px-14">
      <div className="container mb-14  mx-auto min-h-[800px]">
        <h1 className="font-bold text-lg">{house.name}</h1>
        <div className="text-sm flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <span className="font-medium">{house.address}</span>
          <div className="flex flex-row gap-1 pt-2 lg:pt-1">
            <span className="bg-green-500 text-white rounded-full px-3 font-medium">
              {house.type}
            </span>
            <span className="bg-blue-700 text-white rounded-full px-3 font-medium">
              {house.country}
            </span>
          </div>
          <span className="font-semibold text-2xl text-green-500">
            ${house.price}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="">
            <img className="w-[710px] mt-4" src={house.image} alt="House" />
          </div>
        </div>
        <div className="flex flex-col my-2 gap-y-1 lg:flex-row lg:gap-2 lg:my-4 text-sm font-medium">
          <div className="flex items-center gap-[2px] text-blue-900 leading-3">
            <MdOutlineBedroomChild />
            {house.bedrooms}
          </div>
          <div className="flex items-center gap-[2px] text-blue-900 leading-3">
            <MdOutlineBathroom /> {house.bathrooms}
          </div>
          <div className="flex items-center gap-[2px] text-blue-900 leading-3">
            <MdOutlineExposure />
            {house.surface}
          </div>
        </div>
        <div className="max-w-[710px] flex text-justify font-medium">
          {house.description}
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
