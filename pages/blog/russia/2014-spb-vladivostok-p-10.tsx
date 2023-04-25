import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SpbVladivistok10() {
  const { title, description, img } = getArticleItems(55);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <List listItems={["750км", "2 машины"]}></List>
        <P>
          На рассвете дядя Веры подкинул нас до трассы и уже спустя 10 минут мы
          застопили бабулю и дедулю ехавших в Томск, походу дела они некуда не
          торопились и средняя скорость передвижения составила 60 км в час по
          трассе, ехали мы с ними всего 120 км, так что уже через 2 часа мы
          вылезли из их праворульной Тойоты и продолжили автостоп.
        </P>
        <Img
          description="Автостопим в Красноярск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWkNc3TK6i2n2KEGkALpTvh_RteBW6c7GX0g_tCMSAtBbrZcxHFO87WjwnJXzYWf1tnjMqk5U5s_sy_AXNZBz0YU8QDUWvfdoAw7FIZOviQoLoAGIVaFNpyi5ePx-ep7mcv78JmW-byipjJXGKy8hGv=w600-h450-s-no?authuser=0"
        />
        <P>
          Через 15 минут нас подобрала фура одной известной транспортной
          компании и оказалось, что она едет в Иркутск, а это нам очень на руку,
          ведь эта же дорога проходит через Красноярск. Кстати именно этой фурой
          мы впервые разрушили миф о том, что водители-дальнобойщики крупных
          транспортных компаний не подбирают автостопщиков))
        </P>
        <Img
          description="Автостопим в Красноярск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUOuKi7nUShoaOTiDIiICJrO1z8kMxkZMacCjNQ1xjuleMYO15RczsVORDEvo33uoS2EcDRQEuZJb9LakVFhPg_3oxl23c-7RaDMVdOlZmUo2JUuAK-pjZeGdKHb6O9tX8cYT-riQL-mHTBsE5Mrw0u=w600-h450-s-no?authuser=0"
        />
        <P>
          Так как на улице было довольно жарко, последние 10 дней за бортом было
          +30 и выше мы решили остановиться и искупаться в какой-то речке) Это
          очень освежило и ехать стало гораздо легче). Кстати город Кемерово мы
          проехали не по объездной, а насквозь из за небольшой ошибки
          навигатора))) Можно сказать, что мне удалось мельком посмотреть этот
          город, т.к. проехали мы прямо через центр.
        </P>
        <Img
          description="Автостопим в Красноярск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWHKUUdKe-GmqNsdzouoG0-37LU__ecxvPycYTO8vkXy70u6L3-KrOvGfKV9AG_y3thrgqCn-k84LZxlm_1oeQXLliWmhzWaLZVxxwEqCSrfjkB2Sv03ros8qosGUEVq9irwpImwoE_KGACPhLS3Sfp=w600-h450-s-no?authuser=0"
        />
        <P>
          Добрались мы в Красноярск только к вечеру, там нас встретили наши
          новые знакомые, они же и довезли нас до дома.{" "}
        </P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
