import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  labelText: string;
  name: string;
  onChange: (e: any) => void;
}

const NameInput = ({ labelText, name, onChange }: IProps) => {
  return (
    <FormControl id="firstName" isRequired>
      <FormLabel>{labelText}</FormLabel>
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
        value={name}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default NameInput;
