import { useState } from "react";
import Icon from "../Icon";

const DropDown = ({ answer, question }) => {
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={handelClick}
        className="w-[60%] text-md font-sans mx-auto flex"
      >
        <div className="flex text-2xl font-sans font-bold justify-around">

          <div>
            <p>{question}</p>
          </div>
          
          <div className="mt-2">
            {open ? (
              <Icon
                onClick={handelClick}
                type="arrow_up"
                size={20}
                color="black"
              />
            ) : (
              <Icon
                type="arrow_down"
                size={20}
                color="black"
              />
            )}
          </div>
        </div>
      </button>

      {open ? (
        <div className="w-[60%] text-md font-sans mx-auto mt-5">
          <ul>
            <li>{answer}</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default DropDown;
