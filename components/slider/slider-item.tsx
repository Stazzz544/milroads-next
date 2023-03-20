import SliderImage from "./slider-image";
import Image from "next/image";
import Icon from "../../public/icons/pin.svg";
import styles from "./slider-item.module.scss";
import cs from "classnames";
import Container from "../container/container";

type SliderItemProps = {
  image: any;
  title: string;
  description: string;
};

export default function SliderItem({
  image,
  title,
  description,
}: SliderItemProps) {
  return (
    <div className={cs(styles["img-wrapper"])}>
      <SliderImage src={image} />
      <div className={cs(styles["container"])}>
        <div className={cs(styles["place-wrapper"])}>
          <h2 className={cs(styles["title"])}>{title}</h2>
          <p className={cs(styles["description"])}>{description}</p>
          <Image
            className={cs(styles["icon"])}
            priority
            src={Icon}
            height={22}
            width={22}
            alt="pin"
          />
        </div>
      </div>
    </div>
  );
}
