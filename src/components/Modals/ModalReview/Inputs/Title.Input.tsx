import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IProps {
  title: string;
  onChange: (e: any) => void;
}

const TitleInput = ({ title, onChange }: IProps) => {
  return (
    <FormControl id="title" isRequired>
      <FormLabel>Title</FormLabel>
      <Input
        type="text"
        minLength={5}
        maxLength={100}
        value={title}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default TitleInput;
