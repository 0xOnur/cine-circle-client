import { getMovieDetails } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";

interface IProps {
  movieId: string;
}

const useGetMovieDetails = ({ movieId }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IMovieDetails>({
    queryKey: ["movieDetails", movieId],
    queryFn: () => getMovieDetails(movieId),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetMovieDetails;
