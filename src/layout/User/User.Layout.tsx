import { Container, Flex } from "@chakra-ui/react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import UserPage from "@components/User";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const UserLayout = () => {
  const reduxUser = useSelector((state: RootState) => state.user);


  return (
    <Flex direction="column">
      <Navbar isAuth={reduxUser.isAuth} />
      <Container>
        <UserPage reduxUser={reduxUser} />
        <Footer />
      </Container>
    </Flex>
  );
};

export default UserLayout;
