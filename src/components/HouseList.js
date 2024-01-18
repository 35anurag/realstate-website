import React, { useContext } from "react";

import House from "./House";
import { HouseContext } from "./HouseContext";

import { Link } from "react-router-dom";

import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log(houses);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-blue-800 text-4xl mt-[100px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="mx-auto text-gray-400 text-2xl mt-[150px] text-center">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-20 mx-20">
      <div className="container mx-auto mt-[16rem] lg:mt-[-4rem] md:pt-[3rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} >
              <div key={index}>
                <House house={house} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
