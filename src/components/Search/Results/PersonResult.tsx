import { Flex, SimpleGrid } from "@chakra-ui/react";
import { IPerson } from "types/tmdb/Person/IPerson";
import ItemCard from "./ItemCard";

interface IProps {
  personQuery: any;
}

const PersonResult = ({ personQuery }: IProps) => {
  return (
    <Flex w="full">
      <SimpleGrid
        gap={4}
        spacing="40px"
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
      >
        {personQuery.data?.results.map((person: IPerson) => (
          <ItemCard
            key={person.id}
            tmdbID={person.id}
            href={`/person/${person.id}`}
            title={person.name}
            poster_path={person.profile_path}
            hideFooter
            direction="column"
            imageWidth="full"
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default PersonResult;
