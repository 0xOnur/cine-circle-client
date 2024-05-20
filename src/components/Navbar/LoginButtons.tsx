import { Button, useColorModeValue } from "@chakra-ui/react";

const LoginButtons = () => {
  return (
    <>
      <Button
        colorScheme="darkPurple"
        fontSize={"sm"}
        fontWeight={"600"}
        as={"a"}
        href={"/login"}
        variant={"link"}
        color={useColorModeValue("darkPurple.700", "white")}
      >
        Log In
      </Button>
      <Button
        colorScheme="darkPurple"
        display={{ base: "none", md: "inline-flex" }}
        as={"a"}
        fontSize={"sm"}
        fontWeight={600}
        href={"/sign-up"}
        bgColor="darkPurple.700"
        color={"white"}
        _hover={{
          bg: "darkPurple.500",
        }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default LoginButtons;
