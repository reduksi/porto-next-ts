import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
    </ThemeProvider>
    );
}