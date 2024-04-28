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
        _focus={{
          border: "2px solid",
          borderColor: "darkPurple.500",
          boxShadow: "none",
          outline: "none",
        }}
        type="text"
        value={name}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default NameInput;
