import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Container, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import MovieOverview from "./Overview/MovieOverview";
import Title from "@routes/Title";
import MediaAchievements from "@components/Shared/MediaDetailsPage/Achievements";
import CastSlider from "@components/Shared/MediaDetailsPage/CastSlider";

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
          <Container
            display="flex"
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
            }}
            rowGap={8}
            columnGap="50px"
            justifyContent={"space-between"}
          >
            <CastSlider
              mediaId={data.id}
              castData={data.credits?.cast}
              mediaType="movie"
            />
            <MediaAchievements media={data} media_type="movie" />
          </Container>
        </Flex>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
