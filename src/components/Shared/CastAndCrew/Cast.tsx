import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { CreditCast } from "types/tmdb/Types";
import NoItemAlert from "../Status/NoItemAlert";
import PosterCard from "../Poster";
import SectionTitle from "@components/Home/Trending/SectionTitle";

interface IProps {
  castData: CreditCast[];
}

const Cast = ({ castData }: IProps) => {
  if (!castData) {
    return null;
  }

  if (castData.length === 0) {
    return <NoItemAlert text="No cast found" />;
  }

  return (
    <Flex direction="column" w="full" gap={20} align={"center"}>
      <SectionTitle sectionTitle={`Cast (${castData.length})`} />
      <Grid
        w="full"
        columnGap={5}
        rowGap={8}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {castData?.map((cast, index) => (
          <Flex
            key={cast.id}
            direction="row"
            w="full"
            rounded={24}
            gap={5}
            boxShadow="lg"
          >
            <PosterCard
              key={cast.id}
              id={cast.id}
              name={cast.name}
              imageUrl={cast.profile_path}
              mediaType="person"
              layout="flex"
              isLastItem={index === castData.length - 1}
            />
            <Box
              display="flex"
              flexDirection="column"
              p={5}
              justifyContent="space-between"
            >
              <Box>
                <Text fontWeight="500" textTransform="capitalize" fontSize="lg">
                  {cast.name}
                </Text>

                <Text fontWeight="500" fontSize="md">
                  ({cast.character})
                </Text>
              </Box>

              <Text fontWeight="500" color="gray.500" fontSize="sm">
                {cast.known_for_department}
              </Text>

              <Text fontWeight="500" color="gray.500" fontSize="sm">
                Popularity: {cast.popularity}
              </Text>

              <Text fontWeight="500" color="gray.500" fontSize="sm">
                Gender: {cast.gender === 1 ? "Female" : "Male"}
              </Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Cast;
