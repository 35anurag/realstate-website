import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <header className="py-4 pb-4 bg-[#2D499D] drop-shadow-xl text-white">
      <div className="container mx-auto flex justify-between">
        <div className="container mx-auto font-bold text-lg ">
          <Link to="/">
            <button>Real.estate</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
