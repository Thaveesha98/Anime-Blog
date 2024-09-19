import React from "react";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <>
      {/* Background Image */}
      <img
        src="assets/anime-land.png"
        alt="Anime Land"
        className="w-[100vw] h-[100dvh] absolute -z-10"
      />

      {/* Input fields and submit button */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  space-y-6">
        <CustomInput label={"Name"} placeholder="Enter your Name" />
        <CustomInput label={"Email"} placeholder="Enter your Email" />
        <CustomInput label={"Password"} placeholder="Enter your password" />
        <div className="flex justify-center">
          <CustomButton text="SignUp" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
