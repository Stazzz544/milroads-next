import Link from "next/link";
import cs from "classnames";
import styles from "./navigation.module.scss";
import { useState } from "react";
import Logo from "./assets/road.svg";
import Image from "next/image";

export default function Navigation() {
  const [isActive, setActive] = useState(false);

  return (
    <header className={cs(styles["header"])}>
      <Link href={"/"}>
        <div className={cs(styles["logo-wrapper"])}>
          <div className={cs(styles["svg-wrapper"])}>
            <Image priority src={Logo} fill alt="LOGO" />
          </div>

          <h1 className={cs(styles["title"])}>Milroads</h1>
        </div>
      </Link>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={cs(styles["burger"], { [styles["active"]]: isActive })}
      >
        <span className={cs(styles["burger-item"])}></span>
        <span className={cs(styles["burger-item"])}></span>
        <span className={cs(styles["burger-item"])}></span>
      </div>
    </header>
  );
}
