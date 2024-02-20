import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import Signin from "./Signin";

const Signup = () => {
  return (
    <div className="bg-slate-500 h-screen flex justify-center items-center">
      <div className=" flex flex-col text-center justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label="Sign Up" />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox label={"First Name"} placeholder={"John"} />
          <InputBox label={"Last Name"} placeholder={"Doe"} />
          <InputBox label={"Email"} placeholder={"johndoe@example.com"} />
          <InputBox label={"Password"} placeholder={""} />
          <div className="pt-4">
            <Button label={"Signup"} onClick={() => {}} />
          </div>

          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
