import React, { useState, useEffect, createContext } from "react";

import { houseData } from "./data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(houseData);
  const [location, setLocation] = useState("Location (any)");
  const [locations, setLocations] = useState([]);
  const [property, setProperty] = useState("Property (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  // for all the countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueLocation = ["Location (any)", ...new Set(allCountries)];
    setLocations(uniqueLocation);
    // console.log(uniqueLocation);
  }, []);

  // for all the properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperty = ["Property (any)", ...new Set(allProperties)];
    setProperties(uniqueProperty);
    // console.log(uniqueProperty);
  }, []);

  //for the location if the string contains any
  const handleClick = () => {
    setLoading(true);
    // console.log(location, property, price);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    // min price of the given price value
    const minPrice = parseInt(price.split(" ")[0]);

    // max price of the given price value
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouse = houseData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === location &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      //if all the value are default
      if (isDefault(location) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if property and price is defaultx
      if (!isDefault(location) && isDefault(property) && isDefault(price)) {
        return house.country === location;
      }

      if (isDefault(location) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(location) && isDefault(property) && !isDefault(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === location;
        }        
      }

      if (isDefault(location) && !isDefault(property) && !isDefault(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property;
        }        
      }

      if (isDefault(location) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(location) && !isDefault(property) && isDefault(price)) {
        return house.country === location && house.type === property;
      }

      if (!isDefault(location) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === location && house.type === property;
        }
      }
    });
    setTimeout(() => {
      return (
        newHouse.length < 1 ? setHouses([]) : setHouses(newHouse),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        location,
        setLocation,
        locations,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        prices,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
