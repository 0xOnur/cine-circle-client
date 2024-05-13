import { Heading } from "@chakra-ui/react";

interface IProps {
  sectionTitle: string;
}

const SectionTitle = ({ sectionTitle }: IProps) => {
  return (
    <Heading
      textTransform="uppercase"
      letterSpacing={3}
      fontSize={{ base: "md", sm: "lg" }}
      fontWeight="500"
    >
      {sectionTitle}
    </Heading>
  );
};

export default SectionTitle;
