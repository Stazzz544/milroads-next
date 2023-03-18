import Link from "next/link";
import cs from "classnames";
import styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <header className={cs(styles["header"])}>
      <nav>
        <ul className={cs(styles["link-wrapper"])}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog/morocco/2011-p-1">Morocco</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
