import { ReactNode } from "react";
import styles from "./container.module.scss";
import cs from "classnames";

type ContainerProps = { children: ReactNode };

export default function Container({ children }: ContainerProps) {
  return <div className={cs(styles["wrapper"])}>{children}</div>;
}
