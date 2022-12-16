import React from "react";

interface iFormProps {
  children: React.ReactNode;
  noValidate: boolean | undefined;
}

export const Form = ({ children, noValidate }: iFormProps) => {
  return (
    <>
      <form noValidate={noValidate}>{children}</form>
    </>
  );
};
