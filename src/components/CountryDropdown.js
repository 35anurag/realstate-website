import React, { useContext, useState } from "react";

import { RiMapPinLine, RiArrowDownLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { location, setLocation, locations } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        onClick={handleUpClick}
        className="lg:px-4 py-3 mb-2 flex flex-row justify-content items-center gap-4 transition"
      >
        <RiMapPinLine className="text-blue-800" />
        <div className="flex flex-col">
          <h1 className="font-semibold text-x flex items-start">{location}</h1>
          <p className="font-light text-sm">Select your place</p>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-blue-800 ml-[20px]" />
        ) : (
          <RiArrowDownLine className="text-blue-800 ml-[20px]" />
        )}
      </Menu.Button>

      <Menu.Items className="px-6 py-6 text-[15px] space-y-4 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg transition">
        {locations.map((location, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setLocation(location);
                setIsOpen(false);
              }}
              className="cursor-pointer transition hover:text-blue-800"
              as="li"
              key={index}
            >
              {location}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
