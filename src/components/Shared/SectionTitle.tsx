import { Heading, Link } from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";

interface IProps {
  sectionTitle: string;
  sectionHref?: string;
}

const SectionTitle = ({ sectionTitle, sectionHref }: IProps) => {
  return (
    <Fragment>
      {sectionHref ? (
        <Link
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
          fontSize={{ base: "md", sm: "lg" }}
          fontWeight="500"
        >
          {sectionTitle}
        </Heading>
      )}
    </Fragment>
  );
};

export default SectionTitle;
