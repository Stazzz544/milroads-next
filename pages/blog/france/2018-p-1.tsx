import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function FranceParis2018() {
  const { title, description, img } = getArticleItems(9);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Пролог</H>
        <P>
          Этот отчет является частью насыщенной поездки из четырех стран:
          Франции, Шри-Ланки, ОАЭ и Голландии. Для быстрой навигации между
          странами в этой поездки можно воспользоваться ссылками ниже:
        </P>

        <List
          title="Перейти к отчету по:"
          listLinksItems={[
            {
              href: "/blog/sri-lanka/2018-p-1",
              text: "Шри-Ланке",
              color: "green",
            },
            {
              href: "/blog/emirates/2018-p-1",
              text: "ОАЭ",
              color: "green",
            },
            { href: "/blog/holland/2018", text: "Голландии", color: "green" },
          ]}
        />
        <H>Начало</H>
        <P>
          Эта поездка была спланирована довольно быстро, на проработку всего
          маршрута было затрачено не более десяти дней. Основной целью поездки
          была Шри-Ланка. Именно по этому запросу я искал авиабилеты на
          Авиасэйлсе и Скайсканере. В процессе поиска было предложено несколько
          хороших вариантов, но наиболее интересными мне показались билеты со
          стыковками в Париже на сутки, десятью днями в Шри-Ланке, полным днём в
          ОАЭ и 6-ю часами в Амстердаме. Все билеты вышли около 36000 в оба
          конца на одного человека (02.2018г).
        </P>
        <H>Париж</H>
        <P>
          До этой поездки в Париже я бывал уже дважды, оба раза проездом, на
          пару-тройку часов. Впервые я увидел этот город в далёков 2010 году.
          Наш клуб военно-исторической реконструкции «Княжеская дружина»
          пригласили выступить в старинном городке Динан, который находится в
          500км западнее Парижа. Это была моя первая поездка за границу. В тот
          раз я»галопом» успел посмотреть Нотр-Дам де Пари и подняться на
          Эйфелеву башню, чтобы увидеть Париж с высоты. Второй раз мне довелось
          оказаться здесь в 2012 году в составе сёрф группы. Основной целью той
          поездки было посещения мест для занятий сёрфингом неподалёку от города
          Биарриц. Оба раза у меня не было возможности как следует прогуляться
          по городу, а самое главное — тогда у меня не было как хорошей
          фототехники, так и навыков фотографии))
        </P>
        <P>
          Проработкой маршрута в Париже занималась Оля, за что ей огромное
          спасибо! Я же просто фотографировал и проникался духом легендарного
          города.
        </P>
        <P>
          Наш самолёт прилетал в Аэропорт Charles De Gaulle в 11:40 по местному
          времени. От аэропорта до центра города можно добраться на пригородном
          метро, в простонародье — электричка. Обозначаются остановки такого
          транспорта буквами RER. Поезд идёт из аэропорта и следует прямо в
          центр города на крупную пересадочную станцию. Оттуда, не выходя из
          туннеля можно ловко пересесть на городское метро и оказаться в любой
          точке Парижа, потому что тут всё утыкано станциями метрополитена. Как
          я уже писал ранее на Париж у нас был один полный день, поэтому
          прогулка была спланирована максимально сжато,но при этом насыщена
          интересными местами, план нашего перемещения по городу выкладываю
          ниже.
        </P>
        <Img
          description="Маршрут по Парижу"
          src="https://lh3.googleusercontent.com/pw/AMWts8CbMZfEy34G3Ij1rO1L1fFXyVjxBH-OUyJ1ccytEsYatZqVVSm7xW_cBVQ5fYIp5nw03rxtL2m4bkVRqYisquj30KNgPIK647M2maoTYY-cXzlalxCPhoDO66lKq4j1w8BbseqhBWboD3-XjF_tij9Z=w1033-h651-s-no?authuser=0"
        />
        <P>
          Началась наша прогулка от станции метро Трокадеро, рядом с
          одноименными садами, откуда открывается прекрасная панорама на
          Эйфелеву башню. Это одна из лучших точек обзора главного символа
          Парижа и Франции в целом.
        </P>
        <Img
          description="Эйфелева башня с обзорной площадки садов Трокадеро"
          src="https://lh3.googleusercontent.com/pw/AMWts8AkEgELuMinIfoVV-9j5a_7r_Li_xB77DCamit9WqZnaplcGIQuShpjWCopHo54fZSEO3DBJH3jXLId_nBZz57G3rGbfINgZrSAaDBgczGLiMtW9vxtG6tmUnox93qUkCu1NDIfGzKQCd8hwi_ce03A=w1250-h834-s-no?authuser=0"
        />
        <P>
          Буквально за 2 дня до нашего приезда Париж завалило снегом, в связи с
          чем Эйфелева башня оказалась закрыта для посещения, несмотря на то,
          что в этот день светило солнце и воздух прогрелся до +5 градусов….
          Впрочем и снега практически не осталось)))
        </P>
        <Img
          description="Остатки снегопада из-за которого закрыли Эйфелеву башню"
          src="https://lh3.googleusercontent.com/pw/AMWts8D-Wh0cavcllBIv04R1-t0fx7EAl9rHfATCnpXmr1OsC4kk9wmECPSxk70n5OtNtwVewG22zbwQOs35ib_nRV7HojL6oC_XJQsq5bJSxxGgqK00dOZJfyMshKO1bV-BODv7sSYqKQhfY2uz0e8uVpdk=w1250-h808-s-no?authuser=0"
        />
        <P>
          От садов Трокадеро мы двинулись в сторону башни. Туристов в этом месте
          как всегда было очень много, все недоумевали от того, что их не
          пускали на верхотуру, а охранники на входе только разводили руками и
          говорили, что может быть завтра всё заработает…
        </P>
        <Img
          description="Эйфелева башня"
          src="https://lh3.googleusercontent.com/pw/AMWts8AUpFDCfyucjUOaLz9OXz3Nq0gXgvqTeI_5XanaX5lNQ0cAGCqkxiS1aUYyQXmuG9134mYSyhFNmYCvGYGqHw822jFLfY8T5M5plLxyyi9DQcHuilzAMaYLiQwmIQGWU_dfhY8UGVmPVl5aA20oPPug=w1250-h834-s-no?authuser=0"
        />
        <P>
          Эйфелева башня не единственная обзорная точка в Париже. Не менее
          интересный вид открывается с небоскрёба Монпарнас, который находится в
          шаговой доступности от башни, но главный плюс Монпарнаса в том, что с
          него можно рассмотреть не только весь город, но и саму Эйфелеву башню
          с интересного ракурса и ощутить масштабы знаменитой стройки конца
          19-го века!
        </P>

        <P>
          По пути к Монпарнасу мы посетили еще несколько достопримечательностей,
          коими буквально утыкан весь Париж)) Первой точкой интереса на нашем
          пути была Стена мира. Монумент был торжественно установлен в начале
          XXI века, он представляет собой две соединенные стеклянных стены, на
          которых слово «мир» написано на 49 языках с использованием 18
          алфавитов.
        </P>
        <Img
          description="Эйфелева башня"
          src="https://lh3.googleusercontent.com/pw/AMWts8BVcxUVnRgc6XOKTvD903krUnWPNqOK_PHR0CKpccBN6mKnfguaDER308Lh1ycKuKhDzMuDr5L0xf4kwAl5Gn37ZhAUV9fn_8U60adt9d_qSQYyZYWrIPZWM2YAso50sHZsY2yZ-qqkydF_DhjlvluG=w1250-h834-s-no?authuser=0"
        />
        <P>
          Далее, прогулявшись по проспекту Турвиль мы вышли к знаменитому
          Дому(Дворцу) инвалидов. Это здание можно разглядеть с разных концов
          города благодаря очень красивому куполу с золотой обивкой.
        </P>
        <Img
          description="Дом(Дворец) инвалидов"
          src="https://lh3.googleusercontent.com/pw/AMWts8BosnoefEw-FYRToRswamb3z5p1DERRW7uSL6GYMiNJwGc97qHyZAaWeA8K68ZKOnSTc5YKdeTxsRvcLxeBRlAugN7tah-ReAR92W4kPqUEESlU3FHRPdI2R3JzM4Sweujsx6fdKznfuXaMbXikal9_=w1250-h834-s-no?authuser=0"
        />
        <P>
          В 1670 году король Франции Людовик XIV принял решение построить
          богадельню для увечных и состарившихся солдат. Работы велись с марта
          1671 по февраль 1677 года, что довольно быстро, а первые пенсионеры
          заселились в октябре 1674 года. Изначально в Доме Инвалидов
          предполагалось разместить 6000 ветеранов, но после перепланировки их
          число уменьшилось до 4000. Википедия(с)
        </P>
        <P>
          В Доме инвалидов похоронен Наполеон Бонапарт и другие известные
          военные разных эпох.
        </P>
        <Img
          description="Дом(Дворец) инвалидов"
          src="https://lh3.googleusercontent.com/pw/AMWts8DOpgghk4YAKcFtyv5fCZ1KKu390D_6k4FdA3cG1_YsVulB22FCNVy3dotAtcs8NVMfJFnbKjyL258G0lkmfRstLE7jTJqJf07xk8n0kbnrk_gqVnrZmQqm08kZszJ-cZKdrqr8Kh_wY54pdnyN5CF9=w1250-h834-s-no?authuser=0"
        />
        <P>
          От Дома(Дворца) инвалидов мы продолжили наш путь к Башне Монпарнас по
          бульвару Энвалид. Через несколько минут мы дошли до церкви святого
          Франциска Ксавьера. Кстати на заднем плане фотографии(в левом, нижнем
          углу) можно разглядеть небоскрёб Монпарнас.
        </P>
        <Img
          description="Церковь святого Франциска Ксавьера"
          src="https://lh3.googleusercontent.com/pw/AMWts8DndK6nEFZ-N95oNFNj2-zbV6AauZ_th74xkw2Ni24i8Rt3KnhBrB-PUf09Nd0e322pozmp0FD6dH6aOL6nQIs1VlYSDJipOlgqIY41id56uD5aXL0mq62c_vceTARJVQWWu1x1mKiD_ITd6A76jifb=w1250-h834-s-no?authuser=0"
        />
        <P>И наконец…..))</P>
        <Img
          description="Башня Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8DASHUa1wiGO6GgRNAf9p7_DyD9ofZzIqqckTdquw-7Y3-xHUQYY3xUxU2AguQNZSTEoP6seltsejblltQZ7XwgAYa-3LDoH-me1o5-crKv-f2iAQuVLWrbGxyb9O49gw8IUUI-dhow6nivgOCrFMpR=w1250-h834-s-no?authuser=0"
        />
        <P>
          На удивление очередь за билетами оказалась не большой, да и двигалась
          она довольно быстро. Билеты на фервать 2018 года стоили по 17 евро за
          1 взрослого человека, что дешевле, чем билеты на Эйфелеву башню.
          Спустя примерно 20 минут томления в очереди мы наконец-то купили
          билеты и поднялись на крышу!
        </P>
        <Img
          description="Башня Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8AqNG0dfDzdQXkhEe5c5ELAyQqxPID4kzJn1BhZ52AziBWszsx4O3ldnYmU0R8Kv0ljGoYNN_IKJ0s4E2rz3nqaNz4Nsuv8GzxqphBynKduK7kxWTiNjKm-zD8kiwv3Y6W1RaIktuBY4dYtJYiish9E=w1250-h834-s-no?authuser=0"
        />
        <P>
          С просторной площадки на крыше здания открывается великолепный вид в
          любою сторону Парижа. Для безопасности установлены стеклянные заслоны,
          они так же защищают от ветра, который на верху неизбежно очень сильный
          и холодный, но проектировщики подумали и о фотографах и сделали
          специальные технологические прорези в этих заслонах, для того, чтобы
          фотографии получились четкими и без бликов от стёкл, так что
          наслаждаться видами города можно с полным комфортом. Кстати наверху
          есть скамейки и если Вы устали в очереди — то сможете дать ногам
          отдохнуть.
        </P>
        <Img
          description="Вид с башни Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8DiyOd2O4kBZcQRsOvaQ0o4WU9ThOyKljB_HqW-je-1TIYKvP48Hmb23EnbNm26vtSYW0Xg6IZXKFru30p5w8gl8JLV1F8v84xOd-D-fsksfxlPzjc9F_e2lhVhhymhyNIF69wG5u0a6_rfSXdublk9=w1250-h801-s-no?authuser=0"
        />
        <P>Длинное здание в верхней части фотографии это знаменитый Лувр.</P>
        <Img
          description="Вид с башни Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8AHjcyAiuNU8kyxUpCopehUeM_DAJ4hjQa73E1_rmRqsdvdwqOre2Im_P3SrMghk-V39FDA9RBdvysUaBLkMo0VG6ngxkI6XNdnRfk7K97ocTut9xIjh80MoDqagLfACc_FiyT_ZvRKdAft-hro6XOp=w1250-h805-s-no?authuser=0"
        />
        <P>
          А тут можно найти Сен-Сюльпис, Нотр-Дам де Пари и Люксембургский сад.
        </P>
        <Img
          description="Вид с башни Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8DGKTaqsHjaE22Wzs3imtUf19stXI1EQ1s82BRhoIJI9YzXxEbMNsLmc8QzpGSFfPUzQ3JVnrL5rokt-wriDsnR_tpFp12HA1rj0wZJtheDFMPKOYTxihVXymPoUZPVd4CqhE0EsSC-D7m4NTtq7ZBZ=w1250-h779-s-no?authuser=0"
        />
        <P>А это вокзал Монпарнас.</P>
        <Img
          description="Вид с башни Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8B1mN9FuItP1m90poTf7m-ofO8fPnu8_RK92Kflo_RUelZZOwqOx-nSX2mfWvkjs7DF_At-QiBYV_HSB9nUa1DsUxAIxCqKpSvLGexe1NdiNbuJ6yofs47tn_47c494JRvCG9Fy1VAYwwlGFm5fgOMG=w1250-h834-s-no?authuser=0"
        />
        <P>
          …и просто часть города, которая особо ничем не выделяется, по крайней
          мере на первый взгляд))
        </P>
        <Img
          description="Вид с башни Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8B3l3tUMnUm65yybUfeaK7zqxB6mr0XG0Lu-vjCumOpnooxqmC3Nh4w3P4OZXpbpIi4u0upn1DgobtjiVQGCVrpAIrk_XkAUtgTY5hQPbohjiiOH7Gxca1IrbHElm2ZQ0ReyVlB_3ZVP5wZMCgv2I2E=w1250-h834-s-no?authuser=0"
        />
        <P>
          Дальше мы отправились в сторону Нотр-Дам де Пари зацепив по дороге еще
          несколько интересных мест…
        </P>
        <Img
          description="Башня Монпарнас"
          src="https://lh3.googleusercontent.com/pw/AMWts8B0adt3xTVuVnimxT7PPA3ii_qaRL58YzYjwuwnWyf6MZF4ev-soPQPavQ-9BkHbl9IiEsdEWip1S8Pti54i8R6eMbG8sP1tCHTlk98VltOAW0zuEpS74Mw9W-qLsSxWEx5f7WFcSO2AYf1LRUH6zoq=w1250-h834-s-no?authuser=0"
        />
        <P>
          Церковь Сен-Сюльпис, которую мы видели стоя на крыше Монпарнаса с
          улицы выглядит иначе. Необычная форма здания притягивает к себе
          взгляд, оно одно временно выглядит и недостроенным и завершенным.
        </P>
        <Img
          description="Церковь Сен-Сюльпис"
          src="https://lh3.googleusercontent.com/pw/AMWts8AODlDhDhfrTUnrLXuGiwB71xUahlSSRJsn1za0-L1iaGNanZGak8KpHTgMzTVOCxJMPSRnPItxk2LMF5iebH3NKlBe89D1Nz5p-mOk0NDi5G2SkqgJM-tASY_ZXu3DfFFcOMb8fvcJyEbBq1FaYS8b=w1250-h834-s-no?authuser=0"
        />
        <P>
          Спустя еще несколько сотен метров мы вышли к Фонтану Сен-Мишель. Сам
          фонтан очень красивый, но сфотографировать его хорошо у меня не
          получилось и я не стану выкладывать его фотографию.
        </P>
        <P>
          Напротив фонтана была какая-то забастовка или протест. Люди держали
          плакаты, и что-то вещали через мегафон.
        </P>
        <Img
          description="Митинг в Париже"
          src="https://lh3.googleusercontent.com/pw/AMWts8AuiNfNQ7r_nOBxvUO_1xEkXdulBZRbuqO6-GdD0TVZebTUoPhz-lWE485bCmfp9_hCZvKNYVvug1-IPIBpE_KdJnm7UsDA-sOd06TMJbWzjxdsCwH3x-nMdR6JwoJBhXz4LTa5TbzOVBNVQhufu3Kg=w1250-h834-s-no?authuser=0"
        />
        <P>
          По пути к Нотр-Даму нам встречалось очень много маленьких магазинов и
          кафе, которые очень колоритно вписываются в городскую архитектуру
          дополняя собой и без того красивый город.
        </P>
        <Img
          description="Традиционный фасад кафе в ПарижеS"
          src="https://lh3.googleusercontent.com/pw/AMWts8CFaOqXzeNEnGTglVxuZbOP9Ov0Z0BY51H9n5L88PzsPgRRwYwdA3Ij92xldZSFhkLh6hYckWriJs_4SrcJwHdTZuIu1RYGat3LaInP8NbPRrfoW_V7j_b85GPoEUYbcvKuIKFFMwbwSLj0azOVx3SK=w1250-h897-s-no?authuser=0"
        />
        <P>
          По мосту Сен-Мишель мы попали на остров Сите, где находится еще один
          символ Парижа — собор Парижской Богоматери или Нотр-Дам де Пари.
        </P>
        <Img
          description="Нотр-Дам де Пари"
          src="https://lh3.googleusercontent.com/pw/AMWts8C6DPlAolDkiLQhAAklcxA0XXlUavStrZu9Qvutqv_Gp4NNiEnJ8ZHTA2bTZrskIUHeB_N4EG-XKG4StE5LaNQFEM6BbtCaZSJxGajKbxnxOVzLHSdUQvEKoHX3H-0EMzoO6RKGrR_K4XQJ94ZyLi34=w1250-h805-s-no?authuser=0"
        />
        <P>
          Но сначала бульвар Пале вывел нас к дворцу Правосудия. Этот комплекс
          настолько огромный, что занимает треть острова Сите. А еще у него
          очень красивая ограда.
        </P>
        <Img
          description="Дворец правосудия"
          src="https://lh3.googleusercontent.com/pw/AMWts8BhzOusS0vcZVeSPutXSxYy6K7-VKOr5EpImUpRnmWG-tQb08Ng3ToNhP5aBcvH3SwY4ACM7gKeJHVgEavcepK4jNcH7ciEJ40WsmqQ22EGL37ML76no3mmvX5Pg4OsPdfqwlEVbisaQQxsgOhLINV3=w1250-h831-s-no?authuser=0"
        />
        <P>
          От дворца правосудия до Нотр-Дама не более двух минут пути и вот уже
          очень скоро перед нами появился архитектурный шедевр эпохи
          средневековья!
        </P>
        <Img
          description="Нотр-Дам де Пари"
          src="https://lh3.googleusercontent.com/pw/AMWts8CzludfrsTtTb0ENSTSXeL0DYLXcJn6ZwOpSKIIGcYYHtYl5lj_Rp3qVZ2OzswoA-dOV_9XxpCHQiwo3oBtGnlKe0TUeg5m925wYgXa7Z16TsUKSPTXJQ5_sFgUdvuWxt1RHNBtuKugMgpBwPfcbcCn=w1250-h834-s-no?authuser=0"
        />
        <P>
          С трудом верится, что такое сложно здание строили в период с 1163—1345
          год. Фасад здания украшен бесчисленным количеством каменных фигур
          людей, горгулий и разными сложными геометрическими узорами. Вход в
          собор бесплатный, поэтому любой желающий может зайти внутрь ,
          почувствовать дух средневековья и насладится искусно выполненными
          витражами.
        </P>
        <Img
          description="Нотр-Дам де Пари"
          src="https://lh3.googleusercontent.com/pw/AMWts8AbZsm9gmJAqDpzn9FxzJn9IWlrLjpv96gEGs_H8LMKPaLgzyqcB0NojiKUZhWPPKRRHnSJlrkauiCUR3xi1cXu1M4R6MK5fCQywtuIY51N-IpIWQl47j3cnsJFdUE6LDe31HumA7JQESkjzkGzo_ls=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Нотр-Дам де Пари"
          src="https://lh3.googleusercontent.com/pw/AMWts8C9cxY2mCJAR2HGYvHYerYsfDcFnqO-BCc6CiHBDQgdp-2fcQmN1ggi-5AgMSGbg9wa8nCQ1jpHn0XVRuPnRd46J6BYQtC7GnHv07pcuRiqdGFXUABJ69pyysk4S50EG3_HotQGIarYJx2Kwnpn3Cgq=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Нотр-Дам де Пари"
          src="https://lh3.googleusercontent.com/pw/AMWts8BNRTKuno8yywdXSWpXheT-uUhTj4qmULp1Xrl-hIA1rTaMWv1Dobmj4i8Q8D7Twzajb3LykjkHelaM8DbJTMEIMfdg5cEtDhVZD2L3qn_WiDXfnuHRNZbzIUBN5cveT2wPEQUmHKAv-vAr72qyGYvn=w1250-h834-s-no?authuser=0"
        />
        <P>
          Собор действующий, поэтому в нём регулярно проводятся службы. Если
          дождаться начала богослужения, то можно в полной мере прочувствовать
          дух этого места, потому что акустика тут просто непередаваемая!
          Отдохнув на лавочках для прихожан и послушав пение мы решили
          продолжить нашу прогулку по городу. Обойдя собор по кругу мы
          отправились к ближайшей станции метро,зацепив по дороге еще несколько
          небольших достопримечательностей.
        </P>
        <Img
          description="Нотр-Дам де Пари"
          src="https://lh3.googleusercontent.com/pw/AMWts8DLXru_hhbjN-whOhfZ9Ll5y5xcms7TvDNbUpk4Mx6XyU_t749SB3kk_P2fnB7LCssJeMJEkLTqNepajd4wefPiObhhot4r_5s0u7nKWvtTm1Ys1nBMpKCRC-lvJaFz-BOoAK2c9fnayGPXSullDhR2=w1250-h813-s-no?authuser=0"
        />
        <Img
          description="По пути к Hôtel de Ville"
          src="https://lh3.googleusercontent.com/pw/AMWts8A-rw8u0DoifiltRKzRh6K77qLjhKbdccGuMqhyLLv1ksiYOGTeZ9gVb5-K3GxzKC0plB6uEJoNp8n8a1JuZt2JFs7yLH3oMS9ZkdgG0DTHXeIanQ4uOOz-__TgEKR9MyZmo3balvDsqvINpLzIXKxy=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Hôtel de Ville"
          src="https://lh3.googleusercontent.com/pw/AMWts8AihpWRvxigfxeg_tBFKhEpF_JPgIyrO9vM519MNoYvLNEvb06c_Gw1KomAamH9G8G81PiyqDB7FUc-UT4As6xLKrnaX2iBfCddf_oJxxOO07C4B_jmzPGL8uXuzoEA_aGp5UIR-PoOpeaQKTU4oXja=w1250-h834-s-no?authuser=0"
        />
        <P>
          Следующим местом по нашему распорядку дня был Мулен-Руж и Монмартр, но
          идти пешком несколько километров нам было лень и мы воспользовались
          метро. Станция Бланш находится прямо напротив знаменитого кабаре Мулен
          Руж. Пока мы ехали — окончательно стемнело, но это даже хорошо,
          потому, что Мулен Руж после захода солнца выглядит гораздо более
          атмосферным чем днём!
        </P>
        <P>
          Экскурс в историю: в Мулен Руж собирались не только представители
          среднего класса, но и аристократы, люди искусства (Пикассо, Оскар
          Уайльд) и даже члены королевских семей, например, принц Уэльский.
          Главной достопримечательностью заведения был знаменитый канкан
          (с)Википедия
        </P>
        <Img
          description="Мулен Руж"
          src="https://lh3.googleusercontent.com/pw/AMWts8BbTGsLrkEShnHmZcJwUASmzCbe921Q_Mk-NvjDaJ5CHlwZ73amP287DIq9nTyYIxvfcdzaX0cxZF8RdiByABYQA7GnY8XVk9m-gngWCyI19LAJtEqiuPl6Tg4g_tN98ZjLj8YhVs8GmX6rIJHh0Ym6=w1250-h847-s-no?authuser=0"
        />
        <P>
          Завершающим аккордом культурной прогулки по Парижу стал подъём на
          130-ти метровый холм — Монмартр. По пути мы хотели посмотреть
          мини-достопримечательность -«Стену любви», но она находится во дворе,
          а двор был закрыт, видимо было уже поздно.
        </P>
        <P>
          На вершине Монмартра находится базилика Сакре-Лёр, что в переводе
          означает базилика Святого Сердца — это католический храм построенный в
          конце 19-го — начале 20 века.
        </P>
        <Img
          description="Сакре-Лёр, Монмартр"
          src="https://lh3.googleusercontent.com/pw/AMWts8AhLoSCNM9F1mNGEfTIsOSePbt2tfVOcbKlX2RjqfCnruLbWl3AmOcvEvHsbU87aZL8tx0v1odax6naky2BEKmmOck_rTzbec-XFD8VWJRls600aPhiB98HPCFGt8Krb8VzLlru7BwK6OwNDtbdtzy8=w1250-h810-s-no?authuser=0"
        />
        <P>
          Храм был открыт и мы не упустив момента решили зайти, чтобы посмотреть
          его изнутри и немного погреться.
        </P>
        <P>
          Время шло и нужно было спешить к метро, т.к. наш отельчик находился не
          далеко от аэропорта, а это около 50 минут пути. Плюс ко всему он
          находится в километре от станции, но невнимательность сыграла с нами
          злую шутку и вместо одного километра нам пришлось идти три с
          половиной… Причем идти нужно было под мелким и противным ледяным
          дождём по пустынным проулкам складских зон. А всё из-за того,что мы не
          смогли найти подземный переход для преодоления ЖД путей, который
          находился сразу слева от выхода со станции)) Утром мы крайне сильно
          удивились как всё было просто и как сильно мы сами себе всё
          усложнили)))
        </P>
        <P>
          В завершении выкладываю фотографию ночного Парижа с высоты холма
          Монмартр))
        </P>
        <Img
          description="Вид с Монмартра на ночной Париж"
          src="https://lh3.googleusercontent.com/pw/AMWts8BxeJ_0dEHfli7FnHjTb4i9JeEFbHnj402M6akfwvW75oYmZ48uZc8qUF5wc1veTNAk7jVUT555mA89IuBZFYZ0m_-2V4DtAxZmbS5z0LsBZxLFhPuqeMQ0x1e7IjeI2FdDmQ0rP9Rp63aS0zI5eSmI=w1250-h755-s-no?authuser=0"
        />
        <P>
          Резюмируя наш опыт хочется сказать, что в Париж всё же лучше приезжать
          не зимой)) , но если очень хочется — то и в феврале можно устроить
          достойную прогулку по самому романтичному городу в мире =)
        </P>
        <P>End…</P>
      </PageWrapper>
    </>
  );
}
