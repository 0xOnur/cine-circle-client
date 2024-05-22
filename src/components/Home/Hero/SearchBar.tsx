import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  HStack,
  IconButton,
  Input,
  InputGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  query?: string | null;
}

const SearchBar = ({ query }: IProps) => {
  const [searchQuery, setSearchQuery] = useState<string>(query ? query : "");

  return (
    <Stack spacing={{ base: 5, md: 10 }} flexWrap="wrap" w="full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `/search?query=${searchQuery}`;
        }}
      >
        <HStack spacing="2" w="full" alignItems="flex-start" py="2">
          <FormControl isRequired>
            <InputGroup size="lg">
              <Input
                type="text"
                minLength={3}
                borderRadius="xl"
                colorScheme="darkPurple"
                placeholder="Search Movies, TV Shows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                _placeholder={{
                  color: useColorModeValue("gray.600", "gray.300"),
                  letterSpacing: "wide",
                  fontWeight: "500",
                }}
              />
            </InputGroup>
          </FormControl>

          <IconButton
            color="white"
            bgColor="darkPurple.500"
            _hover={{
              bg: "darkPurple.600",
            }}
            icon={<SearchIcon />}
            type="submit"
            aria-label="Search"
            isLoading={false}
            size="lg"
            borderRadius="xl"
            colorScheme="darkPurple"
          />
        </HStack>
      </form>
    </Stack>
  );
};

export default SearchBar;
