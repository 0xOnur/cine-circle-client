import CreditsPage from "@components/Shared/CastAndCrew";
import { RootState } from "@redux/config/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Flex } from "@chakra-ui/react";

const MovieCreditsLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  const movieId = useParams().movieId;

  return (
    <Flex w="full" direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <CreditsPage mediaId={movieId} mediaType="movie" />
    </Flex>
  );
};

export default MovieCreditsLayout;
