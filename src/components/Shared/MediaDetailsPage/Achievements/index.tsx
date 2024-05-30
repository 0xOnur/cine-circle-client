import { Flex } from "@chakra-ui/react";
import Budget from "@components/Shared/MediaDetailsPage/Achievements/Budget";
import MediaVideos from "@components/Shared/MediaDetailsPage/Videos";
import { Fragment } from "react/jsx-runtime";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import MediaLanguage from "./Language";

interface IProps {
  media: IMovieDetails | ITvShowDetails;
  media_type: "movie" | "tv";
}

const MediaAchievements = ({ media, media_type }: IProps) => {
  if (!media) return null;

  return (
    <Fragment>
      {media_type === "movie" ? (
        <Flex
          direction="column"
          gap={10}
          maxW={300}
          minW={250}
          justifyItems={"flex-end"}
        >
          {"budget" in media && "revenue" in media && (
            <Budget budget={media.budget} revenue={media.revenue} />
          )}
          <MediaLanguage
            original_language={media.original_language}
            spoken_languages={media.spoken_languages}
          />
          <MediaVideos videos={media.videos} />
        </Flex>
      ) : (
        <Flex direction="column" gap={10}>
          <MediaLanguage
            original_language={media.original_language}
            spoken_languages={media.spoken_languages}
          />
          <MediaVideos videos={media.videos} />
        </Flex>
      )}
    </Fragment>
  );
};

export default MediaAchievements;
