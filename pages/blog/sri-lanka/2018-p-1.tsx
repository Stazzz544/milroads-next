import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SriLanka2018P1() {
  const { title, description, img } = getArticleItems(10);

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
            { href: "/blog/france/2018-p-1", text: "Франция", color: "green" },
            {
              href: "/blog/emirates/2018-p-1",
              text: "ОАЭ",
              color: "green",
            },
            { href: "", text: "Голландии", color: "green" },
          ]}
        />
        <H>Начало</H>
        <P>
          Аэропорт куда мы прилетели называется «Colombo Bandaranaike
          International Airport». Несмотря на то, что в названии четко написано
          Коломбо, а так называется столица Шри-Ланки — сам аэропорт находится
          на окраине Негомбо. Большинство туристов бронирует отель на первый
          день именно в этом городе, а впоследствии переезжает в более
          интересные места. Остаться в Негомбо на весь отпуск будет самой
          большой ошибкой, потому что тут нет ничего интересного, вода мутная,
          пляж грязные, а цены в кафе как ни странно дороже почти в два, а то и
          в три раза чем, например, в одном из самых красивых и туристических
          городков — Хиккадуве(красивый именно пляж, а не сам город). При всём
          вышеперечисленном Негомбо является вполне годной точкой для старта,
          так как многим нужен отдых после многочасового перелёта, а другим (нам
          например) для реализации задуманного путешествия нужен был скутер, а
          тут его довольно просто взять в аренду.
        </P>
        <P>
          Из аэропорта до Негомбо мы добрались на местом автобусе. Остановка
          находится в километре от аэропорта, как раз можно размять ноги после
          длительного сидения в самолёте. Цена билетов за двух человек была
          около 50 рупий, что в переводе на деньги — примерно 20 рублей. Кстати
          деньги можно смело менять в аэропорту, в отличии от Индии курс в
          аэропорту будет примерно такой же как в банках или у местных менял.
          Шри-Ланкийские деньги довольно прикольные. Они цветастые и разного
          размера, чем больше достоинство купюры — тем она большего размера,
          скорее всего это сделано для слабовидящих, так как деньги вдобавок ко
          всему очень контрастно отличаются друг от друга.
        </P>
        <Img
          description="Деньги Шри-Ланки"
          src="https://lh3.googleusercontent.com/pw/AMWts8B_64rzX0SKI79-zxGgMoexF8EdLtexxB87TpHJqbzj7LlyC3sDDnVYn9z3O2J1uLbw9K-ySa4lwl9SXUopai0CFwTW3sLmspn1LSlNusRkMjVdCteYWjpG2ze2WbGsrqzKwogzyib4KukDSXxx7PK-=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Деньги Шри-Ланки"
          src="https://lh3.googleusercontent.com/pw/AMWts8BQLf1VY3XXhgtEe_vvo5yaEOhOVNSqYdU3IgRjKyZXfc6cVbpiQGKIJAaKkZCaAoje4p1JQrOc4nk4H3meXZJU5F63we0neLxyergEU0lCRYp4RXiN7TiNzpJ-Wu_Oxbdtl-plzKqzll3vrT5pbnL8=w1250-h833-s-no?authuser=0"
        />
        <P>
          По прибытию в Негомбо мы пошли искать свой отель. Я его забронировал
          заранее, еще в России. Бронирование подтвердилось письмом на эл.
          почту, но когда мы прибыли — оказалось, что этого отеля уже нет,
          вернее здание стоит, а собственник поменялся, как впрочем и название
          отеля, об этом мы узнали уже непосредственно от обслуживающего
          персонала)) Мы не сильно расстроились, т.к. оплата по этому
          бронированию подразумевалась на месте наличными, кстати во всех отелях
          мы расплачивались по факту приезда, а бронирования я делал по ходу
          поездки утром каждого дня, когда мы переезжали в следующее место,
          довольно удобно)))
        </P>
        <P>
          Прогулявшись по Льюис Плэйс, так называется улица где был наш
          несостоявшийся отель, мы очень скоро нашли ему замену, примерно за эти
          же деньги. Заселившись мы наконец-то смогли отдохнуть. Практически
          сразу нас вырубило спать и проснулись мы только ближе к вечеру.
          Оставшееся время первого дня мы потратили на то, чтобы искупаться в
          океане, покушать и найти хороший скутер, который смог бы без проблем
          проехать с нами большее тысячи километров, как по прямым дорогам
          равнин, так и по извилистым крутым серпантинам горной местности.
        </P>
        <P>
          Зайдя в несколько мест где сдавали в аренду различный мототранспорт —
          я остановился на уже традиционном для меня выборе — Honda Dio.
          Экземпляр, который меня интересовал имел пробег 3000км, но ржавые
          амортизаторы как бы намекали на на то, что пробег был смотан) впрочем
          внешний вид так же местами оказался «бывалым», но это даже скорее
          плюс, так как на новом байке свежие коцки были бы видны и хозяин мог
          бы предъявить это во время сдачи мопеда назад, а тут попробуй докажи,
          что этого не было)) В любом случае перед тем, как окончательно выбрать
          этот скутер для серьёзного дальняка — я сделал небольшой тест-драйв и
          только после проверки тормозов и мотора(на ускорение) — я принял
          решение, что этот скутер нам подходит. Мы договорились на итоговую
          сумму в 11700 рупий на 10 дней(430 рублей в день), плюс залог в 150
          долларов. Был составлен договор аренды, где все эти моменты были
          прописаны, так же при хозяине я отфотографировал скутер со всех сторон
          и показал на все сколы, притёртости и прочие недостатки, чтобы потом
          не было претензий. Так как дело было вечером — первым днём аренды мы
          стали считать следующий день. Я попросил хозяина подготовить нам два
          шлема, потому что по Шри-Ланкийским законам отсутствие оных карается
          денежными штрафами… Ну и не очень безопасно без них))). На утро
          следующего дня мы запланировали ранний старт, около 6:30 утра. Нас
          ждал первый переезд длинной около 150км…
        </P>
        <H>Дамбулла и Сигирия</H>
        <P>
          В 6:30 утра мы пришли к хозяину скутера, при нас он проверил уровень
          масла, после чего пожелал нам хорошего пути и мы наконец-то начали
          наше мото-путешествие! У меня не было точного понимания сколько
          времени займут 150 км пути, поэтому мы и стартовали в такую рань.
          Маршрут этого дня выглядел так:
        </P>
        <Img
          description="Маршрут первого дня"
          src="https://lh3.googleusercontent.com/pw/AMWts8B-vwizxSzKJpxCXLatM2E4EMWJJ89mcEfY-fjUM0rOHkxExaZjb8toeKqvlIrxjFsuNpdII5up1zwLKTv3mB_iJo-_N8TeuGD-X7hbvltdwb2o04TJ6Aa5Ovam3GzhedHBoG9EHhp96gYsJLCP4--M=w1086-h711-s-no?authuser=0"
        />
        <P>
          Первые 30 километров траффик был достаточно плотным, а средняя
          скорость 35-40 километров в час. Почти сразу же стало ясно, что
          дорожное покрытие очень хорошее и в отличии от Индии тут нет лежачих
          полицейских в виде заасфальтированной трубы, на которой подлетаешь
          вместе со скутером как на трамплине из-за того, что не успеваешь ее
          вовремя заметить. Движение левосторонне и к нему привыкаешь в течении
          первого часа езды, тут ничего сложного.
        </P>
        <P>
          Вскоре мы выехали за границы Негомбо и ехать стало гораздо комфортнее.
          Периодически попадались места где не было домов, это было несколько
          удивительно, так как я представлял себе, что тут всё время будет
          деревня переходящая в следующую деревню.
        </P>
        <Img
          description="Дороги Шри-Ланки"
          src="https://lh3.googleusercontent.com/pw/AMWts8BB2KcAbB3XkSMyXRbxS892OgpHiQIVI594he2xfWYv1OLjFPtw7Irxl18X76SsiR27kpmbh4iLcYzSx1BVYD4cjH8TlM5pP7sNe5he7epf2xOL1OPRKV7OlONNqfZiZ01YPT_77ZgDl9niASQJFjvA=w1250-h831-s-no?authuser=0"
        />
        <P>
          До Дамбулла мы доехали довольно шустро, намного быстрее чем я
          рассчитывал. Этот городок знаменит своим пещерным храмом с огромным
          количеством изваяний Будды. Сам храм находится на скале и туда ведут
          несколько троп. У главного входа находится огромная статуя Будды.
        </P>
        <Img
          description="Главный вход в пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8ANzBn5yX9k8V2XORzuUik6WAVMXBSzI-j4Saq0N87wAwxUaAQgWC1qvJMEUeqbWmhVBbcEsEM2Vv8qxVm-NfeKEeqj4ktYAE_1smI4pWrI_8ArUBuJRUA_7E9Wm8giW54s1jZqu_zF_bwZz60Ygdmv=w1250-h803-s-no?authuser=0"
        />
        <P>
          Этот вход мы увидели уже на следующий день, когда переезжали в
          следующее место, а в первый раз мы подъехали с западной стороны и эту
          статую не видели.
        </P>
        <P>Вместо огромного Будды нам попались несколько буддийских ступ.</P>
        <Img
          description="Буддийская ступа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BqEqMM5qSVzVyF4qYWRRT_NyBApgRolheH7jDR37jpA4fXlANo8JBxXb7vtNrVKgkAgcfAUDmoJ34Kv7jgofuQZ1BUe77B0HgH9ZhtbOrZVFgH-B5IghS1N592Gnbn-FGh2lOJNBeGwU6oDVDjChkR=w1250-h779-s-no?authuser=0"
        />
        <P>
          Ступа — «макушка, куча земли, камней, земляной холм» — буддийское
          архитектурно-скульптурное культовое сооружение, имеющее
          полусферические очертания. Преимущественно представлены в монолитной
          форме; менее распространены ступы, имеющие внутреннее помещение.
          Первоначально представляла собой реликварий, затем стала памятником,
          возводившимся в честь какого-то события. Исторически восходит к
          могильным курганам, сооружавшимся для погребения царей или
          вождей.(с)Википедия
        </P>
        <P>
          Проехав на скутере еще около километра мы наконец-то добрались до
          входа в храм. С этой стороны он представляет из себя здание, где
          продают билеты. Цена за вход около 10$. После покупки билетов нужно
          поднятся по каменной лестнице. Набор высоты не слишком большой.
        </P>
        <Img
          description="Дорога к пещерному храму"
          src="https://lh3.googleusercontent.com/pw/AMWts8BpM2pOBGa5nJHPIFcRGcGzcwq4BnisqXRE4L5GTvVAwabCsD8C1MGEEl1pX85_Uw3nbNZFlIH6F2RLRYHVfuN0hZx3kOOSlHrKWNeqEt6t14oF_h_KgsccIxVrdwPoRMbw7zNqVGrvS84YS1baXeUD=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Вид с лестницы ведущей к храму"
          src="https://lh3.googleusercontent.com/pw/AMWts8BevwWaL5xNj3_yppLfOU6lM0S7pWt09Q0uAOz7N0MfoaJJBw4BFp4Em8CjLyPu-XzTeZnGL-I_P_yr3m1PeVSfvpoNQt2pHcK0B3FH4q43ty47DnohTzrKZ2GoPISrLNnvMt3LG-wBz6x1B7jhvAe3=w1250-h840-s-no?authuser=0"
        />
        <Img
          description="Здание, где проверяют наличие билетов"
          src="https://lh3.googleusercontent.com/pw/AMWts8Bc_iFJjiMR_eqNauV4EvBnoERk8ftxY63MIqpEQJKBceUM6TlLQBDel_Dfk_x30SH0SoKXiN0nijDWIxY8Ebsg6UIzDJAPbd8-bD3hlTCS7DVtezs5DxWBpn8BNUPYYVoE4xTOZnW8IgFMuOnoI0n-=w1250-h834-s-no?authuser=0"
        />
        <P>
          Так как достопримечательность довольно популярная и туристов сюда
          везут очень активно, из-за этого в некоторые пещеры зайти довольно
          проблематично, но всё же возможно))
        </P>
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8DnZn8MkJeocxB2rfC000eoFRkJ-mAA6ns_gULimBiLi3gf0BOLJ2QzSlC2esCYOUr1oUAQAFn-TmKLFMkayQIlih-Lhz0lfiiNgNSruflo81XOQea1wIcQkcq2NejZx8gdvEbXqsqft8n5ZmicTVN5=w1250-h795-s-no?authuser=0"
        />
        <P>
          Если говорить более точно — то пещерный храм — это не одна пещера, мы
          зашли минимум в восемь. Если посмотреть на фотографию выше и ниже — то
          можно увидеть белые постройки, напоминающие сооружения религиозного
          характера — это и есть входы в пещеры, каждое крыльцо — вход в пещеру.
          Размеры у пещер разные, многие совсем не большие, максимум на 20
          человек, при это придётся стоять вплотную друг к другу, а в самую
          большую пещеру поместится максимум двести человек, так же поставленных
          плечом к плечу.
        </P>
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8DTDu7uFcyuJmgP59FWeqvDlGehvgUnUtUMRqKJz6PX7QpkfJcUOUdiMoeMQvhDARbJREZceV5RnhkGWTGfIoXYXfkjrkcKUl0d_Yj-QISheZmPpn3eGJh6sGD8O9P90oq1vHuqpI8WtwDc3wLCDkEa=w1250-h834-s-no?authuser=0"
        />
        <P>
          В пещерах в по большей части находятся статуи Будды и еще некоторых
          персонажей. Будда представлен более 150-раз. Есть Будды огромного
          размера, это как правило Будда лежачего типа:
        </P>
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8CNzvan8vkRJuJpNZSvZrgTEzCOOdrXg_mObFS0JPW5GnCPWjahznXlPnerCf8v43--b_G7Z9XvTeVvqxJloetefiltGJ5WO5CjF-61o_BruD3FgUXdE0_N_EerHIni2-CV_jyOKovqGrQswIlxj12f=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cs6R4pPHLI-BHmzYytNY5E-hFLguGlH3CH9kSFzhu4GBVWzNDHwk5Px3MYypXNCllKTEP_JXzD-jQ3yrHR6SMyCr6VYy-sajHVPp3TRkW5tXr4h7DIiip8yfmo9J5ugj_VpYF9Ujc6p9xorjk9mEug=w1250-h834-s-no?authuser=0"
        />
        <P>
          Есть Будды сидячего типа, они размером поменьше, но всё равно больше
          чем обычный человек.
        </P>
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8CkoTClZURIJVhJTK5-r62JCcWCVv5oKPwyqwaH8kIUoks0t6da4bZSQ67XD83akkg_U4MQUFzLlGb8bXKBj4VpSMwCXNr35BD5pL48KjqQwQW1Xl0iyABXSIC0mBni0IYC6MGnAD8KPyr8EwuupUUW=w1250-h842-s-no?authuser=0"
        />
        <P>
          Так же очень много Будд стоячих, в основном они немного поменьше
          ростом чем современный человек, но всё-равно довольно большие.
        </P>
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8DmDOAQQm6DVrToHJvYJben0EWqwXY6NwX2CJe_enc7762ZSpcTHPIrbkp9Zbq1mho8l0mZmD5Nh4eB89iW9s158ELfSgoDFogT06svvTcnnQg8ppZzxogfHWDNW7Kr-3Wj0okmCvLrD8clPkcly7f2=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8DXKNQKLF4dU7Z5zILE38l3Ba7Qfb8Rl8n2N8Z8BXdPaJU8xBLeIzMR1rU8iw737rvbYK0V66sxx0ku5H-pnur0SxRu24DRttkYF7uwU_wdt4g0MN6oTctZnmWjbj0RKoBtNX0j_xA_hGjn_5g2zKHK=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8D_NDKWeQchgDL_Dnuv_juU0g80xbaOOQloO-126NUcL1Ue3p-0pbh1tIjC79KBVgq2mjXNc7O5NjnLPhM-ctq6QYy0ZdCD1TK7X7nKPvSwkEN3Q2dmLj4MEzvt-3GgdrDraWAOBbkUfBfGx9k4_DKH=w1250-h833-s-no?authuser=0"
        />
        <P>
          Ну и для того, чтобы Будд точно всем хватило есть Будды нарисованные,
          так называемые фрески.
        </P>
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8Auiidi4h2z-ckzq9MO2dJdR2ZMw-4pVRxAqoikcIzENicCVQ3Inadit0lvSCudPAnSHapxIz4jOnrbmm0WgAL-NkBB5EjQt4ow5OW8jSKpneesWMEY7TB1CuCUEyqmLPsQOvAAYPMvd5lAOWNC39G0=w1250-h844-s-no?authuser=0"
        />
        <Img
          description="Пещерный храм Дамбулла"
          src="https://lh3.googleusercontent.com/pw/AMWts8ArDf9nnjZJ5MMPabSSac2oI2X7d8TG7KO4AjsTBSPpNEdqPsVwYd18-byIZsSQs6bNlkDRVxZCW7_AY1SRvEDIV_9grjcOb8HfhoH9GTJQNOJArIlWgVA6W8J0zTACsRqqsz8RmuisJjLnuJqHMkMM=w1250-h834-s-no?authuser=0"
        />
        <P>
          После осмотра Пещерного храма мы поехали к конечной точки этого дня —
          Сигирии. Тут находится Очень необычное горное образование с остатками
          древнего городища на вершине. Но перед этим мы заехали на ближайшую
          отельную улицу и нашли себе бюджетную ночевку. За те деньги, что мы
          отдали(1700 рупий) мы получили очень крутое жильё, а хозяин
          посоветовал нам подняться не на саму Сигирию, а на соседнюю гору —
          Пидурангалу. Причин тому две: во первых очень много хотят за входной
          билет на Сигирию- 4500 рупий за человека(1600 рублей), а во вторых —
          вид с Сигирии конечно должен быть красивым, панорамным, НО, с Сигирии
          не видно саму Сигирию, а это уже большое упущение.
        </P>
        <P>
          Немного передохнув с дороги мы поехали к Пидурангале. Эта гора
          находится в двух километрах к северу от Сигирии, входная плата сюда
          гораздо демократичнее — всего 500 рупий с человека, около 200 рублей.
          Пока мы поднимались по довольно крутым лестницам и тропам — нам
          попался очередной огромный лежачий Будда с отвалившейся облицовкой.
        </P>
        <Img
          description="Будда по пути к вершине Пидурангалы"
          src="https://lh3.googleusercontent.com/pw/AMWts8BxakLKn0X9TTUnMHxAFFJI5InOG-9wOUh_xH-zHXWpbAZvkMV2pSEeDTjAQHRxhQjY_eIxGenQxsA1n6nyjCC3lj85QUnWW6ah4QAzfHsvo8L3fk_FqhiVv0bC8_J0hMQ1mOeyTaQfTj6_MAwFWphn=w1250-h834-s-no?authuser=0"
        />
        <P>
          Когда мы наконец-то добрались до вершины перед нами открылся вид
          крайне захватывающий и необычный. Скала возвышалась вверх над
          равниной, как знаменитые американские горные образования в долине
          Монументов, но там их много, а здесь она одна. Так же уникальности
          добавлял бесконечный тропический ковер из деревьев вокруг этого
          памятника природы. На вершину нашей обзорной точки мы поднялись
          довольно рано, около 3-х часов дня и чтобы сделать более красивые
          фотографии нам пришлось ждать еще около двух с половиной часов)) К
          закату на скале оказалось приличное количество туристов. Среди них
          были туристы из Германии, Канады, Индии и других стран. Все провожали
          солнце и любовались видами этого уникального места.
        </P>
        <Img
          description="Вид на Сигирию с Пидурангалы"
          src="https://lh3.googleusercontent.com/pw/AMWts8CrUsofq2sEiyEhRlY6Al3HHcPvkKbuCrjiqmN85vN0nDr6LAX1VSyBGMltbCRLlpR3rpA66Z7AqxH9M-8h8Yx1kgToZeNwOad1gkSQ0n-ZNWW3uQidt-Dstm77TbSzKTr8UORBmoqaeiJZuWCLGjyU=w1250-h779-s-no?authuser=0"
        />
        <Img
          description="Горные псы))"
          src="https://lh3.googleusercontent.com/pw/AMWts8AkY3xsc8_AcTTx8qObAaoRf6Oz1mbHO7KOe40SEtjIWcLF37adrRYIC6C7SVz8v_aUjvpbNVWaaLiGXzl063tZqugl51dFHnXlFeMztblXLgcblQx-quwoFWvEekaPYFmREtXXgD5JWqRtJUN7tTnR=w1250-h750-s-no?authuser=0"
        />
        <P>
          По возвращению домой мы наблюдали за купанием слонов в местной речке.
          Кстати в Шри-Ланке есть дорожный знак, который предупреждает о
          возможном появлении слонов на дороге))
        </P>
        <Img
          description="Шри-Ланкийские слоны"
          src="https://lh3.googleusercontent.com/pw/AMWts8B_DwfnEi-Z8AoFN3MNVZCOhCyAgjJMGuDbn5VilYW3fSROd7lLs0IBRLLFGavVTMb7hjl-8XLG4mwYXt8M_w0ZWzyv_-y9H7n1S4rGfKSBj-rteI1ZDvxbBct9vktACbRiByUzd1i3CyBGy5vNc-1n=w1250-h843-s-no?authuser=0"
        />
        <Img
          description="Дорожные знаки Шри-Ланки"
          src="https://lh3.googleusercontent.com/pw/AMWts8CsBR1tYjYJHYLalNCuSRVBMPxnOwgOF9IMtb14YWfEeZ-bLHhin186IPqqaif30vQTLuDranLNXdVe-46TgENbma5jT5t9UADbYe9OaBGi0yIL1jGwAyd9gEn2xy_OG57ABjzrEQO7q1r3m6LOo5YK=w1250-h834-s-no?authuser=0"
        />
        <P>
          Ко времени нашего прибытия в отель мы уже сильно проголодались и Оля
          пошла выяснять, что же можно там у них покушать. Так как Оля очень
          любит пробовать национальную кухню — в этот вечер мы кушали как раз
          блюдо характерное для Шри-Ланки. Название блюда наводит на мысль, что
          это что-то очень простое, называется оно Рис и Карри(Rice and
          Curry).На самом же деле это прям целый комплексный обед, с которым мы
          не смогли справится до конца. Итак, что включает в себя это блюдо: в
          центре стояла огромная тарелка с рисом, это риса там было около
          килограмма, именно с ним мы и не смогли справится до конца. По краям
          от огромной тарелки находились тарелочки поменьше, их было не меньше
          шести. В каждой из них было какое-то своё блюдо. Из того, что мы точно
          опознали — в одной была нарезанная курица в соусе, в дугой какие-то
          стручки, да и в общем-то и всё, остальное было что-то неведомое, но
          вкусное. Что характерно для всего съеденного нами в Шри-Ланке за всё
          время путешествия, опять таки в отличии от Индии — не было ничего
          адски едрёного, кроме одного красного соуса в Хиккадуве, но это
          исключение)) Ужин удался, мы поблагодарили хозяев и уже нужно было
          ложится спать. Подъём был ранним, а переезд еще более серьёзным, ведь
          мы планировали пробраться вглубь острова, к чайным плантациям и одной
          из интереснейших точек обзора — Малому пику Адама!
        </P>
        <P>End…</P>
      </PageWrapper>
    </>
  );
}
