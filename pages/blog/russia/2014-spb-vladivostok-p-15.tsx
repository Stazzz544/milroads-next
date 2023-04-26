import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SpbVladivistok15() {
  const { title, description, img } = getArticleItems(60);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <List
          listItems={[
            "2800км",
            "15 машин из которых 12 легковых и 3 грузовых.",
          ]}
        />
        <P>
          На Читинскую трассу мы попали ранним вечером, было ещё вполне светло,
          но солнечные лучи уже приобретали золотой оттенок.
        </P>
        <P>
          Первой нашей машиной оказалась такси, но автостопщиков в отличии от
          рядовых пассажиров такси возит бесплатно)) Пока мы ехали таксист
          рассказал нам, что тут всё пропитано духом буддизма и одной из важных
          традиций является обязательная остановка в специальных местах возле
          шоссе. Обозначены эти места разноцветными лентами и платками
          привязанными к деревьям или каменным буддистским святыням.
        </P>
        <P>
          По обычаю принято не просто остановиться и передохнуть у этого места ,
          но и кинуть монетку, поэтому такие места просто усыпаны мелкими
          деньгами.
        </P>
        <P>
          Провез нас таксист несколько десятков километров и выгрузил на выезде
          из ближайшей деревни возле магазина.
        </P>
        <P>
          Спустя пару минут к нам подошли двое ребят и поинтересовались не
          автостопщики ли мы. Познакомившись и немного поболтав выяснилось, что
          ребята едут из Хабаровска в Новосибирск и им посчастливилось застопить
          легковушку, которая едет аж в Питер!).
        </P>
        <P>
          Также мы познакомились и с водителем автомобиля, Славой. Поговорив с
          нами и выслушав краткую версию нашей истории и планов Слава сказал,
          что раз уж он начал помогать автостопщикам — значит и продолжит, дал
          нам свой номер телефона и сказал, что если нас у будут какие то
          проблемы с жильем в Дальневосточном регионе — нужно набрать его и он
          поможет все решить, при этом город значения не имеет.. это было очень
          неожиданно и очень приятно… (этой услугой мы так и не
          воспользовались).
        </P>
        <P>
          Через несколько дней он позвонил и спросил все ли у нас хорошо и как у
          нас дела. Вот такие люди бывают. Приятно…
        </P>
        <P>
          Дальше остановился целый семейный джип Тойота, ехали в нем очень
          позитивно настроенные муж, жена и их дочка. По дороге они показали нам
          ряд местных достопримечательностей: холм в виде лежачего льва,
          каменного Будду на горе, и даже провезли через квартал староверов в
          ближайшей деревне. Характерная особенность домов староверов — куча
          резных элементов и очень красивая роспись ставень и фасада домов.
        </P>
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWBaIprN7PntDWQaVTBir2P9Bbjn0nuXgqXF7j6D8HVaqSkPMQDmh01qgJPHYTQ2YDOE3sQK5c_lTql29no60i6UCXwtkxrQAdSrPOB-tBc624RrbSzYo-_CC17e2ePOxgcopMmDJ9TJdJ40HJ_NMk1=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXH18aO7I8fKyvMohdLtgIIxjqW_bILE1d7lnH2JUStCyUxBalTEZl85fU_C5jEI4LrKaRUQ_7g5Z1zy1rpXOmYlTib1RhjmAEvouZxJgrREZczs6IAkaFDHtQma6UwxMyvcit3FOLPFrESMo2ktA8M=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWaC5E-AAm1gXKEKTVUNXKli3HtpcPw_ARqiDhdL_VDPJK4qCxMRqAeV4EDq7AOUG44OMtzz_brGsggSjpkucqXU4JShy16i0Uv-wS1Mn5ImIxjRV4YBdHD1jREMr4rCSHmTRTAyYg09gH61soJR6VA=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUUeMf8E57o1n6pU8-qNu6RY23Xay9FgaV8vHGqesIeczlumJZ3ujPAoO74S1lnsV5_AcjHdJ89rUqfvGvM_t8f3w1vuKRJCFTDu3q8O45qmn8kG73DBCT1ZwiX5tbYtOS9M6Gsp7Pk22_LcyVLIyy5=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaV3zAgkGg2OwYWNp_FnKnaEOOXxb8OEzecTpOF_0OKpdTNP3AJMpbwUH5HV4HbsC3Jl023UDaQvCaFe2pFgFYGjNd40MbLdxT0PmH3CfcPznFoJG7wG-SbbdS2e7bIYWSCNHdrup0CxrJuecoJiTxz8=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVcpzaqMmoYfDh_mYP0dvDjA4Jrs-3GlenU480Quzgo8CN44yZvcRF3Hj605L_U7X8UG8yNQ1P7OsnUZKbTK9kKsBMykiylg484YMy-9AFE0STBn9FOgPeHjRvhdXnPIr-8OFIPvQ_kKFtMDkweYwbg=w1050-h676-s-no?authuser=0"
        />
        <Img
          description="Не далеко от Улан-Удэ"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXGodwwCsjR_X9UAujryW31WA5OfBp6MF2KDCYey2LkLYlBxCm6TIeiElMv2bfOWmWzYpdU0IxgEMkcEFLy2N22Rm6wp4y_gqz-b4sMQRZEscsKGZL8hQ4z_7aviQcZxrVW83kKoo4dgePKZaibnyK0=w1050-h622-s-no?authuser=0"
        />
        <P>
          Чтобы поймать следующую машину нам пришлось протопать более 2-х
          километров. Мы вышли на хорошую стартовую позицию. К этому времени
          солнце уже заходило за горы и мы приготовились к ночному автостопу,
          так как успешный опыт у нас уже был под Владимиром и Казанью. Тем
          временем до Читы ещё было порядка 450 км, а до Хабаровска более двух
          тысяч.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUxQ-oWH5_xz065sp23NQvIJLAQabNQ1zOH4ckUmsGKSGo2A9jQHPl50zVexdBNz9fOlOp6Byi-sfTCePUwoHySAZ8SXCewSVCNR6kfJfJAzIqhalfgxTT1Uev7kteLlNG33gAuMHqMXunPRskw9tBp=w600-h450-s-no?authuser=0"
        />
        <P>
          Пропустив десяток машин нам все-таки удалось застопить машину до г.
          Петровск — Забайкальский. Ребята, которые нас подвозили с очень
          большим энтузиазмом восприняли тот факт, что мы из Питера , и сказали,
          что мы просто обязаны увидеть их родной город.
        </P>
        <P>
          Оказалось, что Петровск — Забайкальск построили Декабристы,
          находившиеся в ссылке! Ребята показали нам местный ЖД вокзал с
          огромной мазаикой, гигантского размера пруд, вырытый для нужд местного
          завода и дом, где жила сама Княгиня Трубецкая.
        </P>
        <Img
          description="Вокзал в городе Петровск — Забайкальский"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWTrvYeWDh3BYgnNlXkZajylntq3fJn3aCRbCoXTZ0KQu0ZJfimkX1YsgHsMIG3IoYWb4-i_M2PSnVYzp9avjSGZhcREv3lHy72myqvV5pMo2C7q8azcyD183an8HwBk1MEe6AujOhME7LQl-TVTxW_=w600-h450-s-no?authuser=0"
        />
        <P>
          Жаль только, что все это мы увидели глубоко за полночь… После этой
          экскурсии ребята отвезли нас к ближайшей заправке на трассе. Постояв
          там минут 15 и поняв, что сегодня нам уже автостоп не светит мы зашли
          за заправку в лесок, поставили палатку и проспали здоровым сном до
          утра)
        </P>
        <P>
          Проснулись мы в 12 дня от того, что солнышко начало поджаривать нас в
          палатке. Наша временная стоянка была прямо напротив придорожного кафе
          и заправки, поэтому собрав рюкзаки мы сразу же отправились завтракать
          и умываться. Пока мы кушали — по телевизору показывали камеди клаб, а
          после начался фильм «Время», который я смотрел за год до поездки,
          очень хотелось задержаться и пересмотреть его, но нужно было двигаться
          дальше..
        </P>
        <P>
          Через 5-10 минут мы застопили минивэн Хендай. Михаил — водитель Хендая
          специалист в области нефтедобычи, уже второй нефтяник на нашем пути ))
          Когда мы поинтересовались куда он едет — на радость нам Михаил сказал,
          что едет в Читу, в гости к сыну, а это означало, что 450 км можно
          считать заочно пройденными.
        </P>
        <P>
          Пока мы ехали Михаил рассказывал много интересных историй, время
          летело быстро, а неподалёку от Читы Михаил решил отвезти нас на озеро
          «Арейское»(Арей). Озеро это считается лечебным. В него впадает более
          12 ручьев образованных ключевыми водами, а на дне озёра располагаются
          нескончаемые запасы лечебной грязи, знаменитой на всю округу.
        </P>
        <Img
          description="Озеро «Арейское»(Арей)"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWS5hdz9CJMRtP_zYJk1VQFh5DJT7FqlTmazQl485dy76KK8Sbz6SX5Vovwrlrl7eNpD6fQc88GvXXOdp5GlkaQfQyxEzI03C1QAdRRICe69WF_dIyndWYTzxtSOhu4MovRtY7RuaDSVZTKi2V2qSXs=w1050-h695-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXhPbdE5yJ0nPGRpDMCoWqRsLny_ziFxxMBle2XE4LS5ZNBqdIakODNzGfEkpfYfNM0mHeRz6oiR1WNNsu1g0GTphl2nKKZJc04SCAnUW7cE4CQwGtQMVMez-6MYWIRul3mZHtke0myEQ17DEp7DQPE=w600-h397-s-no?authuser=0"
        />
        <P>
          Местные продают эту грязь всем туристам и другим местным. Считается,
          что грязь из озера лечит чуть-ли не все болезни, так же для усиления
          эффекта можно попить воду из каждого источника, обойти озеро 3 раза и
          тому подобное, легенд там очень много, мы же только искупались,
          откушали супчика с салом вприкуску и попили чай с печеньками ,
          которыми угостил нас Михаил.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWTIhnhRaDtXO4SjXfcDrFlrtEXhoupTWTXZ1RCY4tOgzUBrD7aCvOEMmGCxuWK6e1yPHCu1ehwyM7Eg-yRXTtsxt-bmOZUxhtehSN3cm5uxlF8fgQVm3j9WRM_W3dyg9f94SuQMqQtb-6an54gENJZ=w600-h397-s-no?authuser=0"
        />
        <P>
          Добросил нас Михаил до Читы, а именно до столба «нулевого километра»
          дороги Чита-Хабаровск, которая была построена несколько лет назад.
          Раньше, чтобы доехать до Хабаровска приходилось пересечь несколько рек
          паромными переправами или использовать ЖД транспорт, на платформу
          заезжали машины и дальше их везли поездом какое-то расстояние, да и
          асфальта на всем этом пути в 2000+ км почти нигде не было…
        </P>
        <Img
          description="«Нулевого километра» дороги Чита-Хабаровск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXS1kCX1heKl87xXOXf-2tt_OlZ2Po4x_l45Du7uTXMwPQWyM38Gg1NUoCwq3wITdupFJ7ylsUcFQ-7_Y1LkvRtdbztqlurv2-ElsWzadT6TKJ6hGDdNj_SjVnZGPkkbwSXa_U02-P48AOhlfpeeZZq=w600-h450-s-no?authuser=0"
        />
        <P>
          До выезда из Читы мы добрались за несколько минут на местной попутке,
          а там уже поймали машину до деревни Танха(50 км от Читы).
        </P>
        <P>
          Помимо нас и водителя в машине было ещё двое пассажиров, его жена и их
          друг. Друг оказался очень общительным и принялся нам рассказывать, что
          первой расой на земле были Славяне, и что старославянские письмена
          есть на Египетских пирамидах и на Стоунхедже, а Китайцы вообще с
          другой планеты…. Интересная версия….)))
        </P>
        <P>
          На подъезде к деревне солнце уже закатывалось за горизонт и этот самый
          мужик предложил нам переночевать в его дачном доме, в котором никто
          уже не жил 4 года, сам же он с друзьями(водителем и женой водителя)
          ехал на шашлыки к другим их друзьям в этой же деревне Посовещавшись мы
          согласились, хотя сначала думали отказаться. Все оказалось очень даже
          классно, дом у горного ручья, в нашем распоряжении были плитка,
          чайник, диван, все что надо, Сварили покушать в котелке макарон,
          попили чаю и легли спать.
        </P>
        <Img
          description="Домик где нас приютили"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVSTvZTtkw9qo6W98SoD47qhx2TSM60v29QChDE24ZiTtvPXxmN9yTwbauJPyqNDkwWcI2Xgm2UYa2g2uXszkD-_WcstA2BUk0oacKUQZVzK4yqQuQoso7-U4GDWcsmAZzP0gu4fYPxRuSLn6eawMBX=w600-h450-s-no?authuser=0"
        />
        <Img
          description="Домик где нас приютили"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXvv-xJaZNml4LRVu3zhCMV-D7oNqdsBYsDOfFdmrT0OsCG6WrcjSo8Egl-GnNvoB9tdKIYFIHZKG5L162yveIZ1cmEQ2e_8FXk8iq6lWnHYsYNOFqvjPQHPAYaxr2iLn0DE_4PPqdIOU4XHe1BQU7h=w600-h450-s-no?authuser=0"
        />
        <P>
          С утра, перед автостопом, мы решили сходить в деревенский магазин. На
          подходе к нему толпились местные жители, а зайдя внутрь мы решили что
          попали как минимум на пол часа очереди… На лавочке(внутри магазина)
          сидело около 20 женщин и бабушек… Спросив «кто последний» мы были
          слегка удивлены.. Одна из бабуль ответила :»никто, мы тут так,
          приходим поболтать..»
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUh8-SNVPnMNz7y6Du-iU9GpKoPMMwIKeN_jaqWO_rywIhcA1cgD-ERA-JB-p5WN3kcfPTdP5VdmrWI1gRCtC9MNy72f0ycOPw_i-Wjc4SajdvOMgCuuc-S8ytdnflWbdncHhbtwP6-vxCgE95Y6M-4=w600-h450-s-no?authuser=0"
        />
        <Img
          description="Лев ли?))"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUHiwOueBaR2UvOB_B4U44z-29umEpktl53wsrl52-KF9YKqTacEUl23z-0GmiGH4DXGOswWxztoi7WD7mSVQHyIiEwMezJHHH4_JW8llhIQq5MODoIvbl1_CWeFLI1lmU8GVL9sNWQuE7ifXJKJzkJ=w600-h450-s-no?authuser=0"
        />
        <P>
          Закупившись провиантом мы вышли на трассу и начали голосовать. Сначала
          нам попалась Тойота минивен, провезла она нас километров 30, а вот в
          следующей машине нам повстречались Татьяна и ее брат Андрей.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXIhGxlsZUORtPBztcgfNWsbIkPYIqKVcdZ35iUibTdIkKZ8q3e5rRfIxIeTt21j-lFw-8BA5czRMtQtxLN_AIZ9GKHgIOVgK41pCcpFjw246CwpZWQ3cy8IeW_jwsUc8kLwJ2mZAdeu3d2JxqIyobx=w600-h450-s-no?authuser=0"
        />
        <P>
          За рулём сидела Татьяна — она работает в сфере образования, ее
          компания предлагает получать знания удаленно, а слева от неё сидел ее
          брат Андрей,который работает айтишником.
        </P>
        <P>
          Наталья ехала на встречу с депутатами местного округа в небольшой
          золотопромышленный городок под названием Болей. Пока мы ехали Татьяна
          рассказала, что неподалеку от города Болей есть две весьма интересные
          достопримечательности, а именно: церковь в селе Калинино, в которой по
          местным легендам живут ангелы и одно из самых больших цельных зеркал в
          мире, во дворце золотоискателя Бутина в г. Нерчинске.
        </P>
        <P>
          Хоть это нам было совсем не по пути, лишних 200км в сторону, мы охотно
          согласились… Когда ещё увидишь такое…
        </P>
        <P>
          Сначала мы поехали в городок Балей, там Татьяна сходила на своё
          собрание, а мы пошли прогуляться.. Нечем особо городок не приметился,
          сфотографировались у стелы и поехали дальше.
        </P>
        <Img
          description="Город Балей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVgBodZbv2_qpD6VMOIUfwzL3ZK6e0AAi6oUMxQ54JZcn5G7abnxRTUC445xzP0NZ6XXxUdbx0kEimYsQNSRuR8DSja5KQRAvFyUlr6NrSSXFgvC2IKX7erRrsVUqZ-1gx7oJ9Tx9whzqa1FWgKWbs6=w600-h450-s-no?authuser=0"
        />
        <P>
          Церковь в селе Калинино хоть и выглядит заброшенной, но прихожане до
          сих пор регулярно ее посещают. Внутри стоят иконки, убрано, правда
          местами изнутри можно увидеть небо, потолок немного обвалился… Церковь
          нам очень понравилась, там чувствуется какой то дух древности.. Так же
          она является одной из первых построенных церквей в тех местах…
        </P>
        <Img
          verticalImg
          description="Церковь в селе Калинино"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWiLPCk1WsYyOzj-tN02tK7XEV10MG6eJmu5Lp46udquefJ78fVU7umsoj5hwPNx_4zEH3ZzbCwOWv0u4sLvS7cnIVqreMxZJM2Umy_zt0YDeg3w2f0F6lY9G92p4pmI591_qdShzub0IzlSXq3rrGA=w641-h969-s-no?authuser=0"
        />
        <P>
          Дальше мы отправились в г. Нерчинск. Сначала город показался типичным
          для тех мест, но подъезжая к центру мы стали замечать большое
          количество построек привычных Петербургскому взгляду. Сам же дворец
          Бутина величественно выделялся на фоне окружающих его строений.
        </P>
        <Img
          description="г. Нерчинск, дворец Бутина"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUFHjXFFAEv1usYBEK8p03way5xg3l-oAqTiorl4jU4_8HDIr-bYt0J-LUDxBZSDzsGtWNwoT5MEZcfsb2cu-Fax1iTkNWbRN9hbBVpZawtl75ivHXYEnhgNBQ-4LLY-WsuYCGPE9XEpPOQ0_qetiZ5=w600-h450-s-no?authuser=0"
        />
        <P>
          Подойдя к двери мы увидели табличку, что сегодня дворец закрыт, но мы
          не растерялись и начали стучаться в дверь. Открыл охранник, мы сразу
          же начали уговаривать его пустить нас к зеркалу, сначала он мялся, но
          после уговоров согласился. Зеркало поражало своим масштабом, а дворец
          роскошью.. На какое-то время мы даже забыли, что находимся в такой
          глухомани…
        </P>
        <Img
          verticalImg
          description="г. Нерчинск, дворец Бутина"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUrSUgRaVlprIry1gPx-zcB_Drdo7w3rFGDXnqcfCJT9odhlNYFEoOPUtaZSpDfDZkLml5ea2jcfWo0RN5Y0qG1Gljn3vHu_cxozmBJhtPtlGY2oDyPIhOd5w-4dKS86k8beoMxmnb23EGOnHD7wVCE=w450-h600-s-no?authuser=0"
        />
        <P>
          Спасибо огромное Татьяне и Андрею за этот подарок, без них мы наверное
          даже и не узнали бы об этих местах…
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWxAB8zXK8RmX5UWFwInDDiHd3Q6ObWq-vCGHWnTC3H-k3CoTYy08j2Jru1dP7ilRp8N4KOI2ich3ZSy0sm0LkR6DVbLE-K4w2PXlaietrXFAhxsL5pWZO_sxnGVpcPPbOTmZiJaf_wchBOL-RDEktN=w600-h450-s-no?authuser=0"
        />
        <P>
          Через полтора часа мы уже снова стояли на трассе, но место нам
          показалось не очень удачным и мы решили прогуляться 2 км до
          кемпингового отсека на трассе…
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXBndAb5d5Mmh3FmOrlb6VEfIzjKLIbd7Hh0cLATZzyVQR2MVXvy2uMNp7irL0mudMG0YkKdiq5AdyaIE0Vhf6hIv9aO0aCnuBGLl2hAeGsYvzN5J9XhN-Y82QedBzcsNFeFg12RS5ZenN8JpmqtDjY=w600-h450-s-no?authuser=0"
        />
        <P>
          Трафик был очень скудным.. Машины проезжали раз в 15-20 минут… Мы даже
          успели покушать, сидя прямо по центру дороги на тёплом асфальте. И да,
          мы встретили настоящего монгола, на лошади, с собакой, почти в
          национальных одеждах, жаль только сфотографировать не успели.
        </P>
        <P>
          Через часа 2 мы застопили машинку до Чернышевска. Это где-то
          километров 100 в направлении Хабаровска, а спустя ещё минут 20
          остановили КАМАЗ. За рулём сидел молодой и общительный парень, Антон.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXRU0AS0fv3BffW5ftRRoGmZ5-oP6psIXT-M2I1zmJXk4dOL17fhcJ9tlENe25ZryfLe36DNBHHgjLtToG_zHMjDhJxSPBjtlEl4_3eKxqZLn_GFCYWHhukkgT3wGFaDLUzajuUUhOzn7kRhngaMPeY=w600-h450-s-no?authuser=0"
        />
        <P>
          Ехал Антоха в Магадан из Красноярска и вёз какие-то запчасти для
          промышленной техники. Нам очень повезло, что он взял нас, так как дело
          было уже к вечеру, а с ним мы ехали всю ночь до маленького но очень
          важного городка Сковородино(600км), там в 20 км находится единственна
          отворотка на Якутию и Магадан. Часа в 2 ночи нам перебежала дорогу
          косуля, а ещё через час заяц. Живности тех местах очень много, а вот
          населённых пунктов почти нет.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVgC_jS6y_w6iDWUQtGCmYdAFCgNqDU1hvuqWpJlPQziKUZ4RsI0bjEirocJK15PXNRIX6hF-JeC6STpgVMDadLbSft9_jnIj2S7hNXevLFOxXoTIGIWHpacclbccLj6J7FydHAHxeNj8jpxuOOXBvJ=w600-h450-s-no?authuser=0"
        />
        <P>
          По приезду в Сковородино мы все вместе сходили в сауну, спасибо
          Антону. Дальше Антоха остался ждать пока ему переведут деньги на
          карточку, а мы с Верой потопали на трассу…
        </P>
        <P>
          Очень скоро мы поймали грузовичок до отворота на Благовещенск(600км) —
          это пограничный город с Китаем, а после него машинку ещё на 30 км… И
          да, самое главное, что уже с утра, как только мы прибыли в Сковородино
          начал идти мелкий, противный дождь и не закончился он даже через 650
          км пути к вечеру . Я решил, что автостопить в вечер да ещё и в дождь
          занятие неблагодарное и мы попросились переночевать в местной
          придорожной кафешке, нас запустили на веранду и закрыли на ночь.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaV8zeCRabFQDLlg4jetYaGrsrHz9qZPwvu1VVJuptmm4keVT5XcRE-nOiPVR_EK1J-9g5-MWiOUqeH6QCXvBYrElPDnmBl-40wj8uSCMOtDpDl88zv6rMEgfh2CaahuYJ8W6TRANCceirxqpBgltLnt=w600-h450-s-no?authuser=0"
        />
        <P>
          Утречком мы уже по традиции попили чаю в кафе в прикуску с печеньем и
          пошли на трассу, сначала мы поймали машинку на 30 км , а следующая
          была до самого Хабаровска.
        </P>
        <P>
          Водителя той самой машинки, Волги, зовут Александр, он военный, живёт
          он в 640 км от Хабаровска, а в Хабаровск ездит в командировку, сдавать
          всякие отчёты.
        </P>
        <P>
          Дорога с Александром оказалась очень лёгкой, ехал он быстро, мы много
          болтали, играла отличная музыка, сначала были Перуанские мотивы, те
          самые, что играют у нас в центре города возле метро дядьки в
          национальных индейских костюмах, а после был русский рок.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVU2GCVyqFzOgv4FI3hvSrW25qRBPJCdTI5b2mFN7XFE7lur0mFzJqJX05IyDxqAQUEtEfUIb1ZZSPlgFrRPJNgmpN41c9Muc90_-dxeg3jpzNyVIjAW2sRjKLa7ZfvYDX-fqUiOubaTfYDehc4cSV4=w600-h450-s-no?authuser=0"
        />
        <P>
          По пути мы сделали остановку в кафе «У озёра». Особенность этого кафе
          в том, что озерцо переполнено рыбой. Как только в воду попадает
          кусочек булки — из под воды рыба в огромных количествах начинает
          буквально выпрыгивать как в американских ужастиках про пираний-убийц.
        </P>
        <P>
          Александр довез нас, можно сказать, к подъезду того дома,где нас ждали
          Наташа и Рома(Наши новые друзья) и подарил нам на память настоящий
          Армейский бинокль с потрясающей оптикой!) теперь мы берём его с собой
          на прогулки для более детального просмотра достопримечательностей)))
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUecJDySPTn-mYvxqPQWz3VKQ4lmwXfQjRp1if4NjVooghyLXAdUR2yhydOIqigwBdbiIiC4aCAONAJ7MxrbEcv8gt4oAyaKDjIxJ4gO7l8X2WDQSI_VIng0V9N_AICpAAQxM1TbTEwsU2X_rj_sXCY=w600-h450-s-no?authuser=0"
        />
        <P>
          Вот так мы и преодолели почти 3000 километров. Дальше нас ждали
          несколько дней в одном из самых крупных городов дальнего востока —
          Хабаровске!
        </P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
