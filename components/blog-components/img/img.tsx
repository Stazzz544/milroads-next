import Image from "next/image";
import styles from "./img.module.scss";
import cs from "classnames";

type ImgProps = {
  bgImage: string;
  description?: string;
};

export default function Img({ bgImage, description }: ImgProps) {
  return (
    <div className={cs(styles["wrapper"])}>
      <div className={cs(styles["img"])}>
        <Image
          alt={description || "IMG"}
          src={bgImage}
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
      </div>
      <p className={cs(styles["description"])}>{description}</p>
    </div>
  );
}
