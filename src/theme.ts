import {
  defineStyleConfig,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const Container = defineStyleConfig({
  baseStyle: {
    maxW: "8xl",
    px: { base: 6, md: 10 },
    py: 14,
  },
});

const Tooltip = defineStyleConfig({
  baseStyle: {
    bg: "darkPurple.600",
    color: "white",
    p: 2,
    rounded: "md",
  },
});

const InputStyle = defineStyleConfig({
  variants: {
    outline: {
      _focus: {
        border: "2px solid",
        borderColor: "darkPurple.500",
        boxShadow: "none",
        outline: "none",
      },
      field: {
        _focus: {
          border: "2px solid",
          borderColor: "darkPurple.500",
          boxShadow: "none",
          outline: "none",
        },
      },
    },
  },
});

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  components: {
    Container,
    Tooltip,
    Input: InputStyle,
    Textarea: InputStyle,
  },
  config,
  colors: {
    darkPurple: {
      50: "#f2e7fe", // En açık mor
      100: "#d7b7fd",
      200: "#bc86fc",
      300: "#a255fa",
      400: "#892eff",
      500: "#7000e0", // Ana mor tonu
      600: "#5a00b2",
      700: "#440085",
      800: "#2e0057",
      900: "#1d0034", // En koyu mor
    },
  },
});

export default theme;
