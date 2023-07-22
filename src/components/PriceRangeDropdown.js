import React, { useContext, useState } from "react";

import {
  RiMoneyDollarCircleLine,
  RiArrowDownLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 110000",
    },
    {
      value: "110000 - 120000",
    },
    {
      value: "120000 - 130000",
    },
    {
      value: "130000 - 140000",
    },
    {
      value: "140000 - 150000",
    },
    {
      value: "150000 - 200000",
    },
  ];

  const handleUpClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        onClick={handleUpClick}
        className="lg:px-4 py-3 mb-2 flex flex-row justify-content items-center gap-4 transition"
      >
        <RiMoneyDollarCircleLine className="text-blue-800" />
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-x">{price}</h1>
          <p className="font-light text-sm">Select your type</p>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="text-blue-800 ml-[20px]" />
        ) : (
          <RiArrowDownLine className="text-blue-800 ml-[20px]" />
        )}
      </Menu.Button>

      <Menu.Items className="px-6 py-6 text-[15px] space-y-4 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg transition">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => {
                setPrice(price.value);
                setIsOpen(false);
              }}
              className="cursor-pointer transition hover:text-blue-800"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
