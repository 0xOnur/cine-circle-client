import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Container, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import MovieOverview from "./Overview/MovieOverview";
import Title from "@routes/Title";
import CastSlider from "@components/Shared/DetailsPage/Media/CastSlider";
import MediaVideos from "@components/Shared/DetailsPage/Media/Videos";

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
          <Container display="flex" flexDirection={"column"} gap="50px">
            <CastSlider mediaId={movieId!} mediaType="movie" />
            <MediaVideos mediaType="movie" tmdbID={movieId!} />
          </Container>
        </Flex>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
