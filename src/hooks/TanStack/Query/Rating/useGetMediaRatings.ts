import { getMediaRatings } from "@api/rating.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  tmdbID: string;
  mediaType: "movie" | "tv";
}

export interface IRatingResponse {
  ratings: IRating[];
  averageRating: number;
}

export const useGetMediaRatings = ({ tmdbID, mediaType }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IRatingResponse>({
    queryKey: ["getMediaRatings", tmdbID, mediaType],
    queryFn: () => getMediaRatings(tmdbID, mediaType),
    enabled: Boolean(tmdbID && mediaType),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetMediaRatings;
