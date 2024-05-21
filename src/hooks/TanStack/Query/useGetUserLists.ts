import { getUserLists } from "@api/list.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  username: string;
}

const useGetUserLists = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IList[]>({
    queryKey: ["userLists", username],
    queryFn: () => getUserLists(username),
    refetchOnWindowFocus: true,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetUserLists;
