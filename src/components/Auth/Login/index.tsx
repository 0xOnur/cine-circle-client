import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import EmailInput from "../Inputs/Email.Button";
import PasswordInput from "../Inputs/Password.Input";
import SubmitButton from "../Inputs/Submit.Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@redux/config/store";
import { Link } from "react-router-dom";
import { loginUser } from "@api/user.api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const toast = useToast();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(user)).then((response) => {

      if (response.meta.requestStatus === "fulfilled") {
        navigate("/");
        toast({
          title: "Login Success",
          description: response.payload.message,
          status: "success",
        });
      } else {
        toast({
          title: "Login Failed",
          description: response.payload.message,
          status: "error",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <EmailInput
                email={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />

              <PasswordInput
                password={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to={"#"}>
                    <Text
                      fontWeight={600}
                      fontSize={"sm"}
                      color={"darkPurple.300"}
                    >
                      Forgot password?
                    </Text>
                  </Link>
                </Stack>
                <SubmitButton
                  text="Login"
                  isLoading={false}
                  loadingText="Logging in..."
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

export default LoginPage;
