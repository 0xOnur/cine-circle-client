import Navbar from "@components/Navbar";
import ListDetailsPage from "@components/List";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "@redux/config/store";
import { Container, Flex } from "@chakra-ui/react";

const UserListDetailsLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  const listId = useParams().listId;
  const username = useParams().username;

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <ListDetailsPage username={username} listId={listId} />
      </Container>
    </Flex>
  );
};

export default UserListDetailsLayout;
