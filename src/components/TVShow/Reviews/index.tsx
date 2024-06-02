import useGetShowDetails from "hooks/TanStack/Query/TV/useGetTVShowDetails";
import MediaReviews from "@components/Shared/MediaDetailsPage/Reviews";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import TVShowOverview from "../Details/Overview/TVShowOverview";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Container, Flex } from "@chakra-ui/react";
import Title from "@routes/Title";

interface IProps {
  showId: string | undefined;
}

const TVShowReviewsPage = ({ showId }: IProps) => {
  if (!showId) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetShowDetails({
    showId: showId,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return (
    <Flex w="full" direction="column" gap={20}>
      <Title title={`${data.name} Reviews`} />
      <TVShowOverview data={data} />
      <Container>
        <MediaReviews media={data} media_type="tv-show" showAll />
      </Container>
    </Flex>
  );
};

export default TVShowReviewsPage;
