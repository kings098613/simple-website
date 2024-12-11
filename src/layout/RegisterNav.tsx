import React from "react";
import { Link } from "react-router-dom";
import nav from "../../public/nav.png";

const RegisterNav = () => {
  return (
    <div>
      <div className="h-[5rem]  flex flex-row justify-between px-[2rem]">
        <div className=" flex items-center justify-center">
          <img className="h-12" src={nav} alt="" />
        </div>
        <div className="hidden md:flex text-white    flex-row gap-8 items-center justify-center">
          <Link to={"/"}>Home</Link>
          <Link to={"register"}>SignUp</Link>
          <Link to={"signin"}>SignIn</Link>
          <Link to={"category"}>Category</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterNav;
