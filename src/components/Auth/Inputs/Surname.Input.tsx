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
        _focus={{
          border: "2px solid",
          borderColor: "darkPurple.500",
          boxShadow: "none",
          outline: "none",
        }}
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
