import { Button, useDisclosure } from "@chakra-ui/react";
import ModalReview from "@components/Modals/ModalReview/CreateAndEdit";
import { FaList } from "react-icons/fa";

interface IProps {
  tmdbID: string;
  mediaType: "movie" | "tv";
  btnText: string;
  isDisabled: boolean;
}

const ReviewButton = ({ tmdbID, mediaType, btnText, isDisabled }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && (
        <ModalReview tmdbID={tmdbID} mediaType={mediaType} isOpen={isOpen} onClose={onClose} />
      )}
      <Button
        w="fit-content"
        h="2.5rem"
        fontWeight="bold"
        size="sm"
        variant="outline"
        rounded="md"
        fontSize="md"
        leftIcon={<FaList />}
        colorScheme="darkPurple"
        isDisabled={isDisabled}
        hidden={isDisabled}
        onClick={onOpen}
      >
        {btnText}
      </Button>
    </>
  );
};

export default ReviewButton;
