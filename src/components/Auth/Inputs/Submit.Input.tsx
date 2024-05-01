import { Button } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

interface IProps {
  isLoading: boolean;
  text: string;
  loadingText: string;
  onClick: () => void;
}

const SubmitButton = ({ isLoading, text, loadingText, onClick }: IProps) => {
  const toast = useToast()

  

  return (
    <Button
      _loading={{ color: "white" }}
      spinnerPlacement="end"
      colorScheme="darkPurple"
      size="lg"
      onClick={onClick}
      isLoading={isLoading}
      loadingText={loadingText}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
