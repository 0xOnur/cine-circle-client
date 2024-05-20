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

const SearchBar = () => {
  return (
    <Stack spacing={{ base: 5, md: 10 }} flexWrap="wrap">
      <form>
        <HStack spacing="2" w="full" alignItems="flex-start" py="2">
          <FormControl>
            <InputGroup size="lg" >
              <Input
                type="text"
                borderRadius="xl"
                colorScheme="darkPurple"
                placeholder="Search Movies, TV Shows..."
                _focus={{
                  border: "2px solid",
                  borderColor: "darkPurple.500",
                  boxShadow: "none",
                  outline: "none",
                }}
                _placeholder={{
                  color: useColorModeValue("gray.500", "gray.300"),
                  letterSpacing: "wide",
                }}
              />
            </InputGroup>
          </FormControl>

          <IconButton
            color="white"
            bgColor="darkPurple.700"
            _hover={{
              bg: "darkPurple.500",
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
