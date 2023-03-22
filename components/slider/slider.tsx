import styles from "./slider.module.scss";
import cs from "classnames";
import image_1 from "./../../public/slider/1.jpg";
import image_2 from "./../../public/slider/2.jpg";
import image_3 from "./../../public/slider/3.jpg";
import image_4 from "./../../public/slider/5.jpg";
import SliderItem from "./slider-item";

export default function Slider() {
  return (
    <div className={cs(styles["slider-wrapper"])}>
      <SliderItem title="India" description="South Goa" image={image_1} />
      <SliderItem title="Holland" description="Amsterdam" image={image_2} />
      <SliderItem
        title="Mexico"
        description="Punta Cancun lighthouse"
        image={image_3}
      />
      <SliderItem title="Turkey" description="Kappadokien" image={image_4} />
    </div>
  );
}
