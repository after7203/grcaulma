import Carousel from "@/components/Carousel";
import { Inter } from "next/font/google";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>글카얼마 : 그래픽카드 시세가 궁금해?</title>
      </Head>
      <Carousel />
    </>
  );
}
