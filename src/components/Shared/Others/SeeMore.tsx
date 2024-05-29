import { Box, Button, Link, Spacer } from "@chakra-ui/react";

interface IProps {
  href: string;
}

const SeeMore = ({ href }: IProps) => {
  return (
    <Box pt={3}>
      <Link href={href}>
        <Button
          colorScheme="darkPurple"
          color="white"
          roundedLeft="full"
          size="sm"
          px={5}
          py={5}
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
          bg="darkPurple.500"
        >
          See more
        </Button>
      </Link>

      <Spacer height="50px" width="100%" />
    </Box>
  );
};

export default SeeMore;
