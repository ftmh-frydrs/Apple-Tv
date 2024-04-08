import { GoX } from "react-icons/go";
import { FaApple } from "react-icons/fa6";
import { IoPerson, IoChevronDown, IoChevronUp } from "react-icons/io5";

const iconComponents = {
  close: GoX,
  apple_logo: FaApple,
  person: IoPerson,
  arrow_down: IoChevronDown,
  arrow_up: IoChevronUp,
};

const Icon = ({ type, size, color }) => {
  const SelectedIcon = iconComponents[type];
  return <SelectedIcon size={size} color={color} />;
};

export default Icon;
