import styles from "./slider.module.scss";
import cs from "classnames";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image_1 from "./../../public/slider/1.jpg";
import image_2 from "./../../public/slider/2.jpg";
import image_3 from "./../../public/slider/3.jpg";
import image_4 from "./../../public/slider/5.jpg";
import SliderImage from "./slider-image";
import Icon from "../../public/icons/pin.svg";
import SliderItem from "./slider-item";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Slider() {
  return (
    <div className={cs(styles["slider-wrapper"])}>
      <SlickSlider {...settings}>
        <SliderItem title="India" description="South Goa" image={image_1} />
        <SliderItem title="Holland" description="Amsterdam" image={image_2} />
        <SliderItem
          title="Mexico"
          description="Punta Cancun lighthouse"
          image={image_3}
        />
        <SliderItem title="Turkey" description="Kappadokien" image={image_4} />
      </SlickSlider>
    </div>
  );
}
