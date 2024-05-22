import { searchTVShows } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { ITVShow } from "types/tmdb/TV/ITVShow";

interface IProps {
  query: string;
  page: number;
}

interface IResponseData {
  page: number;
  results: ITVShow[];
  total_pages: number;
  total_results: number;
}

const useSearchTv = ({ query, page }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IResponseData>({
    queryKey: ["searchTv", query, page],
    queryFn: () => searchTVShows(query, page),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useSearchTv;
