import { Button, Stack, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  return (
    <Stack direction={{ base: "column", sm: "row" }}>
      <Link to="/sign-up">
        <Button
          w="full"
          h={12}
          px={6}
          size="lg"
          fontWeight="bold"
          color="white"
          borderRadius="full"
          bgGradient={"linear(to-br, darkPurple.200, darkPurple.500)"}
          _hover={{
            bgGradient: "linear(to-br, darkPurple.300, darkPurple.600)",
          }}
        >
          <chakra.span>Get started</chakra.span>
        </Button>
      </Link>
    </Stack>
  );
};

export default NavigateButtons;
