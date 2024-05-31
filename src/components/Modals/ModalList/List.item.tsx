import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";

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
        <Heading mb={2} fontSize={"xl"}>
          {list.listName}
        </Heading>

        <Box
          bg="darkPurple.700"
          color={"white"}
          display={"inline-block"}
          px={2}
          py={1}
          mb={2}
          rounded="md"
        >
          <Text fontSize={"xs"} fontWeight="medium" textTransform={"uppercase"}>
            {list.listType}
          </Text>
        </Box>

        <Text color={"gray.500"} fontWeight="medium">
          {list.medias.length} {list.medias.length > 1 ? "items" : "item"}
        </Text>

        <Text fontSize="sm" color="gray.500" fontWeight="medium">
          Created: {new Date(list.createdAt).toLocaleDateString()}
        </Text>
        <Text fontSize="sm" color="gray.500" fontWeight="medium">
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
