import React, { useState } from "react";
import Button from "./Button";
import { CheckSquare, User } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className={`flex justify-between items-center px-4 sm:px-10`}>
      <div className={`flex items-center gap-2`}>
        <div className="bg-blue-600 p-2 rounded-xl">
          <CheckSquare size={28} />
        </div>
        <h1 className="text-[3rem] sm:text-[3rem] text-white font-bold akaya-kanadaka-regular">Checkpoint</h1>
      </div>
      <div className={`hidden sm:flex gap-3 mr-10 font-medium`}>
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
