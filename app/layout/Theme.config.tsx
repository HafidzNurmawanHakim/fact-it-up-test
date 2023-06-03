import { createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import {
  DeprecatedThemeOptions,
  PaletteMode,
  ThemeCssVarOverrides,
  ThemeOptions,
  ThemeVars,
  ThemeWithProps,
  ThemedProps,
} from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          divider: "#eff2f5",
          background: {
            default: "#fff",
            paper: "#f5f8fa",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          components: {
            MuiChip: {
              variants: [
                {
                  props: { variant: "light" },
                  style: {
                    background: "rgba(226, 49, 22, 0.23)",
                  },
                },
              ],
            },
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
            paper: "#10182E",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
