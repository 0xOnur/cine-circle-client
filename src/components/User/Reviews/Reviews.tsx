import { Flex } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import ReviewCard from "@components/Shared/MediaDetailsPage/Reviews/ReviewCard";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import { RootState } from "@redux/config/store";
import useGetUserReviews from "hooks/TanStack/Query/User/useGetUserReviews";
import React from "react";
import { useSelector } from "react-redux";

interface IProps {
  username: string;
}

const Reviews = ({ username }: IProps) => {
  const reduxUserId = useSelector((state: RootState) => state.user.user?._id);

  if (!username) {
    return <NoItemAlert text="No watchlist found" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, status, refetch, isRefetching } = useGetUserReviews({
    username: username!,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  if (!data) {
    return <NoItemAlert text="No reviews found" />;
  }

  return (
    <Flex
      w="full"
      direction="column"
      gap={20}
      align={{ base: "center", sm: "flex-start" }}
    >
      <Flex w="full" justify="center">
        <SectionTitle sectionTitle={`${username}'s Reviews (${data.length})`} />
      </Flex>

      <Flex direction="column" w="full" gap={4}>
        {data.map((review: IReview) => (
          <ReviewCard
            key={review._id}
            review={review}
            reduxUserId={reduxUserId}
            showMediaInfo
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Reviews;
