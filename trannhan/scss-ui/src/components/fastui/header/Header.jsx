import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="fui-header">
      <div className="container wrap">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
