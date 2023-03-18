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
          alt="image"
          src={bgImage}
          sizes="100vh"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
            position: "relative",
            height: "auto",
            width: "100%",
            borderRadius: 10,
          }}
          quality={100}
        />
      </div>
      <p className={cs(styles["description"])}>{description}</p>
    </div>
  );
}
