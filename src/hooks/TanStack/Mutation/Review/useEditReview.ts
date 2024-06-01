import { updateReview } from "@api/review.api";
import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface IProps {
  tmdbID: string;
  title: string;
  comment: string;
  spoiler: boolean;
  onClose: () => void;
}

export const useEditReview = ({
  tmdbID,
  title,
  comment,
  spoiler,
  onClose,
}: IProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: () => updateReview(tmdbID, title, comment, spoiler),
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getMediaReviews"] });
      queryClient.invalidateQueries({ queryKey: ["userReviews"] });
      toast({
        title: "Success",
        description: "Review updated successfully",
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

export default useEditReview;
