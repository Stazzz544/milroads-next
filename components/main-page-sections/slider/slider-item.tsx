import SliderImage from "./slider-image";
import Image from "next/image";
import Icon from "../../../public/icons/pin.svg";
import styles from "./slider-item.module.scss";
import cs from "classnames";

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
      <div className={cs(styles["indicator-container"])}>
        <div className={cs(styles["indicator-wrapper"])}>
          <div className={cs(styles["slide-indicator"])}></div>
        </div>
      </div>
      <div className={cs(styles["slide"])}>
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
    </div>
  );
}
