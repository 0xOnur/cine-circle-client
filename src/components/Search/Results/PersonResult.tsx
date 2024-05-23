import { Flex, SimpleGrid } from "@chakra-ui/react";
import { IPerson } from "types/tmdb/Person/IPerson";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import NoResults from "./NoResults";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import { Fragment } from "react/jsx-runtime";

interface IProps {
  personQuery: any;
  query: string;
}

const PersonResult = ({ personQuery, query }: IProps) => {
  return (
    <Flex w="full" direction={"column"}>
      {!personQuery.data && <NoResults />}
      {personQuery.status === "success" &&
        personQuery.data?.results.length === 0 && <NoResults />}

      {personQuery.status === "error" && (
        <ErrorStatus
          refetch={personQuery.refetch}
          isRefetching={personQuery.isRefetching}
        />
      )}

      {personQuery.status === "success" &&
        personQuery.data?.results.length > 0 && (
          <Fragment>
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
            <Pagination
              page={personQuery.data?.page}
              total_pages={personQuery.data?.total_pages}
              query={query}
              media_type="person"
            />
          </Fragment>
        )}
    </Flex>
  );
};

export default PersonResult;
