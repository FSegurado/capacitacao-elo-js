import NextLink from "next/link";
import { Button, HStack } from "@chakra-ui/react";

export function Header() {
  return (
    <HStack sx={{ bgColor: "blue.500", padding: "2" }}>
      <Button
        as={NextLink}
        href="/"
        sx={{
          bgColor: "blue.500",
          color: "white",
          _hover: { color: "gray.300", transition: "0.5s" },
          _active: {},
        }}
      >
        Home
      </Button>
      <Button
        as={NextLink}
        href="/form"
        sx={{
          bgColor: "blue.500",
          color: "white",
          _hover: { color: "gray.300", transition: "0.5s" },
          _active: {},
        }}
      >
        Formulário
      </Button>
    </HStack>
  );
}
