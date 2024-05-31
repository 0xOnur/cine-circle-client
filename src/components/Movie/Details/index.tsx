import MediaAchievements from "@components/Shared/MediaDetailsPage/Achievements";
import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import CastSlider from "@components/Shared/MediaDetailsPage/CastSlider";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import Reviews from "@components/Shared/MediaDetailsPage/Reviews";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Box, Container, Flex } from "@chakra-ui/react";
import MovieOverview from "./Overview/MovieOverview";
import Title from "@routes/Title";
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
      {status === "pending" && (
        <Container>
          <PendingStatus count={6} height="50px" />
        </Container>
      )}

      {status === "error" && (
        <Container>
          <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
        </Container>
      )}

      {status === "success" && data && (
        <Flex direction="column">
          <Title title={data.title} />
          <MovieOverview data={data} />
          <Container display="flex" flexDirection="column" gap={8}>
            <Flex
              direction={{
                base: "column",
                lg: "row",
              }}
              rowGap={8}
              columnGap="50px"
              justifyContent={"space-between"}
            >
              <Box w="full" display="flex" flexDirection="column" gap={8}>
                <CastSlider
                  mediaId={data.id}
                  castData={data.credits?.cast}
                  mediaType="movie"
                />
                <Reviews media={data} media_type="movie" />
              </Box>
              <MediaAchievements media={data} media_type="movie" />
            </Flex>
          </Container>
        </Flex>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
