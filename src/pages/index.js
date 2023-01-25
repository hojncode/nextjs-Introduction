import Seo from "@/components/Seo";
// import Head from "next/head"; // next.js가 제공하는 패키지
import { useEffect, useState } from "react";

const API_KEY = "";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      // const response = await fetch(
      //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      // );
      // const json = await response.json();
      //! 위와 아래 promise는 같음. 형식 통일 유무.
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      // console.log(data.results); //==> data의 results 를 객체 할당 으로 위 api 함수로 가져옴.
      setMovies(results);
      // console.log(data);
    })();
  }, []);

  return (
    <div>
      {/* <Head>
        <title>Home | Next Movies</title>
      </Head> */}
      {/* Head 를 Seo컴포넌트 처럼 개인화 하여 사용할 수 있다. */}
      <Seo title="Home."></Seo>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
