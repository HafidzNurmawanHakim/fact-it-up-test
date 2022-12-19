import "../styles/globals.scss";
import "../app/sass/style.scss";
import type { AppProps } from "next/app";
import { AppControllerProvider } from "../app/layout/core/AppController";
import { ThemeControllerProvider } from "../app/layout/core/ThemeProvider";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "../modules/auth/core/Auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeControllerProvider>
        <AppControllerProvider>
          <Component {...pageProps} />
        </AppControllerProvider>
      </ThemeControllerProvider>
    </AuthProvider>
  );
}
