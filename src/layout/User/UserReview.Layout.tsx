import UserReviewsPage from "@components/User/Reviews";
import { Container, Flex } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";

const UserReviewLayout = () => {
  const reduxUser = useSelector((state: RootState) => state.user);
  return (
    <Flex direction="column">
      <Navbar isAuth={reduxUser.isAuth} />
      <Container>
        <UserReviewsPage />
      </Container>
    </Flex>
  );
};

export default UserReviewLayout;
