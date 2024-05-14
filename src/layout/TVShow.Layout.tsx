import { Flex } from "@chakra-ui/react";
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
    </Flex>
  );
};

export default TVShowLayout;
