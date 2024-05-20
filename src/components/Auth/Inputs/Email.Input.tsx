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
        
        type="email"
        value={email}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default EmailInput;
