import React, { useState } from "react";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted", loginData);

    setLoginData({
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

      {/* Input fields and submit button */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  space-y-6">
        <CustomInput
          type="email"
          label={"Email"}
          placeholder="Enter your Email"
          value={loginData.email}
          onChange={(e: any) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <CustomInput
          type="password"
          label={"Password"}
          placeholder="Enter your password"
          value={loginData.password}
          onChange={(e: any) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <div className="flex justify-center">
          <CustomButton type="submit" text="Login" />
        </div>
      </form>
    </>
  );
};

export default Login;
