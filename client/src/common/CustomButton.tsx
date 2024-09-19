import React from "react";

type Props = {
  text: string;
};

const CustomButton = ({ text }: Props) => {
  return (
    <div className="w-fit bg-gradient-to-tl from-[#313131] via-[#000000] py-1 px-4 rounded-[5px] text-white border border-white]">
      {text}
    </div>
  );
};

export default CustomButton;
