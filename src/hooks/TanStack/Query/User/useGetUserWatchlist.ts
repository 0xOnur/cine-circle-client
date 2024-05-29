import { getWatchlist } from "@api/watchlist.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  username: string;
}

const useGetWatchlist = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IWatchlist>({
    queryKey: ["userWatchlist", username],
    queryFn: () => getWatchlist(username),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetWatchlist;
