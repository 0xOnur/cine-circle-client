import CreditsPage from "@components/Shared/CastAndCrew";
import { RootState } from "@redux/config/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Flex } from "@chakra-ui/react";

const TVShowCreditsLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  const showId = useParams().showId;
  return (
    <Flex w="full" direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <CreditsPage mediaId={showId} mediaType="tv" />
    </Flex>
  );
};

export default TVShowCreditsLayout;
