import { useFormContext } from "react-hook-form";
import { InputForm, InputWrapper, OptionalLabel } from "./styles";

interface InputProps {
  size: "small" | "medium" | "mediumXs" | "large";
  placeholder?: string;
  name: string;
  optional?: boolean;
}

export function Input({
  size,
  placeholder,
  name,
  optional = false,
}: InputProps) {
  const { register } = useFormContext();

  return (
    <InputWrapper>
      <InputForm {...register(name)} placeholder={placeholder} size={size} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputWrapper>
  );
}
