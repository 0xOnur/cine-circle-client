import BackdropImage from "@components/Shared/DetailsPage/Media/Overview/BackdropImage";
import DetailMeta from "@components/Shared/DetailsPage/Media/Overview/DetailMeta";
import { Badge, Box, Container, Flex, Grid, Link } from "@chakra-ui/react";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";

interface IProps {
  data: IMovieDetails;
}

const MovieOverview = ({ data }: IProps) => {
  return (
    <Box position="relative">
      <Container>
        <BackdropImage backdrop_path={data.backdrop_path} />

        <Grid gridGap={[8, 16]}>
          <BackdropImage backdrop_path={data.backdrop_path} />

          <Grid rowGap={8} flexBasis={["100%"]}>
            <DetailMeta
              data={{
                tmdbID: data.id,
                mediaType: "movie",
                name: data.title,
                tagline: data.tagline,
                status: data.status,
                releasedDate: data.release_date,
                posterPath: data.poster_path,
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
                      href={`/movies/genre/${genre.id}?page=1`}
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </Flex>
              }
            />
          </Grid>

          <Grid
            gap={8}
            alignItems="center"
            templateColumns={{
              base: "minmax(0, 1fr)",
              md: "1fr minmax(0, 2fr)",
            }}
            flexBasis={["100%"]}
          >
            {/* <MovieDetailAdditionalInfo data={data} id={movieId ?? 0} /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MovieOverview;
