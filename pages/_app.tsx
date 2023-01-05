import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  // return
  return (
    <div className="flex">
      <aside className="fixed left-0 top-0 h-screen w-60 bg-slate-700 p-10">
        <div>Chad Lumley</div>
        <div>Senior Front End Engineer</div>
        <ul>
          <li>
            <Link href={`/`}>Blog</Link>
          </li>
          <li>
            <Link href={`/projects`}>Projects</Link>
          </li>
          <li>
            <Link href={`/resume`}>Resume</Link>
          </li>
          <li>
            <Link href={`/about`}>About</Link>
          </li>
        </ul>
      </aside>
      <main className="ml-60 flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
