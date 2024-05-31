import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useGetUserLists from "hooks/TanStack/Query/User/useGetUserLists";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import SeeMore from "@components/Shared/Others/SeeMore";
import { Flex, Grid } from "@chakra-ui/react";
import ListCard from "./ListCard";

interface IProps {
  username: string;
}

const UserLists = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetUserLists({
    username: username,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  const lastFourLists = data.slice(0, 4);

  if (!lastFourLists || lastFourLists.length === 0) {
    return <NoItemAlert sectionTitle="Lists" text="No lists found" />;
  }

  return (
    <Flex w="full" direction="column" gap={5}>
      <Flex
        w="full"
        align="center"
        justify={{ base: "center", sm: "flex-start" }}
      >
        <SectionTitle
          sectionTitle={`Last created lists (${lastFourLists.length})`}
          color="gray.500"
          sectionHref={`/user/${username}/lists`}
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
        {lastFourLists.map((list) => (
          <Flex minW={0} key={list._id}>
            <ListCard username={username} list={list} />
          </Flex>
        ))}
      </Grid>
      <Flex w="full" justify="flex-end">
        <SeeMore href={`/user/${username}/lists`} />
      </Flex>
    </Flex>
  );
};

export default UserLists;
