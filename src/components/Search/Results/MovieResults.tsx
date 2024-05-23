import { IMovie } from "types/tmdb/Movie/IMovie";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

interface IProps {
  movieQuery: any;
}

const MovieResults = ({ movieQuery }: IProps) => {
  return (
    <Flex w="full">
      <SimpleGrid columnGap={8} rowGap={12}>
        {movieQuery.data?.results.map((movie: IMovie) => (
          <ItemCard
            key={movie.id}
            tmdbID={movie.id}
            href={`/movie/${movie.id}`}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            media_type="movie"
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default MovieResults;
