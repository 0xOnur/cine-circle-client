import { Button, useDisclosure } from "@chakra-ui/react";
import ModalReview from "@components/Modals/ModalReview";
import { FaEdit } from "react-icons/fa";

interface IProps {
  tmdbID: string;
  review: IReview;
}

const EditReviewButton = ({ tmdbID, review }: IProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isOpen && (
        <ModalReview
          tmdbID={tmdbID}
          review={review}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <Button
        w="fit-content"
        size="sm"
        variant="outline"
        rounded="md"
        fontSize="md"
        leftIcon={<FaEdit />}
        colorScheme="darkPurple"
        onClick={onOpen}
      >
        Edit
      </Button>
    </>
  );
};

export default EditReviewButton;
