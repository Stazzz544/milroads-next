import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Emirates() {
  const { title, description, img } = getArticleItems(7);

  //!!!! НУЖНЫ ССЫЛКИ НА ПАРИЖ И ШРИ ЛАНКУ

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Пролог</H>
        <P indent>
          <>
            Путешествие по Объединенным Арабским Эмиратам — это лишь малая часть
            большой поездки. К этому моменту мы с Олей уже посетили
            {
              <P as="span" color="green">
                <A intend="all" href="/blog/france/2018-p-1">
                  Париж
                </A>
              </P>
            }
            проехали на мотороллере
            {
              <P as="span" color="green">
                <A intend="all" href="https://ru.pirates.travel/">
                  тысячу километров по Шри-Ланке
                </A>
              </P>
            }
            и теперь нам предстояло увидеть страну в которой еще несколько
            десятилетий назад не было практически ничего кроме песка, верблюжьих
            караванов и нескольких небольших городков с малоэтажными
            постройками.
          </>
        </P>
        <P>
          Сразу скажу, что к путешествию по Шри-Ланке мы готовились очень
          скрупулезно: заранее отмечали места, рассчитывали расстояния, узнавали
          примерные цены и т.д., поэтому особых «сюрпризов» в пути не возникало,
          хотя корректировки на маршруте присутствовали. А вот к той части
          поездки, когда мы прибывали в Арабские Эмираты — отнеслись крайне
          халатно. Из всего сделанного заранее — поставили на карте несколько
          интересующих нас точек и купили билеты на небоскрёб Бурдж-Халифа по
          интернету.
        </P>
        <H>Прилёт</H>
        <P>
          Наш самолёт приземлился в международном аэропорту Абу-Даби. Мне
          почему-то казалось, что все самолёты прилетают в Дубай, так как мне
          рассказывали, что прямо из аэропорта есть метро в город. Каково же
          было моё удивления, когда на мой вопрос «Где тут у вас вход в метро» —
          на стойке информации мне ответили, что метро тут нет, есть только
          автобусы… Мы вышли из аэропорта на улицу и я включил навигатор…
          оказалось, что аэропорт Абу-Даби находится в 120 км от Дубая и в 20-ти
          км от Абу-Даби)))
        </P>
        <P>
          Радом с аэропортом была автобусная остановка и мы с Олей пошли
          смотреть расписание и маршруты местного транспорта. Как выяснилось —
          автобусы напрямую в Дубай из международного аэропорта Абу-Даби не
          ходят и для того, чтобы туда попасть нужно сначала приехать на
          автобусную станцию в Абу-Даби, а там уже купить билеты на
          междугородний автобус)) Отсюда план выстроился сам собой. Сначала мы
          должны поехать в мечеть шейха Зайда, а после уже добираться до Дубая,
          т.к. билеты на Бурж халифу уже были купены, время посещения по нашим
          билетам было с 17:00 до 18:00. Из за местных особенностей транспортной
          логистики весь маршрут на день составлял почти 400км и выглядел так:
        </P>
        <Img
          description="Маршрут одного дня по Эмиратам"
          src="https://lh3.googleusercontent.com/pw/AMWts8C7-vMNhB7pQdNGCP3pVyAFZq9q-VnzM6okzs8MnMzAil0udx_Mez6jISfPyHVtKnhCg0wA1UbX439eD53tAK5FJU0TQxDxngbKjUI8XN_tq3I8dEmorwpiASVRVJQoeY6ca1y0dFvfPBR9XZYyHuPj=w1045-h734-s-no?authuser=0"
        />
        <P>
          Через 10 минут ожидания автобус наконец-таки приехал. Выглядел он как
          самый типичный ЛИАЗовский автобус, которых по Санкт-Петербургу
          катаются сотни штук.
        </P>
        <P>
          Пока мы ехали к мечети шейха Зайда вокруг была бесконечная стройка в
          каменистой пустыне. Дороги уже введены в эксплуатацию, ровные,
          прямые,рассчитанные на большое количество транспортных средств, но
          пока еще практически пустые. Повсюду стояли малоэтажные особняки за
          большими заборами, но всё это выглядело не живым, потому что
          практически не было зелени. Все тротуары раздолбаны, а горы
          строительного мусора, как бы намекают, что стройка в этих районах еще
          не завершена.
        </P>
        <H>Мечеть шейха Зайда</H>
        <P>
          Когда наш автобус поднялся на очередную развязку местного автобана мы
          с Олей увидели гигантские купола огромной белой мечети. На фоне всего,
          что её окружало она выглядела столь же массивно как и собор Санта
          Мария дель Фьоре во Флоренции. Мы вышли на автобусной остановке прямо
          напротив фасадного входа в мечеть, который смотрит на восток, но как
          выяснилось — действующий вход в неё расположен с северной стороны и
          чтобы туда попасть, нужно пройти от автобусной остановки около
          километра.
        </P>
        <P>Так выглядит восточный вход через который не войти:</P>
        <Img
          description="Восточный вход в мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8A4S8jpN0muLncbu1JtbjNq7BE5BRGvw4rm_-hs9ZjS94_dv7r5Pi_afkXmgQlduBqhLQVNKk6G9WQfGgnM1FUtDAsUec0SUJwchawApRFgmvu2nMqoOgz3MgItNPRoqnXrJ7d0OwQ9fLmkidf8RbR-=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Восточный вход в мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BFQyJOdPiByRWWtdi1iT1AQRHoc3wUCDfcRxOkVQc8dt_b8v7gqANdTEsKfZPzOqIhWoIaS1aJiwPDaLt2B6-Zd7GVLw77PcYxLpv5Cku_PPXGSQlnGw-vY1pqq4SEqLBt5jJCx8FIOSN-S526F052=w1250-h834-s-no?authuser=0"
        />
        <P>А вот вид на северный вход:</P>
        <Img
          description="Северный вход в мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BcDFVHyjvPgeV4B15h6n9GY9T--rPiZI4St_RHEe8BUfaytthKc6iuwtc9eKmy8mIY_41eGxmu-z5hACELiD7G2gVIkm5d30glO-tr6J6ThQcAzslaLTiI1IPud18XHFvT82qv380ZLZH6ELfLZih5=w1250-h777-s-no?authuser=0"
        />
        <Img
          description="Северный вход в мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8C9akslNHH8SBsNtBwlROQFmBptw0bZdPFDInUHANgOs4aw-PQ7nd-e58Y6bI5Fwib4rond2aPbFSz-5ddsU8uEzSAeT6Iw3GinBaML_Qx8nnt5RuGG93aFy9fwFRvukSxbXsMHluJoCiLgt9woy_J4=w1250-h834-s-no?authuser=0"
        />
        <P>
          Вход в мечеть абсолютно бесплатный, но перед тем как туда попасть
          нужно пройти досмотр. Лицам женского пола бесплатно выдаётся
          специальное восточное одеяния с капюшоном, без которой вход на
          территорию запрещён.
        </P>
        <Img
          description="Северный вход в мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8DGnENu9Afr9mTLGQF8nDoA4xdNH-_2xvAaKE44rbzeBgwajB6ZtNVrza5cWhpypwTia0JUqVRoYyEuYPjogOd0OL1l4Newd2EuYyxt0STXR5r2K9kDIS22QWPB7759DXgJhaGCjxZSMqVfrgt2nPT2=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BjHB-FEEaPE7ymCdCXwqig9SzACzKgNT58Lk451DBlnzzEoFjAc9soVUoDq9H2-QVox1Qp6HERrZnNB3PeeJLFtJCNIvYh2CSHDofEEPFEXePNTf9tXoZ6i2yW_UEb7KJnRpYLkqabCDiCMIPHP6ce=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8Az1k04CchiQ254seZhcah0SScxillwzcMLzP4z2Hn5LreQDcYcdmWteh2vxHOorZjY-76RkTk6HCB9N9hndsmTl1pg2WtXBh4ns2OSQX5BUU50TcRcXWQa-a-g8OTM5bF8faJWQVZHckoTewFmDB7t=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8CBJLW_hAmghIj9k2HdHOjXaBlT6uerju6c255SP4w6qWJlGt0qdSAsv9-klU2691c7xrqd_f6Ttqa5tYEvOoblnck1JsMJvMjfk0cVz4xJ2t4ObOjLgBsNhjDnToHMhj7tp40eqmAZEk4wIjCrp1sT=w1250-h834-s-no?authuser=0"
        />
        <P>
          На территории мечети мы оказались около 10 утра. Туристов в это время
          уже было много, но так как внутренние пространства очень большие — то
          народ равномерно растворялся в них и порой, немного подождав,
          удавалось сделать фотографии практически без людей в кадре)
        </P>
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8ByYZWxi1MYaNtvrJRKEqJe2t3q9lfQl46oi-7yao_AjytVw-2ZiDXu99fAk5QUzEeKGIr4M2Z8ynMaNxn2e4DOGZQOGrwcaV6VsMYJMzoRny9EP55CqIfb7lu6Jo9tGi0f4cI40w3RViRo21rYgCS_=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8CYRGLGDd0Ll7z8RubPN4fiUvaUC2F8oUOR3edXk9_p_c7ffcXOUwRHvaIsrx_tDQUZ-wHd2Xw964WJ_cRaBlZtJMs0oZRV4jyAZWS1Dtpuu-ubJADRjsNDlVpCoP9fLRWmcvaiJEJcmgVDQV6RRNll=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8D40NhfznXTboSAYORAyGoX5Lwxh54Bv91P0j78EN5l2RCLa3NAGzDVtkGP8564BQP6J2EhTvQFjyNEENWBArzeMmyVJvugf87R5ilblXzh0DrzSCQiCRuTMILAxQdBFryA9tMhGkj2Vqsvzaw3QzG2=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8CWxo3MYhRX1zfslgYlbNXqtT0DmorZ4LKMYJ1B1qPX3UbBhu4WuwZxvABXXaqtyVq3KKvBTjET73XbgscQOx1usa8d_7Cue669RZbJUWj2rj9pl_33Sn_1NA3KNQ7_o46QecVnI9W-qJveJcA_a3HG=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BIw8W2HGp2UhD32BHqkcW_1QKS4QJnug8oBcAcKK5jDCFS7rwmSLtNNpzBF35G46dNZJf2uTideNQi497daga00BypRPRtM0c88QMvZEwzH3vcDthJF2Hn0QQZlnGN3X5MPAIthFk79JOohIHKGFUI=w1250-h868-s-no?authuser=0"
        />
        <P>
          Сама мечеть выполнена из белого камня, но так как белый цвет легко
          перенимает на себя другие оттенки — во время нашего посещения мечеть
          выглядела золотистой из-за солнца, которое светило под довольно резким
          углом.
        </P>
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8CXTOpyIKfy3Es2PYNG53k9PgkGqq_THroPtgYeN1zhJ5-Pn5z9IdKUzTp7SXfdw88juXSTRE4ah4YXvWtURf6b780DoIltjKfEJpQKpbr-ZVJQ_Fbd5BqKL1m4U1JIX4yBjShHz-L4q4N4n2uHmbi3=w1250-h834-s-no?authuser=0"
        />
        <P>
          Выход на центральный двор мечети перекрыт, маршрут для туристов
          проходит по коридору с колоннами по контуру внутреннего двора. Дальше
          мы попали в главное здание на территории комплекса.
        </P>
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8DdP0RNRBHknCUtfjXUdbWalBAts5GF1s2VnvGBjNRnapyz4o07_6D54TafoON3CunpkTDG0rQtekRdvViw49z-Ca4FhYFq1svHM2_umeCjzeIGUSSNFCfSCtEdf0w0Y_RRv7SY08L-AB8Jg25Lr5iZ=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BavIOyosAA17yDcs8w_F6kDsHMDelJCLsmdGsORRgOU1eifCjMbUfrYK91ZT10JtnS4l7kNZQcvQJi8ebMNBgoq0VjzB1XhAb-Cb44H6_QZ2N5jtNzQnGUZcXrz_SwNcroLBNlG4zkIsrdpu4kya31=w1250-h834-s-no?authuser=0"
        />
        <P>
          Внутри мечети так же очень просторно. Повсюду много мелких деталей, на
          полу постелены богатые ковры, а к потолку подвешены гигантские люстры.
        </P>
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BYr4McbTCQi0njKkxpUYz1UZQ9WyXHYu26OVsLCpNNBASesLFAg5QYhVjiNZBa0uMCYSbijc9vZBQIzXM07jhmzb8ze-7qCEueYaarZbAZ9ZQoDfDJkD0b41M1wsnWaAvT-ZCGyiPHnb1R3LB5dL4R=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8B3qmcGjVPdc0j5qfColPsyqfdy9wK-fUdolyUqllourVHg4Wp_Mgoi-o587dwXWIlXAsWjgYDH6TTD1y3ZhZsomFBNbNPgRGuNpkDf5U66xc7a6LilMRt-Iwfy4q2ePlZWHElqeT0uYap5IrjC41xH=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8DWZrQb5mxRhPdLYLfDfkt6E9z_byrZDIE4PWgDHD0KP5lijqOo_dyh-rcz3ETVT9-2wVxexeio8-FCP83GExJ43qeZ15tgZb7_18tzmsrkQ40gfGRHnHCM3-QsKo1fOSvRsT4goI19b3cAaj7Bt8o7=w1250-h712-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8CEtjghi9frwBcsTX6DzLM9RwvuxFKZSJ5tzAWYwxSfamYhfP8NRKNSpx1VzJSVFpGdRy8j3ax6ybJDZLPXv6bObr5rHukG2A_xjEBMUSj4ET7X1PWkmshyej5s8LS6nnfEeuMFz4ZSMeJfnVXqInnF=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мечеть шейха Зайда"
          src="https://lh3.googleusercontent.com/pw/AMWts8BXpTqZdIZFz0AVj3R-ZuKQKhEfWvizPok0bG5twxc5iAw3ULWDR2wH9SDGExOP0vJTZkZHv0LOWgVL6MCw7Kux9Sg6GzqfPZPIbGg6Ee7wFSG8YtEFf58ZVBp5iMySJy2G1vNlM-qwgooNgJjHBCVW=w1250-h834-s-no?authuser=0"
        />
        <P>
          Слава этой мечети бежит далеко впереди неё и я готов подтвердить, что
          она не чуть не хуже чем её описывают. Мечеть шейха Зайда абсолютно
          точно нужно определить в верхнюю часть списка тех мест, которую стоит
          посетить в первую очередь по прилёту в Объединённые Арабские Эмираты.
        </P>
        <P>В следующей части я расскажу про супер современный Дубай.</P>
        <P>End...</P>
      </PageWrapper>
    </>
  );
}
