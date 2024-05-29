import { Button } from "@chakra-ui/react";

interface IProps {
  isLoading: boolean;
  isDisabled?: boolean;
  text: string;
  loadingText: string;
}

const SubmitButton = ({ isLoading, isDisabled, text, loadingText }: IProps) => {
  return (
    <Button
      _loading={{ color: "white" }}
      isDisabled={isDisabled}
      spinnerPlacement="end"
      size="lg"
      color="white"
      isLoading={isLoading}
      loadingText={loadingText}
      bg={"darkPurple.600"}
      _hover={{ bg: "darkPurple.700" }}
      type="submit"
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
