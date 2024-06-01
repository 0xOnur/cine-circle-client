import { Box } from "@chakra-ui/react";
import PosterCard from "@components/Shared/Poster";
import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import useGetShowDetails from "hooks/TanStack/Query/TV/useGetTVShowDetails";
import React from "react";

const WatchlistMovies = ({ tmdbID }: { tmdbID: string }) => {
  const { data } = useGetMovieDetails({ movieId: tmdbID });
  if (!data) {
    return null;
  }

  return (
    <PosterCard
      id={data.id}
      name={data.title}
      imageUrl={data.poster_path}
      layout="flex"
      mediaType="movie"
    />
  );
};

const WatchlistShows = ({ tmdbID }: { tmdbID: string }) => {
  const { data } = useGetShowDetails({ showId: tmdbID });
  if (!data) {
    return null;
  }

  return (
    <PosterCard
      id={data.id}
      name={data.name}
      imageUrl={data.poster_path}
      layout="flex"
      mediaType="tv"
    />
  );
};

interface IProps {
  tmdbID: string;
  mediaType: "movie" | "tv";
}

const Items = ({ tmdbID, mediaType }: IProps) => {
  return (
    <Box w="fit-content" minW="fit-content">
      {mediaType === "movie" ? (
        <WatchlistMovies tmdbID={tmdbID} />
      ) : (
        <WatchlistShows tmdbID={tmdbID} />
      )}
    </Box>
  );
};

export default Items;
