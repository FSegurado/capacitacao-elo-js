import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Button, Flex } from "@chakra-ui/react";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/randomDog", {
          method: "GET",
        });

        const data = await response.json();

        setImage(data.message);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onClick = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/randomDog", {
        method: "GET",
      });

      const data = await response.json();

      setImage(data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Flex
        sx={{
          flexDir: "column",
          alignItems: "center",
        }}
      >
        <Button disabled sx={{ marginTop: "5" }}>
          Carregando...
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      sx={{
        flexDir: "column",
        alignItems: "center",
      }}
    >
      <Button onClick={onClick} sx={{ marginTop: "5" }}>
        Clique para receber um dog!
      </Button>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          position: "relative",
          marginTop: "10",
        }}
      >
        <Image
          src={image}
          alt="dog"
          fill
          style={{
            maxHeight: "100%",
            maxWidth: "none",
            objectFit: "contain",
          }}
        />
      </Box>
    </Flex>
  );
};
