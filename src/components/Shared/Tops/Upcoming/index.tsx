import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ItemCard from "@components/Search/Results/ItemCard";
import NoResults from "@components/Search/Results/NoResults";
import Pagination from "@components/Search/Results/Pagination";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useTopMedia from "hooks/TanStack/Query/Other/useGetTopMedia";
import { useSearchParams } from "react-router-dom";
import { IMovie } from "types/tmdb/Movie/IMovie";
import { ITVShow } from "types/tmdb/TV/ITVShow";

interface IProps {
  mediaType: "movie" | "tv";
}

const UpcomingPage = ({ mediaType }: IProps) => {
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1");

  const today = new Date();
  const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  const threeMonthsLater = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000);


  const mediaParams = mediaType === 'movie' ? {
    primary_release_date_gte: oneMonthAgo.toISOString().split("T")[0],
    primary_release_date_lte: threeMonthsLater.toISOString().split("T")[0],
  } : {
    first_air_date_gte: oneMonthAgo.toISOString().split("T")[0],
    first_air_date_lte: threeMonthsLater.toISOString().split("T")[0],
  };


  const { data, status, refetch, isRefetching } = useTopMedia({
    page: page,
    with_runtime_lte: 400,
    vote_average_lte: 10,
    sort_by: "popularity.desc",
    ...mediaParams,
    mediaType: mediaType,
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

  const medias = data?.results as IMovie[] | ITVShow[];

  return (
    <Flex direction="column" gap={12}>
      <Box>
        <Text fontSize="3xl" textTransform="uppercase" letterSpacing={3}>
          Upcoming {mediaType === "movie" ? "Movies" : "TV Shows"}
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
        {medias?.map((media: any) => (
          <ItemCard
            key={media.id}
            tmdbID={media.id}
            href={`/${mediaType === "movie" ? "movie" : "tv-show"}/${media.id}`}
            title={media?.title || media?.name}
            release_date={media?.release_date || media?.first_air_date}
            overview={media.overview}
            poster_path={media.poster_path}
            media_type={mediaType}
          />
        ))}
      </SimpleGrid>
      {data?.total_results > 20 && (
        <Pagination page={data?.page} total_pages={data?.total_pages} />
      )}
    </Flex>
  );
};

export default UpcomingPage;
