import { searchMulti } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IMovie } from "types/tmdb/Movie/IMovie";
import { IPerson } from "types/tmdb/Person/IPerson";
import { ITVShow } from "types/tmdb/TV/ITVShow";

interface IProps {
  query: string;
}

export interface IResponseData {
  page: number;
  results: (IMovie | ITVShow | IPerson)[];
  total_pages: number;
  total_results: number;
}

const useSearchMulti = ({ query }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IResponseData>({
    queryKey: ["searchMulti", query],
    queryFn: () => searchMulti(query),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useSearchMulti;
