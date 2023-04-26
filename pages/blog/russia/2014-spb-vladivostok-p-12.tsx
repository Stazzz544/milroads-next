import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SpbVladivistok12() {
  const { title, description, img } = getArticleItems(57);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <List
          listItems={["1100км", "3 машины", "+5 часов относительно Москвы"]}
        ></List>
        <P>
          Мы вышли из дома, где нас приютили, в 8 утра и отправились на
          юго-западный выезд из города. Для того, чтобы попасть на более-менее
          приличное место для автостопа, недалеко от трассы, нам необходимо было
          проехать на трёх автобусах. Пересев во второй автобус мы совершенно
          случайно встретили парня с девушкой с большими туристическими
          рюкзаками. Зовут их Оля и Дима.
        </P>
        <P>
          {" "}
          Пообщавшись с ними — оказалось, что они так же, как и мы, совершают
          путешествие автостопом во Владивосток. И тут я вспомнил, что читал о
          них в группе автостопа ещё за неделю до нашего старта. Дальше
          выяснилось, что в Казани мы жили у одной и той же девушке — Айсулу, с
          разницей в несколько дней, и едем в Иркутск вместе к Ивану)))
        </P>
        <P>
          {" "}
          Доехав до трассы Я и Вера решили дать ребятам уехать первыми, так как
          автостопить в четвёртом не очень перспективная затея{" "}
        </P>
        <P>
          {" "}
          Пройдя вперёд около километра мы заняли позицию, через 15 минут
          увидели как ребята проехали мимо нас на , а через ещё минут 10 и мы
          поймали Митсубиси и промчались на ней 100 километров, обогнав наших
          коллег.
        </P>
        <P>
          {" "}
          Следующую машину мы ловили не далеко от города Канск. Через минут 10
          остановилась пассажирская газель Красноярск-Канск, да-да, платная
          газель местного сообщения открыв дверь , водитель сходу сказал
          :»запрыгивайте» зайдя в салон мы снова встретили этих же ребят)){" "}
        </P>
        <P>
          Проехав 100 км и выйдя на заправке у Канска ребята уступили нам
          позицию и пошли вперёд…
        </P>
        <Img
          description="Автостопим в Иркутск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUbemjkxMSAWU6yZ6cG9_z4L1JMGKJOeCEq62zV3Zjw6wH3ZRg0HtL8lHBK1IP8l4yd-njjD1maz6D376BmmwJ_Wn1X2M7ft-lgyDLyi4Q6qdtMqVulibhb6mqkhTYeCYXbjA9PX19IVaBHZ4fRs7Dz=w600-h450-s-no?authuser=0"
        />
        <Img
          description="Автостопим в Иркутск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVAalFBuikqd6bovU26GIUy_MoLzje9qhXWY5tb-a1nIOkHjaWNAVXaIu6G87v4oa5mV1NZZlPKR1aIAj9K6Zfg8L_8tq-cvmBnDgFBg5UUBsHhXCWJ9vugG0UgYzr2DgANAatgxW4aeb1Vin9XeyBs=w600-h450-s-no?authuser=0"
        />
        <P>
          {" "}
          Трафик был хороший, но машины пролетали мимо и только спустя пол часа
          остановилась фура у которой в прицепе были новенькие Ниссаны на
          продажу{" "}
        </P>
        <P>
          Проехав около 500м мы увидели наших ребят голосовавших на обочине и я
          наспех рассказал историю описанную выше, на что водитель предложил
          подобрать их и посадить в одну из машин, которую он вёз в автсалон)))
          Я позвонил ребятам по телефону и сообщил им об этой возможности, они с
          радостью согласились и бежали с рюкзаками на плечах около 1.5 км до
          того места где остановилась наша фура. Первую часть пути в новом
          Ниссанчике ехали Вера и Дима, вторую часть я и Оля а третью часть пути
          мы все вместе ехали в кабине, в пятером, т.к. в машинах, стоящих в
          прицепе, ночью было холодновато.
        </P>
        <P>
          Ночью мы остановились поесть в придорожном кафе и оставили 10 рублей в
          напоминание о нас.
        </P>
        <Img
          description="Автостопим в Иркутск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUvczsqs55hh9q3oeGdV6hIoCr_1AbC0bYbszwTnRHONFudmGV0onmO5fAGetpgrRDxb1znT5aegi-OBskSnFJziwCoZHT7_ndOAL0K1JyNOTRipXlSw8nzgpJ4kNTDCno_zc0i4cPN833776YbJOmz=w600-h450-s-no?authuser=0"
        />
        <Img
          description="Автостопим в Иркутск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVwUEOfaaXUpYuEWdE0ruZP_kztwfk5_ugiePyZdS3pippuYO8RQ4e6ME9JOkTAMa8fPJs59ybGozydock86WAjVBbPhhsIfXSJcJIz_TAX1RjXHqFcDBxfrDO1wnIMn9X8lwPeUGPJghhilH6W0e-r=w600-h450-s-no?authuser=0"
        />
        <P>
          {" "}
          Добрались в Иркутск мы только под утро и сразу же пошли на вписку,
          чтобы отоспаться с долгой и утомительной поездки.
        </P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
