import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";

import { RiSearch2Line } from "react-icons/ri";

import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="px-[60px] max-w-[960px] mx-auto mt-6 flex flex-col lg:flex-row py-4 justify-between items-center lg:gap-x-2 lg:shadow-lg bg-gray-100">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        className="bg-blue-800 hover:bg-blue-900 rounded-xl text-white px-4 py-3 lg:px-6 mt-2 w-[200px] lg:w-[80px] flex justify-center"
        onClick={handleClick}
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
