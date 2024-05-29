import { Heading, Link } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

interface IProps {
  sectionTitle: string;
  sectionHref?: string;
  color?: string;
  fontSize?: string;
}

const SectionTitle = ({
  sectionTitle,
  sectionHref,
  color,
  fontSize,
}: IProps) => {
  return (
    <Fragment>
      {sectionHref ? (
        <Link
          w="fit-content"
          href={sectionHref ? sectionHref : "#"}
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
        >
          <Heading
            textTransform="uppercase"
            letterSpacing={3}
            fontSize={{ base: "md", sm: "lg" }}
            fontWeight="500"
          >
            {sectionTitle}
          </Heading>
        </Link>
      ) : (
        <Heading
          textTransform="uppercase"
          letterSpacing={3}
          fontSize={fontSize ? fontSize : { base: "md", sm: "lg" }}
          fontWeight="500"
          color={color && color}
        >
          {sectionTitle}
        </Heading>
      )}
    </Fragment>
  );
};

export default SectionTitle;
