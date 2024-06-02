import { getList } from "@api/list.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  listId: string;
}

const useGetList = ({ listId }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IList>({
    queryKey: ["list", listId],
    queryFn: () => getList(listId),
    enabled: !!listId,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetList;
