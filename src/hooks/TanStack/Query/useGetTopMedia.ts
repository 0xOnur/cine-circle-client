import { getTopMedias, getTopMediasType } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IMovie } from "types/tmdb/Movie/IMovie";
import { ITVShow } from "types/tmdb/TV/ITVShow";

interface IResponse {
  page: number;
  results: (IMovie | ITVShow)[];
  total_pages: number;
  total_results: number;
}

const useTopMedia = (props: getTopMediasType) => {
  const { data, status, refetch, isRefetching } = useQuery<IResponse, Error>({
    queryKey: ["topMedias", props.mediaType, props.page],
    queryFn: () => getTopMedias(props),
  });

  return { data, status, refetch, isRefetching };
};

export default useTopMedia;
