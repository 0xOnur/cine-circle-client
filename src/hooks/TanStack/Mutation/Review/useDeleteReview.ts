import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteReview } from "@api/review.api";
import { useToast } from "@chakra-ui/react";

interface IProps {
  tmdbID: string;
  onClose: () => void;
}

export const useDeleteReview = ({ tmdbID, onClose }: IProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteReview(tmdbID),
    onSuccess: () => {
      onClose();
      queryClient.invalidateQueries({ queryKey: ["getMediaReviews"] });
      queryClient.invalidateQueries({ queryKey: ["userReviews"] });
      toast({
        title: "Success",
        description: "Review deleted successfully",
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

export default useDeleteReview;
