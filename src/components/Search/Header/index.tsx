import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import SearchBar from "@components/Home/Hero/SearchBar";
import React from "react";

interface IProps {
  query?: string | null;
  total_results?: number;
}

const SearchHeader = ({ query, total_results }: IProps) => {
  return (
    <Flex width="full" direction="column">
      <SearchBar query={query} />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="full"
        py={4}
        px={8}
        roundedBottom="25px"
        bgGradient={useColorModeValue(
          "linear(to-r, darkPurple.500, darkPurple.100)",
          "linear(to-r, darkPurple.800, darkPurple.200)"
        )}
      >
        <Box>
          <Text color="white" fontSize="lg" fontWeight="bold">
            {total_results} result for "{query}"
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SearchHeader;
