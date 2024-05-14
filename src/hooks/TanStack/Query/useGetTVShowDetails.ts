import { getTVShowDetails } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";

interface IProps {
  showId: string;
}

const useGetShowDetails = ({ showId }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<ITvShowDetails>({
    queryKey: ["movieDetails", showId],
    queryFn: () => getTVShowDetails(showId),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetShowDetails;
