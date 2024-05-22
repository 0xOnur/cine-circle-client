import { Flex, Grid } from "@chakra-ui/react";
import { IPerson } from "types/tmdb/Person/IPerson";
import ItemCard from "./ItemCard";

interface IProps {
  personQuery: any;
}

const PersonResult = ({ personQuery }: IProps) => {
  return (
    <Flex w="full">
      <Grid minW="full" columnGap={8} rowGap={12}>
        {personQuery.data?.results.map((person: IPerson) => (
          <ItemCard
            key={person.id}
            tmdbID={person.id}
            href={`/person/${person.id}`}
            title={person.name}
            poster_path={person.profile_path}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default PersonResult;
