import Menu from "./Menu";
import SearchBox from "../SearchBox";
import React, { useState } from "react";
import Login from "../Login";

// import ModalComponent from "../Login/ModalComponent";

// const BUTTON_WRAPPER_STYLES = {
//   position: 'relative',
//   zIndex: 1
// }

const Navbar = ({ ...rest }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  // };

  // const closeModal = () => {
  //   setIsOpen(false);
  // };

  return (
    <div
      className="grid bg-black w-[100%] grid-flow-col h-[50px] items-center fixed z-10"
      {...rest}
    >
      <div></div>

      <div className="ml-auto items-center">
        <Menu />
      </div>

      <div className="ml-auto items-center flex z-1">
        <SearchBox />
       <Login />
      </div>
    </div>
  );
};


export default Navbar;
