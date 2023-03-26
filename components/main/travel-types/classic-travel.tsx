import cs from "classnames";
import TravelTemplate from "./travel-template/travel-template";
import one from "./assets/classic-travel/1.jpg";
import two from "./assets/classic-travel/2.jpg";
import three from "./assets/classic-travel/3.jpg";

const locations = [
  {
    countries: ["Россия"],
    title: "Карелия, Ладожское озеро",
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: one,
  },
  {
    countries: ["Индия"],
    title: "Агра-форт, город Агра",
    description: "Путешествие по Индии на поездах",
    img: two,
  },
  {
    countries: ["ОАЭ"],
    title: "Мечеть шейха Зайда, Абу-Даби",
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: three,
  },
];

export default function ClassicTravel() {
  return (
    <TravelTemplate
      link={"/blog/classic-travel-page"}
      colorScheme="grey"
      locations={locations}
      sectionTitle="Путешествия"
      sectionDescription="классические, на поездах, самолётах, авто, различные походы..."
    />
  );
}
