import { Flex, SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { ITVShow } from "types/tmdb/TV/ITVShow";
import Pagination from "./Pagination";
import NoResults from "./NoResults";
import { Fragment } from "react/jsx-runtime";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";

interface IProps {
  tvQuery: any;
  query: string;
}

const TvResults = ({ tvQuery, query }: IProps) => {
  return (
    <Flex w="full" direction={"column"}>
      {!tvQuery.data && <NoResults />}
      {tvQuery.status === "success" && tvQuery.data?.results.length === 0 && (
        <NoResults />
      )}

      {tvQuery.status === "error" && (
        <ErrorStatus
          refetch={tvQuery.refetch}
          isRefetching={tvQuery.isRefetching}
        />
      )}

      {tvQuery.status === "success" && tvQuery.data?.results.length > 0 && (
        <Fragment>
          <SimpleGrid columnGap={8} rowGap={12}>
            {tvQuery.data?.results.map((show: ITVShow) => (
              <ItemCard
                key={show.id}
                tmdbID={show.id}
                href={`/tv-show/${show.id}`}
                title={show.name}
                release_date={show.first_air_date}
                overview={show.overview}
                poster_path={show.poster_path}
                media_type="tv"
              />
            ))}
          </SimpleGrid>

          {tvQuery.data.total_results > 20 && (
            <Pagination
              page={tvQuery.data?.page}
              total_pages={tvQuery.data?.total_pages}
              query={query}
              media_type="tv"
            />
          )}
        </Fragment>
      )}
    </Flex>
  );
};

export default TvResults;
