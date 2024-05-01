import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  password: string;
  onChange: (e: any) => void;
}

const PasswordInput = ({ password, onChange }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          _focus={{
            border: "2px solid",
            borderColor: "darkPurple.500",
            boxShadow: "none",
            outline: "none",
          }}
          type={showPassword ? "text" : "password"}
          minLength={6}
          maxLength={100}
          value={password}
          onChange={onChange}
        />
        <InputRightElement h={"full"}>
          <Button
            colorScheme="darkPurple"
            variant={"ghost"}
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordInput;
