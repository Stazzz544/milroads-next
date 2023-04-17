import { replaceWithBr } from "@/utils/replace-with-br";
import styles from "./card.module.scss";
import cs from "classnames";
import Image from "next/image";

export type CardProps = {
  countries: string[];
  title: string;
  description: string;
  img: any;
  height?: "short" | "normal";
};

export default function Card({
  countries,
  description,
  img,
  title,
  height = "normal",
}: CardProps) {
  return (
    <div className={cs(styles["card-wrapper"], styles[height])}>
      <div className={cs(styles["card-content"])}>
        <Image
          referrerPolicy="no-referrer"
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
          <h2 className={cs(styles["location-country"])}>
            {countries.map((country) => country)}
          </h2>
          <p className={cs(styles["location-location"])}>{title}</p>
          <div className={cs(styles["location-divider"])}></div>
          <p
            className={cs(styles["location-description"])}
            dangerouslySetInnerHTML={{
              __html: replaceWithBr(description),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
