import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import CreateReviewForm from "./CreateReviewForm";
import EditReviewForm from "./EditReviewForm";

interface IModalReviewProps {
  isOpen: boolean;
  tmdbID: string;
  mediaType?: "movie" | "tv";
  review?: IReview;
  onClose: () => void;
}

const ModalReview = ({
  isOpen,
  tmdbID,
  mediaType,
  review,
  onClose,
}: IModalReviewProps) => {
  const reduxUsername = useSelector(
    (state: RootState) => state.user.user?.username
  );

  if (!reduxUsername) {
    return null;
  }

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      motionPreset="scale"
    >
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>
          {review ? "Edit your review" : "Write a review"}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody py={5}>
          {review ? (
            <EditReviewForm review={review} onClose={onClose} />
          ) : mediaType && (
            <CreateReviewForm
              username={reduxUsername}
              tmdbID={tmdbID}
              mediaType={mediaType}
              onClose={onClose}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalReview;
