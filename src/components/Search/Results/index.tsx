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

  const movieQuery = useSearchMovie({ query, page });
  const tvQuery = useSearchTv({ query, page });
  const personQuery = useSearchPerson({ query, page });

  const moviesCount = movieQuery.data?.total_results || 0;
  const tvCount = tvQuery.data?.total_results || 0;
  const personCount = personQuery.data?.total_results || 0;

  const determineMediaType = (): MediaType => {
    if (moviesCount === 0 && tvCount === 0 && personCount > 0) return "person";
    if (moviesCount === 0 && tvCount > 0 && personCount === 0) return "tv";
    if (moviesCount > 0 && tvCount === 0 && personCount === 0) return "movie";
    return media_type || "movie";
  };

  const activeMediaType = media_type || determineMediaType();

  if (!multiData || multiData.results.length === 0) return <NoResults />;

  return (
    <Fragment>
      <Grid
        gap={8}
        templateColumns={{
          base: "1fr",
          md: "auto 1fr",
        }}
      >
        <FilterResults
          media_type={activeMediaType}
          query={query}
          resultCounts={{
            movie: moviesCount,
            tv: tvCount,
            person: personCount,
          }}
        />

        {activeMediaType === "movie" && (
          <MovieResults movieQuery={movieQuery} query={query} />
        )}
        {activeMediaType === "tv" && (
          <TvResults tvQuery={tvQuery} query={query} />
        )}
        {activeMediaType === "person" && (
          <PersonResult personQuery={personQuery} query={query} />
        )}
      </Grid>
    </Fragment>
  );
};

export default SearchResults;
