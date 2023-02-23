import React from "react";
import HeroIcon from "../../icons/MenuIcon.jsx";

const Logo = () => {
  return (
    <h3 className="text-3xl font-splash text-red-400 font-medium text-center md:text-left">
      <a href="#">CodingsTrade</a>
    </h3>
  );
};

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[56px] md:h-[64px] px-6 relative">
      <div className="grow-2">
        <Logo />
      </div>
      <div className="grow-[3] hidden md:flex">menu</div>
      <div className="grow-2 hidden md:flex">search</div>
      <div className="md:hidden absolute right-4 ">
        <HeroIcon />
      </div>
    </div>
  );
}
