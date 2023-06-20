import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Login = (props) => {
  return props.trigger ? (
    <div className=" ">
      <div className="min-h-[520px] fixed top-[70px] left-[410px] flex items-center z-10">
        <div className=" flex w-1/2 transform animate-slide-down">
          <div className="w-[450px] h-[450px] mx-auto bg-gray-200 rounded shadow-lg">
            <button
              className="p-4 text-2xl text-blue-400"
              onClick={() => {
                props.setTrigger(false);
              }}
            >
              <AiOutlineCloseCircle />
            </button>
            <div className="text-center py-8">
              <h1 className="text-3xl font-bold text-center text-blue-400">
                Log In
              </h1>
              <form className="flex flex-col py-4">
                <input
                  className="p-3 my-2 mx-[90px] rounded text-black"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="p-3 my-2 mx-[90px] rounded  text-black"
                  type="password"
                  placeholder="Enter your password"
                />
              </form>
              <button className="bg-blue-500 px-[115px] py-2 rounded hover:bg-blue-600 shadow text-white">
                Login
              </button>
              <p className="text-sm py-3">
                <span className="text-gray-400">Already created account?</span>
                <button
                  className="text-blue-400"
                  // onClick={()=>{
                  //   props.setTrigger(false)
                  //   setSigninPopup(true)
                  // }}
                >
                  Sign In
                </button>
                {/* <Signup trigger={signinPopup} className="fixed"/> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Login;
