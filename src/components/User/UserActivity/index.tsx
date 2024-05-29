import UserWatchlist from "./Watchlist";
import { Flex } from "@chakra-ui/react";
import UserLists from "./Lists";
import UserReviews from "./Reviews";

interface IProps {
  username: string;
}

const UserActivitySection = ({ username }: IProps) => {
  return (
    <Flex direction="column" w="full" gap={20}>
      <UserWatchlist username={username} />
      <UserLists username={username} />
      <UserReviews username={username} />
    </Flex>
  );
};

export default UserActivitySection;
