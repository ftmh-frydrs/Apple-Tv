import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = ({ ...rest }) => {
  return (
    <ul {...rest} className="text-white flex justify-center gap-6 text-lg">
      <li>
        <Link to="/apple_tv">Apple Tv+</Link>
      </li>
      <li>
        <Link to="/mls" className="text-gray-500">
          MLS Season Pass
        </Link>
      </li>
      <Outlet />
    </ul>
  ); 
};

export default Menu;