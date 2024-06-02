import MovieReviewsPage from "@components/Movie/Reviews";
import { RootState } from "@redux/config/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Flex } from "@chakra-ui/react";

const MovieReviewsLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  const movieId = useParams().movieId;

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <MovieReviewsPage movieId={movieId} />
    </Flex>
  );
};

export default MovieReviewsLayout;
