import useGetShowDetails from "hooks/TanStack/Query/TV/useGetTVShowDetails";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Fragment } from "react";
import Title from "@routes/Title";
import TVShowOverview from "./Overview/TVShowOverview";
import CastSlider from "@components/Shared/MediaDetailsPage/CastSlider";
import SeasonSlider from "./Seasons";
import MediaAchievements from "@components/Shared/MediaDetailsPage/Achievements";
import Reviews from "@components/Shared/MediaDetailsPage/Reviews";

interface IProps {
  showId: string | undefined;
}

const TVShowDetailsPage = ({ showId }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetShowDetails({
    showId: showId!,
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
          <Title title={data.name} />
          <TVShowOverview data={data} />
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
                  mediaType="tv-show"
                />
                <SeasonSlider data={data} />
                <Reviews media={data} media_type="tv-show" />
              </Box>
              <MediaAchievements media={data} media_type="tv" />
            </Flex>
          </Container>
        </Flex>
      )}
    </Fragment>
  );
};

export default TVShowDetailsPage;
