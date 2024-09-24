import React, { useState } from "react";
import CustomInput from "../../common/CustomInput";

type Props = {};

const LandingPage = (props: Props) => {
  const [subscribe, setSubscribe] = useState({
    email: "",
  });
  const handleSubscribe = (e: any) => {
    e.preventDefault();

    // Handle form submission logic here

    console.log("Subscribed to newsletter", subscribe);

    setSubscribe({
      email: "",
    });
  };

  return (
    <>
      <img
        src="assets/Home.png"
        alt="Anime Land"
        className="w-[100vw] h-[100dvh] absolute -z-10"
      />
      <div className="absolute w-[35em] space-y-10 top-[40%] left-[5%] -translate-x-[5%] -translate-y-[40%]">
        <h1 className="text-white text-[4.5em] leading-[70px]">
          Welcome to Gates
        </h1>
        <p className="text-white text-[1.5em] leading-8">
          Get the latest news on your favorite manga, anime and manhwa around
          the world!
        </p>
        <form onSubmit={handleSubscribe}>
          <CustomInput
            type="email"
            label={"Subscribe"}
            placeholder="Enter Your Email"
            isArrow
            value={subscribe.email}
            onChange={(e: any) =>
              setSubscribe({ ...subscribe, email: e.target.value })
            }
          />
        </form>
      </div>
    </>
  );
};

export default LandingPage;
