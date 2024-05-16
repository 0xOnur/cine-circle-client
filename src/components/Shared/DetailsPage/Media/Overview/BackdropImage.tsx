import { Box } from "@chakra-ui/react";

interface IProps {
  backdrop_path: string;
}

const BackdropImage = ({ backdrop_path }: IProps) => {
  return (
    <Box
      _before={{
        content: '""',
        position: "absolute",
        width: "100%",
        height: "full",
        bgGradient:"linear(to-t, black, transparent)",
        zIndex: 1,
      }}
      
      left={0}
      top={0}
      position="absolute"
      width="100%"
      height="full"
      filter="brightness(0.35)"
      bgImg={
        backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1280${backdrop_path})`
          : undefined
      }
      zIndex={-1}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    />
  );
};

export default BackdropImage;
