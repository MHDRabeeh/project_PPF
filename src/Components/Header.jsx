import React from "react";
import { Logo } from "./Logo";
import './Header.css'
import { Navlink } from "./Navlink";



const Header = () => {
  return (
    <div className="bg-white/70  sticky top-0 z-20 mx-auto flex w-full h-20 items-center justify-between p-8">
      <Logo />
      <div className=" w-1/3 ">
        <Navlink />
      </div>
    </div>
  )
};

export default Header;
