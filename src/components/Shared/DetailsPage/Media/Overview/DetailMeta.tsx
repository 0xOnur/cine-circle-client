import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import PosterImage from "@components/Shared/Poster/PosterImage";
import OverviewText from "./OverviewText";
import ListButton from "./Buttons/ListButton";
import WatchlistButton from "./Buttons/WatchlistButton";

type DetailData = {
  tmdbID: number;
  mediaType: "tv" | "movie";
  name: string;
  overview?: string;
  status?: string;
  tagline?: string;
  releasedDate: Date | string;
  posterPath?: string;
};

interface IProps {
  data: DetailData;
  extras?: React.ReactNode;
}

const DetailMeta = ({ data, extras }: IProps) => {
  return (
    <Box
      color="white"
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
      alignItems="center"
      gap={{ base: 8, md: 16 }}
    >
      <AspectRatio
        ratio={3.6 / 5}
        minWidth={{ base: undefined, md: 300 }}
        maxHeight={["100%"]}
        maxWidth={["100%"]}
        marginX={[8, "25%", 0]}
      >
        <PosterImage src={data.posterPath} />
      </AspectRatio>

      <Grid gap={4}>
        <Heading
          textAlign={["center", "center", "inherit"]}
          size="lg"
          letterSpacing={2}
          textTransform="uppercase"
          fontWeight="bold"
          marginX={[8, 8, 0]}
        >
          {data.name}
        </Heading>

        <Text
          textAlign={["center", "center", "inherit"]}
          fontSize="0.7rem"
          letterSpacing={2}
          textTransform="uppercase"
          marginTop={4}
          marginX={[8, 8, 0]}
        >
          {data.tagline}
        </Text>

        <Flex gridColumnGap={2} alignItems="center">
          <Badge variant="outline" color="gray.300">
            {data.status}
          </Badge>

          <Text textTransform="uppercase" letterSpacing={1} fontSize="xs">
            {new Date(data.releasedDate).getFullYear()}
          </Text>
        </Flex>

        {extras ? (
          <Flex wrap="wrap" gridGap={2}>
            {extras}
          </Flex>
        ) : null}

        <Flex alignItems="center" gap={5}>
          <ListButton tmdbID={data.tmdbID} mediaType={data.mediaType} />
          <WatchlistButton tmdbID={data.tmdbID} mediaType={data.mediaType} />
        </Flex>

        {data.overview && <OverviewText overview={data.overview} />}
      </Grid>
    </Box>
  );
};

export default DetailMeta;
