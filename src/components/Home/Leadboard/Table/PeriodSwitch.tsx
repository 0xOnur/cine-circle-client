import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface IProps {
  time_period: "week" | "all";
  setTime_period: React.Dispatch<React.SetStateAction<"week" | "all">>;
}

const PeriodSwitch = ({ time_period, setTime_period }: IProps) => {
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
        left={time_period === "week" ? "0" : "50%"}
        bg={selectedColor}
        w="50%"
        h="100%"
        borderRadius="full"
        transition="left 0.3s ease-in-out"
      />
      <Button
        color={time_period === "week" ? "white" : textColor}
        fontSize="sm"
        fontWeight="bold"
        flex="1"
        height="100%"
        borderRadius="full"
        background="transparent"
        _hover={
          time_period === "week"
            ? { color: "white" }
            : { bg: unselectedColor, color: hoverTextColor }
        }
        onClick={() => setTime_period("week")}
      >
        Weekly
      </Button>
      <Button
        color={time_period === "all" ? "white" : textColor}
        fontSize="sm"
        fontWeight="bold"
        flex="1"
        height="100%"
        borderRadius="full"
        background="transparent"
        _hover={
          time_period === "all"
            ? { color: "white" }
            : { bg: unselectedColor, color: hoverTextColor }
        }
        onClick={() => setTime_period("all")}
      >
        All Time
      </Button>
    </Box>
  );
};

export default PeriodSwitch;
