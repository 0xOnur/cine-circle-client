import { getMediaReviews } from "@api/review.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  tmdbID: string;
}

const useGetMediaReviews = ({ tmdbID }: IProps) => {
  const { ...result } = useQuery({
    queryKey: ["getMediaReviews", tmdbID],
    queryFn: () => getMediaReviews(tmdbID),
    refetchOnWindowFocus: false,
  });

  return result;
};

export default useGetMediaReviews;
