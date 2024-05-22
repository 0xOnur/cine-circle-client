import React from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IMAGE_URL } from "@components/Shared/Poster/PosterImage";
import ListButton from "@components/Shared/DetailsPage/Media/Overview/Buttons/ListButton";
import WatchlistButton from "@components/Shared/DetailsPage/Media/Overview/Buttons/WatchlistButton";

interface IProps {
  tmdbID: number;
  href: string;
  poster_path: string;
  title: string;
  overview?: string;
}

const ItemCard = ({ tmdbID, href, title, overview, poster_path }: IProps) => {
  return (
    <Link href={href} _hover={{ textDecoration: "none" }} isExternal>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        rounded={24}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={IMAGE_URL + poster_path}
          alt={title}
          fallbackSrc="https://via.placeholder.com/300x450.png?text=No+Poster"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{overview?.slice(0, 500)}...</Text>
          </CardBody>

          <CardFooter gap={5} flexWrap="wrap" zIndex={2}>
            <ListButton mediaType={"movie"} tmdbID={tmdbID} />
            <WatchlistButton mediaType={"movie"} tmdbID={tmdbID} />
          </CardFooter>
        </Stack>
      </Card>
    </Link>
  );
};

export default ItemCard;
