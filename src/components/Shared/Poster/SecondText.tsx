import { Flex, Text } from "@chakra-ui/react";

interface IProps {
  secondText: string;
  isLastItem?: boolean;
}

const SecondText = ({ secondText, isLastItem }: IProps) => {
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
      px={3}
      py={2}
      opacity={0.8}
      mb={1}
      mr={isLastItem ? 6 : 0}
    >
      <Text fontSize="small" fontWeight="semibold">
        {secondText}
      </Text>
    </Flex>
  );
};

export default SecondText;
