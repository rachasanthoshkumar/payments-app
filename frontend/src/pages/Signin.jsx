import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const Signin = () => {
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center  ">
        <div className="bg-white w-80 text-center h-max rounded-lg px-4 py-2">
          <Heading label={"Sign In"}/>
          <SubHeading label={"Enter your credentials to access your account"}/>
          <InputBox label={"Email"} placeholder={"johndoe@example.com"}/>
          <InputBox label={"password"}/>
          <div className="pt-4"> 
          <Button label={"Sign In"}/>
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
      </div>
    </div>
  );
};

export default Signin;
