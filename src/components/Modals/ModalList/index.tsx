import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
} from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import useGetUserLists from "hooks/TanStack/Query/useGetUserLists";
import { useSelector } from "react-redux";
import LoadingSpinner from "@components/LoadingSpinner";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import CreateList from "@components/Shared/DetailsPage/Media/Overview/Buttons/CreateList";
import Lists from "./Lists";

interface IModalListProps {
  tmdbID: number;
  mediaType: "tv" | "movie";
  isOpen: boolean;
  onClose: () => void;
}

const ModalList = ({ tmdbID, mediaType, isOpen, onClose }: IModalListProps) => {
  const username = useSelector((state: RootState) => state.user.user?.username);
  const { data, status, refetch, isRefetching } = useGetUserLists({
    username: username!,
  });

  const filteredLists = data?.filter((list) => list.listType === mediaType);

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
          {mediaType === "tv" ? "Your TV Lists" : "Your Movie Lists"}
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody py={5}>
          {status === "pending" || isRefetching ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="200px"
            >
              <LoadingSpinner />
            </Box>
          ) : status === "error" ? (
            <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
          ) : filteredLists?.length === 0 ? (
            <CreateList
              defaultMediaType={mediaType}
              headerText={
                mediaType === "tv"
                  ? "Create a new TV List"
                  : "Create a new Movie List"
              }
            />
          ) : (
            <Lists
              lists={filteredLists!}
              tmdbID={tmdbID}
              mediaType={mediaType}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalList;
