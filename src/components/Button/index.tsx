import React from "react";
import { StyledButton } from "./style";

interface iButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonType?: string;
}

export const Button = ({
  children,
  onClick,
  type,
  buttonType,
}: iButtonProps) => {
  return (
    <StyledButton buttonType={buttonType} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
