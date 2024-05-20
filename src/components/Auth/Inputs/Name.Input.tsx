import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  name: string;
  onChange: (e: any) => void;
}

const NameInput = ({ name, onChange }: IProps) => {
  return (
    <FormControl id="firstName" isRequired>
      <FormLabel>First Name</FormLabel>
      <Input
        
        type="text"
        minLength={3}
        maxLength={20}
        value={name}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default NameInput;
