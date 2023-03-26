import Image from "next/image";
import styles from "./img.module.scss";
import cs from "classnames";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

type ImgProps = {
  src: string;
  description?: string;
};

export default function Img({ src, description }: ImgProps) {
  return (
    <div className={cs(styles["wrapper"])}>
      <div className={cs(styles["img"])}>
        <PhotoView src={src}>
          <Image
            alt={description || "IMG"}
            src={src}
            width={1500}
            height={1500}
            style={{
              objectFit: "contain",
              position: "relative",
              height: "auto",
              maxHeight: 800,
              width: "100%",
              borderRadius: 10,
            }}
            quality={100}
            unoptimized
          />
        </PhotoView>
      </div>
      <p className={cs(styles["description"])}>{description}</p>
    </div>
  );
}
