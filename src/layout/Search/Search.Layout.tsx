import { Container, Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import SearchPage from "@components/Search";
import { RootState } from "@redux/config/store";
import { useSelector } from "react-redux";

const SearchLayout = () => {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  return (
    <Flex direction="column">
      <Navbar isAuth={reduxIsAuth} />
      <Container>
        <SearchPage />
      </Container>
    </Flex>
  );
};

export default SearchLayout;
