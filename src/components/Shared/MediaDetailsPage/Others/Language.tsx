import { Box, Text } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import { Language } from "types/tmdb/Types";

interface IProps {
  original_language: string;
  spoken_languages: Language[];
}

const MediaLanguage = ({ original_language, spoken_languages }: IProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box>
        <SectionTitle sectionTitle="Original Language" fontSize="xs" />
        <Text
          fontWeight="500"
          color="gray.500"
          fontSize="sm"
          textTransform="uppercase"
        >
          {original_language}
        </Text>
      </Box>
      <Box>
        <SectionTitle sectionTitle="Spoken Languages" fontSize="xs" />
        <Text fontWeight="500" color="gray.500" fontSize="sm">
          {spoken_languages.map((language) => language.name).join(", ")}
        </Text>
      </Box>
    </Box>
  );
};

export default MediaLanguage;
