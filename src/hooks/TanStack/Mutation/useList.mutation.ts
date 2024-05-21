import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMediaToList, removeMediaFromList } from "@api/list.api";
import { useToast } from "@chakra-ui/react";

interface IProps {
  listId: string;
  tmdbID: number;
  mediaType: "movie" | "tv";
}

export const useListMutation = ({ listId, tmdbID, mediaType }: IProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const addListMutation = useMutation({
    mutationFn: (listId: string) => addMediaToList(listId, tmdbID, mediaType),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userLists"] });
      toast({
        title: "Success",
        description: "Media added to list successfully",
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

  const removeListMutation = useMutation({
    mutationFn: (listId: string) => removeMediaFromList(listId, tmdbID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userLists"] });
      toast({
        title: "Success",
        description: "Media removed from list successfully",
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

  return { addListMutation, removeListMutation };
};
