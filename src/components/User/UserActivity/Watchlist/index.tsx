import LastWatch from "./LastWatch";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useGetWatchlist from "hooks/TanStack/Query/User/useGetUserWatchlist";

interface IProps {
  username: string;
}

const UserWatchlist = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetWatchlist({
    username: username,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return <LastWatch username={username} watchlist={data} />;
};

export default UserWatchlist;
