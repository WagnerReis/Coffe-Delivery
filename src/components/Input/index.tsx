import { InputForm, InputWrapper, OptionalLabel } from "./styles";

interface InputProps {
  size: "small" | "medium" | "mediumXs" | "large";
  placeholder?: string;
  optional?: boolean;
}

export function Input({ size, placeholder, optional = false }: InputProps) {
  return (
    <InputWrapper>
      <InputForm placeholder={placeholder} size={size} />
      {optional && <OptionalLabel>Opcional</OptionalLabel>}
    </InputWrapper>
  );
}
