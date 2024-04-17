import { useEffect, useState } from "react";
import AppRoutes from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "@redux/config/store";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "theme";

function App() {
  const reduxUser = useSelector((state: RootState) => state.user);
  const [isAuth, setAuth] = useState(reduxUser.isAuth);

  useEffect(() => {
    setAuth(reduxUser.isAuth);
  }, [reduxUser]);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AppRoutes isAuth={isAuth} />
    </ChakraProvider>
  );
}

export default App;
