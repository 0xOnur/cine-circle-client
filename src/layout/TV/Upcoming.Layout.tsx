import UpcomingPage from "@components/Shared/Tops/Upcoming";
import { Container, Flex } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";

const UpcomingLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <UpcomingPage mediaType="tv" />
      </Container>
    </Flex>
  );
};

export default UpcomingLayout;
