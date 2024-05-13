import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Container, Flex } from "@chakra-ui/react";
import HeroSection from "@components/Home/Hero";
import TrendingSection from "@components/Home/Trending";
import LeadboardSection from "@components/Home/Leadboard";

const HomeLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />

      <HeroSection isAuth={reduxIsAuth} />
      <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
        <TrendingSection />
        <LeadboardSection />
      </Container>
    </Flex>
  );
};

export default HomeLayout;
