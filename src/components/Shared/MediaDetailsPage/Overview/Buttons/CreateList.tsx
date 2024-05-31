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
import { useCreateList } from "hooks/TanStack/Mutation/List/useCreateList.mutation";

interface IProps {
  headerText?: string;
  defaultMediaType?: "tv" | "movie";
}

const CreateList = ({ headerText, defaultMediaType }: IProps) => {
  const [newList, setNewList] = useState({
    listName: "",
    description: "",
    listType: defaultMediaType || "tv",
  });

  const { mutate } = useCreateList({
    listName: newList.listName,
    description: newList.description,
    listType: newList.listType,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate();
      }}
    >
      {headerText && (
        <Text
          textAlign="center"
          fontWeight="600"
          textTransform="uppercase"
          fontSize="lg"
          opacity={0.8}
          mb={4}
        >
          {headerText}
        </Text>
      )}

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
          value={newList.listType}
          onChange={(e) =>
            setNewList({
              ...newList,
              listType: e.target.value as "tv" | "movie",
            })
          }
        >
          <option value="tv">TV</option>
          <option value="movie">Movie</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel mt={4}>List Description</FormLabel>

        <Textarea
          rows={3}
          resize="vertical"
          maxH={200}
          minLength={3}
          maxLength={1000}
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
        bgColor="darkPurple.500"
        _hover={{
          bg: "darkPurple.600",
        }}
      >
        Create List
      </Button>
    </form>
  );
};

export default CreateList;
