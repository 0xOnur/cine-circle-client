import useGetMediaReviews from "hooks/TanStack/Query/Review/useGetMediaReviews";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import { RootState } from "@redux/config/store";
import ReviewButton from "./ReviewButton";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import ReviewCard from "./ReviewCard";
import SeeMore from "@components/Shared/Others/SeeMore";

interface IProps {
  media: IMovieDetails | ITvShowDetails;
  media_type: "movie" | "tv-show";
  showAll?: boolean;
}

const MediaReviews = ({ media, media_type, showAll }: IProps) => {
  const reduxUser = useSelector((state: RootState) => state.user);

  const { data, status, refetch, isRefetching } = useGetMediaReviews({
    tmdbID: media.id.toString(),
  });

  const isMyReview = data?.some(
    (review: IReview) => review.userId._id === reduxUser.user?._id
  );

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  const lastReviews = showAll ? data : data.slice(0, 4);

  if (!lastReviews || lastReviews.length === 0) {
    return (
      <Flex direction="column" gap={8}>
        <NoItemAlert sectionTitle="Reviews" text="No reviews found" />
        <ReviewButton
          tmdbID={media.id.toString()}
          mediaType={media_type === "movie" ? "movie" : "tv"}
          isDisabled={!isMyReview && !reduxUser.isAuth}
          btnText={
            reduxUser.isAuth ? "Write a review" : "Login to write a review"
          }
        />
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      gap={8}
      w="full"
      align={showAll ? "center" : "start"}
    >
      <SectionTitle
        sectionTitle={showAll ? "Reviews" : "Latest Reviews"}
        sectionHref={showAll ? "" : `/${media_type}/${media.id}/reviews`}
      />

      <Flex direction="column" w="full" gap={4}>
        {lastReviews.map((review: IReview) => (
          <ReviewCard
            key={review._id}
            review={review}
            reduxUserId={reduxUser.user?._id}
          />
        ))}
      </Flex>

      {!showAll && (
        <Flex w="full" justify="flex-end">
          <SeeMore
            href={`/${media_type}/${media.id}/reviews`}
            btnText="See all reviews"
          />
        </Flex>
      )}

      <ReviewButton
        tmdbID={media.id.toString()}
        mediaType={media_type === "movie" ? "movie" : "tv"}
        isDisabled={isMyReview || !reduxUser.isAuth}
        btnText={
          reduxUser.isAuth ? "Write a review" : "Login to write a review"
        }
      />
    </Flex>
  );
};

export default MediaReviews;
