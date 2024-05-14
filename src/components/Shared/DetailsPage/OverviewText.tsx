import { Text } from "@chakra-ui/react";

interface IProps {
  overview: string;
}

const OverviewText = ({ overview }: IProps) => {
  return (
    <Text
      textAlign="justify"
      textDecor="inherit"
      fontSize="md"
      letterSpacing={1}
      lineHeight={1.8}
    >
      {overview}
    </Text>
  );
};

export default OverviewText;
