import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  lastName: string;
  onChange: (e: any) => void;
}

const SurnameInput = ({ lastName, onChange }: IProps) => {
  return (
    <FormControl id="lastName" isRequired>
      <FormLabel>Last Name</FormLabel>
      <Input
        
        type="text"
        minLength={3}
        maxLength={20}
        value={lastName}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default SurnameInput;
