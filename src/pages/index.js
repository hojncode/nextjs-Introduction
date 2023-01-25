import Seo from "@/components/Seo";
// import Head from "next/head"; // next.js가 제공하는 패키지
import { useEffect, useState } from "react";

const API_KEY = "";

export default function Home({ results }) {
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     // const response = await fetch(
  //     //   `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  //     // );
  //     // const json = await response.json();
  //     //! 위와 아래 promise는 같음. 형식 통일 유무.
  //     const { results } = await (await fetch(`/api/movies`)).json();
  //     // console.log(data.results); //==> data의 results 를 객체 할당 으로 위 api 함수로 가져옴.
  //     setMovies(results);
  //     // console.log(data);
  //   })();
  // }, []);

  return (
    <div className="container">
      {/* <Head>
        <title>Home | Next Movies</title>
      </Head> */}
      {/* Head 를 Seo컴포넌트 처럼 개인화 하여 사용할 수 있다. */}
      <Seo title="Home."></Seo>
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//getServerSideProps 이름은 바꾸면 안된다. 이 코드는 오로지 server 쪽에서만 동작한다.(api를 여기에 작성하면 클라이언트에서 절대 볼 수 없다.)
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
