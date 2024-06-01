import useGetUserInfo from "hooks/TanStack/Query/User/useGetUserInfo";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { useParams } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import UserInfo from "../UserInfo";
import Title from "@routes/Title";
import Reviews from "./Reviews";

const UserReviewsPage = () => {
  const username = useParams().username;

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
      <Title title={`${username}'s Reviews`} />
      <UserInfo user={data} />
      <Reviews username={username!} />
    </Flex>
  );
};

export default UserReviewsPage;
