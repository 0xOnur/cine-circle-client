import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  email: string;
  onChange: (e: any) => void;
}

const EmailInput = ({ email, onChange }: IProps) => {
  return (
    <FormControl id="email" isRequired>
      <FormLabel>Email address</FormLabel>
      <Input
        _focus={{
          border: "2px solid",
          borderColor: "darkPurple.500",
          boxShadow: "none",
          outline: "none",
        }}
        type="email"
        value={email}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default EmailInput;
