import Img from "@/components/blog/blog-components/img/img";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import P from "@/components/blog/blog-components/paragraph/paragraph";
import H from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Mexico() {
  const { title, description, img } = getArticleItems(6);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Канкун</H>
        <P indent>
          На четвертый день нашего пребывания в Мексике исторические
          достопримечательности подошли к концу. Конечно на Юкатане еще полно
          древних городов, но они либо очень далеко, либо не очень интересные, а
          другие крупные руины располагаются уже за границами этого штата.
        </P>
        <P>
          Самое время было обратить внимание на знаменитый город, который
          является прямой ассоциацией со словом отдых и курорт у американцев —
          Канкун, а если точнее, то его район «Zona Hoteletra».
        </P>
        <P>
          Канкун находится в 60-ти километрах к северу от Плайя-Дель-Кармен, а
          «Zona Hoteletra» — это восточная часть города состоящая
          преимущественно из огромных отелей, которые стоят на косе, туда мы и
          отправились.
        </P>
        <Img
          description="Карта Канкуна"
          src="https://lh3.googleusercontent.com/pw/AMWts8CM7n4Kbkl2O-lyfpSCromKLksSv3KKYxynPaoA7HPdmrmzzJmBqX-UW0qEgIlOhN14J-gKf9t_qhf7YZaPpuZuulH2z6XpFLDQE_IeT7A_BgLxe7Zgl-JJHUrRLeSTTVuH3OrVT_gjonMeEY3CeKr5=w1234-h702-s-no?authuser=0"
        />
        <P>
          На косе очень мало парковочных мест, а нас интересовала самая
          северо-восточная часть «Зоны Хотельера», так как там, по заверениям
          многих источников в интернете находится самый крутой пляж на Юкатане.
        </P>
        <P>
          Парковку мы нашли возле минимаркета с кучей сувениров, где парковщик с
          нас любезно содрал 30 песо, но это было лучше, чем наматывать круги в
          поисках бесплатного места.
        </P>
        <P>
          Первое ощущение от этого места — как-будто ты оказался в мини
          Лас-Вегасе.
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8D0dqYz4Tj1VmUKlVQYoCJNZUIVZROON84hfmCiGzcX7MmX156kAQ-TPst81ERJgxjF8hJGV4ZCfWz-ELmfzMFlf1lrNLMQInCY3Ow5M3Ft7fBU8Y6kugB0Nxa1qm6n6Pl33IfJCmZpGzoUQSN_Vz2h=w1250-h834-s-no?authuser=0"
        />
        <P>
          Повсюду творился какой-то развлекательный хаос ориентированный на
          туристов, любые развлечения, на любой вкус за ваш кошелек)
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8AX26g-X8t4G0UR0yFPeU86utlVtvPYIxniMUUhiOd1EDP2x9_xVrERJixHSsk187yuo7nMzcQCCWSoQghrGAHrhVYC-_lnewJ2NR9M2e4aOcGZnJVHrPwwpgtl8RTgldtHE_yHZyg4Mqb7tETnx2_-=w1250-h834-s-no?authuser=0"
        />
        <P>Даже кинотеатр был преисполнен понтами)</P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8DoOJ2XUMayl2cfhof2n_feYM6_KjwO1YQOJ3E2xORHdB-JjDDrJbQdHuYe3f1xunFFas7-IDf_ONknBEegKQiweKFyXWJKNioBzzf82lhNCu2yVQccZNDbVlGVr9UM1oHwl8-am9CpnejgbmKsy0eG=w1250-h834-s-no?authuser=0"
        />
        <P>
          Крайне странные магазины притягивали внимание, скорее всего на это и
          был расcчет дизайнеров.
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8ASy-6CWQVwCF2fXePBh9hmYlIL8giSx2mxA0uiRLWYktcnNr7lkXaM-LkvwtM76Ng0J5DrRZiXA_ufOTu241-UMgTuEumMneimWsP7RAU90UnVUZCCief7lU9_ObuhAfSwVvHcfe-zTy_rAXiyMSqL=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8DCy6Rgk5uSlN49_RdD6tfbDFMXbMbA9h9TuDaWVFTIaVpYWGZDHG8h7Rd3af_gq7ZRkg6iF5F2DJnj3Adz5wOaY2A7K17cAtyuMmUsqhcd5ac2UEHrkAQFQu-K7K6Zqv0uT7-QTyLG_mDDWmG2BvRQ=w1250-h850-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8BZx1HM4FkMqlO8KSYr6972fCX-H7DfsvL1FT0Uw8uVNM13LI-wCBuL5uYeZA3SLlZO6lW7NoSwDDQeOXHifBCO6BR-77EjdYaDownBbvqogHjcCbMmXcYHB-AsKFgq7TKBMS_2BNjhYshZmYG8KMJv=w1250-h834-s-no?authuser=0"
        />
        <P>
          А в этом, «армейском» магазине я особенно ярко почувствовал дух
          свободной и демократической Америки))
        </P>
        <P>
          А потом мы увидели традиционных для Мексики скелетов и вроде всё
          встало на свои места…
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8Dvm1Sir3PzfPhQzPGsqSvfSD0cpUUr8O6WL7BWynM_mpo40ov-L9UV1cuLeUsHgS86VuL6LaYqIWZ5oBdG9xx3wWK_eq1uO4cZJ00-QKriTQ0OReEsRO9i2RJue_P_m-2lER0T-ej7p-_Uv5vRZrSC=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8BZcXqMpJQcxxure96XNi4HRBFyqGrsPQ_oiTJykYp860LCpmJvwv2EsyFhnykwSAUrLvONN1kzvb-0JZO4IqZbtAHLYWUGEWheIpIV4IwHvDmqp-iaOV2NtW3b2AbMrsw_KuXBUY067_LDPqD1pYeg=w1250-h808-s-no?authuser=0"
        />
        <P>
          Чтобы добраться до входа на городской пляж нам пришлось изрядно
          навернуть круголей, потому что огромные отели напрочь отгораживают
          собой подход к морю, да и построены они так, что где заканчивается
          один отель — начинается другой.
        </P>
        <P>
          Местные подсказали, что вход на городской пляж находится возле
          здоровенного белого отеля, его можно увидеть на заднем плане
          фотографии.
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8DMA9dH57JGFJVbWuJQQreDlVyKAQ_vk5uBjN852kCQo6hrJl6gyUkJNPNXx1fgSGYcCHROEINXmMOAX5iNvU6YGrVmBdac_79YRaQqqYcYeFFx7gLjbpvpueheA60-1qhBgzDykDBFPPmGwrLpdod1=w1250-h834-s-no?authuser=0"
        />
        <P>
          Полоска городской части пляжа очень маленькая и находится между двух
          причалов. Остальная часть косы зарезервирована под отели и
          постояльцев, но нам удалось прикинутся «своими» и нас таки пропустил
          мужик, которых охранял вход.
        </P>
        <P>
          На фото ниже можно наблюдать буржуйскую часть пляжа, куда могут ходить
          только постояльцы.
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8DdH-AA7ix21dsqKqupSNavGBQznEDHOr87S56E2-lYw9tk983n4ySCdKtVo8bWefh0iwFt5-R1c1jEJPFy0Ai477gR6SKqCRtePW9PXCXfOaVOCk658RqEakn5P1H6syPuYYt6PXR0UGmCZ8uX9kWO=w1250-h834-s-no?authuser=0"
        />
        <P>
          Если пройтись по береговой линии около километра — то можно выйти к
          очень живописному мысу и маяку, туда мы и отправились.
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8A-LX1kd-FawhIikIAU-2D3ndcVFBZHD9Yu4DCChaPbmp63lQ2RHreWAhv3UuwxTAqAfHm50D02MkF853cHtj_qHk_t99NW4g2f0yAVZxT0-WVAPD2mTEiBWFS60fT7HJg79KqprzAI-aj6sl_SGZU8=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8AjByL9WIa4DyjvAQZSlxZnxAZ7kNVS_nUWfuvBZvPUqN4muGbotChIFCIOtneqOm3cIskPnu6brRk5Qnyuhf7CbRsH7EDR2SNqdm6J3jM0j2xhDJgp1EnRqPwfa2_JhDPQM8mTLLZXD_-fvvhddwtO=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8B35xwVTKWn3OZdKsqYD78iyOM2ex-gPR3DIgp3_MWzq2CLMMdVnw3r-Q5k1sCbFPkj3_Q2cK6k6mZnkSHHI6MdEBdPLNGzvcgUvVOvZps10Y-CrZ-1BTl5OBbxbIivf6C4sjgY9cT5MwE7AQKBdf8f=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8Ce5HkzyogrFL0fgu4F6rIn36BEUb7mYPA6TyNe5w87bedc9UHTMLvKw-ZCgUMPW70JKMdpxC3ZMRg-cZe7InjM1DA5hzUrTNvsP4236B3ujrLnscwPSg8AwehxI3nGR1LYDoOtP0cPLEFW0bz3xew8=w1250-h826-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8Djrehk0IPhsTCks41w9_hHOAJwSdDFsExkvkjvoRZ-B38WPXvIHGAbF_pDoNunNB7ugWqNALGMfB6wjWjWKfrn8QSuGL8JmY102_iR5l-h2_ULLs7P2dHtpyXW3GxVrM5_Vc7I_lxVJ5eqImJ1vdeW=w1250-h834-s-no?authuser=0"
        />
        <P>
          Возле маяка лежали остатки моторной лодки, которые были превращены в
          акулу силами местных художников :)
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8BHLzk7d27fSWQ-u5bViBUT_kmnBZG5NGE13hhylJpq3H_fLTs79UiJAjZnJ0DeKLb3aPt2_0gSQquSFDerqc5kpmw8A4BtAS9dbLaOR3fBz2r0fk6xiRvNygr3fseDgV4IaMxrbQInQjC15Z_LhRqU=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8BzvSL37XzFLnTW30nVsKjQ1NeRfP0i-P9EeO2XwcF434D3l92e7lQNZv6NZA8SLNLz7dH5D4iBYtHWvmu7eGI1vDm_Nsiwd27DR_1rKrmxHd9iyPkRyApYUXb8lFjpjHjuF3rQl_YbRsRJHXwbgzcJ=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8BBXG19S70kBgLc29Y7PsCIl0HM6bpQrnKislaXYArG-0nsu3mU_nUxmeNvuh6iRRVQBM5d_rPAJ9M62AjXsLkkndRcXrc7pqsJyAduHoYENTveSw7JDXtRsCdpOzvv2LwAn3fqmz3cud6qR6SRAHq5=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8C5lXHkgtSwy8IC8t4977f2Ovj7tC-bqPl9OvAqW36TpJcgxbH-bXdBV2ly5FUyONS4uAFsY0sJqsBtzyNRPLG7I95pCoPm_jYrFoF8o_GZ9b9gUdV1nmPVsFq1MrxlpZ0a_tCtAVvS96_-CLBH4XnZ=w1250-h834-s-no?authuser=0"
        />
        <P>
          Возвращаясь к городскому пляжу я запечатлел еще один пафосный отель с
          личным бассейном. Как-будто им моря мало?..))) На самом деле, как я
          узнал позже, в этом бассейне можно поплавать с дельфинами)
        </P>
        <Img
          description="«Зона Хотельера», Канкун"
          src="https://lh3.googleusercontent.com/pw/AMWts8Bd6zh6EgjHDlOO2_xqlEjlntfrvxAbC6ZDdTVet4n-A6WH5h0DdA3GoDAzEB2z_W1wTlJOB0dNTErtlM8AcFyWPpoc-PSrPgiFHN_yrXQfk-n9y0Lzg4OUEmVkdT41hTvDcj-hTdCHBzlcLApelG9o=w1250-h834-s-no?authuser=0"
        />
        <P>
          Перед возвращением к автомобилю мы с Олей решили всё-таки искупаться,
          не зря же мы в такую даль тащились)))
        </P>
        <P>
          Ощущения двоякие, с одной стороны очень мягкий песок и тёплая вода,
          водорослей почти нет, особенно на фоне Плайя-Дель-Кармен, с другой
          стороны — всё застроено, шезлонги стоят почти вплотную к воде и из-за
          этого очень не хватает пространства. В этом плане мне гораздо ближе
          Индийский Арамболь с Агондой или Шри-Ланкийская Тангала, с большой
          береговой линией и относительной безлюдностью.
        </P>
        <H>Сенот «Череп» и Черепаший пляж-Акумаль.</H>
        <P>
          На следующий день мы с Олей поехали в сенот «Череп», но не вдвоём.
          Оказалось, что в Плайя-Дель-Кармен, буквально в километре от нашего
          отеля в это же время отдыхают её друзья, которые в Мексике уже не в
          первый раз. Вот такое совпадение:) В итоге в сенот мы поехали
          вчетвером.
        </P>
        <P>
          Сенот череп, в отличии от других сенотов которые мы посетили — совсем
          немноголюден, хотя находится практически в Тулуме, а если точнее — в
          нескольких километрах от него. Особенность сенота в том, что туда
          можно прыгать непосредственно с поверхности земли, подробнее это всё
          видно на фотографии ниже.
        </P>
        <Img
          description="Сенот «Череп»"
          src="https://lh3.googleusercontent.com/pw/AMWts8DnRVSuxdVerr4bzOzNxMZCxUz5Dq3oZk_Cynx0qjKSK3MdvO6md9Cvd1lIrz2Drovb3egqtx3RFoluh5PHzGMfNTZwohOfwk7eMBnkO0Y6Me0iDqMapmgx0A_M71_aGJuYv-UK2U5FKGwlNYfQnvsN=w1250-h859-s-no?authuser=0"
        />
        <P>
          Высота падения составляет около четырёх метров. До дна достать
          невозможно, глубина не меньше 20-ти метров. Вода абсолютно прозрачная,
          как и в других сенотах, а большая часть пространства для плаванья
          расположена под сводами …эмм… пещеры… Короче говоря диаметр
          плавательной части сенота не менее 30-ти метров, а то и все 40.
          Плаванье происходит довольно близко к потолку, но задеть головой или
          рукой его не получится, при этом в сеноте летает очень много птиц, там
          же они и гнездятся. В одной части сенота птицы, гнезда и птенцы, а в
          противоположной — целая арава летучих мышей, территория как бы
          поделена:)) Так же я настоятельно рекомендую брать с собой маску,
          потому как то, что видно с поверхности не идёт не в какое сравнение с
          тем миром, который видно под водой с помощью маски. Браться описать я
          даже не буду, лишь скажу, что маску можно арендовать на входе в сенот
          и это из разряда must have…
        </P>
        <P>А теперь немного о название сенота:</P>
        <Img
          description="Сенот «Череп»"
          src="https://lh3.googleusercontent.com/pw/AMWts8BaVqO7dH-zetm6HTH7Qqzd0NmrmnH_r98CGFLR5LjWrJjGnoYlLIZGufE3_wLhuUkB0qWePyxMvFanFxcmKcwzARSxH9Y5exgVTKNzNiFtsPOhpAj0HuNM381DPOv9LAaH-r2y8N9U1_57n_1822S8=w1250-h834-s-no?authuser=0"
        />
        <P>
          Если приглядеться и напрячь фантазию — то большая дырка с лестницей —
          это рот черепа, а выше есть 2 маленькие дырки, это как бы глаза.
          Кстати в мелкие дырки тоже можно и нужно нырять, об этом даже написано
          на табличках с дразнящей надписью «jump here!»
        </P>
        <P>
          После сенота мы поехали на пляж Акумаль. Говорят, что там есть
          черепахи и их можно посмотреть находясь в воде. А теперь я расскажу
          как это всё происходило:))
        </P>
        <P>
          Мы приехали и нас сразу начали загонять на платную парковку за сто
          песо, это очень дорого и мы проехали подальше и нашли бесплатное
          место. Это было как минусом, так и плюсом. Минус был в том, что мы
          уехали довольно далеко, а плюс — то, что мы смогли прогуляться по
          очень красивому берегу, пока шли к пляжу.
        </P>
        <Img
          description="Берег в километре от пляжа Акумаль"
          src="https://lh3.googleusercontent.com/pw/AMWts8BO9ltuPnAGJy6k5NcvsS6OQv1iQJtMGoRpu0JNZJv14UUVYIFIRPvauLJN7xUkmjb5t2UJ4Rpm_MPAPkTC5q-1vdTVT7ndwQwy8DrdcmoZTqfeOch5pUPmRkRjEvIldB88_vA-PGP2GLND0Oky24Gt=w1250-h823-s-no?authuser=0"
        />
        <Img
          description="Берег в километре от пляжа Акумаль"
          src="https://lh3.googleusercontent.com/pw/AMWts8AUsZi5oHIYith0fA2XXIufeE2HorkQpWIEKrdeSFpa5TK0pK_GMlbCXbpz9-gZjlte7Vv7dO79fWvQrnw-6KA1oLzvlBJvkeXIT8l8noxO2oimBjpk1n1RGJZkj-YX6OQQZfLz43RIseOixVE35PgF=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Берег в километре от пляжа Акумаль"
          src="https://lh3.googleusercontent.com/pw/AMWts8CBMmeDWjtT51opl60UMnnkIVtJYgXCe2DLLEAXCcjlcQLRSqM3sey3uuOBIIw7u06bhzx_Om-t3lNKFrRc4An0nCzf2Jgac6zMHqhjKIppMF2634L4xSx341ywkoi277O4BDPJKo09aOgaWCwS6A4O=w1250-h834-s-no?authuser=0"
        />
        <P>
          Когда мы дошли до пляжа — то увидели картину «Канкун в миниатюре».
          Отели, шезлонги вплотную к береговой линии, тьма народу и место, где
          вроде как есть черепахи, огороженное канатами с буйками и превращено в
          аттракцион за баснословные деньги. Специальные люди озвучили нам цену
          в 600 песо с человека — это около 2000 рублей, за возможность в группе
          пройтись к месту где плавают черепахи и посмотреть на них. Мы
          разумеется отказались от этой «щедрости» и просто искупались перед
          уходом. Для купания на этом пляже выделен маленький квадрат, остальное
          пространство огорожено буйками. На максимальной глубине, у дальних
          буйков мне было по пояс, мой рост — 190см. Народу же на этом квадрате
          для плаванья было просто пипец как много)))
        </P>
        <P>
          На обратном пути у одного из отельчиков я сфотографировал старинные
          пушки изрядно поеденные морской солью.
        </P>
        <Img
          description="Пушки возле пляжа Акумаль"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cmn8MSNlop3CKby4kZn4IOh6R75IZQTXqdk3WPA_K-cE4n7ckZRjWvxXUmMqDeScm_HZsu-hTwcLqbtROnf8-zVS7-7FbTjDXxIGzpmZr-JJA3e2L2z5zcpqU7JKAey88WA0hSN1wOIPDuWRZ0G7SG=w1250-h834-s-no?authuser=0"
        />
        <P>
          На следующий день мы сдали машину и просто дожидались полуночи зависая
          в интернете, потому как Трансфер в аэропорт отправлялся около часа
          ночи. Единственное что мы сделали перед вылетом — это в первый раз за
          всё время в Мексике зашли в кафе и попробовали мексиканскую кухню,
          было очень вкусно, хоть и не очень дешево :)) Полёт в обратную сторону
          был не таким утомительным из-за того, что я поймал «телепорт» от
          Канкуна до Ирландии в виде глубокой отключки, а там уже до Москвы
          рукой подать..)) По прилёту в Шереметьево, а прилетели мы в час ночи
          по Московскому времени, оказалось, что самолёты в Питер на ближайшие
          10 часов стоят просто неприличных денег(от 7000р за человека), но мы
          не растерялись и вписались в поезду по Bla Bla Car. Наш водитель
          забрал нас с аэропорта в 3:30 утра и на комфортабельном Фольксвагене,
          всего за тысячу рублей с человека, доставил нас в Питер к 10-ти утра!
        </P>
        <P>
          Кратко резюмируя по Мексике хочется сказать ради чего стоит ехать в
          сюда, а ради чего нет…
        </P>
        <List
          title="Стоит ради:"
          titleColor="green"
          listItems={["-руин Майя", "-сенотов"]}
        />
        <List
          title="Не стоит ради:"
          titleColor="red"
          listItems={["-пляжного отдыха"]}
        />
        <br />
        <P>
          Общие затраты на поездку составили примерно по 45-50 тысяч рублей с
          человека, с учетом аренды машины, бензина и всего всего остального.
          Так же хочу добавить, что для осуществления подобной поездки хватит и
          5 полных дней, особенно если совместить посещение Канкуна и сенота
          «Череп»
        </P>
        <P>…End</P>
      </PageWrapper>
    </>
  );
}
