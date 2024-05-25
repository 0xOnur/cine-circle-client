import { Box, Button, Link } from "@chakra-ui/react";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import { FaYoutube } from "react-icons/fa";
import { IVideos } from "types/tmdb/Types";

interface IProps {
  videos: IVideos;
}

const MediaVideos = ({ videos }: IProps) => {
  const mediaTrailers = videos?.results.filter(
    (item) => item.type === "Trailer" && item.site === "YouTube"
  );

  if (!mediaTrailers || mediaTrailers.length === 0) {
    return null;
  }

  return (
    <Box
      display="flex"
      maxW={300}
      w={"full"}
      overflow="hidden"
      flexDirection="column"
      gap={3}
    >
      <SectionTitle sectionTitle="Trailers" fontSize="sm" />
      {mediaTrailers.map((item) => (
        <Link
          w="fit-content"
          key={item.key}
          isExternal
          href={`https://www.youtube.com/watch?v=${item.key}`}
        >
          <Button
            key={item.key}
            fontSize="sm"
            size="sm"
            rounded="md"
            colorScheme="gray"
            leftIcon={<FaYoutube size={20} color="red" />}
          >
            {item.name.length > 30 ? item.name.slice(0, 30) + "..." : item.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default MediaVideos;
