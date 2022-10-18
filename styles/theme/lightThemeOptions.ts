import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 360,
      sm: 480,
      md: 720,
      lg: 1024,
      xl: 1440,
    },
  },
};

export default lightThemeOptions;
