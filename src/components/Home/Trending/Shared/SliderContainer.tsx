import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import SwtichButton from "./SwtichButton";

type SliderContainerProps = {
  sectionTitle?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  time_window?: "day" | "week";
  setTime_window?: React.Dispatch<React.SetStateAction<"day" | "week">>;
};

const SliderContainer = ({
  sectionTitle,
  children,
  footer,
  time_window,
  setTime_window,
}: SliderContainerProps) => {
  return (
    <Box
      // not allow scrolling x
      overflowX="hidden"
      overflowY="auto"
      height="100%"
      width="100%"
    >
      {sectionTitle && (
        <Flex
          rowGap={5}
          width="full"
          justifyContent="space-between"
          alignItems="center"
          direction={{
            base: "column",
            sm: "row",
          }}
        >
          <Heading
            textTransform="uppercase"
            letterSpacing={3}
            fontSize={{ base: "md", sm: "lg" }}
            fontWeight="500"
          >
            {sectionTitle}
          </Heading>

          {time_window && setTime_window && (
            <SwtichButton
              time_window={time_window}
              setTime_window={setTime_window}
            />
          )}
        </Flex>
      )}

      <Flex paddingX={[8, 6]} pt="8px" overflowX="scroll">
        <Flex
          flexWrap="nowrap"
          alignItems="center"
          minHeight="250px"
          overflowX="scroll"
          overflow="visible"
          gridColumnGap={6}
        >
          {children}
        </Flex>
      </Flex>

      <Spacer height={4} />

      {footer ? (
        <HStack paddingX={{ base: 8, sm: 0 }} spacing={4}>
          {footer}
        </HStack>
      ) : null}
    </Box>
  );
};

export default SliderContainer;
