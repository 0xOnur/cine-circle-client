import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, Text } from "@chakra-ui/react";

interface ListitemProps {
  tmdbID: number;
  list: IList;
  handleAddList: (listId: string) => void;
  handleRemoveList: (listId: string) => void;
}

const Listitem = ({
  tmdbID,
  list,
  handleAddList,
  handleRemoveList,
}: ListitemProps) => {
  const mediaLength = list.medias?.length;

  const isAdded = list.medias
    ? list.medias.some((media) => media.tmdbID === String(tmdbID))
    : false;

  return (
    <Grid
      gridTemplateColumns="1fr auto"
      p={4}
      mb={4}
      borderWidth="1px"
      borderRadius="lg"
      alignItems="center"
    >
      <Box>
        <Text
          noOfLines={1}
          fontWeight="bold"
          fontSize="md"
          letterSpacing={1}
          textAlign="center"
          textTransform="capitalize"
          mb={2}
        >
          {list.listName}
        </Text>
        <Text fontWeight={500}>
          {mediaLength} {mediaLength > 1 ? "items" : "item"}
        </Text>

        <Text fontWeight={500}>
          {list.listType === "movie" ? "Movie" : "TV Show"} List
        </Text>
        <Text fontSize="sm" color="gray.500">
          Created: {new Date(list.createdAt).toLocaleDateString()}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Last update: {new Date(list.updatedAt).toLocaleDateString()}
        </Text>
      </Box>
      <Button
        bgColor="darkPurple.500"
        colorScheme="darkPurple"
        leftIcon={isAdded ? <MinusIcon /> : <AddIcon />}
        color="white"
        size="sm"
        variant="solid"
        _hover={{
          bg: "darkPurple.600",
        }}
        onClick={() => {
          if (isAdded) {
            handleRemoveList(list._id);
          } else {
            handleAddList(list._id);
          }
        }}
      >
        {isAdded ? "Remove" : "Add"}
      </Button>
    </Grid>
  );
};

export default Listitem;
