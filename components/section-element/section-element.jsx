import styles from "./section-element.module.scss";
import cs from "classnames";
import Container from "../container/container";

export default function SectionElement() {
  return (
    <section className={cs(styles["wrapper"])}>
      <Container>
        <div className={cs(styles["flex-wrapper"])}>
          <div className={cs(styles["img-wrapper"])}></div>
          <div className={cs(styles["text-wrapper"])}>
            <h2 className={cs(styles["title"])}>Lorem ipsum dolor sit amet.</h2>
            <p className={cs(styles["text"])}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              autem, optio minus magni cumque voluptas nostrum suscipit eum,
              amet laborum numquam laboriosam assumenda hic modi. Sed dolorem
              libero illo facilis quod sunt fugit voluptate, officia, saepe
              dignissimos voluptatibus delectus alias consequuntur laborum
              deleniti ipsam. In recusandae culpa necessitatibus dignissimos
              aspernatur. Nihil at nulla illum quasi, rem a impedit architecto
              optio.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
