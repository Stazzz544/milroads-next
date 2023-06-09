import styles from "./title.module.scss";
import cs from "classnames";
import { ReactNode } from "react";

type HProps = {
  children: ReactNode;
};

export const H = ({ children }: HProps) => {
  return <h2 className={cs(styles["title"])}>{children}</h2>;
};
