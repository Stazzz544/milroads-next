import styles from "./travel-template.module.scss";
import cs from "classnames";
import Image from "next/image";
import Container from "@/components/blog-components/container/container";

type Location = {
  country: string;
  location: string;
  description: string;
  img: any;
};

type TravelTemplate = {
  locations: Location[];
};

export default function TravelTemplate({ locations }: TravelTemplate) {
  return (
    <div className={cs(styles["wrapper"])}>
      <div className={cs(styles["grid-wrapper"])}>
        {locations.map(({ img, country, description, location }, index) => (
          <div key={index} className={cs(styles["card-wrapper"])}>
            <div className={cs(styles["card-content"])}>
              <Image
                alt="image"
                src={img}
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={100}
                unoptimized
              />
            </div>
            <div className={cs(styles["location-wrapper"])}>
              <div className={cs(styles["location-empty-block"])}></div>
              <div className={cs(styles["location-info-wrapper"])}>
                <h2 className={cs(styles["location-country"])}>{country}</h2>
                <p className={cs(styles["location-location"])}>{location}</p>
                <div className={cs(styles["location-devider"])}></div>
                <p className={cs(styles["location-description"])}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={cs(styles["section-description"])}>
        <Container>
          <div className={cs(styles["text"])}>
            Beautifully Designed, Easily Editable Templates to Get your Work
            Done Faster & Smarter. Simply Browse, Search, Save & Download our
            Easy to use Templates.
          </div>
        </Container>
      </div>
    </div>
  );
}
