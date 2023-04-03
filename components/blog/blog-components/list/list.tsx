import styles from "./list.module.scss";
import cs from "classnames";
import P from "../paragraph/paragraph";

type ListProps = {
  title?: string;
  titleColor?: "" | "green" | "red";
  listItems: string[];
};

export default function List({ listItems, title, titleColor }: ListProps) {
  return (
    <div className={cs(styles["list-wrapper"])}>
      <div className={cs(styles["title-wrapper"])}>
        <P color={titleColor}>{title}</P>
      </div>
      <div className={cs(styles["items-wrapper"])}>
        {listItems.map((listItem, i) => (
          <div key={i} className={cs(styles["item-wrapper"])}>
            <P>{listItem}</P>
          </div>
        ))}
      </div>
    </div>
  );
}
