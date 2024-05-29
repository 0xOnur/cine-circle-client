import { getUserInfo } from "@api/user.api";
import { useQuery } from "@tanstack/react-query";

interface IProps {
  username: string;
}

export const useGetUserInfo = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useQuery<IUser>({
    queryKey: ["userInfo", username],
    queryFn: () => getUserInfo(username),
    refetchOnWindowFocus: false,
  });

  return { data, status, refetch, isRefetching };
};

export default useGetUserInfo;
