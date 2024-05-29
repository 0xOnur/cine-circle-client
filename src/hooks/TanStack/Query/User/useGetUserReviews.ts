import { getUserReviews } from "@api/review.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  username: string;
}

const useGetUserReviews = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IReview[]>({
    queryKey: ["userReviews", username],
    queryFn: () => getUserReviews(username),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetUserReviews;
