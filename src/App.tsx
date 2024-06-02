import { ChakraProvider, ColorModeScript, Flex } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useAuth } from "hooks/Auth/useAuth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./routes";
import theme from "theme";
import useNetworkChecker from "hooks/Auth/useNetworkChecker";
import Footer from "@components/Footer";

function App() {
  const reduxIsAuth = useSelector((state: RootState) => state.user.isAuth);
  const [isAuth, setAuth] = useState(reduxIsAuth);

  useEffect(() => {
    setAuth(reduxIsAuth);
  }, [reduxIsAuth]);

  useAuth();
  useNetworkChecker();

  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          duration: 5000,
          isClosable: true,
          position: "bottom",
          colorScheme: "darkPurple",
        },
      }}
    >
      <Flex minHeight="100vh" direction="column">
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AppRoutes isAuth={isAuth} />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
