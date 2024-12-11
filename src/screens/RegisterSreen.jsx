import React from "react";
import RegisterComponent from "../components/RegisterComponent";
import RegisterNav from "../layout/RegisterNav";

const RegisterSreen = () => {
  return (
    <div className="bg-background1 h-screen ">
      <RegisterNav />
      <RegisterComponent />
    </div>
  );
};

export default RegisterSreen;
