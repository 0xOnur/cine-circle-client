import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Flex } from "@chakra-ui/react";
import HeroSection from "@components/Home/Hero";

const HomeLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Flex
      direction="column"
    >
      <Navbar isAuth={reduxIsAuth} />

      <HeroSection isAuth={reduxIsAuth} />
    </Flex>
  );
};

export default HomeLayout;
