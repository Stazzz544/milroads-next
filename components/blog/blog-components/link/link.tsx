import styles from "./link.module.scss";
import cs from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

type AProps = {
  children: ReactNode;
  href: string;
  intend?: "left" | "right" | "all";
};

export const A = ({ children, href, intend }: AProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cs(styles["link"], styles[intend || ""])}
    >
      {children}
    </Link>
  );
};
