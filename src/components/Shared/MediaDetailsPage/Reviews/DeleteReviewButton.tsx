import { Button, useDisclosure } from "@chakra-ui/react";
import ModalDeleteReview from "@components/Modals/ModalReview/Delete";
import { FaTrash } from "react-icons/fa";

interface IProps {
  tmdbID: string;
}

const DeleteReviewButton = ({ tmdbID }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isOpen && (
        <ModalDeleteReview tmdbID={tmdbID} isOpen={isOpen} onClose={onClose} />
      )}
      <Button
        w="fit-content"
        size="sm"
        variant="outline"
        rounded="md"
        fontSize="md"
        leftIcon={<FaTrash />}
        onClick={onOpen}
        colorScheme="red"
      >
        Delete
      </Button>
    </>
  );
};

export default DeleteReviewButton;
