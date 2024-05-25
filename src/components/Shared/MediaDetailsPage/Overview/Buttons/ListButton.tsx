import { IconButton, Tooltip, useDisclosure } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { FaList } from "react-icons/fa";
import ModalList from "@components/Modals/ModalList";

interface IProps {
  tmdbID: number;
  mediaType: "tv" | "movie";
}

const ListButton = ({ tmdbID, mediaType }: IProps) => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {isOpen && (
        <ModalList
          tmdbID={tmdbID}
          mediaType={mediaType}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}

      <Tooltip
        label={isAuth ? "Add to list" : "Login to add to list"}
        aria-label="Add to list"
        hasArrow
        bg="darkPurple.700"
        overflow="hidden"
        closeOnScroll
      >
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            onOpen();
          }}
          isDisabled={!isAuth}
          _disabled={{
            opacity: 1,
          }}
          isRound={true}
          aria-label="Add to list"
          color="white"
          bgColor="darkPurple.700"
          _hover={{
            bg: "darkPurple.500",
          }}
          icon={<FaList />}
        />
      </Tooltip>
    </>
  );
};

export default ListButton;
