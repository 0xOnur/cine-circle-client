import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "@redux/slices/user.slice";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxUser = useSelector((state: RootState) => state.user);

  const menuItemHover = {
    bg: useColorModeValue("darkPurple.50", "gray.900"),
    color: useColorModeValue("darkPurple.500", "darkPurple.300"),
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Menu
      placement="bottom-end"
      isLazy
      lazyBehavior="unmount"
      autoSelect={false}
    >
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={
            reduxUser?.avatar ? reduxUser?.avatar : "https://bit.ly/broken-link"
          }
        />
      </MenuButton>

      <MenuList boxShadow={"xl"} rounded={"xl"} py={0} overflow={"hidden"}>
        <Flex flexDirection={"column"} maxW={"250"}>
          <Link to={"/profile/" + reduxUser?.username}>
            <MenuItem _hover={menuItemHover} py={2}>
              <Text
                fontWeight={"bold"}
                fontSize={"md"}
                isTruncated={true}
                textOverflow={"ellipsis"}
                width={"100%"}
              >
                {reduxUser?.username || "Username"}
              </Text>
            </MenuItem>
          </Link>
          <MenuDivider />

          <Link to={"/watchlists/" + reduxUser?.username}>
            <MenuItem _hover={menuItemHover} py={2}>
              <Text fontWeight={"bold"} fontSize={"md"}>
                Watchlists
              </Text>
            </MenuItem>
          </Link>
          <Link to={"/favorites/" + reduxUser?.username}>
            <MenuItem _hover={menuItemHover} py={2}>
              <Text fontWeight={"bold"} fontSize={"md"}>
                Favorites
              </Text>
            </MenuItem>
          </Link>
          <Link to={"/reviews/" + reduxUser?.username}>
            <MenuItem _hover={menuItemHover} py={2}>
              <Text fontWeight={"bold"} fontSize={"md"}>
                Reviews
              </Text>
            </MenuItem>
          </Link>

          <Link to="/settings">
            <MenuItem _hover={menuItemHover} py={2}>
              <Text fontWeight={"bold"} fontSize={"md"}>
                Settings
              </Text>
            </MenuItem>
          </Link>
          <MenuDivider />
          <MenuItem _hover={menuItemHover} py={2} onClick={handleLogout}>
            <Text fontWeight={"bold"} fontSize={"md"}>
              Logout
            </Text>
          </MenuItem>
        </Flex>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
