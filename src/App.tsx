import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RootState } from "@redux/config/store";
import { useAuth } from "hooks/Auth/useAuth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppRoutes from "./routes";
import theme from "theme";
import useNetworkChecker from "hooks/Auth/useNetworkChecker";

function App() {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);
  const [isAuth, setAuth] = useState(reduxIsAuth);

  useEffect(() => {
    setAuth(reduxIsAuth);
  }, [reduxIsAuth]);

  useAuth();
  useNetworkChecker()

  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          duration: 5000,
          isClosable: true,
          position: "bottom",
					colorScheme: "darkPurple"
        },
      }}
    >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AppRoutes isAuth={isAuth} />
    </ChakraProvider>
  );
}

export default App;
