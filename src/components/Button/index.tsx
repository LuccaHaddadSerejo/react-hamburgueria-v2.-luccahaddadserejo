import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const ButtonForm = ({ children, onClick }: iButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
