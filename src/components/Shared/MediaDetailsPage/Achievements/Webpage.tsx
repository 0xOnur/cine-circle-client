import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import { FaLink } from "react-icons/fa6";

interface IProps {
  url: string;
}

const Webpage = ({ url }: IProps) => {
  return (
    <Flex direction="column" gap={4}>
      <SectionTitle sectionTitle="Webpage" fontSize="xs" />

      <Link href={url} isExternal w="fit-content">
        <Button
          fontSize="sm"
          size="sm"
          rounded="md"
          leftIcon={<FaLink size={20} color={"#7000e0"} />}
        >
          <Text
            maxW={{ base: "full", lg: 250 }}
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {url.split("/")[2]}
          </Text>
        </Button>
      </Link>
    </Flex>
  );
};

export default Webpage;
