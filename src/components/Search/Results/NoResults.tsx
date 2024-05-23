import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from "@chakra-ui/react";

const NoResults = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Alert
        colorScheme="darkPurple"
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          No results found
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Sorry, we couldn't find any results for your search.
        </AlertDescription>
      </Alert>
    </Flex>
  );
};

export default NoResults;
