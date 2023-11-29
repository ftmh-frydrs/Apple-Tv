import Menu from "./Menu";
import Button from "../Button";
import SearchBox from "../SearchBox";

const Navbar = () => {
    return (
      <div className="grid bg-black w-[100%] grid-flow-col h-[50px] items-center">
        <div></div>
  
        <div className="ml-auto items-center">
          <Menu />
        </div>
  
        <div className="ml-auto items-center">
          <SearchBox />
          <Button button="Sign In" />
        </div>
      </div>
    );
  };
   

export default Navbar;
