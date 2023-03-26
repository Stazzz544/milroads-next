import { scheme } from "@/model/model";
import cs from "classnames";
import styles from "./travel.module.scss";
import Card from "../shared/card/card";
import { SlideUp } from "../shared/slide-up/slide-up";
import Container from "./blog-components/container/container";
import Link from "next/link";

export default function ClassicTravelArticles() {
  const classicTravelArticles = scheme.filter((article) =>
    article.travelType.includes("Классический")
  );

  return (
    <div className={cs(styles["wrapper"])}>
      <Container>
        <div className={cs(styles["flex-container"])}>
          {classicTravelArticles.map((article, index) => (
            <Link
              href={article.articleLink}
              key={index}
              className={cs(styles["flex-item"])}
            >
              <SlideUp>
                <Card {...article} />
              </SlideUp>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
