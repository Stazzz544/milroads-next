import styles from "./card.module.scss";
import cs from "classnames";
import Image from "next/image";

export type CardProps = {
  country: string;
  location: string;
  description: string;
  img: any;
  height?: "short" | "normal";
};

export default function Card({
  country,
  description,
  img,
  location,
  height = "normal",
}: CardProps) {
  return (
    <div className={cs(styles["card-wrapper"], styles[height])}>
      <div className={cs(styles["card-content"])}>
        <Image
          alt="image"
          src={img}
          fill
          style={{
            objectFit: "cover",
          }}
          quality={100}
          unoptimized
        />
      </div>
      <div className={cs(styles["location-wrapper"])}>
        <div className={cs(styles["location-empty-block"])}></div>
        <div className={cs(styles["location-info-wrapper"])}>
          <h2 className={cs(styles["location-country"])}>{country}</h2>
          <p className={cs(styles["location-location"])}>{location}</p>
          <div className={cs(styles["location-divider"])}></div>
          <p className={cs(styles["location-description"])}>{description}</p>
        </div>
      </div>
    </div>
  );
}
