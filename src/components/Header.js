import React, { useState } from "react";

import { Link } from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";

const Header = () => {
  // const [loginPopup, setLoginPopup] = useState(false);
  // const [signinPopup, setSigninPopup] = useState(false);
  
  return (
    <header className="py-4 pb-4 bg-[#2D499D] drop-shadow-xl text-white">
      <div className="container mx-auto flex justify-between">
        <div className="container mx-auto font-bold text-lg ">
          <Link to="/">
            <button>Anurag.real</button>
          </Link>
        </div>
        <div className="flex items-center gap-6 justify-between">
          <button className="font-semibold">
            Login
          </button>
          <button className="font-semibold">
            Signup
          </button>
          {/* <Login trigger={loginPopup} setTrigger={setLoginPopup} className="fixed bg-transparent" />
          <Signup trigger={signinPopup} setTrigger={setSigninPopup} className="fixed"/> */}
        </div>
      </div>
    </header>
  );
};

export default Header;


// onClick={()=>{
//   setSigninPopup(true);
//   setLoginPopup(false);
// }}

// onClick={() => {
//   setLoginPopup(true);
//   setSigninPopup(false);
// }}