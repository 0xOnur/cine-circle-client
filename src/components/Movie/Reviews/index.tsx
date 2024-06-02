import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import MediaReviews from "@components/Shared/MediaDetailsPage/Reviews";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import MovieOverview from "../Details/Overview/MovieOverview";
import { Container, Flex } from "@chakra-ui/react";
import Title from "@routes/Title";

interface IProps {
  movieId: string | undefined;
}

const MovieReviewsPage = ({ movieId }: IProps) => {
  if (!movieId) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetMovieDetails({
    movieId: movieId,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return (
    <Flex w="full" direction="column" gap={20}>
      <Title title={`${data.title} Reviews`} />
      <MovieOverview data={data} />
      <Container>
        <MediaReviews media={data} media_type="tv-show" showAll />
      </Container>
    </Flex>
  );
};

export default MovieReviewsPage;
