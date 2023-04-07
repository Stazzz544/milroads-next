import Img from "@/components/blog/blog-components/img/img";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Mexico2018p2() {
  const { title, description, img } = getArticleItems(4);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Чичен-Ица</H>
        <P>
          Подъём был ранним, солнце еще не взошло, а телефон показывал 5:30
          утра. Мы с Олей быстро позавтракали курицей, которая частично осталось
          с ужина, собрали вещи и пошли к нашему автомобилю. Путь до древней
          столицы Тольтеков составлял 214км. Существовал так же и альтернативный
          маршрут, проходящий по платной автомагистрали и расстояние могло бы
          сократиться до 181км, но денег за проезд там хотят слишком много,
          впрочем по бесплатным дорогам ездить даже интереснее, не говоря о том,
          что их качество превосходное, а скорость можно развивать до 160-ти км
          в час, само собой нарушая, но так делают все местные жители.
        </P>
        <P>
          До Чичен-Ицы мы добрались к 10:00 утра и первое, что мы увидели войдя
          на территорию комплекса — это огромную пирамиду Кукулькана.
        </P>
        <Img
          description="Чичен-Ица, пирамида Кукулькана"
          src="https://lh3.googleusercontent.com/pw/AMWts8CE4V70FDI8pSiRp7rf8W01y2ild3xwaJUNNWwAdAei9ZmN3knGxiAyY9BiYK0RpLBKnYK6AOxlxOmVHqEOuZrh-h7xIYB57UW7Uvc8ICyk3MF7GpOXg1RN-GRAFymyggBgFwGSvzG30Y5UIFmdfprv=w1250-h834-s-no?authuser=0"
        />
        <P>
          {`
          Высота пирамиды составляет 24 м (плюс ещё 6 м — высота храма на
          вершине), длина каждой из её сторон составляет 55 м. Каждая грань
          храма имеет 9 ступеней. Со всех четырёх сторон от основания к вершине
          пирамиды ведут четыре крутые лестницы, сориентированные по сторонам
          света. Окаймляет лестницы каменная балюстрада, начинающаяся внизу с
          головы змея и продолжающаяся в виде изгибающегося змеиного тела до
          верха пирамиды. Ежегодно в дни осеннего и весеннего равноденствия
          можно наблюдать уникальное зрелище «Пернатого Змея». Тень ступенчатых
          рёбер пирамиды падает на камни балюстрады. При этом создаётся
          впечатление, что Пернатый Змей оживает и ползёт, в марте вверх, а в
          сентябре вниз. Каждая из четырёх лестниц храма имеет 91 ступеньку, а
          их суммарное количество равно 364. Вместе с базой-платформой на
          вершине пирамиды, объединяющей все четыре лестницы, получается число
          365 — количество дней в солнечном году. Кроме того, символичным
          является количество секций с каждой стороны храма (9 ступеней пирамиды
          рассечены лестницей надвое) — 18, что соответствует количеству месяцев
          в календарном году майя. Девять уступов храма соответствует «девяти
          небесам» мифологии тольтеков. 52 каменных рельефа на каждой стене
          святилища символизируют один календарный цикл тольтеков, включающий 52
          года. На глубине около 20 метров под фундаментом пирамиды
          располагается карстовое подземное озеро, которое может создавать
          угрозу для её разрушения Википедия(с)`}
        </P>
        <P>
          На против пирамиды Кукулькана находится огромный стадион для игры в
          мяч.
        </P>
        <Img
          description="Чичен-Ица, стадион для игры в мяч"
          src="https://lh3.googleusercontent.com/pw/AMWts8CxvqRGeuheBdwTtB9vXF3OiGuA2sf8iV091pi0ypUjsS48Arcgz_QnwTjBl7tnjAVEHdECAXtigkBqQixkodX6wxdD4I_xQFQ_mWmJilErRtf0kFOemfHy0KX6ZMQodpYxdKAzR_v0YpJSRDo_cDD0=w1250-h834-s-no?authuser=0"
        />
        <P>{`Стадион в Кобе на фоне него выглядит детской площадкой. Да и играть тут в целом гораздо сложнее, так как кольцо для меча расположено на высоте около шести метров, а забить мяч нужно без использования рук и ног))`}</P>
        <Img
          description="Чичен-Ица, стадион для игры в мяч"
          src="https://lh3.googleusercontent.com/pw/AMWts8Am-Y2Ur5FqETPWJfZLMKSY1c5VCFZBYVXlj3i5R4xff3rr_FYgEWkdCg8JRNob_aCHy6punLEfSbRpYFAaAa8RrGYvN6rjNyLBlR1FO9RZw5XyArv_UKS5YETFWkA-f4wPYsG5DdY5bYBEG7ZAISey=w1250-h834-s-no?authuser=0"
        />
        <P>
          Еще одна интересная постройка на территории комплекса — это Храм
          воинов.
        </P>
        <Img
          description="Чичен-Ица, пирамида Кукулькана и храм воинов"
          src="https://lh3.googleusercontent.com/pw/AMWts8C-62UhoJ6bVdjpyAetaJL1-7gKi-EgrGevmL-f3tsLo_Ej95cUNYaJ6ZRQrY8LGt5qM_gaZ1HYY4_kFLz6_Di60xVF6GeKvjHv71pMwQSbgMAlZmmkz6z2Q9pdawC5uETeD_sYQEKYoBdXiVcnci3Z=w1250-h849-s-no?authuser=0"
        />
        <Img
          description="Чичен-Ица, Храм Воинов"
          src="https://lh3.googleusercontent.com/pw/AMWts8DymGTrH9zuI_uG9Z-6qQMgnoIlERWHi9GqphAkjRykqG8moVUtH3godC4MqXV_4XzJamd4HDCbs08dwtW_hUrP8R_cFxbNGvmlQNL9iZ6WlHI4PuH-UzP1kfwNHtqzpVD6w_Mj9hjbEJsnY7Xw2_lu=w1250-h821-s-no?authuser=0"
        />
        <P>
          Перед Храмом воинов находится площадка с четырьмя рядами колонн
          высотой до 3 м., на большинстве из которых изображены воины, что дало
          название памятнику.
        </P>
        <Img
          description="Чичен-Ица, Тысяча колонн"
          src="https://lh3.googleusercontent.com/pw/AMWts8ATYM1CyebE_5NQ94CUUOl67wxXxHffRBtqTZrVkHtoziHnkJaa4oC5DYV6YZctpP_2rrGS_GFIHlqyiYt3gZmbOK2-I4pMWs2O3HJhqQpjjGxTqigXrAwLe29ajrhWD--Y2bsrnzvy_MPsWWs8eylB=w1250-h834-s-no?authuser=0"
        />
        <P>
          Вероятно раньше колонны поддерживали крышу из тростниковых листьев, и
          это была территория рынка.
        </P>
        <Img
          description="Чичен-Ица, Тысяча колонн"
          src="https://lh3.googleusercontent.com/pw/AMWts8DXKUvtw6l4yDbTYlPGE-mUKsGhdRZStNKEuYq5cJDUaGmSspAZSTmMEbRQkYZ1huDnnPvNxJvNoQnKjvnMAOM-Ie0DH_2RcBn8DThX_-kw63sgwezgT56AI2k04dAItxpfO0x7LWzGatD0zzZDgHiY=w1250-h834-s-no?authuser=0"
        />
        <P>
          Колоннада носит название «Группа тысячи колонн». О том, какое же
          реальное количество их там находится — информацию в интернете мне
          найти найти не удалось.
        </P>
        <Img
          description="Чичен-Ица, Тысяча колонн"
          src="https://lh3.googleusercontent.com/pw/AMWts8CSYdlVrhISBqxlLWMd3wb6UDpxVBPvI0SFeEIYR0_YpUHhRML6cLp4NTy7G50xytIN3fVtqKqmfqiZeRJ17cMoiKBRRWiNgFv8tpN9sm07VLh5mmaLWIu0MKZMQfPxQRWTeDEg2rPkoZ_uluu31ZHj=w1250-h834-s-no?authuser=0"
        />
        <P>
          Еще на территории комплекса представлена реконструкция жилого дома.
          Стены выполнены из дерева и глины, а крыша из тростника.
        </P>
        <Img
          description="Чичен-Ица, Реконструкция жилого дома Майя"
          src="https://lh3.googleusercontent.com/pw/AMWts8CNRpD83Y3v9Ww4hCX3q8nUBEb2gHOQK5mfljWXXm3AFPdf4cJM14uQPhKwBp0aLKYJlb-ZkpGurbuOANmdYuimYzbADIeY9c6ljmfsNqGTu4p7zcju5uHusdVMMLbgR2Gbf5JlykMBGUaJmfxeOe6c=w1250-h869-s-no?authuser=0"
        />
        <P>
          Так же на территории комплекса есть еще очень много мест, которые
          можно посмотреть, например два сенота, много мелких построек, не
          высокая пирамида и обсерватория. К великому сожалению до обсерватории
          и пирамиды мы не дошли, т.к. почему-то подумали что мы уже обошли всю
          территорию и увидели все места, а на самом деле они находятся немного
          в стороне и их не видно из-за деревьев.
        </P>
        <P>{`Следующей точкой на нашем маршруте был древний город Эк-Балам, но перед длинным перегоном нужно было немного охладится, ведь пока мы гуляли по Чичен-Ице солнце пекло со страшной силой, а воздух прогрелся до +35 градусов по цельсию :)`}</P>
        <H>Сенот Ик-Киль</H>
        <P>
          На Юкатане есть уникальные места — сеноты. До этого момента я никогда
          ничего подобного не видел.
        </P>
        <P>
          Сенот это — форма карстового рельефа, естественный провал,
          образованный при обрушении свода известняковой пещеры, в которой
          протекают подземные воды. Сеноты находятся на полуострове Юкатан в
          Мексике и близлежащих островах Карибского бассейна. В прошлом
          использовались древними индейцами майя в качестве водных источников и
          мест для жертвоприношений. Википедия(с)
        </P>
        <P>
          Один из ближайших сенотов к Чичен-Ице называется Ик-Киль. Он
          расположен на территории отеля, облагорожен и естественно не
          бесплатный, а для первого знакомства с сенотами подходит великолепно.
        </P>
        <P>Спуск в сенот выполнен в виде винтовой пещеры со ступеньками.</P>
        <Img
          description="Сенот Ик-Киль"
          src="https://lh3.googleusercontent.com/pw/AMWts8ABXkUNZZSTOKSj0fF8UWIIlE6yrTow9DEuOhhoQY2HxkTLASZFgxj4wVHhx46KyZ7e8GaSCaGLSJksUyR4tNrsaE_wbLJPsSj1FyoHFVFnWg4uOAYN4xkp7LLHVuZGu3tWCWwgJJh4LlK6LT9DD_sJ=w1250-h834-s-no?authuser=0"
        />
        <P>
          Глубина в сеноте очень большая, поэтому те, кто не умеет плавать будут
          вынуждены взять спасательные жилеты. Так же предусмотрена возможность
          прыгать в воду с специально построенной для этих целей площадки.
        </P>
        <Img
          description="Сенот Ик-Киль"
          src="https://lh3.googleusercontent.com/pw/AMWts8As5CfhXBaLbSUOhj9Bp6TDwqBUj_BxLmGm8nQL51WO3aYfobwrSezEZWNSUA4nJMxBGDrwLdla_POh7h2vWU06_nKehZPtX3KNwndIny5j-Jo4ylyMIKfFK3vdebVSSTY6UXZeMq0Pqb0NbgK6tFnN=w1250-h834-s-no?authuser=0"
        />
        <P>{`Вода в сеноте очень прозрачная, температура как в хорошо прогретом озере Ленинградской области. В сеноте плавает рыба и в целом создаётся ощущения какого-то затерянного мира… если бы не толпы народа :)`}</P>
        <P>Освежившись мы продолжили путь в Эк-Балам…</P>
        <H>Эк-Балам</H>
        <P>
          От сенота Ик-Киль до Эк-Балама около 60 км по трассе. Название города
          переводится как «Черный ягуар», а старое название города — Талоль.
        </P>
        <Img
          description="Камень у входа в Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8BQIW3YXSb3q4kKOYnkgEEnOoUmGhbQz2kKtaum750d6ncldGYYbUccNNE6yoYmykfUqHv6RCR2bdh1IP957Hlk4WNFWXNW5MrEazNTJs-SqABubEyQ19dF_1KMXpJPCNCFkBbK4THL1qId3hi-RENj=w1250-h834-s-no?authuser=0"
        />
        <P>
          Вход в город выполнен в виде оборонительных ворот, но вот от самой
          защитной стены мало что сохранилось.
        </P>
        <Img
          description="Эк-Балам, Овальный дворец"
          src="https://lh3.googleusercontent.com/pw/AMWts8CSon-fWXQIPuMwfrFR3gLHGV5KDX6Bk6j9rhEh5FGvDETJqML-cDmaICzdSRbPv1G9W7IGTgV5KyloW05RzRakf-oawcsfr4fPaPjAjK7mLQ994Xfw7_17T2nVr8Pfm9uGh2VkJBZ1FZSO9DbPFj8N=w1250-h834-s-no?authuser=0"
        />
        <P>
          Сам город на фоне той же Чичен-Ицы или Кобы выглядит очень сжато, так
          как постройки расположены очень плотно друг к другу.
        </P>
        <P>
          {`В Эк-Баламе несколько пирамид, но все они довольно маленькие и не
          совсем пирамиды )) Это здание называется Дворец Las Monjas`}
        </P>
        <Img
          description="Дворец Las Monjas, Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8AjmzkhfZp_ZDTlDyXSCrpw8OYwWpEP70dcJu0FUkqNZrXEjBdnYXgt9JXYK-W4oIUj-bqxFxoDBm9flXEfeO8elN-Qv5Z2n_8ad9XBVp9fo905j3k5gR3wYx2fmhKZXbSBR74erarG9wrCK3rPSGbB=w1250-h834-s-no?authuser=0"
        />
        <P>А это пирамиды-близнецы Las Gemelas.</P>
        <Img
          description="Пирамиды-близнецы Las Gemelas, Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8DN9HsEnHnaqRAId4qhASkFetUWdyMz6IJ32vm1iXnU6dmXUHU1VZ9SO69wKYZSi0L6Veu_Bf9PMWAQmeuBZ-y3n8Hqs8Oz-LttBc0c-962rQ7VAa2pNgYLq-mFq3eex9SI1JS4DykGvyRnxk3zbPq6=w1250-h834-s-no?authuser=0"
        />
        <P>
          Самой большой и интересной постройкой является Акрополь. Туда так же
          есть возможность забраться на самый верх, что мы и сделали.
        </P>
        <Img
          description="Акрополь, Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8BXcMdhR0btNKzdmsqGLKu7KiHZX2B_LWuKC4DaZfbdD3ckwfds7hK0E2AAFwinox-RfCghCiFbj0TR9dziOfsWB8LfDLaj6hhKDiOB7AVHFO314TxlgzN3Zie8hmNoW7SRk-QVkQoiTt7PWXZs7mxh=w1250-h834-s-no?authuser=0"
        />
        <P>
          В средней части здания есть балконы и входы во внутренние помещения
          украшенные фигурами. Фигуры то ли очень сильно отреставрированы, то ли
          вовсе новоделы, понять сложно.
        </P>
        <Img
          description="Акрополь, Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8BaMAvL-Tp7UOlP-rQ83IOSPEhJLuAoD4RlkDYjQ54bcYr3nubTm0fGpAFlOpsb10_e-bLdXam2SlYgPV3j1fXWQ1avFGlWCjnm6dEMMXYDML_LAnrDZcRL2VHRx20kJWZTSgXtwH0pYmhpqEJTCi0M=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Акрополь, Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8BfuxWZ8-gqtxhfDAxvON2zB1reMVjyVW1DQilSbx9VzovwBXriKJknF3jJwahfFvvPtZL_98qQAoQ7y4V48GozRl-zkI80jKloggGlKX-102N6P0uz5KYyyfywbeZ2FqcFq_9NyCuAa3cx03vg3ECx=w1250-h848-s-no?authuser=0"
        />
        <P>
          На этот раз с верхушки пирамиды можно увидеть не только джунгли, но и
          некоторые постройки. Отчетливо проглядывается овальный дворец и
          пирамиды-близнецы.
        </P>
        <Img
          description="Вид с верхней площадки Акрополя, Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8CmB77crVsq7h-8g6lg6z04HeN7ahklFldd3jL-36uJ5xAJ15aXuqLuSDbaxKasUdXVly8ZY_JDu8XXZvMbt6hTx-BbPG6FBTpNbl13ducNIIRRMfTFd55qgd2Ew4Gz4f_zqyfcn_eckscJBFUU5Il4=w1250-h748-s-no?authuser=0"
        />
        <P>
          В целом Эк-Балам нам очень понравился, потому что он не был похож не
          на Кобу с её сильной рассредоточенностью построек и странными
          пирамидами и так же он не выглядел как Тулум, где вообще не было
          высотных зданий.
        </P>
        <Img
          description="Эк-Балам"
          src="https://lh3.googleusercontent.com/pw/AMWts8A_j35bzgCxPix-Lg0HWaW1_ZTJDd2-tpTyZ7Qk4YPprrs8exYyMti9XiTKxbOLGA0inyyrVMYmZPAPEoFy6Tat9RkTCE3iFItZsc7Zps6bIk6nh87Gw1aXOK6D4ny26Iu1SdCWqvTKzyO7S6meWYF8=w1250-h834-s-no?authuser=0"
        />
        <P>
          Во время прогулки по древнему городу нас с Олей снова изрядно припекло
          на солнце и мы решили, что еще один сенот нам будет только на пользу.
          Мы выдвинулись в сторону городка Вальядолид, где в пяти километрах от
          него располагались сеноты Дзитнуп и Самула.
        </P>
        <H>Сенот Дзитнуп</H>
        <P>
          Когда мы приехали к кассам, где продавались билеты для посещения
          сенота — на выбор был не один, а целых 2 сенота, первый был сенот
          Дзитнуп, а второй — Самула. Если купить билеты сразу в оба сенота — то
          получается значительно дешевле из-за скидки, но 2 сенота за один раз —
          это слишком много, поэтому Самулу мы решили оставить на следующий
          день.
        </P>
        <P>
          Если описать кратко ощущения от сенота Дзитнуп — то это просто
          фантастика! Мало того, что туристов практически не было, так и сама
          атмосфера сенота была просто за гранью реальности.
        </P>
        <Img
          description="Сенот Дзитнуп"
          src="https://lh3.googleusercontent.com/pw/AMWts8B87tg8faGjr4MEAgpbipmxBRB2u8gxtmpyl2xgqnx4MkGACmBF9_TtF8nqygfQsAYlD34qN4JBlAN4c0YRT2bDTUu3k1aUDJ_fLj21dB25LQrFUj965kt5XWDtE4vX0Pi5Y9ZIJv32NqePP_3HTHL4=w1250-h809-s-no?authuser=0"
        />
        <P>
          Чтобы попасть в сенот Дзитнуп — нужно пройти через пещеру. Вода в
          сеноте лазурного цвета, очень прозрачная. В ней огромное количество
          черных рыбок, которые не особо-то боятся людей и плавают вокруг тебя с
          интересом. Сам сенот почти лишен источников света, так как внутреннее
          помещение практически полностью замкнуто. Лишь небольшое, метр на
          метр, отверстие в потолке и несколько тусклых лампочек делают из
          абсолютной темноты полусумерки, но глаза быстро адаптируются и
          привыкают к приглушенным краскам, а слух к эху, которое благодаря
          отличной акустике разносится по всем концам пещеры.
        </P>
        <P>
          {`
          Еще одной фишкой этого сенота является возможно поплавать среди
          сталактитов и корней деревьев, которые буквально свисают с потолка,
          так же если во время плаванья захочется передохнуть — можно
          прицепиться к одному из уходящих в воду сталактитов и повисеть так
          какое-то время :))`}
        </P>
        <Img
          description="Сенот Дзитнуп"
          src="https://lh3.googleusercontent.com/pw/AMWts8AYHgem2CK6jKQm89mI5yeI3Ak22z-9T56_uSzY9bFTcqwGRxlnol3Z-Lampo2Ar1Maqa88t9v8Xtf57VOawbzi0CSBvyiUvmsFy2UH_DvoGO6Niq3V1PBwsv71XO0XBPSMJhb8O9GQWfUK-fB3sY0O=w1250-h834-s-no?authuser=0"
        />
        <P>
          Несмотря на то, что солнце в сенот практически не проникает, а глубина
          тут внушительная — вода всё равно остаётся более-менее тёплой. По
          ощущением около +22 градусов.
        </P>
        <Img
          description="Сенот Дзитнуп"
          src="https://lh3.googleusercontent.com/pw/AMWts8AsnDjAlR_kZRwymEm3O2gdfllbTpx6ctaSVgFB7eqhxoU1FO5Klw9TkFV-7TJeg9gNgOb9KHUxgL_4hEQ-9kippenFnQ5wKzsEQvSt4n4Ga6iyO1ENqxMQ6TavLg9IfViNrhKocVwdf2ezxTykatuz=w1250-h834-s-no?authuser=0"
        />
        <P>
          Кстати забыл сказать, что еще находясь в Чичен-Ице мы с Олей решили,
          что возвращаться в этот же день в отель будет нецелесообразно, так как
          на следующий день мы собирались ехать в Ушмаль — древние руины Майя,
          которые располагаются в удалённой части Юкатана. И воспользовавшись
          бесплатным Wi-Fi на ресепшене через сайт Agoda.com мы забронировали
          бюджетный номер(1000р/ночь) в городе Вальядолид. Это позволило нам
          сэкономить, силы, время, деньги и заодно посмотреть сам городок, куда
          после сенота Дзитнуп мы и отправились. А маршрут этого дня выглядел
          так:
        </P>
        <Img
          description="Маршрут этого дня"
          src="https://lh3.googleusercontent.com/pw/AMWts8CKJh7552AP_tjzcxrlx0MZo5bOkDrvK-xW_J_P-UM7i-5J-3KINuBmn6jJXBde6DrB9rLS-aI0whikfZ50HV8WRJ_xZfWnDRyJMQkMZ-whY8Clw9rn6U5UFOizkgE-Z9MRm9qgLkOuhIYTvBT-buke=w1138-h714-s-no?authuser=0"
        />
        <H>Вальядолид</H>
        <P>
          Город был назван в честь испанского города Вальядолида, в то время
          являвшегося столицей. Основан 28 мая 1543 года Франсиско де Монтехо,
          племянником и тёзкой известного испанского конкистадора Франсиско де
          Монтехо, с целью закрепления испанских переселенцев в местности
          контролируемой одним из племен майя — Купуль. Википедия(с)
        </P>
        <P>
          В самом центре города находится собор Святого Гевастия. Это
          традиционное колониальное сооружение с двумя башнями, возвышающимися
          над остальными зданиями.
        </P>
        <Img
          description="Собор Святого Гевастия, Вальядолид"
          src="https://lh3.googleusercontent.com/pw/AMWts8Bx9LQwaRzxQlPiobc1EZU2RgY7b96wtX8t17znG1I6Wn0qOzFpel9445HpBc81RHJo7Fz7EaKf5Bx954g6xw9Wjiph2Iis27W0Q1z2yHfgSvS_j4bkY9KLRSAyTQLBr0b-QjfTa6WjGEe1ZG8y_RYz=w1250-h834-s-no?authuser=0"
        />
        <P>Некоторые улочки города тоже очень колоритные.</P>
        <Img
          description="Улицы Вальядолида"
          src="https://lh3.googleusercontent.com/pw/AMWts8DVofM6Qvn-reViLZYvSON3pyA4Qd0rtvBPllDTXleRy_Iwqjkl57graYD5iOiCpJkHSoRDupp7Wlxd5iZDRMOPhgpPQCRabsxXly2SpGcKD1k-915jkIs-Lf6pSIM_0Fvdcn6BWzhTnY3KjMC1p1EU=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Улицы Вальядолида"
          src="https://lh3.googleusercontent.com/pw/AMWts8A4Dfe584fCHMFPT2yNc9m41ybcUYsDo0xLIP0-_WTsIr2jGzL0hb3jD_kQd1S7NOiIemPlQ314elGQkWkvdD_i2VBHaHqAK_cPucXM4OKiS4WGl0xhAPEeu3hMOU7KlmYaZANWZWVZhodGKrMMK1qG=w1250-h834-s-no?authuser=0"
        />
        <P>
          Тема Мексики — это скелеты, их тут продают повсюду в качестве
          сувениров, ими же украшают некоторые дома, парки и прочие места…
        </P>
        <Img
          description="Улицы Вальядолида"
          src="https://lh3.googleusercontent.com/pw/AMWts8DlYtkwTetvsPnsc4BMBdq-WyEJIvS_oVMH-geYVoflGj8UDJkhDsFM9IzzjU9HnjidqAKsMq3VQ_NMec-PMxBIeOVYXMAXxCOvQ5yFUT152rxXD8zvJI_lm9Dcyi-3KUs7T34edEikdxx3JalMQ25V=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Улицы Вальядолида"
          src="https://lh3.googleusercontent.com/pw/AMWts8D3hcm-kQYYboCVivqs3dKJqjfIlPo13Wxfwl-GSgH2ghJqL8oUn-h6mr7kJBw1xvBgjM-mx2t-UpzVUChFtv9DuWcIRdIQ3u26fccXT4-WqaYxDQGQ6qYJcZWhLxUB6btiL4-LeQhLwy3d3V1L8V-b=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Улицы Вальядолида"
          src="https://lh3.googleusercontent.com/pw/AMWts8Da96buOexCdMbl1n8lRRJYccKRQsqfUW6I8mKnl6sEbZFhQ0Y_R1aHw0vZTZXpyKgTKSbVNGgkbLPBVSw061UxgHQgrRow9rThq-d400jeNnWo--8AD0-Bq7twx9FCJzYkexDm_WHkauJi-HfBH8qA=w1250-h834-s-no?authuser=0"
        />
        <P>
          В Вальядолиде так же есть свой сенот, довольно большого размера,
          находится он почти в центре города, но когда мы до него дошли — он уже
          был зарыт. Большинство достопримечательностей в Мексике закрывается в
          17:00.
        </P>
        <P>
          В городе, кстати, тоже есть огромные гипермаркеты с ассортиментом
          практически не отличающимся от Волмарта в Плайя-Дель-Кармен. Перед
          сном мы съели ужин «Выживальщика» (см. первую часть отчета о Юкатане)
          и легли спать. На следующий день нас ждал еще более ранний подъём,
          чтобы добраться до западной границы штата Юкатан — к руинам древнего
          города Ушмаль.
        </P>
        <P>…End</P>
      </PageWrapper>
    </>
  );
}
