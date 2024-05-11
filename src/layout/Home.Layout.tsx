import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Container, Flex } from "@chakra-ui/react";
import HeroSection from "@components/Home/Hero";
import TrendingSection from "@components/Home/Trending";

const HomeLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />

      <HeroSection isAuth={reduxIsAuth} />
      <Container
        maxW="6xl"
        //max with can not over screen width
        px={{ base: 6, md: 10 }}
        py={14}
      >
        <TrendingSection />
      </Container>
    </Flex>
  );
};

export default HomeLayout;
