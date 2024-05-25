import { Flex } from "@chakra-ui/react";
import Budget from "@components/Shared/MediaDetailsPage/Others/Budget";
import MediaVideos from "@components/Shared/MediaDetailsPage/Videos";
import { Fragment } from "react/jsx-runtime";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";
import MediaLanguage from "../Others/Language";

interface IProps {
  media: IMovieDetails | ITvShowDetails;
}

const MediaAchievements = ({ media }: IProps) => {
  if (!media) return null;

  const movie = media as IMovieDetails;
  const tv = media as ITvShowDetails;

  return (
    <Fragment>
      {movie.budget && movie.revenue ? (
        <Flex
          direction="column"
          gap={10}
          maxW={300}
          minW={250}
          justifyItems={"flex-end"}
        >
          <Budget budget={movie?.budget} revenue={movie.revenue} />
          <MediaLanguage
            original_language={movie?.original_language}
            spoken_languages={movie?.spoken_languages}
          />
          <MediaVideos videos={movie?.videos} />
        </Flex>
      ) : (
        <Flex direction="column" gap={10}>
          <MediaLanguage
            original_language={tv?.original_language}
            spoken_languages={tv?.spoken_languages}
          />
          <MediaVideos videos={tv?.videos} />
        </Flex>
      )}
    </Fragment>
  );
};

export default MediaAchievements;
