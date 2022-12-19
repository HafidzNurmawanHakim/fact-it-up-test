import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, FC, useContext, useMemo, useState } from "react";
import { getDesignTokens } from "../Theme.config";

type ThemeControllerParam = {
  colorMode: any;
};

interface ThemeControllerProps {
  children: any;
}

const initsThemeControllerParam: ThemeControllerParam = {
  colorMode: {},
};

const ThemeControllerContext = createContext<ThemeControllerParam>(
  initsThemeControllerParam
);

const useThemeController = () => {
  return useContext(ThemeControllerContext);
};

const ThemeControllerProvider: FC<ThemeControllerProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        return setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeControllerContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeControllerContext.Provider>
  );
};

export { ThemeControllerProvider, useThemeController };
