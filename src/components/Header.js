import React, { useState } from "react";

import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Header = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signinPopup, setSigninPopup] = useState(false);
  
  return (
    <header className="py-6 border-b mb-8 shadow">
      <div className="container mx-auto flex justify-between">
        <div className="container mx-auto font-bold text-lg">
          <Link to="/">
            <button>Anurag.real</button>
          </Link>
        </div>
        <div className="flex items-center gap-6 justify-between">
          <button
            className="hover:text-violet-900 transition"
            onClick={() => {
              setLoginPopup(true);
              setSigninPopup(false);
            }}
          >
            Login
          </button>
          <button
            className="text-white rounded bg-blue-800 hover:bg-blue-900 px-3 py-1 pb-3"
            onClick={()=>{
              setSigninPopup(true);
              setLoginPopup(false);
            }}
          >
            Signup
          </button>
          <Login trigger={loginPopup} setTrigger={setLoginPopup} className="fixed bg-transparent" />
          <Signup trigger={signinPopup} setTrigger={setSigninPopup} className="fixed"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
