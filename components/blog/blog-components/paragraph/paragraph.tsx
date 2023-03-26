import styles from "./paragraph.module.scss";
import cs from "classnames";
import { ReactNode } from "react";

type PProps = {
  children: ReactNode;
  cursive?: boolean;
  position?: "center" | "right" | "left";
  indent?: boolean;
  introduction?: boolean;
};

export default function P({
  children,
  cursive = false,
  position = "left",
  introduction,
  indent = false,
}: PProps) {
  return (
    <h2
      className={cs(styles["paragraph"], styles[position], {
        [styles["cursive"]]: cursive,
        [styles["indent"]]: indent,
        [styles["introduction"]]: introduction,
      })}
    >
      {children}
    </h2>
  );
}
