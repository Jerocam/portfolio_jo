import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion"
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <AnimatePresence initial={false} mode="popLayout">
      <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}
