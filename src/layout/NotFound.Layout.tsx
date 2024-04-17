import { Box, Button, Text, VStack, Heading } from '@chakra-ui/react';

function NotFoundPage() {

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={4}
    >
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl" color="gray.600">
          404 - Not Found
        </Heading>
        <Text fontSize="xl">
          This page does not exist
        </Text>
        <Button
          colorScheme="blue"
          onClick={() => window.location.href = '/'}
        >
          Go Home
        </Button>
      </VStack>
    </Box>
  );
}

export default NotFoundPage;
