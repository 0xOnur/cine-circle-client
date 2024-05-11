import React from "react";
import { Box, Button, useColorModeValue } from "@chakra-ui/react";

interface IProps {
  time_window: "day" | "week";
  setTime_window: React.Dispatch<React.SetStateAction<"day" | "week">>;
}

const SwitchButton = ({ time_window, setTime_window }: IProps) => {
  // Temaya bağlı renkler
  const unselectedColor = useColorModeValue("gray.200", "gray.700");
  const selectedColor = useColorModeValue("purple.600", "darkPurple.600");

  const textColor = useColorModeValue("gray.500", "gray.400");
  const hoverTextColor = useColorModeValue("darkPurple.600", "white");

  return (
    <Box
      w="240px"
      h="40px"
      bg={unselectedColor}
      display="flex"
      borderRadius="full"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        left={time_window === "day" ? "0" : "50%"}
        bg={selectedColor}
        w="50%"
        h="100%"
        borderRadius="full"
        transition="left 0.3s ease-in-out"
      />
      <Button
        color={time_window === "day" ? "white" : textColor}
        fontSize="sm"
        fontWeight="bold"
        flex="1"
        height="100%"
        borderRadius="full"
        background="transparent"
        _hover={
          time_window === "day"
            ? { color: "white" }
            : { bg: unselectedColor, color: hoverTextColor }
        }
        onClick={() => setTime_window("day")}
      >
        Daily
      </Button>
      <Button
        color={time_window === "week" ? "white" : textColor}
        fontSize="sm"
        fontWeight="bold"
        flex="1"
        height="100%"
        borderRadius="full"
        background="transparent"
        _hover={
          time_window === "week"
            ? { color: "white" }
            : { bg: unselectedColor, color: hoverTextColor }
        }
        onClick={() => setTime_window("week")}
      >
        Weekly
      </Button>
    </Box>
  );
};

export default SwitchButton;
