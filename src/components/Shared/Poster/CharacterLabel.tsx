import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  character: string;
}

const CharacterLabel = ({ character }: IProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      bg="black"
      color="white"
      borderBottomRadius={24}
      maxHeight="70px"
      minH="40px"
      px={2}
      opacity={0.8}
    >
      <Text fontSize="sm" fontWeight="semibold">
        {character}
      </Text>
    </Flex>
  );
};

export default CharacterLabel;
