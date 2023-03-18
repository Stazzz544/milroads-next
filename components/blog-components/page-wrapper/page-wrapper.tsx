import Image from "next/image";
import styles from "./page-wrapper.module.scss";
import cs from "classnames";
import { ReactNode } from "react";
import Container from "@/components/container/container";

type PageWrapperProps = {
  bgImage: string;
  title: string;
  children: ReactNode;
  part?: string;
};

export default function PageWrapper({
  bgImage,
  title,
  part,
  children,
}: PageWrapperProps) {
  return (
    <div className={cs(styles["wrapper"])}>
      <div className={cs(styles["first-screen-wrapper"])}>
        <Image
          alt="image"
          src={bgImage}
          fill
          sizes="100vh"
          className={cs(styles["image"])}
          style={{
            objectFit: "cover",
          }}
          quality={100}
        />
        <div className={cs(styles["title-wrapper"])}>
          <Container>
            <h1 className={cs(styles["title"])}>{title}</h1>
            <h2 className={cs(styles["subtitle"])}>{part}</h2>
          </Container>
        </div>
      </div>

      <Container>{children}</Container>
    </div>
  );
}
