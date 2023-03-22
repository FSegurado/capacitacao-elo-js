import { Button, Flex } from "@chakra-ui/react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Input } from "../components/Input";

function FormComponent() {
  const {
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Flex
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        flexDirection: "column",
        maxWidth: "50rem",
        margin: "0 auto",
        marginTop: "20",

        "& > *": {
          marginBottom: "5",
        },
      }}
    >
      <Input name="nome" label="Nome" />
      <Input
        name="email"
        label="Email"
        type="email"
        required={true}
        error={!!errors.email}
        errorMessage="Digite um email"
      />
      <Input
        name="senha"
        type="password"
        label="Senha"
        required={true}
        error={!!errors.senha}
        errorMessage="Digite uma senha"
      />
      <Button type="submit">Enviar</Button>
    </Flex>
  );
}

export function Form() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FormComponent />
    </FormProvider>
  );
}
