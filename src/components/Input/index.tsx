import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInputProps {
  id: string;
  type: string;
  placeholder: string;
  disabled: boolean;
  label: string;
  register: UseFormRegisterReturn;
}

export const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
}: iInputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </>
  );
};
