import { GoX } from "react-icons/go";
  
  
  const iconComponents = {
    close : GoX
  };
  
  const Icon = ({ type, size, color }) => {
    const SelectedIcon = iconComponents[type];
    return <SelectedIcon size={size} color={color} />;
  };
  
  export default Icon;