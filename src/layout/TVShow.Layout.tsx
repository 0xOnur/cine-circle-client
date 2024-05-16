import { Container, Flex } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import TVShowDetailsPage from "@components/TVShow/Details";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TVShowLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);
  const showId = useParams().showId;

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <TVShowDetailsPage showId={showId} />
      <Container maxW="8xl" px={{ base: 6, md: 10 }} py={14}>
        <Footer />
      </Container>
    </Flex>
  );
};

export default TVShowLayout;
