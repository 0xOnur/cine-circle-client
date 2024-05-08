import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import LoginButtons from "./LoginButtons";
import UserMenu from "./UserMenu";

interface IProps {
  isAuth: boolean;
}

const Navbar = ({ isAuth }: IProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box boxShadow="lg" position="sticky" w="100%" top="0" zIndex="10">
      <Container
        display="flex"
        maxW="6xl"
        minH={"60px"}
        py={{ base: 2 }}
        borderBottom={1}
        borderStyle={"solid"}
        alignItems="center"
        justifyContent="space-between"
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          alignItems="center"
          justifyContent={useBreakpointValue({
            base: "center",
            md: "space-between",
          })}
        >
          <Link to="/">
            <Text
              display="flex"
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("darkPurple.500", "white")}
              fontWeight="bold"
              fontSize="4xl"
              ml={{ base: 0, md: 6 }}
            >
              Cine Circle
            </Text>
          </Link>


        </Flex>
        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopNav />
        </Flex>
        <Stack
          flex={{ base: 0, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={5}
        >
          {isAuth ? <UserMenu /> : <LoginButtons />}
          <Button
            alignItems={"center"}
            onClick={toggleColorMode}
            colorScheme="darkPurple"
            variant="ghost"
            _hover={{ bg: "darkPurple.700", color: "white" }}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
          </Button>
        </Stack>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;
