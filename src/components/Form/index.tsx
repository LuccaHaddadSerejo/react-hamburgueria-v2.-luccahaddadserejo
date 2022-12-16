import React from "react";

interface iFormProps {
  children: React.ReactNode;
  noValidate: boolean | undefined;
  onSubmit: () => void;
}

export const Form = ({ children, noValidate, onSubmit }: iFormProps) => {
  return (
    <>
      <form noValidate={noValidate} onSubmit={onSubmit}>
        {children}
      </form>
    </>
  );
};
