import cs from "classnames";
import TravelTemplate from "./travel-template/travel-template";
import one from "./assets/urban-travel/1.jpg";
import two from "./assets/urban-travel/2.jpg";
import three from "./assets/urban-travel/4.jpg";

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
  {
    country: "Россия",
    location: "Кириши, Ленинградская область",
    description: "Прогулка по территории бывшего хим завода, труба и мост",
    img: three,
  },
];

export default function UrbanTravel() {
  return (
    <TravelTemplate
      colorScheme="grey"
      locations={locations}
      sectionTitle="Городское и заброшенное"
      sectionDescription="Эстетика утерянного величия, романтика со вкусом ржавого металла"
    />
  );
}
