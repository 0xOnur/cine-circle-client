import { Box, Button, Link } from "@chakra-ui/react";

interface IProps {
    href: string;
}

const FullCastCrewButton = ({ href }: IProps) => {
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
          bg="darkPurple.400"
        >
          Full Cast & Crew
        </Button>
      </Link>
    </Box>
  );
};

export default FullCastCrewButton;
