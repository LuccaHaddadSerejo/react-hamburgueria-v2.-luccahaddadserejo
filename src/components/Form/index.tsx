import React from "react";
import { StyledForm } from "./style";

interface iFormProps {
  children: React.ReactNode;
  noValidate: boolean | undefined;
  onSubmit: () => void;
}

export const Form = ({ children, noValidate, onSubmit }: iFormProps) => {
  return (
    <>
      <StyledForm noValidate={noValidate} onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </>
  );
};
