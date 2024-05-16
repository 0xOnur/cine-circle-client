import { getCredits } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { MovieCreditsResponse } from "types/tmdb/Types";

interface IProps {
  mediaType: "movie" | "tv";
  mediaId: string;
}

const useGetMediaCredits = ({ mediaType, mediaId }: IProps) => {
  const { data, status, refetch, isRefetching } =
    useQuery<MovieCreditsResponse>({
      queryKey: ["mediaCredits", mediaType, mediaId],
      queryFn: () => getCredits(mediaType, mediaId),
      refetchOnWindowFocus: false,
    });

  return { data, status, refetch, isRefetching };
};

export default useGetMediaCredits;
