import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../../assets/Logo.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to={"/blog"}>
            <img src={Logo} alt="Logo" className="h-9" />
          </Link>
          <div
            className="w-[30px] md:hidden cursor-pointer flex items-center"
            onClick={() => setOpen(!open)}
          >
            {open ? <XMarkIcon /> : <Bars3Icon />}
          </div>
        </div>

        <ul className="hidden uppercase items-center gap-8 font-poppins md:flex">
          <li>
            <Link to={"/"} className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
