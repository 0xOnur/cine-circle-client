import useGetShowDetails from "hooks/TanStack/Query/TV/useGetTVShowDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Container, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import Title from "@routes/Title";
import TVShowOverview from "./Overview/TVShowOverview";
import CastSlider from "@components/Shared/DetailsPage/Media/CastSlider";
import SeasonSlider from "./Seasons";
import MediaVideos from "@components/Shared/DetailsPage/Media/Videos";

interface IProps {
  showId: string | undefined;
}

const TVShowDetailsPage = ({ showId }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetShowDetails({
    showId: showId!,
  });

  return (
    <Fragment>
      {status === "pending" && <PendingStatus count={5} />}
      {status === "error" && (
        <ErrorStatus refetch={refetch} isRefetching={isRefetching} />
      )}

      {status === "success" && data && (
        <Flex direction="column">
          <Title title={data.name} />
          <TVShowOverview data={data} />
          <Container display="flex" flexDirection={"column"} gap="50px">
            <CastSlider mediaId={showId!} mediaType="tv" />
            <SeasonSlider data={data} />
            <MediaVideos mediaType="tv" tmdbID={showId!} />
          </Container>
        </Flex>
      )}
    </Fragment>
  );
};

export default TVShowDetailsPage;
