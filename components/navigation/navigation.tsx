import Link from "next/link";
import cs from "classnames";
import styles from "./navigation.module.scss";
import { useState } from "react";
import Logo from "../../public/icons/road.svg";
import Image from "next/image";

export default function Navigation() {
  const [isActive, setActive] = useState(false);

  return (
    <header className={cs(styles["header"])}>
      <div className={cs(styles["logo-wrapper"])}>
        <Image priority src={Logo} height={89} width={100} alt="LOGO" />
        <h1 className={cs(styles["title"])}>Milroads</h1>
      </div>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={cs(styles["burger"], { [styles["active"]]: isActive })}
      >
        <span className={cs(styles["burger-item"])}></span>
        <span className={cs(styles["burger-item"])}></span>
        <span className={cs(styles["burger-item"])}></span>
      </div>
      {/* <nav className={cs(styles[''])}>
        <ul className={cs(styles["link-wrapper"])}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog/morocco/2011-p-1">Morocco 1</Link>
          </li>
          <li>
            <Link href="/blog/morocco/2011-p-2">Morocco 2</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
