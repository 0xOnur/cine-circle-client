import {
  Box,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import DesktopSubNav from "./DesktopSubNav";
import { NAV_ITEMS } from "./NAV_ITEMS";

const DesktopNav = () => {
  const linkColor = useColorModeValue("black", "white");
  const linkHoverColor = useColorModeValue("darkPurple.500", "darkPurple.300");

  return (
    <Stack
      direction={"row"}
      spacing={4}
      width={"100%"}
      justifyContent="center"
      alignItems="center"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom"}>
            <PopoverTrigger>
              <Box
                p={2}
                fontSize={"md"}
                cursor={"pointer"}
                fontWeight={"bold"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent boxShadow={"xl"} p={4} rounded={"xl"} minW={"sm"}>
                <PopoverArrow bg="darkPurple.300" />
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
