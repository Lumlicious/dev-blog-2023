import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  // return
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
