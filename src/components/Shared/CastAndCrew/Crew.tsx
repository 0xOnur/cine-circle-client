import SectionTitle from "@components/Home/Trending/SectionTitle";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import NoItemAlert from "../Status/NoItemAlert";
import { CreditCrew } from "types/tmdb/Types";
import PosterCard from "../Poster";

interface IProps {
  crewData: CreditCrew[];
}

const Crew = ({ crewData }: IProps) => {
  if (!crewData) {
    return null;
  }

  if (crewData.length === 0) {
    return <NoItemAlert text="No crew found" />;
  }

  return (
    <Flex direction="column" w="full" gap={20} align={"center"}>
      <SectionTitle sectionTitle={`Crew (${crewData.length})`} />
      <Grid
        w="full"
        columnGap={5}
        rowGap={8}
        templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      >
        {crewData?.map((crew, index) => (
          <Flex
            key={crew.id}
            direction="row"
            w="full"
            rounded={24}
            gap={5}
            boxShadow="lg"
          >
            <PosterCard
              key={crew.id}
              id={crew.id}
              name={crew.name}
              imageUrl={crew.profile_path}
              mediaType="person"
              layout="flex"
              isLastItem={index === crewData.length - 1}
            />
            <Box display="flex" flexDirection="column" p={5}>
              <Text fontWeight="500" textTransform="capitalize" fontSize="lg">
                {crew.name}
              </Text>

              <Text fontWeight="500" color="gray.500" fontSize="sm">
                {crew.job}
              </Text>

              <Text fontWeight="500" color="gray.500" fontSize="sm">
                {crew.department}
              </Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Crew;
