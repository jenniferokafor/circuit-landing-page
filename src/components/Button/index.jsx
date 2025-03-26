import s from "./button.module.scss";
import { iconMap } from "./utils";

const Button = ({
  mode = "light", // 'light' or 'dark'
  size = "small", // 'small' or 'medium'
  icon, // icon key string from the iconMap
  iconPosition = "left", // 'left' or 'right'
  children,
  ...rest
}) => {
  const modeClass = mode === "dark" ? s.dark : s.light;
  const sizeClass = size === "medium" ? s.medium : s.small;

  const renderIcon = () => {
    if (!icon || !iconMap[icon]) return null;
    return iconMap[icon]();
  };

  return (
    <button {...rest} className={`${s.button} ${modeClass} ${sizeClass}`}>
      {icon && iconPosition === "left" && (
        <span className={`${s.icon} ${s["icon-left"]}`}>{renderIcon()}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className={`${s.icon} ${s["icon-right"]}`}>{renderIcon()}</span>
      )}
    </button>
  );
};

export default Button;
