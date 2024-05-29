import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import SeeMore from "@components/Shared/Others/SeeMore";
import PosterCard from "@components/Shared/Poster";
import SliderContainer from "@components/Shared/SliderContainer";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import useGetMovieDetails from "hooks/TanStack/Query/Movie/useGetMovieDetails";
import useGetShowDetails from "hooks/TanStack/Query/TV/useGetTVShowDetails";
import { Fragment } from "react/jsx-runtime";

interface IProps {
  username: string;
  watchlist: IWatchlist;
}

const LastWatchMovies = ({ tmdbID }: { tmdbID: string }) => {
  const { data } = useGetMovieDetails({ movieId: tmdbID });
  if (!data) {
    return null;
  }

  return (
    <Box minW="fit-content" maxW={"300px"}>
      <PosterCard
        id={data.id}
        name={data.title}
        imageUrl={data.poster_path}
        layout="flex"
        mediaType="movie"
      />
    </Box>
  );
};

const LastWatchShows = ({ tmdbID }: { tmdbID: string }) => {
  const { data } = useGetShowDetails({ showId: tmdbID });
  if (!data) {
    return null;
  }

  return (
    <Box minW="fit-content" maxW={"300px"}>
      <PosterCard
        id={data.id}
        name={data.name}
        imageUrl={data.poster_path}
        layout="flex"
        mediaType="tv"
      />
    </Box>
  );
};

const LastWatch = ({ username, watchlist }: IProps) => {
  const lastWatched = watchlist?.medias.slice(0, 10);

  if (!lastWatched || lastWatched.length === 0) {
    return (
      <NoItemAlert sectionTitle="Last Watched" text="No last watched found" />
    );
  }

  return (
    <Flex w="full" direction="column">
      <Flex w="full" justify={{ base: "center", sm: "flex-start" }}>
        <SectionTitle
          sectionTitle={`Last Watched (${watchlist?.medias.length})`}
          color="gray.500"
          sectionHref={`/user/${username}/watchlist`}
        />
      </Flex>
        <Flex gap={4}>
          <SliderContainer
            sectionHref={`/user/${username}/watchlist`}
            footer={<SeeMore href={`/user/${username}/watchlist`} />}
          >
            {lastWatched.map((media, index) => (
              <Fragment key={index}>
                {media.mediaType === "movie" ? (
                  <LastWatchMovies key={index} tmdbID={media.tmdbID} />
                ) : (
                  <LastWatchShows key={index} tmdbID={media.tmdbID} />
                )}
              </Fragment>
            ))}
          </SliderContainer>
        </Flex>
    </Flex>
  );
};

export default LastWatch;
