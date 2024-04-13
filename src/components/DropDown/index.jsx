import { useState } from "react";
import Icon from "../Icon";

const DropDown = ({ answer, question }) => {
  const [open, setOpen] = useState(false);

  const handelClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mt-3 border-b-2 border-gray-500">
      <button
        onClick={handelClick}
        className="w-[60%] text-md font-sans flex mx-auto pb-1"
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
              <Icon type="arrow_down" size={20} color="black" />
            )}
          </div>
        </div>
      </button>

      {open ? (
        <div className="w-[60%] text-md font-sans mt-5 mx-auto">
          <ul>
            <li>{answer}</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
