import cs from "classnames";
import TravelTemplate from "./travel-template/travel-template";
import one from "./assets/two-wheel-travel/1.jpg";
import two from "./assets/two-wheel-travel/2.jpg";
import three from "./assets/two-wheel-travel/3.jpg";

const locations = [
  {
    country: "Россия",
    location: "Сланцы, Ленинградская область",
    description:
      "Прогулка по территории завода, посещение террикона и подъём на трубу",
    img: one,
  },
  {
    country: "Россия",
    location: "Галич, Костромская область",
    description: "Подъём на 350 метровую заброшенную вышку",
    img: two,
  },
];

export default function TwoWheelTravel() {
  return (
    <TravelTemplate
      height="short"
      colorScheme="black"
      locations={locations}
      sectionTitle="Двухколёсный туризм"
      sectionDescription="Путешествия на мотоцикле, скутере, велосипеде"
    />
  );
}
