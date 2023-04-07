import styles from "./iframe-video-container.module.scss";
import cs from "classnames";
import { ReactNode } from "react";

type IframeVideoContainerProps = {
  children: ReactNode;
};

export const IframeVideoContainer = ({
  children,
}: IframeVideoContainerProps) => {
  return <div className={cs(styles["video-container"])}>{children}</div>;
};
