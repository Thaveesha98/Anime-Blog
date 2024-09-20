import React from "react";

type Props = {
  type?: "submit";
  text: string;
};

const CustomButton = ({ text, type }: Props) => {
  return (
    <button
      type={type}
      className="w-fit bg-gradient-to-tl from-[#313131] via-[#000000] py-1 px-4 rounded-[5px] text-white border border-white] hover:scale-105 active:scale-100">
      {text}
    </button>
  );
};

export default CustomButton;
