import { Box, Text } from "@chakra-ui/react";
import SliderContainer from "@components/Shared/SliderContainer";
import useGetMediaVideos from "hooks/TanStack/Query/useGetMediaVideos";

interface IProps {
  mediaType: "movie" | "tv";
  tmdbID: string;
}

const MediaVideos = ({ mediaType, tmdbID }: IProps) => {
  const { data } = useGetMediaVideos({
    mediaType: mediaType,
    tmdbID: tmdbID,
  });

  const movieTrailers = data?.results.filter(
    (item) => item.type === "Trailer" && item.site === "YouTube"
  );
  console.log("🚀 ~ MovieVideos ~ movieTrailers:", movieTrailers);

  if (!movieTrailers || movieTrailers.length === 0) {
    return null;
  }

  return (
    <SliderContainer sectionTitle="Trailers">
      {movieTrailers.map((item) => (
        <Box
          key={item.key}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          maxW={["100%", "100%", "300px", "300px"]}
        >
          <iframe
            title={item.name}
            src={`https://www.youtube.com/embed/${item.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <Text p={4}>
            {item.name.length > 50 ? item.name.slice(0, 50) + "..." : item.name}
          </Text>
        </Box>
      ))}
    </SliderContainer>
  );
};

export default MediaVideos;
