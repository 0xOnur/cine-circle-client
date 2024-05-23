import { Flex, Grid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { ITVShow } from "types/tmdb/TV/ITVShow";

interface IProps {
  tvQuery: any;
}

const TvResults = ({ tvQuery }: IProps) => {
  return (
    <Flex w="full">
      <Grid minW="full" columnGap={8} rowGap={12}>
        {tvQuery.data?.results.map((show: ITVShow) => (
          <ItemCard
            key={show.id}
            tmdbID={show.id}
            href={`/tv-show/${show.id}`}
            title={show.name}
            overview={show.overview}
            poster_path={show.poster_path}
            media_type="tv"
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default TvResults;
