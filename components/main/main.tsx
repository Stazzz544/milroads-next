import Slider from "@/components/main/slider/slider";
import styles from "./main.module.scss";
import cs from "classnames";
import AboutMe from "@/components/main/about-me/about-me";
import ClassicTravel from "@/components/main/travel-types/classic-travel";
import UrbanTravel from "@/components/main/travel-types/urban-travel";
import TwoWheelTravel from "@/components/main/travel-types/two-wheel-travel";

export default function Main() {
  return (
    <>
      <div className={cs(styles["first-full-screen"])}>
        <Slider />
        <div className={cs(styles["divider"], styles["black-section"])}></div>
        <AboutMe />
        <div className={cs(styles["divider"], styles["grey-section"])}></div>
        <ClassicTravel />
        <div className={cs(styles["divider"], styles["black-section"])}></div>
        <TwoWheelTravel />
        <div className={cs(styles["divider"], styles["grey-section"])}></div>
        <UrbanTravel />
      </div>
    </>
  );
}
