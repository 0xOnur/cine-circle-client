import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useCreateList } from "hooks/TanStack/Mutation/useCreateList.mutation";

interface IProps {
  headerText: string;
}

const CreateList = ({ headerText }: IProps) => {
  const [newList, setNewList] = useState({
    listName: "",
    description: "",
    type: "tv" as "tv" | "movie",
  });

  const { mutate } = useCreateList({
    listName: newList.listName,
    description: newList.description,
    listType: newList.type,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate();
      }}
    >
      <Text mb={4}>{headerText}</Text>

      <FormControl isRequired>
        <FormLabel>List Name</FormLabel>
        <Input
          minLength={3}
          maxLength={100}
          placeholder="Enter list name"
          value={newList.listName}
          onChange={(e) => setNewList({ ...newList, listName: e.target.value })}
        />
      </FormControl>

      <FormControl isRequired>
        <FormLabel mt={4}>List Type</FormLabel>

        <Select
          value={newList.type}
          onChange={(e) =>
            setNewList({ ...newList, type: e.target.value as "tv" | "movie" })
          }
        >
          <option value="movie">Movie</option>
          <option value="tv">TV</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel mt={4}>List Description</FormLabel>

        <Textarea
          rows={3}
          resize="vertical"
          maxH={200}
          minLength={3}
          maxLength={2500}
          placeholder="Enter list description"
          value={newList.description}
          onChange={(e) =>
            setNewList({ ...newList, description: e.target.value })
          }
        />
      </FormControl>

      <Button
        type="submit"
        mt={4}
        color="white"
        colorScheme="darkPurple"
        bgColor="darkPurple.700"
        _hover={{
          bg: "darkPurple.500",
        }}
        // onClick={handleCreateList}
      >
        Create List
      </Button>
    </form>
  );
};

export default CreateList;
