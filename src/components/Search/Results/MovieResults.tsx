import { IMovie } from "types/tmdb/Movie/IMovie";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import NoResults from "./NoResults";
import { Fragment } from "react/jsx-runtime";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";

interface IProps {
  movieQuery: any;
  query: string;
}

const MovieResults = ({ movieQuery, query }: IProps) => {
  return (
    <Flex w="full" direction={"column"}>
      {!movieQuery.data && <NoResults />}
      {movieQuery.status === "success" &&
        movieQuery.data?.results.length === 0 && <NoResults />}

      {movieQuery.status === "error" && (
        <ErrorStatus
          refetch={movieQuery.refetch}
          isRefetching={movieQuery.isRefetching}
        />
      )}
      {movieQuery.status === "success" &&
        movieQuery.data?.results.length > 0 && (
          <Fragment>
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

            {movieQuery.data.total_results > 20 && (
              <Pagination
                page={movieQuery.data?.page}
                total_pages={movieQuery.data?.total_pages}
                query={query}
                media_type="movie"
              />
            )}
          </Fragment>
        )}
    </Flex>
  );
};

export default MovieResults;
