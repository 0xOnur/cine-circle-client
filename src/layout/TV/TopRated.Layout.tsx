import { Container, Flex } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import TopRatedPage from "@components/Shared/Tops/TopRated";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const TopRatedLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <TopRatedPage mediaType="tv" />
        <Footer />
      </Container>
    </Flex>
  );
};

export default TopRatedLayout;
