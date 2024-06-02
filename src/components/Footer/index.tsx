import { FaGithub } from "react-icons/fa";
import {
  Box,
  Stack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" pt="10rem" w="100%" mt="auto" py={4}>
      <Container>
        <Divider my={4} />
        <Stack
          w="full"
          spacing={{ base: 8, md: 0 }}
          py={4}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box maxW="300px">
            <Link href="https://www.themoviedb.org/" isExternal>
              <Image
                w="100px"
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="TMDB Icon"
              />
              <Text mt={2} color="gray.500" fontSize="md">
                Powered by
              </Text>
            </Link>
          </Box>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={3}
            justifyContent="end"
          >
            <Stack spacing={2} direction={{ base: "column", md: "row" }}>
              <Button
                href="https://github.com/0xOnur/cine-circle-client"
                leftIcon={<FaGithub />}
                as={Link}
                rounded="md"
                colorScheme="gray"
                isExternal
              >
                Source Code
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
