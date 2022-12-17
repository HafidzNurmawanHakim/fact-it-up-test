import "../styles/globals.scss";
import "../app/sass/style.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
