import useGetMovieDetails from "hooks/TanStack/Query/useGetMovieDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import MovieDetailMeta from "./MovieDetailMeta";
import { Box, Container, Grid } from "@chakra-ui/react";
import { Fragment } from "react";

interface IProps {
  movieId: string | undefined;
}

const MovieDetailsPage = ({ movieId }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetMovieDetails({
    movieId: movieId!,
  });

  return (
    <Fragment>
      {status === "pending" && <PendingStatus count={6} height="50px" />}
      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}

      {status === "success" && data && (
        <Fragment>
          <Box
            width="100%"
            height={{
              base: "100vh",
              md: "100%",
            }}
            position="absolute"
            filter="brightness(0.35)"
            bgImg={
              data.backdrop_path
                ? `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`
                : undefined
            }
            zIndex={-1}
            bgSize="cover"
            bgPosition="center"
          ></Box>
          <Container maxW={"8xl"} px={{ base: 6, md: 10 }} pt={14}>
            <Grid paddingX={8} gridGap={[8, 16]}>
              <Grid rowGap={8} flexBasis={["100%"]}>
                <MovieDetailMeta data={data} />
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
                {/* <MovieDetailAdditionalInfo data={data} id={movieId ?? 0} />

            <CastsWrapper credits={credits} /> */}
              </Grid>
            </Grid>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
