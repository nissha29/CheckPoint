import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={`flex justify-between items-center px-4 sm:px-10`}>
      <div className={`text-[3rem] sm:text-[3rem] font-bold text-white`}>
        CheckPoint
      </div>
      <div className={`hidden sm:flex gap-2 mr-10`}>
        <NavLink to={"/signup"}>
          <Button text={"Sign up"} />
        </NavLink>

        <NavLink to={"/signin"}>
          <Button text={"Sign in"} />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
