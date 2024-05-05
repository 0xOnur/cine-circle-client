import { Button } from "@chakra-ui/react";

interface IProps {
  isLoading: boolean;
  text: string;
  loadingText: string;
}

const SubmitButton = ({ isLoading, text, loadingText }: IProps) => {
  return (
    <Button
      _loading={{ color: "white" }}
      spinnerPlacement="end"
      colorScheme="darkPurple"
      size="lg"
      isLoading={isLoading}
      loadingText={loadingText}
      type="submit"
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
