import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import useGetMediaPoster from "hooks/TanStack/Query/Other/useGetMediaPoster";

interface IMedia {
  mediaType: "tv" | "movie";
  tmdbID: string;
  dateAdded: Date;
}

interface IList {
  _id: string;
  userId: string;
  listName: string;
  description?: string;
  listType: "tv" | "movie";
  medias: IMedia[];
  createdAt: Date;
  updatedAt: Date;
}

interface IProps {
  username: string;
  list: IList;
}

const ListCard = ({ username, list }: IProps) => {
  const lastMedia = list.medias[list.medias.length - 1];

  const { backdropUrl } = useGetMediaPoster({
    mediaType: lastMedia.mediaType,
    tmdbID: lastMedia.tmdbID,
  });

  return (
    <Box
      w="xs"
      rounded={"sm"}
      overflow={"hidden"}
      border={"1px"}
      borderColor="#7000e0"
      boxShadow="6px 6px 0 #7000e0"
    >
      <Box h={"200px"}>
        <Image
          src={backdropUrl!}
          objectFit="cover"
          h="full"
          w="full"
          fallbackSrc="https://via.placeholder.com/300"
          alt={"Blog Image"}
        />
      </Box>
      <Box p={4}>
        <Box
          bg="darkPurple.700"
          color={"white"}
          display={"inline-block"}
          px={2}
          py={1}
          mb={2}
        >
          <Text fontSize={"xs"} fontWeight="medium" textTransform={"uppercase"}>
            {list.listType}
          </Text>
        </Box>
        <Heading fontSize={"xl"} noOfLines={1}>
          {list.listName}
        </Heading>
        <Text color={"gray.500"} noOfLines={2}>
          {list.medias.length} {list.medias.length > 1 ? "items" : "item"}
        </Text>
      </Box>
      <Link href={`/user/${username}/lists/${list._id}`}>
        <HStack>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Text fontWeight="bold" letterSpacing={1} fontSize="lg">
              View List
            </Text>
            <BsArrowUpRight />
          </Flex>
        </HStack>
      </Link>
    </Box>
  );
};

export default ListCard;
