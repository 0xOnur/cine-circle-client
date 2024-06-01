import { Checkbox, FormControl, FormLabel } from "@chakra-ui/react";

interface IProps {
  spoiler: boolean;
  onChange: (e: any) => void;
}

const SpoilerInput = ({ spoiler, onChange }: IProps) => {
  return (
    <FormControl id="spoiler">
      <FormLabel>Spoiler</FormLabel>
      <Checkbox
        isChecked={spoiler}
        onChange={onChange}
        colorScheme="red"
        size="lg"
      />
    </FormControl>
  );
};

export default SpoilerInput;
