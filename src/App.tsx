import { useEffect, useState } from "react";
import AppRoutes from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "@redux/config/store";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "theme";
import { useAuth } from "hooks/Auth/useAuth";

function App() {
  const reduxIsAuth = useSelector((state: RootState) => state.isAuth);
  const [isAuth, setAuth] = useState(reduxIsAuth);

  useEffect(() => {
    setAuth(reduxIsAuth);
  }, [reduxIsAuth]);

  useAuth();

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
