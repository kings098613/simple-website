import React from "react";
import netisens1 from "../../public/netisens1.png";
import nav from "../../public/nav.png";
import work from "../../public/work.png";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div className="h-screen w-full bg-[#160433]">
      <div className=" h-[90%] w-ful flex flex-row gap-5  justify-center ">
        <div className=" w-[48%] flex justify-center items-center">
          <img className="mb-5" src={netisens1} alt="" />
        </div>
        <div className=" flex flex-col justify-center items-center gap-5 w-[38%] ">
          <div>
            <img className="h-[4rem] w-[20rem]" src={nav} alt="" />
          </div>
          <div>
            <img className="h-[4rem] w-[20rem]" src={work} alt="" />
          </div>
          <div className=" w-[50%] text-xl ">
            <p className=" text-white w-[15rem] text-left ">
              innovate workspace- public, private, and semi-private. Boost your
              prnoductivity!
            </p>
          </div>
          <div>
            <Link to={"register"}>
              <button className="bg-[#FF9D00] text-white px-[7rem] py-2 rounded-lg hover:bg-[#160433] border-colour-2 border-2   cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
          <div>
            <button className=" bg-[#FF9D00] border-colour-2 border-2 rounded-lg text-white px-[4rem] py-2 cursor-pointer hover:bg-[#160433]">
              i Am Already Registered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
