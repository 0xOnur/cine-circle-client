import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MediaType } from "types/tmdb/Types";

interface IProps {
  media_type: MediaType;
  query: string;
  resultCounts: {
    movie: number;
    tv: number;
    person: number;
  };
}

const FilterResults = ({ media_type, query, resultCounts }: IProps) => {
  const navigate = useNavigate();

  return (
    <Box
      minW={200}
      h="fit-content"
      rounded="md"
      shadow="md"
      border="1px"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.100")}
      borderRadius="lg"
      overflow={"hidden"}
    >
      <VStack align="stretch" gap={0}>
        <Heading
          size="md"
          p={4}
          roundedTop="lg"
          bg={useColorModeValue("darkPurple.500", "darkPurple.700")}
          color="white"
        >
          Filter
        </Heading>

        <Box display="flex" flexDirection="column">
          <Button
            as="button"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            rounded={0}
            variant={media_type === "movie" ? "solid" : "ghost"}
            onClick={() => navigate(`?query=${query}&media_type=movie`)}
          >
            <Text fontSize="md" fontWeight="medium">
              Movies
            </Text>
            <Text fontSize="md" fontWeight="medium">
              ({resultCounts.movie})
            </Text>
          </Button>

          <Button
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            rounded={0}
            variant={media_type === "tv" ? "solid" : "ghost"}
            onClick={() => navigate(`?query=${query}&media_type=tv`)}
          >
            <Text fontSize="md" fontWeight="medium">
              Tv Shows
            </Text>
            <Text fontSize="md" fontWeight="medium">
              ({resultCounts.tv})
            </Text>
          </Button>

          <Button
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            rounded={0}
            variant={media_type === "person" ? "solid" : "ghost"}
            onClick={() => navigate(`?query=${query}&media_type=person`)}
          >
            <Text fontSize="md" fontWeight="medium">
              People
            </Text>
            <Text fontSize="md" fontWeight="medium">
              ({resultCounts.person})
            </Text>
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default FilterResults;
