import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import EditReviewButton from "./EditReviewButton";
import ShowSpoilerButton from "./ShowSpoilerButton";
import { useState } from "react";
import useGetMediaPoster from "hooks/TanStack/Query/Other/useGetMediaPoster";
import DeleteReviewButton from "./DeleteReviewButton";

interface IProps {
  reduxUserId?: string;
  review: IReview;
  showMediaInfo?: boolean;
}

const ReviewCard = ({ reduxUserId, review, showMediaInfo }: IProps) => {
  const isMyReview = reduxUserId === review.userId?._id?.toString();
  const [isSpoiler, setIsSpoiler] = useState(review.spoiler);

  const { posterUrl, backdropUrl } = useGetMediaPoster({
    tmdbID: review.tmdbID,
    mediaType: review.mediaType,
  });

  return (
    <Card
      borderRadius="24"
      overflow="hidden"
      variant={isMyReview ? "filled" : "outline"}
    >
      <CardBody>
        <Flex w="full" gap={4} direction={["column", "row"]}>
          {showMediaInfo && posterUrl ? (
            <Flex gap={2} direction="column" alignItems="center">
              <Avatar
                name={review.userId.username}
                src={posterUrl! || backdropUrl!}
                size="2xl"
              />
              <Link
                isExternal
                color="purple.400"
                maxW="140px"
                fontWeight="bold"
                href={`/${review.mediaType === "movie" ? "movie" : "tv-show"}/${
                  review.tmdbID
                }`}
              >
                Details
              </Link>
            </Flex>
          ) : (
            <Flex gap={2} direction="column" alignItems="center">
              <Avatar
                name={review.userId.username}
                src={review.userId.avatar}
                size="2xl"
              />
              <Link
                isExternal
                color="purple.400"
                maxW="140px"
                href={`/user/${review.userId.username}`}
              >
                <Text
                  overflow={"hidden"}
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  fontWeight="bold"
                >
                  @{review.userId.username}
                </Text>
              </Link>
            </Flex>
          )}

          <Flex w="full" direction="column" gap={2}>
            <Flex
              gap={4}
              justify="center"
              direction={{ base: "column", sm: "row" }}
            >
              <Heading size="md" w="full">
                {review.title}
              </Heading>

              <Flex
                gap={4}
                mb={2}
                justify="flex-end"
                align="end"
                direction={{ base: "column", md: "row" }}
              >
                {review.spoiler && (
                  <ShowSpoilerButton
                    isSpoiler={isSpoiler}
                    setIsSpoiler={setIsSpoiler}
                  />
                )}
                {isMyReview && (
                  <>
                    <EditReviewButton tmdbID={review.tmdbID} review={review} />
                    <DeleteReviewButton tmdbID={review.tmdbID} />
                  </>
                )}
              </Flex>
            </Flex>

            <Text
              whiteSpace="pre-wrap"
              color="gray.500"
              fontWeight="medium"
              fontStyle="italic"
            >
              {isSpoiler
                ? "[This review has been marked as spoiler]"
                : review.comment}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ReviewCard;
