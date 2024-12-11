import React from "react";
import { Link } from "react-router-dom";
const RegisterComponent = () => {
  return (
    <div className=" h-[85%] flex justify-center items-center">
      <div className="bg-white rounded-xl w-[45%] h-[90%] flex items-center flex-col gap-5 py-5">
        <div className=" flex w-[90%] flex-col items-center">
          <h3 className="text-[24px] ">
            Find your <span className="text-[#7AE578]">perfect</span> space,
            with our help
          </h3>
          <h1 className="text-[40px]">Welcome!</h1>
          <p className="text-[20px] text-[#ADABAB]">
            Enter your info to proceed securely.
          </p>
        </div>
        {/* input div */}
        <div className=" flex flex-col justify-center items-center gap-5 w-[90%] h-[9rem]  ">
          <div className="flex flex-row gap-5">
            <div className="border-2 border-[#ADABAB] w-[17rem] h-[2.7rem] rounded-2xl">
              <input
                type="text"
                className="w-full h-[2.4rem] outline-none rounded-2xl px-3"
                placeholder="UserName"
              />
            </div>
            <div className="border-2 border-[#ADABAB] w-[17rem] h-[2.7rem] rounded-2xl">
              <input
                type="text"
                className="w-full h-[2.4rem] outline-none rounded-2xl px-3 "
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="border-2 border-[#ADABAB] w-[17rem]  h-[2.5rem] rounded-2xl ">
              <select
                name=""
                id=""
                className="w-full h-[2.2rem] outline-none rounded-2xl px-3 text-[#ADABAB]"
              >
                <option value="">Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div className="border-2 border-[#ADABAB] w-[17rem]  h-[2.5rem] rounded-2xl">
              <input
                type="number"
                className="w-full h-[2.2rem] outline-none rounded-2xl px-3"
                placeholder="Phone No"
              />
            </div>
          </div>
        </div>
        {/* get started button */}
        <div className=" w-[90%] flex flex-col justify-center items-center mt-5 gap-3 ">
          <div className="bg-[#FF9D00] w-[17rem] h-[2.5rem] flex justify-center items-center rounded-2xl text-center text-white font-bold text-l shadow-custom">
            <button>GET STARTED</button>
          </div>

          <div className="text-[#ADABAB]">
            Dont have an account?
            <span className="text-[#9FDAF7] ml-3">
              <Link to={"/signin"}>Sign Up</Link>
            </span>
          </div>
          <div className="text-[#ADABAB]">
            <p className="text-center">
              By filling the following information and clicking this button you
              have agreed to our
              <span className="underline ml-2">Terms of Service</span> and
              <span className="underline ml-2">Privacy Policy </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
