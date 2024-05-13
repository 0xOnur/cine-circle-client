import { Box, Button, Link, Spacer } from "@chakra-ui/react";

interface IProps {
  media_type: string;
  time_window: string;
}

const ViewAllButton = ({ media_type, time_window }: IProps) => {
  return (
    <Box pt={3}>
      <Link href={`/${media_type}/trending/${time_window}`}>
        <Button
          colorScheme="darkPurple"
          color="white"
          roundedLeft="full"

          size="sm"
          px={5}
          py={5}
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
          bg="darkPurple.400"
        >
          See more
        </Button>
      </Link>

      <Spacer
        height="50px"
        width="100%"
      />
    </Box>
  );
};

export default ViewAllButton;
