import { getUserMediaReview } from "@api/review.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  username: string;
  tmdbID: string;
}

export const useGetUserMediaReview = ({ username, tmdbID }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery({
    queryKey: ["getUserMediaReview", username, tmdbID],
    queryFn: () => getUserMediaReview(username, tmdbID),
    enabled: Boolean(username && tmdbID),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetUserMediaReview;
