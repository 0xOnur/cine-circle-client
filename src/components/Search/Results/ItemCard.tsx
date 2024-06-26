import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { IMAGE_URL } from "@components/Shared/Poster/PosterImage";
import ListButton from "@components/Shared/MediaDetailsPage/Overview/Buttons/ListButton";
import WatchlistButton from "@components/Shared/MediaDetailsPage/Overview/Buttons/WatchlistButton";

interface IProps {
  tmdbID: number;
  title: string;
  release_date?: string;
  overview?: string;
  media_type?: "tv" | "movie";
  poster_path: string;
  href?: string;
  hideFooter?: boolean;
  direction?: "row" | "column";
  imageWidth?: string;
}

const ItemCard = ({
  tmdbID,
  media_type,
  href,
  title,
  release_date,
  overview,
  poster_path,
  hideFooter,
  direction,
  imageWidth,
}: IProps) => {
  return (
    <Link
      href={href}
      _hover={{
        textDecoration: "none",
        transform: "scale(1.02)",
      }}
      isExternal
    >
      <Card
        w={"full"}
        direction={direction || { base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        rounded={24}
        _hover={{
          bg: useColorModeValue("darkPurple.50", "gray.900"),
        }}
      >
        <Image
          w={imageWidth || { base: "100%", sm: "200px" }}
          objectFit="cover"
          src={IMAGE_URL + poster_path}
          alt={title}
          fallbackSrc="https://via.placeholder.com/300x450.png?text=No+Poster"
        />

        <Stack overflow={"hidden"}>
          <CardBody>
            <Heading size="md">{title}</Heading>

            {release_date && (
              <Text color="gray.500" fontSize="sm">
                {new Date(release_date).toDateString()}
              </Text>
            )}

            {overview && (
              <Text py="2">
                {overview.length > 200
                  ? `${overview.slice(0, 200)}...`
                  : overview}
              </Text>
            )}
          </CardBody>

          {!hideFooter && media_type && (
            <CardFooter gap={5} flexWrap="wrap" zIndex={2}>
              <ListButton mediaType={media_type} tmdbID={tmdbID} />
              <WatchlistButton mediaType={media_type} tmdbID={tmdbID} />
            </CardFooter>
          )}
        </Stack>
      </Card>
    </Link>
  );
};

export default ItemCard;
