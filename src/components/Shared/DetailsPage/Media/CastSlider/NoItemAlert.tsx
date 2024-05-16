import { Alert, AlertIcon, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";

const NoItemAlert = () => {
  return (
    <Flex width="fit-content" gap={5} direction="column">
      <SectionTitle sectionTitle="Cast" />
      <Alert colorScheme="darkPurple" status="info">
        <AlertIcon />
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          textAlign="center"
          fontWeight="500"
        >
          There are no cast members for this movie.
        </Text>
      </Alert>
    </Flex>
  );
};

export default NoItemAlert;
