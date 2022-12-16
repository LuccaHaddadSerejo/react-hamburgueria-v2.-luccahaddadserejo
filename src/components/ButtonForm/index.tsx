import React from "react";

interface iButtonFormProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

export const ButtonForm = ({ children, type }: iButtonFormProps) => {
  return <button type={type}>{children}</button>;
};
