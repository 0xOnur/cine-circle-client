import { Flex } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import ReviewCard from "@components/Shared/MediaDetailsPage/Reviews/ReviewCard";
import SeeMore from "@components/Shared/Others/SeeMore";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import { RootState } from "@redux/config/store";
import useGetUserReviews from "hooks/TanStack/Query/User/useGetUserReviews";
import { useSelector } from "react-redux";

interface IProps {
  username: string;
}

const UserReviews = ({ username }: IProps) => {
  const reduxUserId = useSelector((state: RootState) => state.user.user?._id);

  const { data, status, refetch, isRefetching } = useGetUserReviews({
    username,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  const lastReviews = data.slice(0, 4);

  if (!lastReviews || lastReviews.length === 0) {
    return <NoItemAlert sectionTitle="Reviews" text="No reviews found" />;
  }

  return (
    <Flex
      direction="column"
      gap={8}
      align={{ base: "center", sm: "flex-start" }}
    >
      <SectionTitle
        sectionTitle={`Last Reviews by ${username}`}
        sectionHref={`/user/${username}/reviews`}
      />

      <Flex direction="column" w="full" gap={4}>
        {lastReviews.map((review: IReview) => (
          <ReviewCard
            key={review._id}
            review={review}
            reduxUserId={reduxUserId}
            showMediaInfo
          />
        ))}
      </Flex>
      <Flex w="full" justify="flex-end">
        <SeeMore href={`/user/${username}/reviews`} />
      </Flex>
    </Flex>
  );
};

export default UserReviews;
