import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createList } from "@api/list.api";
import { useToast } from "@chakra-ui/react";

interface IProps {
  listName: string;
  listType: "tv" | "movie";
  description: string;
}

export const useCreateList = ({ listName, listType, description }: IProps) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  const { mutate } = useMutation({
    mutationFn: () => createList(listName, listType, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userLists"] });
      toast({
        title: "List created",
        description: "List created successfully",
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

  return { mutate };
};
