import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";

interface iInputProps {
  id?: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  label?: string;
  register?: UseFormRegisterReturn;
  inputVariation?: string;
  value?: string;
  onChange?: any;
}

export const Input = ({
  id,
  type,
  placeholder,
  disabled,
  label,
  register,
  inputVariation,
  value,
  onChange,
}: iInputProps) => {
  return (
    <StyledInput inputVariation={inputVariation}>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
      />
    </StyledInput>
  );
};
