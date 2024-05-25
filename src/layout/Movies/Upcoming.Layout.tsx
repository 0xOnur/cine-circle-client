import { Container, Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import UpcomingPage from "@components/Shared/Tops/Upcoming";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const UpcomingLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <UpcomingPage mediaType="movie" />
      </Container>
    </Flex>
  );
};

export default UpcomingLayout;
