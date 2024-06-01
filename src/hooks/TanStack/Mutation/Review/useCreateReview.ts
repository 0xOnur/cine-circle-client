import { createReview } from "@api/review.api";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  tmdbID: string;
  mediaType: "movie" | "tv";
  title: string;
  comment: string;
  spoiler: boolean;
  onClose: () => void;
}

export const useCreateReview = ({
  tmdbID,
  mediaType,
  title,
  comment,
  spoiler,
  onClose,
}: IProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: () => createReview(tmdbID, mediaType, title, comment, spoiler),
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getMediaReviews"] });
      toast({
        title: "Success",
        description: "Review created successfully",
        status: "success",
      });
    },
    onError: (err: any) => {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
      });
    },
  });

  return { mutate, isPending };
};

export default useCreateReview;
