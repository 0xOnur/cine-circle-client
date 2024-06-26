import useGetWatchlist from "hooks/TanStack/Query/User/useGetUserWatchlist";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import MediaItems from "@components/Shared/Others/MediaItems";
import { Flex, Grid } from "@chakra-ui/react";

interface IProps {
  username: string;
}

const Watchlist = ({ username }: IProps) => {
  if (!username) {
    return <NoItemAlert text="No watchlist found" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetWatchlist({
    username: username!,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  if (!data) {
    return <NoItemAlert text="No watchlist found" />;
  }

  return (
    <Flex direction="column" w="full" gap={20} align={"center"}>
      <SectionTitle
        sectionTitle={`${username}'s Watchlist (${data?.medias?.length})`}
      />
      <Grid
        w="full"
        columnGap={5}
        rowGap={8}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      >
        {data?.medias?.map((media) => (
          <MediaItems
            key={media.tmdbID}
            tmdbID={media.tmdbID}
            mediaType={media.mediaType}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Watchlist;
