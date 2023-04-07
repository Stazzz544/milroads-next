import styles from "./iframe-video-container.module.scss";
import cs from "classnames";
import { ReactNode } from "react";

type IframeVideoContainerProps = {
  src: string;
};

export const IframeVideoContainer = ({ src }: IframeVideoContainerProps) => {
  return (
    <div className={cs(styles["video-container"])}>
      <iframe
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
