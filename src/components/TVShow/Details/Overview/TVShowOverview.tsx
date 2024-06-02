import BackdropImage from "@components/Shared/MediaDetailsPage/Overview/BackdropImage";
import DetailMeta from "@components/Shared/MediaDetailsPage/Overview/DetailMeta";
import { Badge, Box, Container, Flex, Grid, Link } from "@chakra-ui/react";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";

interface IProps {
  data: ITvShowDetails;
}

const TVShowOverview = ({ data }: IProps) => {
  return (
    <Box position="relative" w="full">
      <Container>
        <BackdropImage backdrop_path={data.backdrop_path} />

        <Grid gridGap={[8, 16]}>
          <BackdropImage backdrop_path={data.backdrop_path} />

          <Grid rowGap={8} flexBasis={["100%"]}>
            <DetailMeta
              data={{
                tmdbID: data.id,
                mediaType: "tv",
                name: data.name,
                posterPath: data.poster_path,
                status: data.status,
                releasedDate: data.first_air_date,
                tagline: data.tagline,
                overview: data.overview,
              }}
              extras={
                <Flex wrap="wrap" gridGap={2}>
                  {data.genres.map((genre) => (
                    <Badge
                      color="gray.300"
                      cursor="pointer"
                      variant="outline"
                      py={1}
                      px={2}
                      rounded="md"
                      as={Link}
                      key={`${genre.name}-${genre.id}`}
                      href={`/tv-shows/genre/${genre.id}?page=1`}
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </Flex>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TVShowOverview;
