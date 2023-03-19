import styles from "./slider.module.scss";
import cs from "classnames";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import image_1 from "./../../public/1.jpg";
import image_2 from "./../../public/2.jpg";
import image_3 from "./../../public/3.jpg";
import image_4 from "./../../public/4.jpg";
import SliderImage from "./slider-image";
import Icon from "../../public/icons/pin.svg";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplaySpeed: 3000,
  autoplay: true,
  cssEase: "linear",
  speed: 3500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Slider() {
  return (
    <div className={cs(styles["slider-wrapper"])}>
      <SlickSlider {...settings}>
        <div className={cs(styles["img-wrapper"])}>
          <SliderImage src={image_1} />
          <div className={cs(styles["place-wrapper"])}>
            <h2 className={cs(styles["title"])}>Some place</h2>
            <p className={cs(styles["description"])}>
              some text about place...
            </p>
            <Image
              className={cs(styles["icon"])}
              priority
              src={Icon}
              height={22}
              width={22}
              alt="LOGO"
            />
          </div>
        </div>
        <div className={cs(styles["img-wrapper"])}>
          <SliderImage src={image_2} />
          <div className={cs(styles["place-wrapper"])}>
            <h2 className={cs(styles["title"])}>Some place</h2>
            <p className={cs(styles["description"])}>
              some text about place...
            </p>
            <Image
              className={cs(styles["icon"])}
              priority
              src={Icon}
              height={22}
              width={22}
              alt="LOGO"
            />
          </div>
        </div>
        <div className={cs(styles["img-wrapper"])}>
          <SliderImage src={image_3} />
          <div className={cs(styles["place-wrapper"])}>
            <h2 className={cs(styles["title"])}>Some place</h2>
            <p className={cs(styles["description"])}>
              some text about place...
            </p>
            <Image
              className={cs(styles["icon"])}
              priority
              src={Icon}
              height={22}
              width={22}
              alt="LOGO"
            />
          </div>
        </div>
        <div className={cs(styles["img-wrapper"])}>
          <SliderImage src={image_4} />
          <div className={cs(styles["place-wrapper"])}>
            <h2 className={cs(styles["title"])}>Some place</h2>
            <p className={cs(styles["description"])}>
              some text about place...
            </p>
            <Image
              className={cs(styles["icon"])}
              priority
              src={Icon}
              height={22}
              width={22}
              alt="LOGO"
            />
          </div>
        </div>
      </SlickSlider>
    </div>
  );
}
