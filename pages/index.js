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
      <div className="bg-[rgba(243,122,70,255)] w-screen h-screen flex justify-center items-center mx-auto">
        <img src="/mainimage.png" className="w-[1400px] h-[900px]" alt="" />
      </div>
    </>
  );
}
