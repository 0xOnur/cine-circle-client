import useGetMovieDetails from "hooks/TanStack/Query/useGetMovieDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Container, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import MovieOverview from "./Overview/MovieOverview";
import Title from "@routes/Title";
import CastSlider from "@components/Shared/DetailsPage/Media/CastSlider";

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
        <Flex direction="column">
          <Title title={data.title} />
          <MovieOverview data={data} />
          <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
            <CastSlider mediaId={movieId!} mediaType="movie" />
          </Container>
        </Flex>
      )}
    </Fragment>
  );
};

export default MovieDetailsPage;
