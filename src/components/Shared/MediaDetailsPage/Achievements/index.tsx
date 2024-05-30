import { Flex } from "@chakra-ui/react";
import Budget from "@components/Shared/MediaDetailsPage/Achievements/Budget";
import MediaVideos from "@components/Shared/MediaDetailsPage/Videos";
import { Fragment } from "react/jsx-runtime";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import MediaLanguage from "./Language";
import Webpage from "./Webpage";
import NetworkDetails from "./Network";

interface IProps {
  media: IMovieDetails | ITvShowDetails;
  media_type: "movie" | "tv";
}

const MediaAchievements = ({ media, media_type }: IProps) => {
  if (!media) return null;

  return (
    <Flex direction="column" gap={10} minW={250} justifyItems={"flex-end"}>
      {media_type === "movie" ? (
        <>
          {"budget" in media && "revenue" in media && (
            <Budget budget={media.budget} revenue={media.revenue} />
          )}
          <MediaLanguage
            original_language={media.original_language}
            spoken_languages={media.spoken_languages}
          />
          {media.homepage && <Webpage url={media.homepage} />}
          <MediaVideos videos={media.videos} />
        </>
      ) : (
        <>
          {"networks" in media && <NetworkDetails networks={media.networks} />}
          <MediaLanguage
            original_language={media.original_language}
            spoken_languages={media.spoken_languages}
          />
          <MediaVideos videos={media.videos} />
        </>
      )}
    </Flex>
  );
};

export default MediaAchievements;
