import Seo from "@/components/Seo";
import Head from "next/head"; // next.js가 제공하는 패키지

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Home | Next Movies</title>
      </Head> */}
      {/* Head 를 Seo컴포넌트 처럼 개인화 하여 사용할 수 있다. */}
      <Seo title="Home."></Seo>
      <h1>Home</h1>
    </div>
  );
}
