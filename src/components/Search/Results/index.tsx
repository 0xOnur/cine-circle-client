import { IResponseData } from "hooks/TanStack/Query/Search/useSearchMulti";
import NoResults from "./NoResults";
import { MediaType } from "types/tmdb/Types";
import MovieResults from "./MovieResults";
import { Fragment } from "react/jsx-runtime";
import { Grid } from "@chakra-ui/react";
import TvResults from "./TvResults";
import PersonResult from "./PersonResult";
import useSearchMovie from "hooks/TanStack/Query/Search/useSearchMovie";
import useSearchPerson from "hooks/TanStack/Query/Search/useSearchPerson";
import useSearchTv from "hooks/TanStack/Query/Search/useSearchTV";
import FilterResults from "./FilterResults";
import { useSearchParams } from "react-router-dom";

interface IProps {
  query: string;
  multiData: IResponseData;
  media_type: MediaType;
}

const SearchResults = ({ query, multiData, media_type }: IProps) => {
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1");

  console.log(page);
  

  const movieQuery = useSearchMovie({
    query: query,
    page: page,
  });

  const tvQuery = useSearchTv({
    query: query,
    page: page,
  });

  const personQuery = useSearchPerson({
    query: query,
    page: page,
  });

  return (
    <Fragment>
      {(!multiData || multiData.results.length === 0) && <NoResults />}

      {multiData.results.length > 0 && (
        <Grid
          gap={4}
          templateColumns={{
            base: "1fr",
            md: "auto 1fr",
          }}
        >
          <FilterResults
            query={query}
            resultCounts={{
              movie: movieQuery.data?.total_results || 0,
              tv: tvQuery.data?.total_results || 0,
              person: personQuery.data?.total_results || 0,
            }}
          />

          {media_type === "movie" && <MovieResults movieQuery={movieQuery} />}
          {media_type === "tv" && <TvResults tvQuery={tvQuery} />}
          {media_type === "person" && (
            <PersonResult personQuery={personQuery} />
          )}
        </Grid>
      )}
    </Fragment>
  );
};

export default SearchResults;
