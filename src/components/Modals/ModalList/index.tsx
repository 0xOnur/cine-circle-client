import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
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

  // const addToList = useMutation((listId: string) => {
  //   return axiosInstance.post(`/lists/${listId}/media`, { tmdbID, mediaType });
  // }, {
  //   onSuccess: () => {
  //     toast({
  //       title: "Success",
  //       description: "Movie added to the list.",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //     onClose();
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Error",
  //       description: "Failed to add movie to the list.",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   },
  // });

  // const createList = useMutation((listName: string) => {
  //   return axiosInstance.post(`/lists`, { listName, listType: mediaType, userId: username });
  // }, {
  //   onSuccess: () => {
  //     toast({
  //       title: "Success",
  //       description: "List created.",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //     queryClient.invalidateQueries("userLists");
  //     setNewListName("");
  //   },
  //   onError: () => {
  //     toast({
  //       title: "Error",
  //       description: "Failed to create list.",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   },
  // });

  // const handleAddToList = (listId: string) => {
  //   addToList.mutate(listId);
  // };

  // const handleCreateList = () => {
  //   if (newListName.trim()) {
  //     createList.mutate(newListName.trim());
  //   } else {
  //     toast({
  //       title: "Error",
  //       description: "List name cannot be empty.",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <Modal
      colorScheme="darkPurple"
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="20%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalHeader>Add to List</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
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
          ) : data?.length === 0 ? (
            <CreateList headerText="You don't have any lists. Create a new one:" />
          ) : (
            <Box>will be updated..</Box>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="darkPurple"
            color="white"
            bg={"darkPurple.700"}
            _hover={{
              bg: "darkPurple.500",
            }}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalList;
