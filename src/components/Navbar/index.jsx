import Menu from "./Menu";
import SearchBox from "../SearchBox";
import React, { useState } from "react";
import Login from "../Login";

const Navbar = ({ ...rest }) => {
  return (
    <div
      className="grid bg-black w-screen grid-flow-col h-[50px] items-center fixed z-10"
      {...rest}
    >
      <div></div>

      <div className="ml-auto items-center">
        <Menu />
      </div>

      <div className="ml-auto items-center flex z-1 mr-5">
        <SearchBox placeholder="Search"/>
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
