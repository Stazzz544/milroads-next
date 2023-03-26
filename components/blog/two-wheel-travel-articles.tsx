import cs from "classnames";
import Card from "../shared/card/card";
import { SlideUp } from "../shared/slide-up/slide-up";

export default function TwoWheelTravelArticles() {
  return (
    <div>
      <SlideUp>
        <Card country={""} location={""} description={""} img={undefined} />
      </SlideUp>
    </div>
  );
}
