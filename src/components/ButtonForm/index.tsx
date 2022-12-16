import React from "react";

interface iButtonFormProps {
  children: React.ReactNode;
}

export const ButtonForm = ({ children }: iButtonFormProps) => {
  return <button>{children}</button>;
};
