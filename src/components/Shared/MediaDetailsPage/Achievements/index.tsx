import MediaVideos from "@components/Shared/MediaDetailsPage/Achievements/MediaTrailers";
import Budget from "@components/Shared/MediaDetailsPage/Achievements/Budget";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import { Flex } from "@chakra-ui/react";
import MediaLanguage from "./Language";
import NetworkDetails from "./Network";
import Webpage from "./Webpage";

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
