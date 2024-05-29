import { Flex } from "@chakra-ui/react";
import ErrorStatus from "@components/Shared/Status/ErrorStatus";
import PendingStatus from "@components/Shared/Status/PendingStatus";
import useGetUserLists from "hooks/TanStack/Query/User/useGetUserLists";
import SectionTitle from "@components/Home/Trending/SectionTitle";
import React, { Fragment } from "react";
import ListCard from "./ListCard";
import NoItemAlert from "@components/Shared/Status/NoItemAlert";
import SeeMore from "@components/Shared/Others/SeeMore";

interface IProps {
  username: string;
}

const UserLists = ({ username }: IProps) => {
  const { data, status, refetch, isRefetching } = useGetUserLists({
    username: username,
  });

  if (status === "pending" || isRefetching) {
    return <PendingStatus count={5} height="50px" />;
  }

  if (status === "error" || !data) {
    return <ErrorStatus refetch={refetch} isRefetching={isRefetching} />;
  }

  const lastFiveLists = data.slice(0, 5);

  if (!lastFiveLists || lastFiveLists.length === 0) {
    return <NoItemAlert sectionTitle="Lists" text="No lists found" />;
  }

  return (
    <Flex w="full" direction="column" gap={5}>
      <Flex
        w="full"
        align="center"
        justify={{ base: "center", sm: "flex-start" }}
      >
        <SectionTitle
          sectionTitle={`Last created lists (${lastFiveLists.length})`}
          color="gray.500"
          sectionHref={`/user/${username}/lists`}
        />
      </Flex>
      <Flex
        w="full"
        align="center"
        direction={{ base: "column", sm: "row" }}
        gap={5}
      >
        {lastFiveLists.map((list) => (
          <Fragment key={list._id}>
            <ListCard username={username} list={list} />
          </Fragment>
        ))}
          </Flex>
          <Flex w="full" justify="flex-end">
              <SeeMore href={`/user/${username}/lists`} />
          </Flex>
    </Flex>
  );
};

export default UserLists;
