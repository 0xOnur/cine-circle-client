import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  username: string;
  onChange: (e: any) => void;
}

const UsernameInput = ({ username, onChange }: IProps) => {
  return (
    <FormControl id="username" isRequired>
      <FormLabel>Username</FormLabel>
      <Input
        _focus={{
          border: "2px solid",
          borderColor: "darkPurple.500",
          boxShadow: "none",
          outline: "none",
        }}
        type="text"
        minLength={3}
        maxLength={20}
        value={username}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default UsernameInput;
