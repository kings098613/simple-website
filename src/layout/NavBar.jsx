import React from "react";
import nav from "../../public/nav.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-[5rem] bg-[#160433]  flex flex-row justify-between px-[2rem]">
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
  );
};

export default NavBar;
