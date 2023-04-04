import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Emirates() {
  const { title, description, img } = getArticleItems(8);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Дубай</H>
        <P>
          После осмотра мечети шейха Зайда нам нужно было перемещаться в Дубай.
          Для того, чтобы совершить этот манёвр нам сначала было необходимо
          вернутся на ту же автобусную остановку где мы сошли и доехать оттуда
          до Абу-Даби.
        </P>
        <Img
          description="Абу-Даби, дорога возле автовокзала"
          src="https://lh3.googleusercontent.com/pw/AMWts8Aq__qzdyfanqEs7kuxlaaxo2QWZHb0p6YMysAzKVB6MinQ9XI0GYizERhy45yGn3DS9iypclIV9k7pkUOQu39U2tA5QwIBh0_qwH4Kze2XvGzlxLKoSYN6WQdWtGADAHT1Ul-_14RHXgWngA3Xl_11=w1250-h801-s-no?authuser=0"
        />
        <P>
          Автобус приходит на бас стэйшен в Абу-Даби откуда стартуют как
          локальные автобусы, так и междугородние. В Дубай ходят автобусы
          классом повыше чем тот ЛИАЗ на котором мы проделали путь от аэропорта
          в мечеть и от мечети до Абу-Даби. Путь от Абу-Даби до Дубая занимает
          где-то около двух-двух с половиной часов, в зависимости от пробок.
        </P>
        <P>
          Большую часть пути мы наблюдали из окна скукотищу: каменистую пустыню,
          периодически появляющиеся невысокие домики, что-то строящееся или уже
          не строящееся… Но как только мы подъехали непосредственно к Дубаю —
          откуда не возьмись посреди пустыни резко выросли высотки всех цветов,
          размеров и конфигураций.
        </P>
        <Img
          description="Небоскрёбы Дубая, фото из автобуса"
          src="https://lh3.googleusercontent.com/pw/AMWts8C7HTzFB_heHhL3-kIeY5RYHjSieoKVG12unH8tcAIs4-5dgO4aXXEmbq7wKm0Aohhpr0Bfe_P7stb6vde1MSsSmjrBY9wOnb5jp7hrdAW0qvMYB-65bNaaojbhmhQCP9KE_u-abhjeKq2vsB5I-9-e=w1250-h834-s-no?authuser=0"
        />
        <P>
          Мы сошли с автобуса немного раньше конечной остановки, чтобы сократить
          количество станций метро, которые нам нужно было миновать, чтобы
          добраться до небоскрёба Бурдж-Халифа.
        </P>
        <P>
          Напротив метро строили какую-то здоровенную П-образную елду, впрочем
          как мы потом увидим — в Дубае очень много причудливых зданий))
        </P>
        <Img
          description="Небоскрёбы Дубая"
          src="https://lh3.googleusercontent.com/pw/AMWts8B00PAPtwzhzOf1Go5J7X-k2XyTTMGRioeQXx-QF15mmjKr9JU3LY26SaMhwZs_II1U07gEX8BCHARQ3dBrFP6yM3kciZ6w3dvnMxLtD_ufezyGUM_3af4jlOVUaotq0JhMx4p9WvGW6aiXMBXUe5gn=w1250-h832-s-no?authuser=0"
        />
        <P>
          Как только мы сели в вагон метро — нас как-будто телепортировало в
          будущее, описывать словами можно долго, но гораздо нагляднее
          посмотреть на фотографии, как говорится «без комментариев»…
        </P>
        <Img
          description="Дубай, вид из вагона метро"
          src="https://lh3.googleusercontent.com/pw/AMWts8DI49yK1w1kG2VQmuk62iShYv92Qpjw8SLlaBZRWS_SU0dNZ7jjIP8sT_hmt8ab5MjjLV0wlPLawX0A-ZhSinvyAwK-37gVb6vkWLeUVEP0FBVQnW9OXFufND9YTGEp3gw1tDLjFMq-ATQm9txhukcq=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Дубай, вид из вагона метро"
          src="https://lh3.googleusercontent.com/pw/AMWts8DbRZW70oAN5EE0GyaTe_Pl9OX56pYD_Hs3DNpp2_Czr4RnUkI5J-ZyG74Nf_h5eug1DD9CeJzcIfkDy8ouOiXev3EnLMuZVskT6Uk7AFh9Er1b36d0VRbELCwA1J1Xay-oCyBeb8ETzx2C2hjPsLHZ=w1250-h834-s-no?authuser=0"
        />
        <P>
          Чтобы добраться до Бурдж-Халифы нужно доехать до одноимённо станции,
          которая имеет еще второе название — «Дубай Молл», а дальше долго и
          муторно идти по коридорам, напоминающим переходы между терминалами
          крупного аэропорта. В конце концов эти коридоры выводят в
          торгово-развлекательный комплекс, откуда, если вы еще не заблудились,
          можно попасть на билетную проходную.
        </P>
        <P>
          Так как до времени посещения у нас был еще примерно час — мы вышли из
          торгово-развлекательного комплекса на улицу, чтобы посмотреть на самый
          знаменитый небоскрёб в мире снаружи. Небоскрёб Бурж-Халифа оказался
          настолько огромный, что для того, чтобы его сфотографировать мне
          пришлось делать панораму из более чем 15-ти снимков. Из-за того, что
          точкой моей съёмки была на той же плоскости, что и первые этажи
          Бурдж-Халифа — на фото верхушка небоскрёба оказалась несколько
          сплющенной, в реальности же здание похоже на ракету острой и вытянутой
          формы.
        </P>
        <Img
          description="Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8A55XK3aaSbT9PPZ_nAW0TGaZ7MjVeZ7tpNTpi76gyscjnQrujwsfCsVF_McbT46TZd6cWxsuhmWl8MHpFiBZvONqNLw6KKRN0-tbwXYPPW-TXNX08iyljPhhkIhNw7X_BAWo5o4ZrESpaMqDIP2G5i=w1250-h794-s-no?authuser=0"
        />
        <P>
          Внутри ТРЦ тоже много интересного, например огромный аквариум, где
          плавают акулы, скаты и другие здоровые рыбы и не только рыбы…))
        </P>
        <Img
          description="Внутри Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DcwunkedF7iGMCsnbNWoTFEV6NX7I4gWWREX1yNLd6PehF4ABpHice9DNQ58P0Nn_wRi_1wbVY2mk5Kj52AzvuaagznftDOEDKgEsf9Z353ojl9nJiyzW0ip5W0mlEFPfIaW0KJ7FkLwzqmhkSQ4zP=w1250-h816-s-no?authuser=0"
        />
        <P>
          А еще в этом же ТРЦ находится знаменитый искусственный водопад
          «Ныряльщики за жемчугом».
        </P>
        <Img
          description="Искусственный водопад «Ныряльщики за жемчугом»."
          src="https://lh3.googleusercontent.com/pw/AMWts8CFfgy4gJ-Ew4BgbwIN_Qn-RErcHJSlmLy_nzFP4P8edxO1-kaRrHtqPRvk-r12jvK52ZP58SrP2K2_upGXuSgPoqzRXemE7lgqB-ym85YGo6EIJlFo9gCEGtjg-5LnSeGF2GHY0C0xnvX3GurqvbFM=w1250-h810-s-no?authuser=0"
        />
        <Img
          description="Искусственный водопад «Ныряльщики за жемчугом»."
          src="https://lh3.googleusercontent.com/pw/AMWts8AbbCyaRssYAIY1Z3yonMQ3Nn1oNdQJK_L7myql0OhaovOcjObUscLogwOdEUcO6XHk2CZFI0zhikI1GeH_2u9ufPqDseyB7KLBBz_fo4dgWC0RJN0xGOycKMsqubpgmbprPIv349DKfRLGdPNxZ3QM=w1250-h834-s-no?authuser=0"
        />
        <P>
          Ближе к 17:00 мы с Олей пошли к кассам, откуда по средствам лифта нас
          доставили на 124-ый этаж небоскрёба. Если в крации — небоскрёб еще до
          конца не достроен(внутри), а высота смотровой площадки около 450-ти
          метров(половина высоты здания). Тем не менее виды оттуда очень
          красивые, но есть и свои недостатки.
        </P>
        <Img
          description="Вид с Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DRXgXT8SoJxNuf7YrnMNUkQyVYz1pigW_L2CHLVjiL2gJ9pVnZ8Tql7uAkHqqCCs7YnMhjpABBZsgWp7TfwsqaSGcImvKRiQ22kEwfzYPMbAHAmzBgQ6AtGm2ZOCnXHoWSmHo73DxKs3iYwugCMdPp=w1250-h824-s-no?authuser=0"
        />
        <Img
          description="Вид с Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BFPXbGKVm6kiDi41LaW20C6uCKxQaXcv8l45ANI9NWLuQHqAHfngY8qhDcaeDglZUfDOrzQigfa7xeomu74di_YKJgJ2uaTV6cI7sBoI_cNvB6xiJ2gsCKE7c3m_z5TUYS0SbMTbaOcvPKRj_sKaeU=w1250-h846-s-no?authuser=0"
        />
        <P>
          Первый недостаток — это количество народа… Не смотря на то, что билеты
          продают по часам и например билеты на закатное время стоят значительно
          дороже, чем билеты в дневные часы — всё равно пока доберёшься до окна
          с интересующим тебя видом — можно состариться..
        </P>
        <Img
          description="Вид с Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8BdNrH16biqGHRFPOxJ2gp7eO-livE88saRw6rLq-SiI5ChLRFgw3m4juXj-ngEO0Cxtyl_ey5h3G5IAo_ixicO6mgy0F0Lpbexhi7L7vPfAvQXH-eeVd1rQ9stAh-mkZjHOiYbr6HmGIL0-TtMyHeN=w1250-h835-s-no?authuser=0"
        />
        <P>
          Вторым недостатком для меня стало то, что окна с «прорезями» для
          фотокамеры расположены только с одной стороны здания и эти прорези
          слишком узкие. Например на том же Монпарнасе в Париже прорези на
          порядок шире и объектив камеры можно просунуть за границу защитного
          стекла, тут же мой объектив(Tamron 28-75 f2.8) не пролезал в
          «прорезь».
        </P>
        <Img
          description="Вид с Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DpaMovZxqkBV61kMCOZ0wQOVgSsm3LsW7yB9VcPfAJHBIxideANgcJs6Aolp_TKUa7-F7ghbTIgfS7PIPBeqz-iWWg1TgoAUNz6RQAlvpMw6pceiGSDsxAdPX4ylqaP-a8lGrZCtAFaqLL1OhjivdW=w1250-h834-s-no?authuser=0"
        />
        <P>
          Третьим недостатком для меня стало то, что со стороны где в окнах нет
          прорезей(вид в сторону Абу-Даби) все окна напрочь заляпаны и жутко
          бликуют. В итоге не одной фотографии с видом в ту сторону у меня не
          получилось…
        </P>
        <Img
          description="Вид с Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8AUVie_vcfu2hvmdhIMj2m9DqXTJKlnLJQR1q0Rz0fcYt2RjpMzA6XykjhzyBMsvyc2TDkVgcAS_zkqLjKMF1Cmb0PX3EtM3yr00UnfAXQknYLuVyJsJT_tHwRAmpE_ev99kVkq_y4gnrNXbwoOSag4=w1250-h834-s-no?authuser=0"
        />
        <P>
          В целом от посещении небоскрёба впечатления остались положительные,
          хоть и дороговато оказалось это удовольствие.
        </P>
        <Img
          description="Вид с площади перед Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8C05R_cohWIj3A1dfbxnF1BYN2XnHZ5-DjwJLAGJ5UO3GNyJTrQsBVHvUSup0JxGt5hM4vV7RBNXaMJziB7eAcybwK2pfL_QRylzMFtpHIr9yFrKayTptAGqvgMjiykMTt3VnWf3mIblas7R5hBUWx3=w1250-h825-s-no?authuser=0"
        />
        <P>
          Когда мы спустились вниз и вышли на площадь перед Бурж-Халифа уже
          начанало смеркаться. Мы погуляли еще около получаса и начали
          выдвигаться в сторону автовокзала. Напомню, что для того, чтобы
          добраться до аэропорта Абу-Даби необходимо сначала приехать в город
          Абу-Даби, после чего сесть на местный автобус, похожий на наш ЛИАЗ и
          уже на нём ехать в аэропорт.
        </P>
        <Img
          description="Вид с площади перед Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8C9b_5wNWQ9Y1sbhqrbPULK6GjylXe_3h1am7tocv0ba7UuVYiKRxD1bLB18s0hAI9K9JJsPwBtJLb4hOSIJfo3F12lS02vufDi881FhRuTEHHS30QhL6g6Gi3vzDxktkaiuuZKvHC3TmjDt30sw8kg=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Вид с площади перед Бурдж-Халифа"
          src="https://lh3.googleusercontent.com/pw/AMWts8DUdT589MbFDMrLLEq5ian3cF4Tris46hAowNBujJOU8OZ1NingRoeZbj2cV6ckfpVmzcF4x0muOrvyAxhUwQaowdd-0W-biwgMtj2fwrJIIHFFoIkfX0bhFLD1SEWS13d-j0Sk5rYsr0VmH7enPcGe=w1250-h817-s-no?authuser=0"
        />
        <P>
          На вокзал мы добрались в 19:30 по местному времени, а вылет из ОАЭ у
          нас был в 2:00 ночи. Казалось бы времени более чем достаточно, но
          когда мы приехали на автовокзал — первое что открылось нашему взору —
          это человекоочередь длинной примерно в 150 метров. все они ждали
          автобус в Абу-Даби. В кассах нас успокоили, что автобусы ходят каждые
          15 минут. Мы купили билеты и начали ждать. Сначала прошло 15 минут, но
          автобус не приехал, потом еще 15, но автобуса так и не было. Я пошёл к
          кассе узнать в чём проблема и мне ответили, что большие пробки на
          въезд и автобус скоро будет. Учитывая, что до начала регистрации у нас
          оставалось около четырёх часов мы начали нервничать, потому что даже
          если бы мы прямо сейчас сели в автобус — то ехать до Абу-Даби примерно
          2-2,5 часа, плюс ко всему пробки на въезд, а значит скорее всего и на
          выезд из Дубая, после чего нам еще нужно добраться от Абу-Даби до
          аэропорта, это еще время…и самое главное — 150 метров человеческой
          очереди и отсутствие автобусов))) Через еще 10 минут ожидания
          наконец-то появился первый автобус и очередь немного сократилась. Я
          подсчитал, что в автобус влезает примерно 40 человек, а значит мы
          сможем уехать только через еще три таких автобуса…Ситуация накалялась,
          было 20:15 или 3 часа 45 минут до начала регистрации, а мы по прежнему
          были в Дубае, в 145 км до Абу-Даби и еще плюс в 30 км от Абу-Даби до
          аэропорта)) Прошло еще 10 минут, подъехал еще один автобус, очередь
          сократилась, но сильно легче нам от этого не стало. Потом подоспел
          другой автобус, но он следовал по другому маршруту… Через 5 минут
          приехал еще один автобус в Абу-Даби, было уже 20:30 , или 3 часа и 30
          минут до начала регистрации, нервы сдавали…через 2 минуты подъехал еще
          один автобус, но как оказалось — он влез вне очереди и перед ним
          должен сначала загрузиться автобус, который опаздывает…вот такая
          бюрократия…На автовокзале за порядком в очереди, как среди пассажиров
          так и среди автобусов, следит специальный мужик-контроллёр в арафатке,
          именно он и отшил водителя автобуса, который влез вне очереди, но
          перед этим они еще 5 минут громко ругались, слышал весь вокзал))
          Интересный момент заключался в том, контроллёр сказал водителю сдать
          назад, когда автобус уже стоял на остановке и был готов к посадке, но
          водитель сказал, что он не может или не хочет, было не понятно, и наш
          агрессивный контроллёр сам сел за баранку автобуса и задним ходом
          ловко отогнал его в отстойник, ждать очередь)))) Такого я еще никогда
          не видел))) Через пять минут приехал опаздывающий автобус и еще через
          три минуты мы наконец-то сели в тот автобус, который отогнали в
          отстойник. Выехали мы из Абу-Даби примерно в 20:45. Не отъехали мы от
          автовокзала и километра, как тут же встряли в глухую пробку на
          огромной автомагистрали посреди Дубая, которая насчитывала не менее
          четырёх полос для движения автотранспорта в каждую сторону. Я уже
          подумал, что это «всё, приехали», но наш водитель оказался крайне
          смекалистым и каким-то образом автобус просочился на внутренние улочки
          города, по которым он едва протискивался, ведь это большой
          междугородний автобус рассчитанный на 40+ человек с багажом.
        </P>
        <P>
          Через 15 минут мы уже мчали во весь опор, миновав пробку. Тут я
          немного упокоился и меня вырубило спать… Проснулся я на подъезде к
          Абу-Даби. Было около 23:00 или час до начала регистрации. Приехав на
          автовокзал мы побежали к кассам, там нам сообщили, что автобус в
          аэропорт будет через пару минут. Мы побежали в зону посадки, но
          автобуса не было. Местные подсказали, что мы не опоздали и автобус
          вот-вот приедет))) Ну а дальше мы без каких-лио приключений добрались
          до аэропорта прямо к началу регистрации, прошли все возможные контроли
          и вылетели из страны) Впереди нас ждал длиннющий перелет в Амстердам,
          и около пяти часов на прогулку по этому красивому и необычному городу,
          об этом я расскажу в следующем посте =)
        </P>
        <P>End…</P>
      </PageWrapper>
    </>
  );
}
