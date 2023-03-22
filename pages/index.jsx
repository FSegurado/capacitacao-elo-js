import Head from "next/head";

import { Home } from "@/src/routes/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
