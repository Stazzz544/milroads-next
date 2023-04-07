import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Abhasia2013Goroda() {
  const { title, description, img } = getArticleItems(17);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P introduction>
          Этот отчёт можно считать продолжением большого рассказа «Пять дней в
          Абхазских горах», который Вы можете прочитать
          <A intend="all" href="/blog/abhasia/2013-p-1">
            <P as="span" color="green">
              перейдя по этой ссылке.
            </P>
          </A>
          После насыщенного горного похода мы решили спуститься и провести
          остаток отдыха на побережье, чтобы немного погреться, искупаться и
          посмотреть некоторые из городов этой прекрасной страны!
        </P>
        <H>Города Абхазии</H>
        <P>
          Спустившись с гор мы отправились в замечательное местечко под
          названием «Монашеское ущелье». Об этом месте нам рассказала одна
          женщина, с которой мы вместе стояли в очереди проходя границу
          Россия-Абхазия. С её слов — это единственный песчаный пляж в Абхазии,
          во всех остальных местах пляж галечный. Цены тут так же довольно-таки
          адекватные для Абхазии. Мы поселились у дедушки Ашота, чей дом
          находится в трех минутах ходьбы от пляжа. Стоила комнатка 350 рублей в
          день, если мне не изменяет память. Так выглядит этот самое Монашеское
          ущелье с заброшенной водонапорной башни, а жильё мы снимали в
          противоположном конце пляжа, рядом с горой.
        </P>
        <Img
          description="Монашеское ущелье, Абхазия"
          src="https://lh3.googleusercontent.com/pw/AMWts8DJIufPVImUe18s0yD9FeQTyjWODM5zzAok8O1BnkoBZ17fF_JWj6a0bPIc3rfVBrxid9UuBmIM31LGs-Z2oUOyH48lsyKrqLTeQi4FQFMAK-905wmgzLiChdh6R5s-EvA7BRlBguPndlHe1SWtSJ0G=w1250-h833-s-no?authuser=0"
        />
        <Img
          description="Заброшенная водонапорная башня"
          src="https://lh3.googleusercontent.com/pw/AMWts8ACaYRrrc6yAtA4mnsupruv3Tl5q4E7em-C8UG-KzBv5ns06PAp0fh4SA3ImCImvoKBvychein4AJSHUGf1bzLX6zJb4ojIUzdjMdTMJbj6PNJ7JF9ELQIRsnkErMPNZ8u8CsC2Eo1wvkiN0rWZCLQC=w1250-h833-s-no?authuser=0"
        />
        <Img
          description="Монашеское ущелье, Абхазия"
          src="https://lh3.googleusercontent.com/pw/AMWts8DgVqHh_W9YNtmV1zL8D2X_JRrJnZOtm9-_IgPp2JFy963stx-2x7hnEd3OLa3oi2spUdlGShIF7IYvLuN2Iu3V_fHkSo0xqDwYSvJWL-j0Zmxgdalnnl6b36ZlezKsbY7EEzmu9SWq08cGb6szF90d=w1250-h833-s-no?authuser=0"
        />
        <P>
          Первый день мы просто отдыхали от горного похода, а уже на следующий
          день тяга к путешествиям снова взяла верх над нами и мы поехали на
          общественном транспорте в столицу Абазии — Сухум! Город вызывает целую
          бурю эмоций, с одной стороны всё более-менее чисто. ухожено, ездят
          дорогие машины, люди опрятные гуляют, с другой стороны повсюду
          заброшенные или полузаброшенные здания.
        </P>
        <Img
          description="Заброшенные дома, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8DCF2TvCX2eb1tGkihToTgiAolegaCRMlKZ9PBC3h1rgdXzmlDO9YcCvYYsGmllJeW4RvD06Xmxnd3XK0wEx2EPiDrvZ3GtKOeeDsFmbGfrKO_1tHxlQYUg4YYXkzekPqY2zyfDRY8831hZaIxt5FnP=w1250-h828-s-no?authuser=0"
        />
        <Img
          description="Заброшенные дома, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cok0Jq8a4YfP34lP2Z7pfKLfXaDAAJgp-b9yh4dUsgGl3rEzrPwxAKQmtrQ1BVLE1CEYnGehQA50aD567jpLrddLmCdUzn-RbaiVMtZhrUb--y2iie1vDSfdttZT8V6Mk-Z5lD0VTL_0EB6RgMti8T=w1250-h799-s-no?authuser=0"
        />
        <P>
          Здания культурной сферы — это просто мечта для фотографа, который
          специализируется на жанре «Постапокалипсис»! Благодаря климату здания
          сохранились по большей степени в превосходном состоянии и отлично бы
          послужили в качестве декораций для соответствующих фильмов! Вот
          примеры таких зданий…
        </P>
        <Img
          description="Заброшенные дома, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8DPSQuZweKtKqr2S5iDV_3IH2VAIsFJP2DE-Q3oBMV4XC2CpKo118CFSXjvtmFr_TSLuatuBei1VmgFsBmmBMKPUNbvRqcUrEr7k37Uz_rqNP-WNI3g7aV8HWbPZE2pB5q0HDS1st9Qg3fmG20GH2Dg=w1250-h833-s-no?authuser=0"
        />
        <Img
          description="Заброшенные дома, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8AMsXvKLr4_up6_4I7lCjC16lWMHBC6ug0dx6yC3GTOF_haFytaZHeIZs6Y-UuJjWhSaZFZ3ZpIcv0EB66EP_9tBhWIARUTdIu5jEspgNOcUZsSXnyevBShMpK8mQQlWDmfrMwcpRqiNPN3RHpeahOm=w1250-h747-s-no?authuser=0"
        />
        <Img
          description="Заброшенные дома, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cy7pkmx3NDDXY2DFa3DezATFUmaNSQhF4ZdP1gYGlPYaJBO8suYfK8O0EQTSWqf9xvNlJKJ3dRuM8Q9_ANkhZ-iLnHMk9H-VUcLRMfSm7EeOhZNaEKCu_omp4X4UvCZ5DBnQqMaFIenvqqTENC-X6F=w1250-h783-s-no?authuser=0"
        />
        <Img
          description="Заброшенные дома, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8DootAoN2PkqfjDzGVbD_ftScGwADzOzQFtCpeJveq4rDWfPyavdJCxvDp3tP0TMmt4rLdLGELEA19GDvRKIy8UJBREg4-YoBhhPEEQHelgFBD4hy4VXcYoJrIwjpN6Gteva2HqaaRDu98PE96vdcES=w1250-h834-s-no?authuser=0"
        />
        <P>
          Немного позже набрели на заброшенную железнодорожную станцию, которая
          издалека такой совсем не выглядела.
        </P>
        <Img
          description="Заброшенная железнодорожная станция, Сухум"
          src="https://lh3.googleusercontent.com/pw/AMWts8Av3nMJNYfRBCSL3rORQt5ugjvcNToVps3TBwluuhVhAwf7ulBb3OztIfWTMJpDv9YT_sehvFMzblhV5Oh__ac5qUtdh6ePBx8Lmiw41fXKHjIxeR5T_5hW7UEKTYShDmbZ3QSkgcBxTvMsbzq07BoV=w1250-h833-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Doi_yxDKkhTnOau1LJWg6ZQPhgQi2BnVPmKIMbR8ACW2aokg8HQ9D-01yWR4HKxuIdxW65OOAfT4pUQNSQTR-UZn0vwj1DkMxwNwO5lbPcGUQNaQFhwzSG9Vjv1LAkOI286UmKqrtGpkEO389knjYD=w1250-h833-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CSPO7x70_YvkXFsd-rhwZvkizaDBk5YmnV0_AQOWpybzJqoZ1LNwX8H0XV0bjRd45DA9tUNA5gEhdi_qChHLSdSD-Ud1YeEumn5r5KyIw55sSuOZO2yrdV28O7Qb-uI8J7MIDTm1rKC-65ro46w_YI=w1250-h833-s-no?authuser=0"
        />
        <P>
          Основной целью посещения Сухума было здание Совета министров советской
          Абхазии, которое находится на площади свободы. После военных действий
          происходивших в 1992 году здание стало заброшенным и остаётся таким по
          сей день.
        </P>
        <Img
          description="Заброшшенное здание Совета министров советской Абхазии"
          src="https://lh3.googleusercontent.com/pw/AMWts8BTnERePfTO4BZWdDAVTIB80M__fn4ud8zYR0CZY5vHERgEEuw-LYSapWvCff1xdieiHQAwHCi5oPahK3rFZ5xmMRe4tOLD5rfiRpqpXDfQQhjg5DFOECQxrL-zjdWm-ZC_Ttv9jfQVjLsGmKnkp_UW=w1250-h833-s-no?authuser=0"
        />
        <Img
          description="Заброшшенное здание Совета министров советской Абхазии"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cu5ewjOSFvslDZ1CacAtE0SDEYTVXsefq--5x-d54ILhZEwMzVZXhP5tryPtUHiwe5xtyHRJA1GCR8ZG_FqqCYgt9KZBb8TIxBEoXJbBHnn9pWQPK78T_vlQlFpDMaHXr1f72jjEM_wdmXlkog0Ghd=w1250-h833-s-no?authuser=0"
        />
        <Img
          description="Вид с заброшенного здания Совета министров советской Абхазии"
          src="https://lh3.googleusercontent.com/pw/AMWts8AAW2nDoH5IYYe9ituscqE9hL2If6hjw7HO-X0E8KbZiDofUQ_07lbyPlonKV0Zl3ENKWUvFNyzIFFEjU1ajL_Pj-dGQ_gmyyV3A9r3ZB_rmXAEC58_hipPK0XsN721_AZxONwywX5d3hoShbI6RSVB=w1250-h833-s-no?authuser=0"
        />
        <P>
          На площади перед зданием теперь катаются инструкторы из автошколы
          вместе со своими учениками, а на крыше проводят романтические вечера
          молодые парочки, провожая закат. Так как это здание является самым
          высоким в округе — с него открывается отличный вид на весь город.
        </P>
        <Img
          description="Вид с заброшенного здания Совета министров советской Абхазии"
          src="https://lh3.googleusercontent.com/pw/AMWts8B9nCaWUKmZ723ctto9LjIEtSTvxKSs9BrxNHyc9r3o4Fb_0ehyzGm88Ks5M49KQNY5bTqp_XJwvKFzQe_nvqpqw8l0L5kNRRwb3byHsmLiRdD9zbHbc9u2rNWfmUCbHrENnAoG_Wtm68GEW0gFAcfG=w1250-h833-s-no?authuser=0"
        />
        <Img
          description="Вид с заброшенного здания Совета министров советской Абхазии"
          src="https://lh3.googleusercontent.com/pw/AMWts8DMf528J74NWdXE9TE1Qg4GCHSORc1duvMSSwYlIu3fZBITRV3JGJhNwF-EM8xt_U58MIxND13I2E7YFXkeGlqjMi8Hn2moKsH8xYW9yBlaohWGvTMobasHnDWjKzPFSy1sysKXf3zPhs-FXj-BQFzj=w1250-h830-s-no?authuser=0"
        />
        <P>
          В Абхазии очень много интересных и креативных сооружений родом из
          советской эпохи, одно из таких — ресторан(?) у моря в форме большого
          корабля с нотками футуризма в конструкции.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8B43CKqWJuLm4iAb5OADezLsnNiRrQ5CntHvgIJca6saGtuv3FjF3H55DPkIOz0YzyovSspEAKr7PQagPHUCxGd2nGeuGNYuKFbs8TvDpG_LYn3qADmJ2uZqC2McnWAzbuxgfQ2H-oNpHYy4Q5wuygS=w1250-h833-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8DQlcjIBVVerlxoNctUnhmuJkvQv7ClU_JKZ9V84qCdYuugmlviMDA7cC7PCmd0T1JzuIfK37u6I81Yqm2eCuWsJpzPlagP9kr5ukmtnSTEQALE2nkafKNauPi7DP9HAkYb5h7qjsh2ZSZAQrTcNqPd=w1250-h833-s-no?authuser=0"
        />
        <P>
          Вечерело и нужно было ехать назад, по пути к автобусной остановке я
          успел сделать еще парку интересных снимков: …Очень крутая мозаика
          родом из СССР…
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8DYXW0WyCAwL9gKgoe7QDGzb0wsWCozbq7q1yN1Z7WW-tpAfkCFH3yvo3BtJBmovFl-4RbXDVsrYJWCWz7fPkFqOJzynrECaNeFPP3R4NJiEDA6aeL8Op01AS6GWOz0dW_Q9t09LmlkQQ4qkdnCXh7C=w1250-h833-s-no?authuser=0"
        />
        <P>и…дерево с женской грудью…</P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8DCFvkssyI867VBq6aKkqJGj9ycUgOuv98cxtb_yBAQWHAavk_8SXHUgPZg-Ljorxczpo5oj8GxIZ3nEBqVmB7v9vm-IVWrfWoAYknkSXYNUAzQfuodbKVFliZ6Rm1wLsAG-t0PEhLNbBLHMs4Vv1kQ=w1212-h969-s-no?authuser=0"
        />
        <P>
          Утром следующего дня мы снова поехали изучать окрестности. На этот раз
          мы отправились в Новоафонский монастырь. Как и в прошлый раз мы
          поехали на маршрутке, это достаточно бюджетный способ передвижения в
          этой стране, а живописные виды из окна скрашивают дорогу.
        </P>
        <Img
          description="Ново-Афонский Симоно-Кананитский монастырь"
          src="https://lh3.googleusercontent.com/pw/AMWts8A5RvIj8jUz-OBNwjkXFtLnfMCIJ_jdiK3NOJY4Kc1Sw8NAwnadKpfpx4gkA7oLIvhNY58LFuw17AFIUehB3nOJaGb9YbdryEII85kX5KlVoyc5QPvo7aMSv0xFuCtfmMcqalQAYhyZyJY9TIjfAwb6=w1250-h833-s-no?authuser=0"
        />
        <P>
          Ново-Афонский Симоно-Кананитский монастырь — мужской монастырь,
          расположенный у подножия Афонской горы в Абхазии. Основан в 1875 году
          монахами русского монастыря святого Пантелеимона со Старого Афона
          (Греция) (Константинопольского Патриархата) при участии российского
          императора Александра III. Закрыт в 1924 году, возвращён верующим в
          1994 году. 11 февраля 2011 года правительство Абхазии передало
          монастырь Абхазской православной церкви. С 15 мая 2011 года монастырь
          фактически является кафедрой неканонической «Священной Митрополии
          Абхазии». Википедия (с)
        </P>
        <Img
          description="Ново-Афонский Симоно-Кананитский монастырь"
          src="https://lh3.googleusercontent.com/pw/AMWts8C8AFOc9DTZRlXG_fovcSnBxuGq3ohKMUwwnWfdiEa-TVI4fU2nylao_9Uo4pVBabx2CNqV1raka1jHKSpMn7sPyu1jREghvvNzpNi7tNFehwKPAciBeTo54Ea28BcVK7nckViLkKlQvi2ulSer9TVI=w1250-h865-s-no?authuser=0"
        />
        <P>
          После осмотра монастыря мы поехали обратно в «Монашеское ущелье». Идя
          по пляжу мы заметили баннер одного предприимчивого мужика, который
          предлагал услуги дайвинга. Я всегда хотел попробовать понырять с
          аквалангом и мы воспользовались этим заманчивым предложением. Конечно
          Абхазия — это не Красное море, но всё же есть на что посмотреть. Мужик
          отвёз нас на лодке к рифу с небольшой подводной пещеркой. За 1500р с
          носу нам удалось поболтаться под водой целый час. Думаю, что для
          первого опыта — это очень даже не плохо!) Кстати в Абхазии очень легко
          арендовать скутер, цены будут не настолько гуманные, как например в
          Индии или в Таиланде, но зато можно будет поколесить по окрестностям
          на «личном» двухколёсном транспорте!
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8BXlsJQ1uDIRM5pCEg0_Adk300PHxYxbs7G9RaVQ6Ec9i4NGy2Pe51Aq4_rGns0Jq_tBpQHMcx3GFtQGOw944kNPZ-_Kg07-aw0NV4OpE0dknPNAT1nuqPpOWlNc-q4nc3KNDRx3TLnzRMoFERtsZaQ=w1250-h839-s-no?authuser=0"
        />
        <P>
          В один из дней мы ездили в Гагру. Город особых эмоций не вызвал, но
          очень понравилось огромное заброшенное здание, скорее всего каким-то
          образом связанное со спортом или гостиницей.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CzRKatvoGtV7bpstgvdUVZtcVV792RhtirLf6s6a8_nPBWKJ3LNJNTk4gt1NhxI9R2qVTJTC04h7RkYkXwOZmgtsrFVKU23NiyQql-AT1BBX1RItjy2rz_Zo2iCsSGPLc8XfWqJMm9m19xRyc4pztv=w1250-h833-s-no?authuser=0"
        />
        <P>
          На верхнем этаже мы обнаружили боксёрскую грушу и записку, в которой
          хозяин этой самой груши просил, чтобы её(грушу) не портили и ещё он
          приглашал приходить всех желающих по пятницам вечером, чтобы
          потренироваться вместе))
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8A6cGjs0H5KcX-lajj1S9HHsgeoZT8fnO5FGFlvFZKNvG5gIN8B9R0_3028eW8NvFKv_Q7DTff9NcdyA6sEA9U85bHA9aAtZL1iBC_BZz0ztYBkYR3lxU1G5yQiWNvGGjGwT8AQ1IEI9AKfkctE6vBd=w1250-h724-s-no?authuser=0"
        />
        <P>
          В Абхазии мне очень понравилась реклама и информационные таблички, они
          буквально везде и очень запоминаются, некоторые из них нарочно
          задуманы быть смешными, другие же получились такими сами по себе!)
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8D-cvLXN3RBM2OHPj7w-W9z8ULnNcGMm1rvmRKhor1N0m-IXENmaU1acOJWAsdfKfTSREggGn5dKsUkQU3LvRVd9baOTn1jtikSU2biTDozeCdrjMZql0sUlqJ4TGX7Qcs_AbjgUhxAdYh0BK_NmARr=w1250-h833-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CA04U0w2d_c9vfPf_RGDML2nVqoHGgFGCmPG6P8gOBFmtzAfW4273rim8OWSEz4fp5GpJUVyTDF9ljXTAPsQ14PXUbhCL93bphWcAjlGKadKzchOoyL0LtEzTfvauStWZTnRk_GfJOgZl4DdXVMCW4=w1280-h853-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8AZnBtbpzTgTow-SArRBnMYkTwRkqC4lW2u5A3xguPrUChSiW6tR9n48aaDtacqlojgNbCIb5jxDPtNYrBQwYeFBLgNaRTni36PQVhBUG1pvx5C5YzJ--JOjbNamYOTMkztBNI3ZoPD_0mYQHZ9hgMu=w1250-h833-s-no?authuser=0"
        />
        <P>
          А ещё к нам в комнату очень часто приходил котёнок, который своим
          окрасом очень подозрительно напоминал того самого Адольфа, который
          Гитлер)))
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8DArfDFLbjh1wQAuHYGEyN_n4V1dHOGWWl21Cjxv36EGsxP0MhuYkNlrt67Pzfu3NEHIogvU5L1lHYJu2iSIyH65WmDKr8uBKn-aaRoHwW-D2p78xQQgl3Ps0PWutvLexH6Nbk12rhhUA8erUI8-p-K=w1250-h707-s-no?authuser=0"
        />
        <P>
          Резюмируя всё вышеописанное хочу сказать, что прибрежная часть Абхазии
          — неплохое место для отдыха. Самое главное — это найти подходящее
          жильё по финансам, уметь немного торговаться и свыкнуться к
          отсутствием какого-либо сервиса, даже в зачатке. Проще говоря,
          представьте, что вы приехали на дачу, которая стоит на берегу моря,
          так будет легче воспринимать всё происходящее))
        </P>
        <List
          titleColor="green"
          title="Из плюсов хочется
          отметить следующее:"
          listItems={[
            "-все говорят по русски",
            "-валюта — Рубль, не нужно менять деньги",
            "-граница между Россией и Абхазией как автомобильная так и пешеходная и не нужен заграничный паспорт.",
            "-относительно не дорогие цены",
            "-близость достопримечательности, в частности Национальный парк «Рица»",
            "-Нет сплошной застройки на береговой линии как например в Крыму (Фиг к воде подойдёшь).",
          ]}
        />
        <List
          titleColor="red"
          title="Из минусов:"
          listItems={[
            "-не все местные живущие на побережье дружелюбны (хотя уроды есть везде)",
            "-очень мало полиции",
            "-очень слабо развит какой-либо сервис",
            "-огромное количество заброшенных построек (но мне они нравятся)",
          ]}
        />
        <P>…End</P>
      </PageWrapper>
    </>
  );
}
