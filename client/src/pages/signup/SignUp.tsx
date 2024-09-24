import React, { useState } from "react";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";

type Props = {};

const SignUp = (props: Props) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Form submit", userData);

    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      {/* Background Image */}
      <img
        src="assets/anime-land.png"
        alt="Anime Land"
        className="w-[100vw] h-[100dvh] absolute -z-10"
      />

      {/* signup form */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  space-y-6">
        <CustomInput
          type="text"
          label={"Name"}
          placeholder="Enter your Name"
          value={userData.name}
          onChange={(e: any) =>
            setUserData({ ...userData, name: e.target.value })
          }
        />
        <CustomInput
          type="email"
          label={"Email"}
          placeholder="Enter your Email"
          value={userData.email}
          onChange={(e: any) =>
            setUserData({ ...userData, email: e.target.value })
          }
        />
        <CustomInput
          type="password"
          label={"Password"}
          placeholder="Enter your password"
          value={userData.password}
          onChange={(e: any) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <div className="flex justify-center">
          <CustomButton type={"submit"} text="SignUp" />
        </div>
      </form>
    </>
  );
};

export default SignUp;
