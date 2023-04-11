import Img from "@/components/blog/blog-components/img/img";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function IndiaNaPoezdah2016P2() {
  const { title, description, img } = getArticleItems(25);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P introduction>
          Текст в этом посте написан Ольгой от её же лица, и немного
          отредактирован и дополнен мной (Стасом) =)
        </P>
        <H>Гоа</H>
        <P>
          В завершающей части нашего путешествия мы полетели в жару, к солнцу и
          океану — в ГОА. Действительно, этот штат — это совершенно другая
          Индия. Начитавшись отзывов и комментариев в интернете, мы выбрали для
          проживания отдаленный северный пляж Арамболь. Сразу скажу про то, как
          мы добирались туда и обратно. Прилетев в ГОА, мы не стали ломать
          голову и просто поймали такси, точнее нам как всегда повезло и попался
          частник, мы заплатили ему 1200 р, обычное же такси стоит 1500 р. А вот
          на обратной дороге (немного забегая вперед) мы решили сэкономить и
          поехали на автобусах.
        </P>
        <List
          title="Итого получился следующий маршрут с ценами:"
          disc
          listItems={[
            "Арамболь-Мапуса, час езды, 44р на двоих",
            "Мапуса-Панаджи, полчаса езды, 30р на двоих",
            "Панаджи-ВаскоДаГама, час езды, 74р на двоих.",
            "В общей сложности было потрачено 150 рублей и 3 часа.",
          ]}
        />
        <P>
          Так вот, добравшись вечером до нашего отеля, мы показали хозяину
          письмо в гугл-почте с нашей бронью, этого ему вполне хватило и никаких
          бумаг мы не заполняли. У нас был забронирован самый дешевый вариант
          жилья — хат (hut, хижина). В нашем отеле хаты находились на крыше,
          которая грубо говоря была просто поделена бамбуковыми перегородками на
          номера)) В наличии — кровать с москитной накидкой, столик, 2 стула и
          балкон с прекрасным видом на океан! Понятно дело, что шумоизоляция
          нулевая, но никому из живущих на крыше это не мешало.
        </P>
        <P> Вид с балкона на фото ниже.</P>
        <Img
          description="Свати гест хаус, Арамболь"
          src="https://lh3.googleusercontent.com/pw/AMWts8B5jSpmSEm5Y5zsnC6SceQNfCpPez-tbJQ_hrbcXq9E0nh9XIVeui2H4GCWesSsUHMw1PuvFWtSP6Ypq_PHxqWdJp4JTPri0iLOFrGmvvm3CXjY1925OaoQK7nd0aBaG5bt9yj66mf4vgY__OfrqAPe=w1250-h787-s-no?authuser=0"
        />
        <P>
          Оставив рюкзаки и переодевшись в летние вещи, мы немного изучили
          окрестности, познакомились с двумя русскими парнями из нашего отеля,
          потом накупили целую гору фруктов за 100 рублей, печеньки, колу и ром
          Old Monc (375 мл за 85 рублей), выдохнули и наконец расслабились после
          нашего увлекательного марш-броска по городам северной Индии.
        </P>
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BNfCO8S01Sx2lBfJ7XxU1guPem_diWWrLnF2ESiz-JGMvOILdt4GY3bVKtc2m-7tUgLobXk6_T8tLFCWW2eb9x-UlL7PlKG9jk3toL55T_o9_LgUjKd-2GoymQmGS1ykAHo1IMbIG-g4fwer1lv4n-=w1200-h754-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUYZQ-vdQ3twASh808nzHCJzuv_kuUYTIQaNTuVQ3ab3NMxr-Ip2esXFsKCSwzr9WY59DQ_pM6BqcD1ZCBfuEWjdt93o1n-O7btRXITvSEw7UsEGfRHQnf5a_E5CygjnVdfkJ_DdgNOdE1Zs_3bGNjS=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cnx3bc3SiLwJkcM3SZUfjki-gGQVZGkA9g_NXdga9oCaX5_HzdrGsxrDbZ56XAYp_6RJTIhXMT4_5tso5QgwH8r0wr3PeLwsSmzI4oJSsjs0j5WxN63N0vWyn_Q0LiDoNb6wbOmeuKyNjH8mWDH6a3=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8D0ALTHXzmReEyOK0cXDBusXRPGO_hw77WVwpomoMa7ul7e4wOfPRmWwFAYBFDr18KiTp22HF0fYCs0I4PM9SWUZrnDkUEYwo6Aa8qUeDZA6hYGye8M7hjrP3A8q9JanD5lCD29trTgfPmXMFALsHh2=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DGbDVXKFK2tQaIwSkxb-CDHkoi6Eztw3Yo5j8CCUYuKR9SFmuL1ynUBqAda5F9xfEpPzLe-TgpTTDj0Z-gGHFO8c2TDMpRJ7hoET1hYa2xeCDCNoMdt1wHJUcAwpYXalD-aOt0nVeFRQUQtKj2s64h=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8A8cFP0ujgZAPQ4CjxXQw8el1Pwl6I7X8ttMG8LHXfSSCegAr9MI5S55AJr7XDghHU8Q0a0--00B8TrXfKjIvUFt_xW4ISLCYgATQ1OFOhDaoRCH6NWrbGKUUbrpgXHJXuqOLLJ9nNDY7loAUOGQuvZ=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BOLPOM7iV8yE9wx8ULgEfuiFVnLFk68OrGup5Gn5q9aaD7lDdvuiEC-AhlDqZoetTqwZxRzui2pDc4jON3hwwTacH7LBXdxJsPo8No-WmI3FF8r0tBS_UniMrp8BAKKs2Oliv22KhxHUjldoJKo16S=w1200-h749-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8A2EZpNu1iYZ62B79KTOQ52_3FT6rynqigPRlJzTgbPcB2A_20JjiG3omdhs6k3Kh0HX8OLQ63YZiO9vCNO4a6twTvoFuOOTrxNFbcUKn9SUVilRASxEyZPk6W9SvyZ5F3IPMssCrroz7BfecTF5Ck7=w1200-h813-s-no?authuser=0"
        />
        <Img
          description="Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8A4UCXcRP8GF2b8L74DBxm-vkG2Ig97TKbzhNvHMOKcKe0lAolzVJ2wHcj4o1cRaWEcKhK1hWU1xdv-NvNKTVGQGA7dnISgNYynpe6o0EfEUdryrNRtx0g3YnrM1jWfrFBc_HYCJ7X6Xv9PvFm6Q6qq=w1200-h801-s-no?authuser=0"
        />
        <P>
          На следующий день мы арендовали байк на все 5 дней пребывания в ГОА, у
          нас получилось 1500р и мой загранпаспорт в залог (ксерокопии владельцы
          байков не берут, либо оригинал, либо залог от 100 баксов).
        </P>
        <P>
          Покатавшись немного по Арамболю и привыкнув к управлению, мы поехали
          на один из соседних пляжей, Вагатор, в джус-центр Scarlett. Выбор там
          огромен — и соки, и молочные коктейли, и ласси (лед, молоко, фрукт) и
          фруктовые салатики с мороженым. За 420 рублей мы заказали 9 стаканов
          свежевыжатых соков, еле осилив их и сев обратно на скутер мы хором
          произнесли одну и ту же фразу: «Блииин, как же хреново!»)))) В общем,
          не надо жадничать, хоть это и очень вкусно!
        </P>
        <Img
          description="Соки в Скарлет джус центр, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8A60ST6ycnEmrbNsDHITlJKe3MRKhqrllcH_nh4nvCLBarhJ6REsi_Fr0foOSKa5ycCEueFDkptlVPtCqMXJmjX7s6RvBVkSUiUhZo9QxGfR2zpTiHkDnoYn_gLTzk1zz19HLusojybMBU6jVnmNMv3=w960-h720-s-no?authuser=0"
        />
        <P>
          В один из дней мы поехали на скутере в Форт Чапора. Форт в свое время
          занимал важную стратегическую позицию, так как был построен на хорошо
          просматриваемом во все стороны высоком холме на мысе, рядом с местом
          впадения реки Чапора в море. Еще задолго до прихода португальцев, на
          этом месте стояла древняя крепость. Ориентировочно в 1617 (в некоторых
          источниках — в 1717-м) на месте руин старого сооружения, португальцы
          построили свой форт. В дальнейшем форт несколько раз захватывался, и
          восстанавливался. Окончательно форт был заброшен в 1890-м. В настоящий
          момент сам форт мало чем примечателен — это фактически всего лишь
          окружная крепостная стена с несколькими входами, ограждающая почти
          пустынную площадку в центре. Имеется лишь небольшая стелла посередине.
          Но зато со стен форта открывается отличный вид с одной стороны на
          Морджим, а с другой на Чапору и Вагатор. Уже только ради этого там
          стоит обязательно побывать.
        </P>
        <Img
          description="Форт Чапора, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BcbuSGtAukBSBwZRGeum69Xrum358LPyFm0LrRPvDB-vZMAUhrYLiBIHD6MxuZmHoTu-ygA3RZkKL8zw_Dt55Fl4rOj0UY1lZphcXmJ3-65LrXV95N32Rt9q8gUEgV1PBcC3AG6U1gAL4_Vs9W4-RX=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Форт Чапора, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DypGUU0aJ5LeCas4CaeX4o8l78BwjQQKVEUD3j8ECumX9TqZrqqWS3J0scfh2RrJs1aQaGAULKBNbVuGd_yhU_cZgm4fsP653wwBuNguob9NZEILJwH-BSpU4h8YrSUSWA1h7yXdsc9FR3yA8oxGUF=w1200-h756-s-no?authuser=0"
        />
        <Img
          description="Вид с Форта Чапора, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DiqthwVBdWdUc_9ybCdzdY07HMlelIZfDU20VQpZQ6kgaUiHc3isFLmMyLgsthV794hu1fibVor3g7gMYQlWNvcl3s7waAx_LEGKVjkn_VdtF29gOMsMHygX8xO4CM4_FCPIzfZEvSfAs7G9tnhl5B=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Вид с Форта Чапора, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8Af1ZipGNltwUj7BCZ9FlQuOHOakKnqh54r79QzZcVzphr9OCOQddyTtq7J6pa4KJjkOY2Mea-A3jVily75qsm4F5bRr68T9JNxaqHEQnqSxf96TobmtXGkTGnVy4hBB1UA-KP7LddrGQZs0kPTDWMm=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Bd6nflJZNnKm3ljGjZS-lY8fsgfcHVF0ZpbQ_VqVGMJa-bnY1MM6Q_MQFDpW5mBQ7YHF746g_CFLgDe2x3iO1mARUi8P2zhLlQwwM59lSeVG9PBlEjs7YK591DgGVteEX-FvELsjXXbYxfSoc6Z7B3=w1200-h767-s-no?authuser=0"
        />
        <Img
          description="Вид с Форта Чапора, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DuKUTGeNVl_5PMP_KfDP8RZZAIMx1HN-hQO0_q9IEKV2-RuNEJLLdF3U16TTLp0Nvg4o74Iq5_A_hdqZutqaWq0EL_Ld5nx02asF-qMiBTi3eYQ_YXf-vOT9QywYroPWgx_f3ze0SNTC8B2vK-9He0=w1200-h801-s-no?authuser=0"
        />
        <P>
          Этим же вечером мы поехали на Paradise Beach на север от Арамболя.
        </P>
        <Img
          description="Paradise Beach, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BVWoYnCE8arp_9caeMIn6zONbtAnFvOnFicziQ5s4-j_gjEiEJycS0iTdUd5bmjXqAgjSfF1sVIdz799Nb5XBJ4PoyGXxT4rR1tX9es8z0QCWx2JuIjXUGxE1Ps3AGNPoFVpaPHbEwG7n2izNk9ZhT=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Paradise Beach, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8CuI-_MnelHttX2YbXJV039fIUXXDploz-sLdXPNmqJs9c0lv_SToGuTFtDw6dBlehGkRT2R82iS097kntighRtr2Lx0cqN8VrYAcnjQIuI-Vh3_jyErCey3-3ZV2uw4q9GUHICnqiYXuVESC-Ok6PK=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Paradise Beach, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8AM1U9jx5ajSB-2FLKCqDI7S3Nn_W2TF8CiKawE7nufEiAM-c6suS5lCNHkIYm0L6ny1XNhPnrySJYoDqjE5-OpEF5Ot5L1iLThgVwZ6ibL2M7iUT2yFaBAIaSZwivCGQRXSP9bvU-0BXHmtPbUk88j=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Paradise Beach, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8CQ1JTzvxR06qyjFruRLUpX-bG5SPhQvgvdxGCWuSOaoy566PXacpeBM2kP9xD692dGxEmLkcm15YZvUfuafNGe5cvOiUlJVyow_q0kQQyH5gH43ekwyosDTtT56yCM37f38XryYQAhxuUp7VD4SE7S=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Paradise Beach, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DUplQEYWFBQFRJ07GkTGe9IDwTgmp6_s-OXBbQn-1xk1KovIsssmn0cWKXUAVy5WPMeEUvQfRHh_YQhDYS02IkGrMmqSy_BOtRUnfHZsagRJS4tZ-RbZJsAqL3dPX_Q2pzcdA2nGeNj62DvtQBuV2C=w1200-h801-s-no?authuser=0"
        />
        <P>
          Поколесив по живописным окрестностям, апофеозом стала заключительная
          поездка к водопаду Дудхсагар, в общей сложности 200 км туда-обратно.
          Ехали мы через старый Гоа, это небольшой городок с постройками в
          колониальном стиле.
        </P>
        <Img
          description="Старый Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8A4dTkrAzfVoDgqD7dvAk4HD-V13qbz2BXLSmGTTvp21WIPTTenW4BNDSaV1-dn0VEJftD-YdiZDBJVvu5sCyr7dsWHubw7JrpJAlTdg3afqxs18LJhIB-0U6weVWFDYvkO4CCQpSJgqWLO-JGRj6w-=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Старый Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cv8Rp0aECsSF0XMBH2dZFKdQzgAbQQzRWxwFpoNBT5i633IAKg4KdKQXSBuDcolPVTAdPVA37kT5PhDlz2CrG3CD5vyWS4avDmAQJxMSeShfF1ceIEGy1oh2p8QVysFEmzyIslP9_RXLDsquPB_EYj=w1200-h817-s-no?authuser=0"
        />
        <Img
          description="Старый Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8AgmUgfzIZs3WAlzxGIScor0RvP8_o6GBlOwne1YXlvTzq-4zkskKJ40xBQ97-AQjDINboc9HBbK2RPazp1crlNvblJMbe7JrL_RPaKOMcwwGN5Md0gfBF7GIL_NOM5QG-jY_DuFQ_9-HxAImA9eTAo=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Старый Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8CkBqrxZ1upF8vlFBeVgYAKZeosBn8lTp1MakTZy0JwQ1alx5uK-a9vHOK-BfeYEvD4GDz7O4cncTfVhHfk1HkvNhRXKsrlevow91L80kjPvFoVXkdWC3wqBD1sNICzXOzFb_PwSP7GdwphbefsOwLO=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Старый Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8C_TFfhZJigxhRorNGjRmW5PGSXdS3BZQ8rgirNhSrogdSuR77zf-2Rk94LrAETftHRKpyibnTCP3EwoJK9quAT2jo2ECb8fGB95ssnDlYLquVIMxx-USKp8N-JcYylFboDfS-Yf9dx8xJk69e71kvs=w1200-h801-s-no?authuser=0"
        />
        <P>
          …А ещё по пути нам попался очередной баори, но не очень большого
          размера.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CK3v4-KqG2JR1syPsYBL0EwxZjjZM-PWfJuFgLMHdV3Lk_D6gjCx0ZkCGLkXdl71ceH57q5q4qWzt-e3kyHjxYXpQ6QAC08u9lYOVaCvsATMHcGOEDFe1jbs9GdPwyNijzddDm8zLy9D3SFy92Drmi=w1200-h801-s-no?authuser=0"
        />
        <P>
          Честно говоря, водопад(Дудхсагар) не впечатлил, а учитывая все
          обстоятельства, скорее даже разочаровал, но обо всём по порядку.
          Приехав в Коллем, городок от которого начинается горная дорога к
          водопаду, мы никак не могли поставить мопед, везде висят таблички
          «платная парковка», как только мы пытались запарковаться бесплатно, к
          нам бежал какой-нибудь индус и говорил «нет, нет, нет, ставить нельзя,
          парковки нет». В итоге на свой страх и риск, следующему такому
          кричащему я ткнула пальцем в штук 30 припаркованных мопедов, куда уже
          пытался примоститься Стас, и спросила «А эти почему тогда тут стоят?»,
          видимо мне не нашлись, что ответить и отстали. От Коллема до водопада
          ездят джипы. Джип полностью туда и обратно стоит 2800 рупий, дальше
          зависит от кол-ва едущих. В наш джип набралось 6 человек — мы,
          индийская семья с маленьким ребенком, и индус со своей подругой из
          Канады — получилось по 470 с носа. Кроме этого надо обязательно
          оплатить спас.жилеты по 30 рупий на каждого, иначе не пустят. Заезд на
          территорию заповедника еще по 20 рублей. По дороге к водопаду
          обязательная остановка у магазина с напитками. А потом еще одна
          остановка, у каньона Дьявола, где можно покормить рыбу, за которую
          водитель попытался еще срубить деньжат, всего-то по 200 р с человека.
          У нас с собой было не так уж много денег в принципе, поэтому мы
          сказали, что подождем в машине, цена упала сразу до 200 рупий за всех,
          получив от нас отказ даже на такую сумму, водитель расстроился, открыл
          дверь и сказал «погуляйте тогда хоть бесплатно»)))
        </P>
        <Img
          description="На пути к Дудхсагару, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8CS9rfbj8BcbwTdisQztRWhehBp5M9yuVQJoSPuGEJKnJ9gqX7smlI0l9xaYMT0l_ru9mVZF1Xediyb6Qapfxy9V_3aC2R00jLA6q3fWkoZBOKSrqMDhZP8i8VM5xlfnEDShNE6rAYRKCSmreRC9kPD=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="На пути к Дудхсагару, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8Ad7jzKI9gg_dUQZG1qbg3Jhtd7-Aqev7skGuydcT5fyQxxXD38tEtLMpIZPqsjS4L0Lv5dP7fhWGD6vV7rJOJ5rD5M0qDuqEceL0jd3kGAY6AgBfQlgadRxx3CT-QIYrTOU1QeQ61_xt3nUZqWCb2m=w1200-h801-s-no?authuser=0"
        />
        <P>
          Дальше был уже сам водопад. Место приятное, но не сверхъестественное.
          В образовавшемся небольшом озерце у подножия, вода была мягко говоря
          прохладная. Желающие попасть под мощь воды, падающей с горы, заходили
          сбоку и достигнув цели громко верещали. Ну а я и Стас, как настоящие
          русские, поплыли напрямик и под самый сильный поток. Вернувшись, мы
          хотели было уже вылезать из воды, но индус (который был с канадкой, не
          помню как ребят зовут, к сожалению) до этого барахтающийся у самого
          берега попросил сплавать еще раз с ним, а то он один боялся)))
          Конечно, мы не отказали.
        </P>
        <Img
          description="Дудхсагар, Гоа"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU9IF8Il7OcWZkM_1jl0_3zF3j3EMSLrfqm13ad_BPvLp-Edhy-HItd_kATbBwHIydtn3Hs_aF3Gj9fLLL2vjv5RaE5hRB7BpHQUREyvLbhD9kpX2m4gomBBCEPYnwu_QQ68lNTVpl7HNNchWq_PevR=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Дудхсагар, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8AkcH5zt_VpaiUyn9dEMIvN30xAsfmZ8vRjjFA65UAbY1CX6j0SFkB0ibRs_gC_lUZiFZraJ_R63cIPysUqb-_2KAZyxcGg4240v9kjM1VjvGFdJl4SGA8Lwof9jUjpl1tpTFjZy6nKzOYMyUEphNOp=w1200-h801-s-no?authuser=0"
        />
        <P>
          Немного обсохнув, мы побрели в сторону джипа и по дороге познакомились
          с парой русских ребят из Морджима, которые тоже приехали на мопеде до
          Коллема, обменялись парой советов и разъехались. В Коллеме слава богу
          скутер наш был на месте, а вот солнце уже стремилось к закату, у нас
          было пару часов до темноты, поэтому мы выжимали из несчастной скутера
          все, что могли. К сожалению, ребята с Морджима, видимо тоже торопились
          доехать домой по солнцу, в итоге их занесло на повороте по насыпи,
          которую задуло на асфальт. Живы-здоровы остались, слава богу, но
          сильно потрепались, отпуск подпорчен капитально. Скорая приехала минут
          через 15 после вызова. Мы, чем смогли, помогли и, как можно
          аккуратнее, поехали дальше.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8BgqE8LqAs3ff9ZLQuuInWVLYTx0rj6lsYzP4aUwV3Bg3V6ohhDQMlHptTdcOIEjafiV1GrvCzkR05OnGYaBiAgdhMO5gguhxvp4jIq3TsfxsCoYLNoocL7uyK6gcAzH4QwS6vTnl2qULaia1gMHb11=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVE8Y745XlV_rgPA6RO03fx_xH32IIFpKcqmnJnVI4fVjdDpkyHXd-I7QZH3y9XDWTGhPAjLVHQSFF52JuI0LzWDyA7pxj3N4HIV-WTVPqNuQuzDu9FDAfddbefeJ1ZHsd0C2-GLixXDqQ00gaAYkYm=w1200-h765-s-no?authuser=0"
        />
        <P>
          В один из дней мы сходили к легендарному баньяну, под которым сидит
          мудрец (Бабба). По слухам когда-то тут побывали сами The Beatles.
          Живописная тропинка к огромному разлапистому дереву начинается у
          небольшого озера и уходит вдоль ручья вглубь зарослей.
        </P>
        <Img
          description="Свит лэйк,Арамболь"
          src="https://lh3.googleusercontent.com/pw/AMWts8AEG6dnqyUykdxgiRczvkcJWuK1JWHcGe5bFGtw5jbsgbRFZKARePeEhs9Sp0xLKRKl_-qkzlYHJTG4hvwwVsBXalCkBPlUpuoc5pXW3BvDZ3qEa23SEief7ZHwTR32ebyIo-nozdFz-bXakFVc5kcf=w1200-h736-s-no?authuser=0"
        />
        <P>
          Дойдя до места, мы увидели большую площадку, окруженную
          ветвями-корнями баньяна. Мы попали в полное отсутствие посторонних
          людей, были только мы, Бабба и двое русских товарищей, один из которых
          помогал по хозяйству мудрецу. Нас угостили чаем и мы немного поболтали
          с соотечественниками. Мудрецу же можно было задать любой вопрос,
          говорят, он любит вести разносторонние философские беседы на тему
          бытия и жизни. Через полчаса мы пошли восвояси, но перед этим мудрец
          успел сообщить, что к 2020 году мир сильно изменится. Осталось
          немного, скоро увидим))
        </P>
        <Img
          description="Мудрец Бабба, Арамболь"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUiQZV-IvhzaY_XjCjubnKvCfdOH-zNs2dyUtPXMC0UaUP380Fm9Ez-jeghtQmCgM0yhsJ3qbzkc_uuf45b9bK1Q8304haJrh-ECgImR-ZWlszLwYFFSLrH3GgJJTnmaR0yFjCQd9cjBhpnbgJTuJYq=w1200-h801-s-no?authuser=0"
        />
        <P>
          В Индии традиционно пьют масала чай, чем то отдалённо он напоминает
          кофе но с определенными привкусами.
        </P>
        <Img
          description="Масала чай"
          src="https://lh3.googleusercontent.com/pw/AMWts8D5XOMq-vKTU4PeLXkwDlddsbkgGCIraWorVQaWHTQgU92nn-S5RU2JYXYmQhakLL3HcSTSWad-N7qLEL9QGelAR5ZqrFnR19kLMJtyC2HkZ4kExUeBAQmJ3lLRFeIm4cvLVTO7uF8pz8krJlk23oBS=w1200-h801-s-no?authuser=0"
        />
        <P> Ещё немного фотографий с прогулок на скутере по Гоа.</P>
        <Img
          description="Северный Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8Du0kQoaJtQ6VMU693-_e8Hqu_ZOxyMy7kGW1OQyVcZf8SCWaE9g_aqD5jt7f470BR_3jJ5HTDUpT5yvtbXKqxAld-3OuO3sd1a6MXAyhEW9hgEUdLYr4hUIjliCwX8p7xcYeoNlXZlCcnvd7VBom6E=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Северный Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DuVO59KvKrNHBqdFBGvmIIZQsH9uq1l2DRZ9HAr81uO_NYJySa6abXlftns59HnGHec0nSncxDSWScrpB734aiXy36rZxYqvLLTxGQJ0RD_EKZ2oq84Que7CAvouAmN2OZj-NFNOBoSFwJSVDfH6qQ=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Северный Гоа"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWF5utfU86hKxosOctb2fDvInzLqg2TNq4LskKnd2B9zfWbVsFgR7uMNg3gz0v0Mprp4QWdpEcLtcF04qC-85n23JhH8X8BTFhMREJ7XUZ7emzewfrA0k8uyp39XMEEXz8g202mwAWP3pS2uuYI5PXN=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Северный Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8B83O_lGU2E6wBym21u505P6i6P-XS2Hsq2HQnqCT4kjHHL00Mo83L4X3Hf61_l6nFP09lMe5U80hmFEn62d2h3BHCr2iwxwdYskhNsV3mMTFxKJ-FrqSZhQN6YEwmZA04tGAI43dmYuzcPZivkHjr7=w1200-h801-s-no?authuser=0"
        />
        <P>
          По вечерам на пляж выходят толпы отдыхающих и местных, чтобы
          полюбоваться закатом (тут это ритуал), а вдоль берега растягивается
          мини-базарчик, где можно купить разные хэнд-мейд вещицы на любой вкус
          и цвет. Все пляжные кафе расставляют столы со свечами, в некоторых
          звучит живая музыка, а с разных сторон пляжа доносятся песни, звуки
          барабанов и других инструментов.
        </P>
        <Img
          description="Пляж Арамболя, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DbyIHPP9b3SfMYo6_DvcKoUj0BZqA7Zo5atNhYQ5-_AslTENiardGzERuQsPEqyDHWKj4Kd_yBEX3DSRhp3rpTPVfMPKRu4-FUnUI7ySO4bgD2g8cJghelM2-IwYIgydeR3ZDgzzD6HtHBv6ZPlhYt=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Пляж Арамболя, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BdOVW6xF7Elx8Nvll3TxiLdJ5DMigUyNq0IvPPmisEaLBlkf0XNUhbgtt65kXqrwXMQmvJO1nMc2B-_A8qLsKfc7nHJMeIj3M6Zh5AqdYcU2cSsMjXmofxCBT0QmYdD6-kOiWf8N7_c6GJGfO-dbps=w1200-h735-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Aw5SU7_iw_cJbv38AEtN1eh8tYbPasulDNitdrQ6DayRb_fWTkMXtv76pUE6zdzaGt8FY7sl-f2NunGhC-cbEqLNr2a7JCc9Hox0av5Er0ute2wwng6uJcrS2wzci9gurGPGpCq6w-Dn_rcWPlUZ71=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Пляж Арамболя, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BbNGwZxp_gs_vzo1t-9qtR0iSCfygWOYqknfXfntV0ObJ-NaXQIdkJC6Qho3isqM2In5CpoOPmy45SKMzXrpKJqfmaRMkfTWN5BVMY1_0zHrTkDZrfOBR2_zZ8RVT4JGXsl05JT_VPo1UuKfbMAKPJ=w1200-h694-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/x6FZ7sBQXe5aQe2sA0OOKMsvRm9OnNrK0ELZq1T5SY6i-iIb7t84RAuNPoYaMqhOjA6aW9vjYkq4RkAH8q1LaR6JtmMTJQ4RWR4ylmh6MtW9yJ4baGOPcZihWYuTs7GrKijoG8BbN8WsurrrbSwXV-OiHcD21nRW6RHOzdOwlevHEmUp43HA8fsxdOI4kftTXvOl0bn9OxctNakowW4bHI76N5BEU3OZbVAPJsRBa0CybMxm2-H6O5K_ZXBMgFvBtLA1wCVA4GBGbZ_zToUe8G4WtJfqsgU0n7rBBBTvMd5kEU0R8ZtkBUuJCELkM2kePIdTmXCRv53P8FP1w2Cp0kK0rPekguXey9FCgGr0r5OhyQwY27mZqvqNgtMZMOoH4ByNtMmLkWWNdA0rlcOUYr9XTg3jbSawSkSztTJWm7XXdf4RWATC1V49DPs2JuxtOL5RhVdVIkrahR99DvY0TYkQ6epq_u_ftzRzyUxwlJt0g_lWnHz3ixRs51akH9CjOQSzUgG14dHlfQjX3pacQZndZMaUDWtiAhpSSlnl-AYh788VT-hLDuEasqciBV519Sm92ZSa5lyHC7YM12jhc2LI3zfJJ6qUsGwcPX8Slmbt9fASGOXA=w989-h660-no"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CqB9j8Amjj4_9T8fNy6HamXcNau7NFPvp_QDfgJm97Tm-VqCzleDoNoykcmAU6_bo6kVFJi1hVncNfW3UN2mORnmaRZKgSfl04Rfmip-kGvGWQR_MO2d8G6oWfadnqGYvU74ZcQpv4QZnMxgARI8CJ=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8BXa2TqAK8E0R4o1WVI7uPEZG4MGEV8enhmf9NiylYLPlV71YT2y7hEnKrJWSFaQ0Pl3ChdCZJ5ARAFyKKjXNs2lP1pQLgcC0r8M4Ec9wqSqNbTZ6WAW_X9mVJqXgQVFtxQTuH2UGwKvS8pjClyOHho=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8B5DS8VeUqDgLrNPRgwvJ7Z03Ew7E77cjaJcq58PKM9zL1h1SE7olc9v8Tw4lNhN1JehcJskYJI-e4_Ett_j5RygFQ5KkydA8W7-RnBje1CEgxmzTaP47CL-9PcDG9Ox_q08MIkf_vaNWOqilc5gTWm=w1200-h801-s-no?authuser=0"
        />
        <P> Немного лиц авторов этой писанины)</P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CRQ5xbCzxxm8Fl14ll9iPO-gRqjZsoHNkpfesgNTWZWbKaEcgDsH90E4huTjCZl5aRZOb8TYsJ9EATMTHNr1Xrpl33_NXckC5nsYSGlFQoKscnD63eRdISG-1ksugUz6BWqD-1Z9qVYpN2iIUnESRT=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8BK_RKTklilcCrhCwGB6kLa7YQ-B4lh-klFoPf7H314iS5GZVua3zxhQfj9rI0uuoYMHPuBmJLWAOco7kTe2ZOyfgWhp1M1gAoJsVoQtgok5kaHKJZvWxqVI3DWKQrpxt0Nd3lgy0z0q6FD7vbMBxbi=w1200-h801-s-no?authuser=0"
        />
        <P>
          Вечерняя жизнь кипит намного сильнее, чем днем. ГОА известен своими
          вечеринками и тусовками, но у нас было мало времени, поэтому мы просто
          отдыхали, купались и расслаблялись. Каждый вечер по образовавшейся
          традиции мы проводили в чил-ауте нашего отеля, ели пиццу, фрукты и
          вели разносторонние интересные беседы с новыми знакомыми. Наверное,
          поэтому главным впечатлением от ГОА для меня стали красота, доброта,
          умиротворение и спокойствие… Так и вертелось на языке «Жизнь хороша!»
        </P>
        <Img
          description="Сансэт,Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUl1V0hFr6DQ9OnQKtFNCRhRJz-D9cS5j4Z6sBloqav_FpyDis5gYnj9Hh6_B6tRoSihZi91DZleUQZcklEDSGXFDaksFkGkGsYkW4nYM_SxUZAuBIXs0RBf5YIA2_4_hQ-IszDHzIbNA4zWn45HJvj=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Dr9D1-ZBj65YRCz4yQFilOjNd3un6u4lhznb97aRydEg6gs3lroSoLE6PmhzsXOObRO6gQQq60JmhTPsabcBL72PqaYX71uRZuxsD67JcU-3_KG5_tSHfW4ZNnNgNClu2hqMKPujPihybvs8R8U2j5=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8AUBWXpyE3mb6Zm_cQDiekVrdtOu0_4sYaxmV7WJOd43j_0t0zGwRVzhNshPpWtkVUYg3mfzoakPWqfY1IW4NnYvZya5qAbUNIA3vt7-68haYJeRI5e7wsj6afcizGjuxwbIa8Qb_NOfmq2MxtC4egP=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaU8xTHHxG94Uixrfd79B9SRqqC18OK9QAKN5MPA-vA3OhtNgkhhxQMyz_cIdNCEvgJvFNd-DbobjZ0PvynGCiGn5M5Izi19u7AFvDEpDqFEhW8biZhUv7KCGSJdnIqVzZGjldtSywlnZ6nlZPOhIGhs=w1200-h801-s-no?authuser=0"
        />
        <Img
          verticalImg
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8BX1Op9ORaZsagbvcwXa140TWR6noagP_2U8W7QPdE5lOtE83Zs-FF1L7dvajaEXutZUOhXoTAGU6cc1gj1PdixMzxJy0MK4XAgGXQhax1elQQSrq4jP1_-BG3HwM29CIQghmxiQU83tZ-nRZD4RLAp=w647-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Dj6VgnvVCv18_24wsWhOq8_hJWXfut-fEYGz0Guw3m--KkZzq47anehI4hAPdhMkUWIwHAXiamiNSdAICNq-k5AFTcRNb53lj2h1QZQCJ2og4s2h-vdQUjkMmviq4mRxCnr8Qez99jDeiJc69o4irV=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Сансэт,Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8D0lzzVTx0xkMM3MCmkjUMkwy3Iu2D-juBDRnoqiRbeieYc3eC5l0VXz4aJYeuw8hGj1NfnedmVpC6G5MjvuXYzErWcIj5FXo7JeMf1tiEC3KxdupaZytSLiZ7JC3s_w8q7ZL_mMm4PWqUBdm7J6MHV=w1200-h784-s-no?authuser=0"
        />
        <Img
          description="Сансэт,Арамболь, Гоа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DbMqjG_MOYOBwIlLdLWXNPdDgzXGGwbmsvUXG9ijqNSNyWILJ39Z8AyEcAMVyT79F5CVMZ9NX9dOaQd13LSvMJQwKbmbiXy_P-AGatVTgp0yFLhYguvb1enUIfy877GUJnjsWsUvfIskfM-hSKO0L2=w1200-h801-s-no?authuser=0"
        />
        <P>
          Таким было наше путешествие по Индии. Среди туристов бытует мнение,
          что Индию либо любят, либо ненавидят, третьего не дано, однозначно
          скажу, что нам Индия очень понравилась и мы сюда обязательно
          вернёмся…через год =) )
        </P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
