import React from "react";

type ParamsProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactElement | string;
  onClick?: () => void;
  restProps?: Record<string, any>;
};

const Button: React.FC<ParamsProps> = ({
  type,
  className,
  children,
  onClick,
  ...restProps
}) => {
  return (
    <button type={type} className={className} onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
