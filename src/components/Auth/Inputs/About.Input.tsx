import { FormControl, Textarea } from "@chakra-ui/react";

interface IProps {
  about?: string;
  onChange: (e: any) => void;
}

const AboutInput = ({ about, onChange }: IProps) => {
  return (
    <FormControl id="about">
      <Textarea
        minH={24}
        maxH={48}
        maxLength={2500}
        value={about}
        onChange={onChange}
        placeholder="About me"
      />
    </FormControl>
  );
};

export default AboutInput;
