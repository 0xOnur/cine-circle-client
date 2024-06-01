import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import useDeleteReview from "hooks/TanStack/Mutation/Review/useDeleteReview";
import React from "react";

interface IModalDeleteReviewProps {
  isOpen: boolean;
  tmdbID: string;
  onClose: () => void;
}

const ModalDeleteReview = ({
  isOpen,
  tmdbID,
  onClose,
}: IModalDeleteReviewProps) => {
  const { mutate, isPending } = useDeleteReview({ tmdbID, onClose });

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
    >
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Delete your review</ModalHeader>
        <ModalCloseButton />

        <ModalBody py={5}>
          <Text fontSize="md" fontWeight="bold" mb={5}>
            Are you sure you want to delete this review?
          </Text>

          <Flex justifyContent="flex-end">
            <Button
              colorScheme="darkPurple"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Cancel
            </Button>

            <Button
              isLoading={isPending}
              colorScheme="red"
              onClick={() => {
                mutate();
              }}
            >
              Delete
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalDeleteReview;
