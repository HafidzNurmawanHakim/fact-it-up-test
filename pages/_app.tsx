import "../styles/globals.scss";
import "../app/sass/style.scss";
import type { AppProps } from "next/app";
import { AppControllerProvider } from "../app/layout/core/AppController";
import { ThemeControllerProvider } from "../app/layout/core/ThemeProvider";
import "bootstrap/dist/css/bootstrap.css";
import { SessionProvider, useSession } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ThemeControllerProvider>
        <AppControllerProvider>
          <Component {...pageProps} />
        </AppControllerProvider>
      </ThemeControllerProvider>
    </SessionProvider>
  );
}
