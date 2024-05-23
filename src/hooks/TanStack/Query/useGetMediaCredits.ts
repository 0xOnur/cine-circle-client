import { getCredits } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";
import { IPerson } from "types/tmdb/Person/IPerson";

interface IProps {
  mediaType: "movie" | "tv";
  mediaId: string;
}

type CreditCast = IPerson & {
  cast_id: number;
  character: string;
  order: number;
};

type CreditCrew = IPerson & {
  department: string;
  job: string;
};

export interface ICreditsResponse {
  id: number;
  cast: Array<CreditCast>;
  crew: Array<CreditCrew>;
};

const useGetMediaCredits = ({ mediaType, mediaId }: IProps) => {
  const { data, status, refetch, isRefetching } =
    useQuery<ICreditsResponse>({
      queryKey: ["mediaCredits", mediaType, mediaId],
      queryFn: () => getCredits(mediaType, mediaId),
      refetchOnWindowFocus: false,
    });

  return { data, status, refetch, isRefetching };
};

export default useGetMediaCredits;
