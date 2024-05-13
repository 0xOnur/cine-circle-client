import {
  Flex,
  Heading,
  TableCaption,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PeriodSwitch from "./PeriodSwitch";

interface IProps {
  time_period: "week" | "all";
  setTime_period: React.Dispatch<React.SetStateAction<"week" | "all">>;
}

const Caption = ({ time_period, setTime_period }: IProps) => {
  return (
    <TableCaption px={0} py={0} placement="top">
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        gap={4}
        py={5}
        px={8}
        roundedTop="25px"
        width="full"
        height="full"
        mt="12px"
        bgGradient={useColorModeValue(
          "linear(to-r, darkPurple.500, darkPurple.100)",
          "linear(to-r, darkPurple.800, darkPurple.200)"
        )}
      >
        <Flex
          gap={4}
          width="full"
          direction="column"
          alignItems={{
            base: "center",
            md: "start",
          }}
        >
          <Heading color="white">Top Users</Heading>
          <Text fontSize="xl" color="white">
            Let the competition begin!
          </Text>
        </Flex>

        <Flex
          align="end"
          width="full"
          justify={{
            base: "center",
            md: "end",
          }}
        >
          <PeriodSwitch
            time_period={time_period}
            setTime_period={setTime_period}
          />
        </Flex>
      </Flex>
    </TableCaption>
  );
};

export default Caption;
