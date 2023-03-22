import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input as CInput,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export function Input({
  label,
  error,
  errorMessage,
  required,
  name,
  ...props
}) {
  const { register } = useFormContext();

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>
      <CInput {...register(name, { required })} {...props} />
      {error && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}
