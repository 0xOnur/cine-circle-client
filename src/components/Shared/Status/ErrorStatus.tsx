import { Alert, AlertIcon, Button, Stack } from "@chakra-ui/react";
import { RefetchOptions } from "@tanstack/react-query";

interface IProps {
  refetch: (options?: RefetchOptions) => Promise<unknown>;
  isRefetching: boolean;
}

const ErrorStatus = ({ refetch, isRefetching }: IProps) => {
  return (
    <Stack spacing={3}>
      <Alert rounded="lg" colorScheme="darkPurple" status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>

      <Button
        width="fit-content"
        colorScheme="darkPurple"
        color="white"
        onClick={() => refetch()}
        loadingText="Loading"
        isLoading={isRefetching}
        bgGradient="linear(to-r, darkPurple.500, darkPurple.500, darkPurple.600)"
        _hover={{
          bgGradient:
            "linear(to-r, darkPurple.500, darkPurple.600, darkPurple.700)",
        }}
      >
        Try again
      </Button>
    </Stack>
  );
};

export default ErrorStatus;
