import Image from "next/image";
import styles from "./page-wrapper.module.scss";
import cs from "classnames";
import { ReactNode } from "react";
import Container from "../container/container";
import { replaceWithBr } from "@/utils/replace-with-br";

type PageWrapperProps = {
  src: string;
  title: string;
  children: ReactNode;
  part: string;
};

export default function PageWrapper({
  src,
  title,
  part,
  children,
}: PageWrapperProps) {
  return (
    <div className={cs(styles["wrapper"])}>
      <div className={cs(styles["first-screen-wrapper"])}>
        <Image
          alt="image"
          src={src}
          fill
          sizes="100vh"
          className={cs(styles["image"])}
          style={{
            objectFit: "cover",
          }}
          quality={100}
          unoptimized
        />
        <div className={cs(styles["title-wrapper"])}>
          <Container>
            <h1 className={cs(styles["title"])}>{title}</h1>
            <h2
              className={cs(styles["subtitle"])}
              dangerouslySetInnerHTML={{
                __html: replaceWithBr(part),
              }}
            ></h2>
          </Container>
        </div>
      </div>

      <Container>
        <div className={cs(styles["article-wrapper"])}> {children}</div>
      </Container>
    </div>
  );
}
