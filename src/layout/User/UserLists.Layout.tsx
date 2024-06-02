import { Container, Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import UserListsPage from "@components/User/Lists";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const UserListsLayout = () => {
  const reduxUser = useSelector((state: RootState) => state.user);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxUser.isAuth} />
      <Container>
        <UserListsPage />
      </Container>
    </Flex>
  );
};

export default UserListsLayout;
