import { Box, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner
        colorScheme="darkPurple"
        color="darkPurple.500"
        emptyColor="gray.200"
        thickness="4px"
        speed="0.65s"
        size="xl"
      />
    </Box>
  );
};

export default LoadingSpinner;
