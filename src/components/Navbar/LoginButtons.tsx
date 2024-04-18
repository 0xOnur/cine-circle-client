import { Button } from "@chakra-ui/react";
import React from "react";

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
        _hover={{ bg: "darkPurple.700", color: "white" }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default LoginButtons;
