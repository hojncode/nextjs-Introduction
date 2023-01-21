import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav className={styles.nav}>
      <Link legacyBehavior href="/">
        <div
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
          // style={{ color: router.pathname === "/" ? "teal" : "blue" }}
        >
          Home
        </div>
      </Link>
      <div />
      <Link legacyBehavior href="/about">
        <div
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
          // style={{ color: router.pathname === "/about" ? "teal" : "blue" }}
        >
          About
        </div>
      </Link>
    </nav>
  );
}
