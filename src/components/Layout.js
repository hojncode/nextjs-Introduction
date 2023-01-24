import NavBar from "./NavBar";

export default function Layout({ children }) {
  //children => react.js 에서 제공하는 prop : 하나의 component를 또 다른 component안에 넣을 때 쓸 수 있다.
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
