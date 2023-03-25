import styles from "./travel-template.module.scss";
import cs from "classnames";

import Container from "@/components/blog-components/container/container";
import Card, { CardProps } from "@/components/card/card";
import { SlideUp } from "@/components/slide-up/slide-up";

type TravelTemplate = {
  locations: CardProps[];
  sectionTitle: string;
  sectionDescription: string;
  colorScheme: "grey" | "black";
  height?: "short" | "normal";
};

export default function TravelTemplate({
  locations,
  sectionDescription,
  sectionTitle,
  colorScheme,
  height,
}: TravelTemplate) {
  return (
    <div className={cs(styles["wrapper"], styles[colorScheme])}>
      <Container>
        <div className={cs(styles["section-title"])}>{sectionTitle}</div>
        <div className={cs(styles["section-description"])}>
          {sectionDescription}
        </div>
        <div className={cs(styles["section-divider"])}></div>
        <div className={cs(styles["grid-wrapper"])}>
          {locations.map((props, i) => (
            <SlideUp rootMargin={-100 - i * 150} key={i}>
              <Card {...props} height={height} />
            </SlideUp>
          ))}
        </div>
        <div className={cs(styles["btn-wrapper"])}>
          <button className={cs(styles["btn-btn"])}>
            Смотреть весь раздел
          </button>
        </div>
      </Container>
    </div>
  );
}
