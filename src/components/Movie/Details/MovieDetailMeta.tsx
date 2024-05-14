import { Badge, Flex, Link } from "@chakra-ui/react";
import DetailMeta from "@components/Shared/DetailMeta";
import { IMovieDetails } from "types/tmdb/Movie/IMovieDetails";

interface IProps {
  data: IMovieDetails;
}

const MovieDetailMeta = ({ data }: IProps) => {
  return (
    <DetailMeta
      data={{
        name: data.title,
        tagline: data.tagline,
        status: data.status,
        releasedDate: data.release_date,
        posterPath: data.poster_path,
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
              href={`/movies/genre/${genre.id}?page=1`}
            >
              {genre.name}
            </Badge>
          ))}
        </Flex>
      }
    />
  );
};

export default MovieDetailMeta;
