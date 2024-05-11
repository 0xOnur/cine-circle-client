import { Box, Button, Text, Heading } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={4}
    >
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, darkPurple.400, darkPurple.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"gray.500"} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>

      <Button
        colorScheme="darkPurple"
        bgGradient="linear(to-r, darkPurple.400, darkPurple.500, darkPurple.600)"
        _hover={{
          bgGradient:
            "linear(to-r, darkPurple.500, darkPurple.600, darkPurple.700)",
        }}
        color="white"
        variant="solid"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
