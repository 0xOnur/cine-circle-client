import { rateMedia } from "@api/rating.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  tmdbID: string;
  mediaType: "movie" | "tv";
  rating: number;
}

export const useRateMedia = ({ tmdbID, mediaType, rating }: IProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["rateMedia", tmdbID, mediaType, rating],
    mutationFn: () => rateMedia(tmdbID, mediaType, rating),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getMediaRatings"],
      });
    },
  });

  return { mutate, isPending };
};

export default useRateMedia;
