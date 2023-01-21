import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link legacyBehavior href="/">
        <div className={router.pathname === "/" ? "active" : ""}>Home</div>
      </Link>
      <div />
      <Link legacyBehavior href="/about">
        <div className={router.pathname === "/about" ? "active" : ""}>
          About
        </div>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        div {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      `}</style>
    </nav>
  );
}
