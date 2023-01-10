import Link from "next/link";

export default function Projects() {
  return (
    <div className="py-16 lg:py-20">
      {/* <div>
        <img src="/assets/img/icon-uses.png" alt="icon uses" />
      </div> */}
      <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
        /uses
      </h1>
      <div className="pr-2 pt-3">
        <span className="font-body text-xl font-light text-primary dark:text-white">
          Inspired by
          <Link href="https://uses.tech/" target="_blank" className="border-b border-green">
            <span
              className="font-medium text-green hover:text-secondary dark:text-green-light dark:hover:text-secondary pl-1 pr-1">Wes
              Bos</span>
            and his project,
            <span
              className="font-medium text-green hover:text-secondary dark:text-green-light dark:hover:text-secondary pl-1 pr-1">uses.tech</span>.
          </Link>
        </span>
      </div>

      <div className="pt-16 lg:pt-20">
        <h3 className="pb-8 font-body text-2xl font-semibold text-primary dark:text-white">
          Computer + Workspace
        </h3>
        <ul className="list-disc pl-10">
          <li className="font-body text-lg font-light text-primary dark:text-white">
            <span className="font-medium">Computer:</span>
            I use a 2019 16"
            <a href="/"
              className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">MacBook
              Pro</a>
            (i9/32GB/512gb) for everything (work + personal). The physical escape
            key and fixed keyboard is amazing.
          </li>
          <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
            <span className="font-medium">Chair:</span>
            When I sit, I sit on an
            <a href="/"
              className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">Herman
              Miller Mirra 2</a>, but I stand almost 100% of the time, so the chair doesn’t do me
            much good.
          </li>
          <li className="pt-5 font-body text-lg font-light text-primary dark:text-white">
            <span className="font-medium">Desk:</span>
            My desk is a
            <a href="/"
              className="font-medium text-green underline hover:text-secondary dark:text-green-light dark:hover:text-secondary">Fully
              Jarvis standing desk</a>
            (which I love) with the Bamboo top (which I don't recommend). If
            you're looking for a great sit-stand desk, I highly recommend Jarvis.
            Also, purchase directly from Fully vs. Amazon. Fully's customer
            support is incredible.
          </li>
        </ul>
      </div>
    </div>
  );
}
