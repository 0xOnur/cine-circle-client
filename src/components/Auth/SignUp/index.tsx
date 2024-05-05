import {
  Flex,
  Box,
  HStack,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from "@chakra-ui/react";
import PasswordInput from "../Inputs/Password.Input";
import EmailInput from "../Inputs/Email.Button";
import { useState } from "react";
import NameInput from "../Inputs/Name.Input";
import SubmitButton from "../Inputs/Submit.Input";
import UsernameInput from "../Inputs/Username.Input";
import SurnameInput from "../Inputs/Surname.Input";
import { AppDispatch, RootState } from "@redux/config/store";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@api/user.api";
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isPending = useSelector((state: RootState) => state.isPending);
  const navigate = useNavigate();  
  const toast = useToast();

  const [userData, setUserData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(createUser(userData)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigate("/");
        toast({
          title: "Sign Up Success",
          description: response.payload.message,
          status: "success",
        });
      } else {
        toast({
          title: "Sign Up Failed",
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
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <UsernameInput
                username={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />

              <HStack>
                <Box>
                  <NameInput
                    name={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  <SurnameInput
                    lastName={userData.surname}
                    onChange={(e) =>
                      setUserData({ ...userData, surname: e.target.value })
                    }
                  />
                </Box>
              </HStack>

              <EmailInput
                email={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />

              <PasswordInput
                password={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />

              <Stack spacing={10} pt={2}>
                <SubmitButton
                  text="Sign Up"
                  isLoading={isPending}
                  loadingText="Signing up..."
                />
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="/login" color={"darkPurple.500"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

export default SignUpPage;
