import { Alert, AlertIcon, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";

interface IProps {
  sectionTitle?: string;
  text: string;
}

const NoItemAlert = ({ sectionTitle, text }: IProps) => {
  return (
    <Flex width="fit-content" gap={5} direction="column">
      {sectionTitle && <SectionTitle sectionTitle={sectionTitle} />}
      <Alert colorScheme="darkPurple" status="info">
        <AlertIcon />
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          textAlign="center"
          fontWeight="500"
        >
          {text}
        </Text>
      </Alert>
    </Flex>
  );
};

export default NoItemAlert;
