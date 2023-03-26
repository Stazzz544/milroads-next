import styles from "./travel-template.module.scss";
import cs from "classnames";
import Link from "next/link";

import Container from "@/components/blog/blog-components/container/container";
import Card, { CardProps } from "@/components/shared/card/card";
import { SlideUp } from "@/components/shared/slide-up/slide-up";
import { Url } from "next/dist/shared/lib/router/router";

type TravelTemplate = {
  locations: CardProps[];
  sectionTitle: string;
  sectionDescription: string;
  colorScheme: "grey" | "black";
  height?: "short" | "normal";
  link: Url;
};

export default function TravelTemplate({
  locations,
  sectionDescription,
  sectionTitle,
  colorScheme,
  height,
  link,
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
            <SlideUp rootMargin={-100 - i * 100} key={i}>
              <Card {...props} height={height} />
            </SlideUp>
          ))}
        </div>
        <div className={cs(styles["btn-wrapper"])}>
          <button className={cs(styles["btn-btn"])}>
            <Link href={link}>Смотреть весь раздел</Link>
          </button>
        </div>
      </Container>
    </div>
  );
}
