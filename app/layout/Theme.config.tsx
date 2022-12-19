import { createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          divider: amber[200],
          background: {
            default: "#FBFBFB ",
            paper: "#FBFBFB ",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#00bdaa",
          },
          divider: deepOrange[700],
          background: {
            default: "#16213e",
            paper: "#16213e",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
