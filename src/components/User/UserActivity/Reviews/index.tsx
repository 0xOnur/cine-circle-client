import { Flex } from "@chakra-ui/react";
import SeeMore from "@components/Shared/Others/SeeMore";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useGetUserReviews from "hooks/TanStack/Query/User/useGetUserReviews";
import React from "react";

interface IProps {
  username: string;
}

const UserReviews = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetUserReviews({
    username,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  const lastFiveReviews = data.slice(0, 5);

  if (!lastFiveReviews || lastFiveReviews.length === 0) {
    return <NoItemAlert sectionTitle="Reviews" text="No reviews found" />;
  }

  return (
    <Flex>
      <div>Reviews</div>
      <Flex w="full" justify="flex-end">
        <SeeMore href={`/user/${username}/lists`} />
      </Flex>
    </Flex>
  );
};

export default UserReviews;
