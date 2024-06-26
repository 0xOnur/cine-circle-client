import { getMediaPosters } from "@api/tmdb.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  mediaType: "movie" | "tv";
  tmdbID: string;
}

interface IResponse {
  poster_path: string | null;
  backdrop_path: string | null;
}

const useGetMediaPoster = ({ mediaType, tmdbID }: IProps) => {
  const { data: mediaPoster } = useQuery<IResponse>({
    queryKey: ["mediaPoster", mediaType, tmdbID],
    queryFn: () => getMediaPosters(mediaType, tmdbID),
    refetchOnWindowFocus: false,
    enabled: mediaType !== undefined && tmdbID !== undefined,
  });

  const posterUrl = mediaPoster
    ? `https://image.tmdb.org/t/p/w500/${mediaPoster.poster_path}`
    : null;
  const backdropUrl = mediaPoster
    ? `https://image.tmdb.org/t/p/w500/${mediaPoster.backdrop_path}`
    : null;

  return { posterUrl, backdropUrl };
};

export default useGetMediaPoster;
