import { CSSProperties, useState } from "react";
import { TiArrowRightOutline } from "react-icons/ti";

interface CustomInputProps {
  placeholder?: string;
  type: "text" | "password" | "email" | "number";
  value: string | number;
  onChange: (e: any) => void;
  style?: CSSProperties;
  label?: string | number;
  isArrow?: boolean;
}
const CustomInput = ({
  placeholder,
  type,
  value,
  onChange,
  style,
  label,
  isArrow,
}: CustomInputProps) => {
  return (
    <div className=" w-[28em] h-[40px] bg-white  flex">
      <div className="relative flex justify-center items-center w-[25%]">
        <label className=" w-[93px] h-[30px] top-[5px] left-2 bg-gradient-to-tl from-[#313131] via-[#000000] text-white text-center">
          {label}
        </label>
      </div>
      <div className="w-[74%]">
        <input
          className="flex-grow size-full  outline-none "
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={style}
        />
      </div>
      <button
        type="submit"
        className={`flex items-center mr-2 ${isArrow ? "flex" : "hidden"}`}>
        {} <TiArrowRightOutline />
      </button>
    </div>
  );
};

export default CustomInput;
