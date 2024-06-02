import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import MovieOverview from "@components/Movie/Details/Overview/MovieOverview";
import PendingStatus from "../Status/PendingStatus";
import { Container, Flex } from "@chakra-ui/react";
import ErrorStatus from "../Status/ErrorStatus";
import Cast from "./Cast";
import Crew from "./Crew";
import useGetShowDetails from "hooks/TanStack/Query/TV/useGetTVShowDetails";
import TVShowOverview from "@components/TVShow/Details/Overview/TVShowOverview";

interface IProps {
  mediaId: string | undefined;
  mediaType: "movie" | "tv";
}

const MovieData = ({ mediaId }: IProps) => {
  if (!mediaId) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetMovieDetails({
    movieId: mediaId,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return (
    <Flex w="full" direction="column" gap={20}>
      <MovieOverview data={data} />
      <Container gap={20} display={"flex"} flexDirection="column">
        <Cast castData={data.credits.cast} />
        <Crew crewData={data.credits.crew} />
      </Container>
    </Flex>
  );
};

const TvData = ({ mediaId }: IProps) => {
  if (!mediaId) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetShowDetails({
    showId: mediaId,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return (
    <Flex w="full" direction="column" gap={20}>
      <TVShowOverview data={data} />
      <Container gap={20} display={"flex"} flexDirection="column">
        <Cast castData={data.credits.cast} />
        <Crew crewData={data.credits.crew} />
      </Container>
    </Flex>
  );
};

const CreditsPage = ({ mediaId, mediaType }: IProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if (!mediaId) return null;

  return mediaType === "movie" ? (
    <MovieData mediaId={mediaId} mediaType={"movie"} />
  ) : (
    <TvData mediaId={mediaId} mediaType={"tv"} />
  );
};

export default CreditsPage;
