import { getTrendingTVShows } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { ITVShow } from "types/tmdb/TV/ITVShow";

interface IProps {
  time_window: "day" | "week";
}

type responseData = {
  page: number;
  results: ITVShow[];
  total_pages: number;
  total_results: number;
};

const useGetTrendingShows = ({ time_window }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<responseData>({
    queryKey: ["trendingShows", time_window],
    queryFn: () => getTrendingTVShows(time_window),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetTrendingShows;
