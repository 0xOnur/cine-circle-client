import { Box, Flex, HStack } from "@chakra-ui/react";
import SwtichButton from "./SwtichButton";
import SectionTitle from "@components/Shared/SectionTitle";

type SliderContainerProps = {
  sectionTitle?: string;
  sectionHref?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  time_window?: "day" | "week";
  setTime_window?: React.Dispatch<React.SetStateAction<"day" | "week">>;
};

const SliderContainer = ({
  sectionTitle,
  sectionHref,
  children,
  footer,
  time_window,
  setTime_window,
}: SliderContainerProps) => {
  return (
    <Box overflowX="hidden" overflowY="auto" height="100%" width="100%">
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
          <SectionTitle sectionTitle={sectionTitle} sectionHref={sectionHref} />

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

      {footer ? (
        <HStack justify="end" spacing={4}>
          {footer}
        </HStack>
      ) : null}
    </Box>
  );
};

export default SliderContainer;
