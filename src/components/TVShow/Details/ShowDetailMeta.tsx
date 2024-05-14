import { Badge, Flex, Link } from "@chakra-ui/react";
import DetailMeta from "@components/Shared/DetailMeta";
import { ITvShowDetails } from "types/tmdb/TV/ITVShowDetails";

interface IProps {
  data: ITvShowDetails;
}

const ShowDetailMeta = ({ data }: IProps) => {
  return (
    <DetailMeta
      data={{
        name: data.name,
        posterPath: data.poster_path,
        status: data.status,
        releasedDate: data.first_air_date,
        tagline: data.tagline,
        overview: data.overview,
      }}
      extras={
        <Flex wrap="wrap" gridGap={2}>
          {data.genres.map((genre) => (
            <Badge
              color="gray.300"
              cursor="pointer"
              variant="outline"
              py={1}
              px={2}
              rounded="md"
              as={Link}
              key={`${genre.name}-${genre.id}`}
              href={`/tv-shows/genre/${genre.id}?page=1`}
            >
              {genre.name}
            </Badge>
          ))}
        </Flex>
      }
    />
  );
};

export default ShowDetailMeta;
