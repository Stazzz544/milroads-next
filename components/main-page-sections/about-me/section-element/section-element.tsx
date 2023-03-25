import styles from "./section-element.module.scss";
import cs from "classnames";
import { replaceWithBr } from "@/utils/replace-with-br";
import Image from "next/image";
import Container from "@/components/container/container";

type SectionElementProps = {
  orientation?: "left" | "right";
  title: string;
  description: string;
  img: any;
};

export default function SectionElement({
  orientation = "right",
  title,
  description,
  img,
}: SectionElementProps) {
  return (
    <section className={cs(styles["wrapper"])}>
      <Container>
        <div className={cs(styles["flex-wrapper"], styles[orientation])}>
          <div className={cs(styles["img-wrapper"])}>
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
          <div className={cs(styles["text-wrapper"], styles[orientation])}>
            <h2
              className={cs(styles["title"])}
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(title),
              }}
            ></h2>
            <p
              className={cs(styles["text"])}
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(description),
              }}
            ></p>
          </div>
        </div>
      </Container>
    </section>
  );
}
