import styles from "./link.module.scss";
import cs from "classnames";
import { ReactNode } from "react";

type HProps = {
  children: ReactNode;
  href: string;
  intend?: "left" | "right" | "all";
};

export default function A({ children, href, intend }: HProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cs(styles["link"], styles[intend || ""])}
    >
      {children}
    </a>
  );
}
