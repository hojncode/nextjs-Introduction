import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <div style={{ color: router.pathname === "/" ? "teal" : "blue" }}>
          Home
        </div>
      </Link>
      <div />
      <Link href="/about">
        <div style={{ color: router.pathname === "/about" ? "teal" : "blue" }}>
          About
        </div>
      </Link>
    </nav>
  );
}
