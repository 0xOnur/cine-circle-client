import {
  Container,
  chakra,
  Stack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Fragment } from "react/jsx-runtime";
import SearchBar from "./SearchBar";
import HeroText from "./HeroText";
import NavigateButtons from "./NavigateButtons";

interface IProps {
  isAuth: boolean;
}

const HeroSection = ({ isAuth }: IProps) => {
  const fillColor = useColorModeValue("#FFFFFF", "#1A202C");
  return (
    <Fragment>
      <Container maxW="6xl" px={{ base: 6, md: 10 }} py={14}>
        <Stack direction="column" spacing={10} justifyContent="center">
          <HeroText />
          <SearchBar />
          {!isAuth && <NavigateButtons />}
        </Stack>
      </Container>
      <Box overflow="hidden">
        <chakra.svg
          width="150%"
          height="56px"
          transform="scaleX(-1)"
          filter="drop-shadow(0px 0px 6px #7000e0) drop-shadow(0px 0px 3px #7000e0)"
          preserveAspectRatio="none"
          viewBox="0 0 1100 120"
          style={{ fill: fillColor }}
        >
          <path
            d={`M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 
              250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 
              3V0H0v27.35a600.21 600.21 0 00321.39 29.09z`}
          ></path>
        </chakra.svg>
      </Box>
    </Fragment>
  );
};

export default HeroSection;
