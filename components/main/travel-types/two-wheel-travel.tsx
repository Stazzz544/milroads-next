import cs from "classnames";
import TravelTemplate from "./travel-template/travel-template";
import one from "./assets/two-wheel-travel/1.jpg";
import two from "./assets/two-wheel-travel/2.jpg";
import three from "./assets/two-wheel-travel/3.jpg";

const locations = [
  {
    countries: ["Россия"],
    title: "Сланцы, Ленинградская область",
    description:
      "Прогулка по территории завода, посещение террикона и подъём на трубу",
    img: one,
  },
  {
    countries: ["Россия"],
    title: "Галич, Костромская область",
    description: "Подъём на 350 метровую заброшенную вышку",
    img: two,
  },
];

export default function TwoWheelTravel() {
  return (
    <TravelTemplate
      link={"/blog/two-wheel-travel-page"}
      height="short"
      colorScheme="black"
      locations={locations}
      sectionTitle="Двухколёсный туризм"
      sectionDescription="Путешествия на мотоцикле, скутере, велосипеде"
    />
  );
}
