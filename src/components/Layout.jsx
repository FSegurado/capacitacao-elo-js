import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
}
