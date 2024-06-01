import { deleteRating } from "@api/rating.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  tmdbID: string;
}

export const useDeleteRate = ({ tmdbID }: IProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationKey: ["deleteRating", tmdbID],
    mutationFn: () => deleteRating(tmdbID),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getMediaRatings"],
      });
    },
  });

  return { mutate, isPending };
};

export default useDeleteRate;
