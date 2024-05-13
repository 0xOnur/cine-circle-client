import { Grid } from "@chakra-ui/react";
import MovieSlider from "./Movie";
import TVShowSlider from "./TV";

const TrendingSection = () => {
  return (
    <Grid rowGap={8} w="full">
      <MovieSlider />
      <TVShowSlider />
    </Grid>
  );
};

export default TrendingSection;
