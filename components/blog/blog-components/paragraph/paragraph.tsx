import styles from "./paragraph.module.scss";
import cs from "classnames";
import { ReactNode } from "react";

type PProps = {
  children: ReactNode;
  cursive?: boolean;
  position?: "center" | "right" | "left";
  indent?: boolean;
  introduction?: boolean;
  color?: "" | "green" | "red";
  bold?: boolean;
};

export default function P({
  children,
  cursive = false,
  position = "left",
  introduction,
  indent = false,
  color = "",
  bold,
}: PProps) {
  return (
    <h2
      className={cs(styles["paragraph"], styles[position], styles[color], {
        [styles["cursive"]]: cursive,
        [styles["indent"]]: indent,
        [styles["introduction"]]: introduction,
        [styles["bold"]]: bold,
      })}
    >
      {children}
    </h2>
  );
}
