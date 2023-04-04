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
  as?: "span" | "p";
};

export const P = ({
  children,
  cursive = false,
  position = "left",
  introduction,
  indent = false,
  color = "",
  bold,
  as = "p",
}: PProps) => {
  return (
    <div
      className={cs(
        styles["paragraph"],
        styles[position],
        styles[color],
        styles[as],
        {
          [styles["cursive"]]: cursive,
          [styles["indent"]]: indent,
          [styles["introduction"]]: introduction,
          [styles["bold"]]: bold,
        }
      )}
    >
      {children}
    </div>
  );
};
