import { A } from "../link/link";
import { P } from "../paragraph/paragraph";
import styles from "./list.module.scss";
import cs from "classnames";

type ListLinksItems = {
  color?: "" | "green" | "red";
  href: string;
  text: string;
};

type ListProps = {
  title?: string;
  titleColor?: "" | "green" | "red";
  listItems?: string[];
  listLinksItems?: ListLinksItems[];
  disc?: boolean;
};

export default function List({
  listItems,
  title,
  titleColor,
  listLinksItems,
  disc,
}: ListProps) {
  return (
    <div className={cs(styles["list-wrapper"])}>
      <div className={cs(styles["title-wrapper"])}>
        <P indent={false} color={titleColor}>
          {title}
        </P>
      </div>

      <div className={cs(styles["items-wrapper"])}>
        {listItems &&
          listItems.length > 0 &&
          listItems.map((listItem, i) => (
            <div
              key={i}
              className={cs(styles["item-wrapper"], { [styles["disc"]]: disc })}
            >
              <P indent={false}>{listItem}</P>
            </div>
          ))}

        {listLinksItems &&
          listLinksItems.length > 0 &&
          listLinksItems.map(({ href, color, text }, i) => (
            <div key={i} className={cs(styles["item-wrapper"])}>
              <P indent={false} color={color}>
                <A href={href}>{text}</A>
              </P>
            </div>
          ))}
      </div>
    </div>
  );
}
