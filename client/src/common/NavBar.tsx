import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const NavBar: React.FC<Props> = () => {
  return (
    <div className="w-full h-[4em] bg-white flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-black ml-[4em]">
        <img src="assets/logo01.png" alt="logo" className="h-[3em]" />
      </div>

      {/* Navigation Links */}
      <div className="text-black flex gap-[4em] mr-[5em]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline opacity-75 underline-offset-8"
              : "text-gray-700"
          }>
          Home
        </NavLink>
        <NavLink
          to="/connect"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline opacity-75 underline-offset-8"
              : "text-gray-700"
          }>
          Connect
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline opacity-75 underline-offset-8"
              : "text-gray-700"
          }>
          Blog
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline opacity-75 underline-offset-8"
              : "text-gray-700"
          }>
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "font-bold underline opacity-75 underline-offset-8"
              : "text-gray-700"
          }>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
