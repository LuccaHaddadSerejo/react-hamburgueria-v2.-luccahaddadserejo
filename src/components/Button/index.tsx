import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type }: iButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
