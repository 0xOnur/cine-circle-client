import UserWatchlistPage from "@components/User/Watchlist";
import { Container, Flex } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

const UserLayout = () => {
  const reduxUser = useSelector((state: RootState) => state.user);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxUser.isAuth} />
      <Container>
        <UserWatchlistPage />
        <Footer />
      </Container>
    </Flex>
  );
};

export default UserLayout;
