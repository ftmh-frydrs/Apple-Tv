import Button from "../Button";
import SearchBox from "../SearchBox";

const Navbar = () => {
  return (
    <div className="flex">
      <div>
        <ul>
          <li>Apple Tv+</li>
          <li>MLS Season Pass</li>
        </ul>
      </div>

      <div>
        <Button button="Sign In" />
      </div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Navbar;
