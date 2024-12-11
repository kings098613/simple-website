import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

const Category = () => {
  return (
    <div className="bg-yellow-500 w-full h-screen flex justify-center items-center">
      <div className="bg-white w-[40%] h-[60%] rounded-xl flex flex-col justify-center items-center gap-7 ">
        <div className=" w-[17rem] h-[2.5rem] border-2 flex flex-row  items-center justify-center ">
        <FaUserLarge/>
          <input type="text"
            className=" w-[90%] h-[2.4rem] px-2 text-white "
            placeholder="Username"
          />
        </div>
        <div className="w-[17rem] h-[2.5rem] border-2  flex flex-row items-center just">
          <IoIosLock className="text-3xl" />
          <input
            type="text"
            className=" w-[88%] h-[2.4rem] text-white"
            placeholder="Password"
          />
        </div>
        <div className="bg-[#222C3A] text-white w-[17rem] h-[2.5rem] flex flex-col justify-center items-center ">
          <button className="font-bold">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
