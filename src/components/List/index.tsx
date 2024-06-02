import PendingStatus from "@components/Shared/Status/PendingStatus";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import MediaItems from "@components/Shared/Others/MediaItems";
import useGetList from "hooks/TanStack/Query/List/useGetList";
import { Flex, Grid } from "@chakra-ui/react";
import Title from "@routes/Title";

interface IProps {
  username: string | undefined;
  listId: string | undefined;
}

const ListDetailsPage = ({ username, listId }: IProps) => {
  if (!listId || !username) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetList({ listId });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  if (data.medias.length === 0) {
    return <NoItemAlert text="No items found" />;
  }

  return (
    <Flex direction="column" w="full" gap={20} align={"center"}>
      <Title title={`${username}'s ${data.listName}`} />
      <SectionTitle sectionTitle={`${data.listName} (${data.medias.length})`} />
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

export default ListDetailsPage;
