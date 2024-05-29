import { useParams } from "react-router-dom";
import UserInfo from "./UserInfo";
import { UserState } from "@redux/slices/user.slice";
import { Flex } from "@chakra-ui/react";
import useGetUserInfo from "hooks/TanStack/Query/User/useGetUserInfo";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import UserActivitySection from "./UserActivity";
import Title from "@routes/Title";

interface IProps {
  reduxUser: UserState;
}

const UserPage = ({ reduxUser }: IProps) => {
  const username = useParams().username;
  const isEditable = username === reduxUser.user?.username;

  const { data, status, refetch, isRefetching } = useGetUserInfo({
    username: username!,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  return (
    <Flex direction="column" w="full" align="center" gap={20} p={4}>
      <Title title={isEditable ? "Profile" : data.username} />
      <Flex w="full" direction={{ base: "column", md: "row" }}>
        <UserInfo user={data} isEditable={isEditable} />
      </Flex>
      <UserActivitySection username={username!} />
    </Flex>
  );
};

export default UserPage;
