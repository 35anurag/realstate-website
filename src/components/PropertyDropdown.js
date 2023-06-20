import React, { useContext, useState } from "react";

import { RiHome4Line, RiArrowDownLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(locations);

  const handleUpClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        onClick={handleUpClick}
        className="lg:px-4 py-3 mb-2 flex flex-row justify-content items-center gap-4 transition border-2"
      >
        <RiHome4Line className="text-blue-800" />
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-x">{property}</h1>
          <p className="font-light text-sm">Select your type</p>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-blue-800 ml-[20px]" />
        ) : (
          <RiArrowDownLine className="text-blue-800 ml-[20px]" />
        )}
      </Menu.Button>

      <Menu.Items className="px-6 py-6 text-[15px] space-y-4 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg transition">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setProperty(property);
                setIsOpen(false);
              }}
              className="cursor-pointer transition hover:text-blue-800"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
