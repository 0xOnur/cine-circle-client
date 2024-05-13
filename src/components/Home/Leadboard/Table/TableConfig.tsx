import { Text, Flex, Avatar } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";

export type UserRow = {
  username: string;
  avatar: string;
  watched: number;
  reviews: number;
};

const columnHelper = createColumnHelper<UserRow>();

export const columns = [
  columnHelper.accessor("username", {
    id: "username",
    header: () => (
      <Text fontSize="md" color="gray.400">
        User
      </Text>
    ),
    cell: (info) => (
      <Flex align="center">
        <Avatar src={info.row.original.avatar} w="30px" h="30px" me="8px" />
        <Text fontSize="sm" fontWeight="600">
          {info.getValue()}
        </Text>
      </Flex>
    ),
  }),
  columnHelper.accessor("watched", {
    id: "watched",
    header: () => (
      <Text fontSize="md" color="gray.400">
        Watched
      </Text>
    ),
    cell: (info) => <Text fontSize="sm">{info.getValue()}</Text>,
  }),
  columnHelper.accessor("reviews", {
    id: "reviews",
    header: () => (
      <Text fontSize="md" color="gray.400">
        Reviews
      </Text>
    ),
    cell: (info) => <Text fontSize="sm">{info.getValue()}</Text>,
  }),
];
