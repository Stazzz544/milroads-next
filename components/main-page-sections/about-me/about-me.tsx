import cs from "classnames";
import SectionElement from "./section-element/section-element";
import avatar from "../../../public/avatar/avatar.jpg";

export default function AboutMe() {
  return (
    <>
      <SectionElement
        img={avatar}
        title="Обо мне"
        description={`Всем привет! Меня зовут Стас, я путешественник и фотограф.\n
        В данный момент проживаю в г. Санкт-Петербурге.\n\nПутешествия для меня  — это способ расширить свои границы, не только географические, но и внутренние.\n\nПутешевствия в любом виде, будь то автостоп, поездка на мотоцикле или велосипеде, поход в горы или просто прогулка на природу с палаткой и едой на костре — это тот контраст, который разделяет обычную рутинную жизнь на главы, как это происходит в книгах. Если в жизни нет путешествий — то книга будет похожа на жёлтые страницы или журнал садовода, а у кого-то на инженерный или бухгалтерский справочник.\n\nКаждый человек, желающий раскрасить свою книгу жизни яркими красками приключений — должен хотя бы несколько раз в год совершать небольшие путешествия, а если есть возможность — чудить по полной!  ;)\n\nПомните! Живём один раз, надо сделать так — чтобы не зря…)`}
      />
    </>
  );
}
