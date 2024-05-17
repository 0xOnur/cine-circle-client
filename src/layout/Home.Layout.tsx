import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";
import Navbar from "@components/Navbar";
import { Container, Flex } from "@chakra-ui/react";
import HeroSection from "@components/Home/Hero";
import TrendingSection from "@components/Home/Trending";
import LeadboardSection from "@components/Home/Leadboard";
import Footer from "@components/Footer";

const HomeLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />

      <HeroSection isAuth={reduxIsAuth} />
      <Container>
        <TrendingSection />
        <LeadboardSection />
        <Footer />
      </Container>
    </Flex>
  );
};

export default HomeLayout;
