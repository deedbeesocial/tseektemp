import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>tseek</title>
        <meta name="description" content="Official website for tSeek" />
        <link rel="icon" href="favicon.ico " />
      </Head>
      <img src="/mainimage.png" className="w-screen h-screen" alt="" />
    </>
  );
}
