import {
  Box,
  Button,
  Collapse,
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

const Navbar = ({isAuth}: IProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box boxShadow="lg" position="sticky" top="0">
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link to="/">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              color={useColorModeValue("darkPurple.500", "white")}
              fontFamily={"heading"}
              fontWeight="bold"
              fontSize="2xl"
              height={"100%"}
              display="flex"
              alignItems="center"
              ml={{ base: 0, md: 6 }}
              cursor="pointer"
            >
              CineCircle
            </Text>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} width={"100%"}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={5}
        >
          {isAuth ? (
            <UserMenu />
          ): (
            <LoginButtons />
          )}
          <Button
            alignItems={"center"}
            onClick={toggleColorMode}
            colorScheme="darkPurple"
            variant="ghost"
            _hover={{ bg: "darkPurple.700", color: "white" }}
          >
            {colorMode === "light" ? (
              <MoonIcon />
            ) : (
              <SunIcon
                color={"white"}
               
              />
            )}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;
