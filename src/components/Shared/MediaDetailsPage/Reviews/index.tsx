import useGetMediaReviews from "hooks/TanStack/Query/Other/useGetMediaReviews";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import { Flex } from "@chakra-ui/react";

interface IProps {
  media: IMovieDetails | ITvShowDetails;
  media_type: "movie" | "tv-show";
}

const LastMediaReviews = ({ media, media_type }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetMediaReviews({
    tmdbID: media.id.toString(),
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
      <SectionTitle
        sectionTitle="Last Reviews"
        sectionHref={`/${media_type}/${media.id}/reviews`}
      />
    </Flex>
  );
};

export default LastMediaReviews;
