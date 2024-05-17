import { Text } from "@chakra-ui/react";

type PosterLabelProps = {
  isLastItem?: boolean;
  label: string;
};

const PosterLabel = ({ isLastItem, label }: PosterLabelProps) => {
  return (
    <Text
      ml={isLastItem ? -2 : 0}
      textTransform="uppercase"
      fontSize="xs"
      letterSpacing={2}
      textAlign="center"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      visibility="hidden"
      color="white"
      _groupHover={{ visibility: "visible" }}
    >
      {label}
    </Text>
  );
};

export default PosterLabel;
