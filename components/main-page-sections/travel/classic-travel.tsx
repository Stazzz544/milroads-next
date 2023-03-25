import cs from "classnames";
import TravelTemplate from "./travel-template/travel-template";
import one from "./assets/classic-travel/1.jpg";
import two from "./assets/classic-travel/2.jpg";
import three from "./assets/classic-travel/3.jpg";
import four from "./assets/classic-travel/4.jpg";

const locations = [
  {
    country: "Россия",
    location: "Карелия, Ладожское озеро",
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: one,
  },
  {
    country: "Индия",
    location: "Агра-форт, город Агра",
    description: "Путешествие по Индии на поездах",
    img: two,
  },
  // {
  //   country: "Шри-Ланка",
  //   location: "Карелия, Ладожское озеро",
  //   description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
  //   img: three,
  // },
  {
    country: "ОАЭ",
    location: "Мечеть шейха Зайда, Абу-Даби",
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: four,
  },
];

export default function ClassicTravel() {
  return (
    <TravelTemplate
      colorScheme="grey"
      locations={locations}
      sectionTitle="Путешествия"
      sectionDescription="классические, на поездах, самолётах, авто, различные походы..."
    />
  );
}
