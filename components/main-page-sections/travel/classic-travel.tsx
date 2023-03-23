import cs from "classnames";
import TravelTemplate from "../travel-template/travel-template";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";

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
  {
    country: "Шри-Ланка",
    location: "Побережье Индийского океана, Хиккадува",
    description: "1200 километров на скутере по острову Цейлон",
    img: three,
  },

];

export default function ClassicTravel() {
  return <TravelTemplate locations={locations} />;
}
