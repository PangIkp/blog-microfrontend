import React from "react";

interface ButtonProps {
  text: string;
  to?: string;
  onClick?: () => void;
  LinkComponent?: React.ElementType;
  className?: string;
  type?: "button" | "submit" | "reset"; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  to,
  onClick,
  LinkComponent = "button",
  className = "",
}) => {
  const classNames = `btn btn-primary ${className}`; 

  if (to && LinkComponent !== "button") {
    return (
      <LinkComponent to={to} className={classNames} onClick={onClick}>
        {text}
      </LinkComponent>
    );
  }

  return (
    <button onClick={onClick} className={classNames}>
      {text}
    </button>
  );
};

export default Button;
