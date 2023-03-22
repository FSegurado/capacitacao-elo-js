import Head from "next/head";

import { Form } from "@/src/routes/Form";

export default function FormPage() {
  return (
    <>
      <Head>
        <title>Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form />
      </main>
    </>
  );
}
