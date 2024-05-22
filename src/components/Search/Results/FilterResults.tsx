import {
  Box,
  Button,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

interface IProps {
  query: string;
  resultCounts: {
    movie: number;
    tv: number;
    person: number;
  };
}

const FilterResults = ({ query, resultCounts }: IProps) => {
  const navigate = useNavigate();

  return (
    <Box
      w={250}
      h="fit-content"
      rounded="md"
      shadow="md"
      border="1px"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.100")}
      borderRadius="lg"
    >
      <VStack align="stretch">
        <Heading
          size="md"
          p={4}
          roundedTop="lg"
          bg={useColorModeValue("darkPurple.500", "darkPurple.700")}
          color="white"
        >
          Filter
        </Heading>

        <Box display="flex" flexDirection="column" gap={3}>
          <Button
            as="button"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            variant="ghost"
            rounded={0}
            colorScheme="darkPurple"
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
            variant="ghost"
            rounded={0}
            colorScheme="darkPurple"
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
            variant="ghost"
            rounded={0}
            colorScheme="darkPurple"
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
