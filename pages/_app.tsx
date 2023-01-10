import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  // return
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navigation />
        <div className="container mx-auto">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
      <Footer />
    </>
  );
}
