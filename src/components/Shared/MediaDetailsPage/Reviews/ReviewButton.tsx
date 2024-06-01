import { Button, useDisclosure } from "@chakra-ui/react";
import ModalReview from "@components/Modals/ModalReview";
import React from "react";
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
        size="sm"
        variant="outline"
        rounded="md"
        fontSize="md"
        leftIcon={<FaList />}
        colorScheme="darkPurple"
        isDisabled={isDisabled}
        onClick={onOpen}
      >
        {btnText}
      </Button>
    </>
  );
};

export default ReviewButton;
