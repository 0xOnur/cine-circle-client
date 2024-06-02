import TVShowReviewsPage from "@components/TVShow/Reviews";
import { RootState } from "@redux/config/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Flex } from "@chakra-ui/react";

const TVShowReviewsLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  const showId = useParams().showId;

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <TVShowReviewsPage showId={showId} />
    </Flex>
  );
};

export default TVShowReviewsLayout;
