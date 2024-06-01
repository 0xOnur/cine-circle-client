import { Flex } from "@chakra-ui/react";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import Title from "@routes/Title";
import useGetUserInfo from "hooks/TanStack/Query/User/useGetUserInfo";
import { useParams } from "react-router-dom";
import UserInfo from "../UserInfo";
import Watchlist from "./Watchlist";

const UserWatchlistPage = () => {
  const username = useParams().username;

  const { data, status, refetch, isRefetching } = useGetUserInfo({
    username: username!,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return (
    <Flex direction="column" w="full" align="center" gap={20} p={4}>
      <Title title={`${data.username}'s Watchlist`} />
      <UserInfo user={data} />
      <Watchlist username={username!} />
    </Flex>
  );
};

export default UserWatchlistPage;
