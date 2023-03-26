import cs from "classnames";
import TravelTemplate from "./travel-template/travel-template";
import one from "./assets/urban-travel/1.jpg";
import two from "./assets/urban-travel/2.jpg";
import three from "./assets/urban-travel/3.jpg";

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
  {
    countries: ["Россия"],
    title: "Кириши, Ленинградская область",
    description: "Прогулка по территории бывшего хим завода, труба и мост",
    img: three,
  },
];

export default function UrbanTravel() {
  return (
    <TravelTemplate
      link={"/blog/urban-page"}
      colorScheme="grey"
      locations={locations}
      sectionTitle="Городское и заброшенное"
      sectionDescription="Эстетика утерянного величия, романтика со вкусом ржавого металла"
    />
  );
}
