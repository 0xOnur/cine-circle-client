import { Container, Flex } from "@chakra-ui/react";
import Footer from "@components/Footer";
import MovieDetailsPage from "@components/Movie/Details";
import Navbar from "@components/Navbar";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);
  const movieId = useParams().movieId;

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <MovieDetailsPage movieId={movieId} />
      <Container maxW="8xl" px={{ base: 6, md: 10 }} py={14}>
        <Footer />
      </Container>
    </Flex>
  );
};

export default MovieLayout;
