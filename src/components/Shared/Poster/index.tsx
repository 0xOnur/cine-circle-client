import { AspectRatio, Box, Link } from "@chakra-ui/react";
import PosterImage from "./PosterImage";
import PosterLabel from "./PosterLabel";
import { motion } from "framer-motion";
import { MediaType } from "types/tmdb/Types";

type PosterCardProps = {
  id: number;
  name?: string;
  imageUrl?: string;
  mediaType: MediaType;
  layout: "flex" | "grid";
  isLastItem?: boolean;
};

const PosterCard = ({
  id,
  name,
  imageUrl,
  mediaType,
  layout,
  isLastItem,
}: PosterCardProps) => {
  const MotionBox = motion(Box);
  const handleClick = () => {};

  const pathMap: Record<MediaType, string> = {
    movie: "/movie",
    tv: "/tv-show",
    person: "/person",
  };

  return (
    <Link
      display="flex"
      minW="fit-content"
      role="group"
      transform="none"
      href={`${pathMap[mediaType]}/${id}`}
      _hover={{ textDecoration: "none" }}
    >
      <MotionBox
        as="a"
        onClick={handleClick}
        position="relative"
        textAlign="center"
        whileHover={{ scale: 1.1 }}
        role="group"
        paddingRight={isLastItem ? [8, 6] : undefined}
        {...(layout === "flex" && { flex: "0 0 auto" })}
      >
        {layout === "grid" ? (
          <AspectRatio
            borderRadius={24}
            ratio={3.6 / 5}
            _groupHover={{ backgroundColor: "black" }}
          >
            <PosterImage src={imageUrl} layout={layout} />
          </AspectRatio>
        ) : (
          <Box
            as="button"
            borderRadius={24}
            _groupHover={{ backgroundColor: "black" }}
          >
            <PosterImage src={imageUrl} layout={layout} />
          </Box>
        )}
        <PosterLabel label={name ?? ""} />
      </MotionBox>
    </Link>
  );
};

export default PosterCard;
