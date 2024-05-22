import { searchMovies } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IMovie } from "types/tmdb/Movie/IMovie";

interface IProps {
  query: string;
  page: number;
}

interface IResponseData {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

const useSearchMovie = ({ query, page }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IResponseData>({
    queryKey: ["searchMovie", query, page],
    queryFn: () => searchMovies(query, page),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useSearchMovie;
