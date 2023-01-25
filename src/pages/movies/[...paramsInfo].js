import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({ paramsInfo }) {
  const router = useRouter();
  // console.log(router);
  const [title, id] = paramsInfo || []; // [] es6 문법.
  console.log({ paramsInfo });

  // router.query.params가 두개의 element를 가지는 배열이기 때문에,[title, id] 가 가능함.
  return (
    <div>
      <Seo title={title}></Seo>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { paramsInfo } }) {
  console.log({ params: { paramsInfo } });
  return {
    props: {
      paramsInfo, //! 중요 빼먹지 말것 => _app으로 보내줘야함.
    },
  };
}
