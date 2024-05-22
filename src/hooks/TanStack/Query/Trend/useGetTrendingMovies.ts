import { getTrendingMovies } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IMovie } from "types/tmdb/Movie/IMovie";

interface IProps {
  time_window: "day" | "week";
}

type responseData = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

const useGetTrendingMovies = ({ time_window }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<responseData>({
    queryKey: ["trendingMovies", time_window],
    queryFn: () => getTrendingMovies(time_window),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetTrendingMovies;
