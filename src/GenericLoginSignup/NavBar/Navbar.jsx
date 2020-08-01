import MaskPic from "../../assets/mask3.png";
import React from "react";
import "./Navbar.css";
import Logout from "./Logout/Logout";

const Navbar = () => {
  return (
    <nav>
      <img src={MaskPic} alt="" id="logo"></img>
      <Logout />
    </nav>
  );
};

export default Navbar;
