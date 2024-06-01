import SectionTitle from "@components/Home/Trending/SectionTitle";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useGetUserLists from "hooks/TanStack/Query/User/useGetUserLists";
import ListCard from "../UserActivity/Lists/ListCard";
import { Flex, Grid } from "@chakra-ui/react";

interface IProps {
  username: string;
}

const Lists = ({ username }: IProps) => {
  if (!username) {
    return <NoItemAlert text="No watchlist found" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetUserLists({
    username: username!,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  if (!data) {
    return <NoItemAlert text="No lists found" />;
  }

  return (
    <Flex w="full" direction="column" gap={20}>
      <Flex w="full" justify="center">
        <SectionTitle
          sectionTitle={`${username}'s Lists (${data.length})`}
        />
      </Flex>
      <Grid
        gap={5}
        minW={0}
        minH={0}
        w="fit-content"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {data.map((list) => (
          <Flex minW={0} key={list._id}>
            <ListCard username={username} list={list} />
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Lists;
