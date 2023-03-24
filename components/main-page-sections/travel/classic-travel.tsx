import cs from "classnames";
import TravelTemplate from "../travel-template/travel-template";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";

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
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: two,
  },
  {
    country: "Шри-Ланка",
    location: "Карелия, Ладожское озеро",
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: three,
  },
  {
    country: "ОАЭ",
    location: "Мечеть шейха Зайда, Абу-Даби",
    description: "Зимний двухдневный поход вдоль побережья Ладожского озера",
    img: four,
  },
];

export default function ClassicTravel() {
  return <TravelTemplate locations={locations} />;
}
