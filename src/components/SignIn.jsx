import React from "react";
import signinImage from "../../public/signinImage.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className=" h-screen w-full flex flex-row">
      <div className="bg-[#2980B9] h-[100%] w-[50%] flex flex-row justify-center items-center gap-5">
        <div className="bg-[white] h-[40%] w-[10px] rounded-full"></div>
        <div className="flex flex-col font-semibold h-[40%] w-[40%] gap-14 text-[white] text-4xl justify-center  ">
          <p>Simple</p>
          <p>Login Form</p>
          <p>HTML & CSS</p>
        </div>
      </div>
      <div className="bg-[#2980B9] h-[100%] w-[50%] flex flex-row justify-center items-center">
        <div className="bg-[white] h-[70%] w-[60%] rounded-xl justify-center items-center flex flex-col gap-3">
          <h1 className="font-semibold text-[black] text-3xl py-5 ">Login</h1>
          <hr />
          <div className="border-2 border-[black] h-[30px] w-[20rem] border-x-transparent border-t-transparent ">
            <input
              type="text"
              className="outline-none"
              placeholder="Username"
            />
          </div>
          <div className="border-2 border-[black] h-[30px] w-[20rem] border-x-transparent border-t-transparent ">
            <input
              type="password"
              className="outline-none"
              placeholder="Password"
            />
          </div>
          <p className="">Forgot Password?</p>
          <button className="rounded-full h-[2.5rem] w-[20rem] bg-blue-400 text-[white] ml-5 :hover-[yellow]">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

{
  /* <section className="bg-[#2980B9] w-full h-screen flex flex-row justify-center items-center">
<div className="h-[100%] w-[50%] flex flex-row items-center justify-center gap-5">
  <div className="bg-white h-[40%] w-[10px] rounded-t-full rounded-b-full"></div>
  <div className="w-[25rem] h-[40%] text-6xl flex flex-col gap-9 justify-center text-white px-5 font-semibold">
    <p className="">Simple</p>
    <p>Login Form</p>
    <p>Html & Css</p>
  </div>
</div>
<div className="h-[100%] w-[50%] flex justify-center items-center">
  <div className="w-[80%] h-[80%] bg-white rounded-lg flex flex-col gap-5 ">
    <h1 className="text-5xl  h-[4rem] text-center py-4 ">Login</h1>
    <hr />
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="border-2 border-black w-[20rem] h-[2.5rem] border-x-transparent border-t-transparent">
        <input
          type="text"
          className="w-[19.5rem] h-[2.3rem]  outline-none px-2"
          placeholder="UserName"
        />
      </div>
      <div className="border-2 border-black w-[20rem] h-[2.5rem] border-x-transparent border-t-transparent">
        <input
          type="password"
          className="w-[19.5rem] h-[2.3rem]  outline-none px-2"
          placeholder="Password"
        />
      </div>
      <p className="mr-[9rem] font-semibold text-lg">
        Forgotten Password?
      </p>
      <div className="bg-[#2980B9] h-[2.5rem] w-[20rem] rounded-full text-center ">
        <button className="font-semibold text-white mt-2">Login</button>
      </div>
      <p className="mt-7">
        Not a member ?{" "}
        <span className="text-blue-600 font-bold">Sign Up</span>
      </p>
    </div>
    <div></div>
  </div>
</div>
</section> */
}
