import { Container, Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import AiringTodayPage from "@components/Shared/Tops/Airing";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const AiringToday = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <AiringTodayPage />
      </Container>
    </Flex>
  );
};

export default AiringToday;
