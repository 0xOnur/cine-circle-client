import { Stack, Text, chakra, useColorModeValue } from "@chakra-ui/react";

const HeroText = () => {
  return (
    <Stack direction="column" spacing={10} justifyContent="center">
      <chakra.h1
        fontSize="5xl"
        lineHeight={1}
        fontWeight="bold"
        textAlign="left"
      >
        Discover the world of
        <chakra.span
          bgGradient={
            "linear(to-r, darkPurple.500, darkPurple.300, darkPurple.500)"
          }
          bgClip="text"
        >
          {" "}
          Movies and Series{" "}
        </chakra.span>{" "}
        <br />
        with CineCircle
      </chakra.h1>
      <Text
        color={useColorModeValue("gray.500", "gray.400")}
        fontSize="lg"
        textAlign="left"
        fontWeight="400"
        maxW="700px"
      >
        Dive into the world of movies and series with CineCircle! Explore
        detailed reviews, engage in discussions, and create personalized
        watchlists. Whether you’re looking for the latest blockbusters or niche
        indie gems, find and follow your favorites all in one place.
      </Text>
    </Stack>
  );
};

export default HeroText;
