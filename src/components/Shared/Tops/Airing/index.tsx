import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ItemCard from "@components/Search/Results/ItemCard";
import NoResults from "@components/Search/Results/NoResults";
import Pagination from "@components/Search/Results/Pagination";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useTopMedia from "hooks/TanStack/Query/useGetTopMedia";
import { useSearchParams } from "react-router-dom";
import { ITVShow } from "types/tmdb/TV/ITVShow";

const AiringTodayPage = () => {
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1");
  const today = new Date();

  const { data, status, refetch, isRefetching } = useTopMedia({
    page: page,
    air_date_gte: today.toISOString().split("T")[0],
    air_date_lte: today.toISOString().split("T")[0],
    sort_by: "popularity.desc",
    mediaType: "tv",
  });

  if (status === "error") {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  if (status === "pending") {
    return <PendingStatus count={5} height="50" />;
  }

  if (data?.total_results === 0 || !data) {
    return <NoResults />;
  }

  const shows = data?.results as ITVShow[];

  return (
    <Flex direction="column" gap={12}>
      <Box>
        <Text fontSize="3xl" textTransform="uppercase" letterSpacing={3}>
          Airing Today
        </Text>
        <Text fontWeight="500" color="gray.500">
          {data?.total_results.toLocaleString()} total results
        </Text>
      </Box>

      <SimpleGrid
        columnGap={8}
        rowGap={12}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        {shows?.map((show: ITVShow) => (
          <ItemCard
            key={show.id}
            tmdbID={show.id}
            href={`/tv-show/${show.id}`}
            title={show?.name}
            release_date={show?.first_air_date}
            overview={show.overview}
            poster_path={show.poster_path}
            media_type="tv"
          />
        ))}
      </SimpleGrid>
      {data?.total_results > 20 && (
        <Pagination page={data?.page} total_pages={data?.total_pages} />
      )}
    </Flex>
  );
};

export default AiringTodayPage;
