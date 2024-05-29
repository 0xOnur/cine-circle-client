import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import CreateListAccordion from "./CreateListAccordion";
import { SettingsIcon } from "@chakra-ui/icons";
import Listitem from "./List.item";
import { useListMutation } from "hooks/TanStack/Mutation/List/useList.mutation";

interface IProps {
  lists: IList[];
  tmdbID: number;
  mediaType: "tv" | "movie";
}

const Lists = ({ lists, tmdbID, mediaType }: IProps) => {
  const { addListMutation, removeListMutation } = useListMutation({
    tmdbID,
    mediaType,
  });

  const handleAddList = (listId: string) => {
    addListMutation.mutate(listId);
  };

  const handleRemoveList = (listId: string) => {
    removeListMutation.mutate(listId);
  };

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      {lists.map((list: IList) => (
        <Listitem
          key={list._id}
          tmdbID={tmdbID}
          list={list}
          handleAddList={handleAddList}
          handleRemoveList={handleRemoveList}
        />
      ))}

      <Link
        isExternal
        href="/manage-lists"
        color={useColorModeValue("darkPurple.500", "darkPurple.100")}
        fontWeight="bold"
        fontSize="sm"
        display="flex"
        w="fit-content"
        gap={2}
        alignItems="center"
        _hover={{
          color: useColorModeValue("darkPurple.300", "darkPurple.200"),
        }}
      >
        <SettingsIcon />
        Manage all lists
      </Link>

      <CreateListAccordion mediaType={mediaType} />
    </Box>
  );
};

export default Lists;
