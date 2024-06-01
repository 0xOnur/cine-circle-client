import { Container, Flex } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import PopularPage from "@components/Shared/Tops/PopularPage";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const PopularLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <PopularPage mediaType="tv" />
        <Footer />
      </Container>
    </Flex>
  );
};

export default PopularLayout;
