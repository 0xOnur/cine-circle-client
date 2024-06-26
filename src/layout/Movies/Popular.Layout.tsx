import PopularPage from "@components/Shared/Tops/PopularPage";
import { Container, Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const PopularLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <PopularPage mediaType="movie" />
      </Container>
    </Flex>
  );
};

export default PopularLayout;
