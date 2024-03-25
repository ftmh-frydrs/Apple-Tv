import { GoX } from "react-icons/go";
import { FaApple } from "react-icons/fa6";

const iconComponents = {
  close: GoX,
  apple_logo: FaApple,
};

const Icon = ({ type, size, color }) => {
  const SelectedIcon = iconComponents[type];
  return <SelectedIcon size={size} color={color} />;
};

export default Icon;
