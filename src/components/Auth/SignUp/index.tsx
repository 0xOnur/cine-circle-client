import {
  Flex,
  Box,
  HStack,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import PasswordInput from "../Inputs/Password.Input";
import EmailInput from "../Inputs/Email.Button";
import { useState } from "react";
import NameInput from "../Inputs/Name.Input";
import SubmitButton from "../Inputs/Submit.Input";
import UsernameInput from "../Inputs/Username.Input";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
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
              username={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />

            <HStack>
              <Box>
                <NameInput
                  labelText="First Name"
                  name={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Box>
              <Box>
                <NameInput
                  labelText="Last Name"
                  name={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </Box>
            </HStack>

            <EmailInput
              email={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <PasswordInput
              password={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <Stack spacing={10} pt={2}>
              <SubmitButton
                text="Login"
                onClick={() => {}}
                isLoading={false}
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
  );
};

export default SignUpPage;
