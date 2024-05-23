import { getMediaVideos } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  mediaType: "movie" | "tv";
  tmdbID: string;
}

interface IVideo {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  published_at: string;
}

interface IVideoResponse {
  id: number;
  results: Array<IVideo>;
}

const useGetMediaVideos = ({ mediaType, tmdbID }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IVideoResponse>({
    queryKey: ["movieVideos", tmdbID],
    queryFn: () => getMediaVideos(mediaType, tmdbID),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetMediaVideos;
