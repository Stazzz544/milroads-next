import styles from "./slide-up.module.scss";
import cs from "classnames";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

export type SlideUpProps = PropsWithChildren<{
  rootMargin?: number;
}>;

export const SlideUp = ({
  children,
  rootMargin = -100,
}: SlideUpProps): JSX.Element => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `${rootMargin}px 0px`,
  });

  return (
    <div
      ref={ref}
      className={cs(styles["wrapper"], { [styles["animated"]]: inView })}
    >
      {children}
    </div>
  );
};
