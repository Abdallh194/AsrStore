import React, { Fragment } from "react";
import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <TopNavbar />
      <BottomNavbar />
    </nav>
  );
};

export default Navbar;
