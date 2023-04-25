import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SpbVladivistok1() {
  const { title, description, img } = getArticleItems(46);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P introduction>
          За это путешествие я хочу поблагодарить всех тех людей, которые
          оказались неравнодушны к нам, Водителей попуток, Людей, принявших нас
          в свои дома, Сборную команду Mega Dozor-a «Придурки из Хаzzарда» и
          напарницу по путешествию Веру Матюшкину.
        </P>
        <H>Краткая сводка по путешествию:</H>

        <List
          listItems={[
            "*****************",
            "Длительность поездки: 36 дней",
            "Более 10000 км автостопа(Яндекс километраж заглючил на этой цифре)",
            "*****************",
            "81 машина(легковушки, фуры, автобус )",
            "*****************",
            "Жили в городах от двух до четырёх дней:",
            "Владимир",
            "Казань",
            "Пермь",
            "Татарск",
            "Новосибирск",
            "Красноярск",
            "Иркутск",
            "Хабаровск",
            "Владивосток",
            "*****************",
            "Осмотр городов без стоянки на ночь:",
            "Ижевск",
            "Петровск-Забайкальск",
            "Сковородино",
            "Нижний-Новгород",
            "Иволгинский дацан Дацан близ Улан-Удэ",
            "Болей",
            "Нерчинск",
            "и другие…",
            "*****************",
            "Завоевали первое место в Красноярском Мега дозоре!",
            "*****************",
            "Купались в Байкале и в Японском море(Амурском заливе)",
            "*****************",
            "Попробовали национальную бурятскую кухню — поозы (буузы),",
            "национальную корейскую кухню — пянсе",
            "…..и китайское пиво))",
            "*****************",
            "Завели ооочень много новых, классных друзей по всей России!!!)",
          ]}
        />
        <H>Пролог</H>
        <P>
          К началу этого путешествия у меня уже имелся опыт автостопа и не
          только по России. Мне довелось проехать больше тысячи километров по
          Африке, королевство Морокко(Спасибо за это путешествие Бутымовой
          Ольге), так же несколько сотен километров было преодолено по
          Евросоюзу… Но поездка такого масштаба, 10 000км, требовала особой
          подготовки и вложений сил.
        </P>
        <P>
          Подготовка началась зимой 2014 года, в то время я работал менеджером в
          отделе закупок и работа на том месте мне мягко говоря не нравилась,
          начальник был идиот, а понимание того, что через несколько месяцев я
          уволюсь и поеду в одно из самых ярких путешествий в своей жизни меня
          очень радовало.
        </P>
        <P>
          Старт этого путешествия был запланирован на июнь 2014 года. В это
          время ночью уже достаточно тепло, а у нас на случай незапланированных
          ночёвок была взята с собой палатка. За несколько месяцев я составил
          примерный план путешествия, подготовил список мест к посещению, а Вера
          очень помогла с вписками в некоторых городах, где живут её
          родственники.
        </P>
        <P>
          В это путешествие помимо зеркалки я взял компактную камеру Сони,
          снимки с неё после загрузки в контакт с планшета очень сильно пожались
          и качество стало такое, буд-то я фотографировал на тапок, а
          оригинальных снимков увы не осталось. Так что рядом с красивыми
          фотографиями с зеркалки будут мелькать фотки с «тапка», но они
          необходимы, чтобы дополнять рассказ=)
        </P>
        <H>Часть первая. Санкт-Петербург — Владимир</H>
        <P>
          Наше путешествие началось 12.06.2014г. примерно в 5:40 утра, когда я и
          Вера выдвинулись из своих домов в сторону известного «автостопного»
          места в Московской Словянке, в 15 минут езды на маршрутке от метро
          «Купчино».
        </P>
        <P>
          Это место я назвал «автостопным», потому что оно описано во многих
          гайдах по автостопу как очень удобная точка старта из Санкт-Петербурга
          в Москву. Тут уже немного рассасывается городской траффик, эта дорога
          по сути единственная, по которой люди едут в сторону Москвы, так же
          есть широкая обочина и запрака. Шанс уехать из этого места максимально
          далеко на одной попутке очень велик. Так и случилось=)
        </P>
        <Img
          description="Так начинается автостоп=)"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVahB1ecD5Jq1rpM3xtYYZw9BctoAugHkCeWv2JlpRdmLuuyHMOSDRZSakHw0B9kQgOUvc8GMvNFWs4IB90YxTCSustj-jPkgcOAVqZZcwSFjlfgM8a2OzYceip9pKFloDfU1kKdMBP9Rw-5msh_R6g=w600-h450-s-no?authuser=0"
        />
        <P bold indent={false}>
          Машина #1 Хендай Juke, 350км.
        </P>
        <P>
          Водителем «жука» оказался очень приятной наружности мужчина, зовут его
          Владимир Викторович, по профессии пульманолог, по увлечению пчеловод.
        </P>
        <P>
          Он ехал на свою пасеку, стараясь успеть к периоду роения пчел. По пути
          он рассказывал много интересной информации о том как правильно
          разводить пчел, ухаживать за ними и теперь я уверен , что в состоянии
          открыть собственную пасеку, столько премудростей о насекомых мне ещё
          некогда не доводилось слышать…Довез он нас до Валдая , где и
          находилась его пасека… Пробыв на трассе не более пятнадцати минут мы
          остановили следующую машину.
        </P>
        <P bold indent={false}>
          Машина #2 Фольцваген Каравелла 370км
        </P>
        <P>
          Как я написал выше — через несколько минут мы уже ехали с Алексеем в
          его замечательном и очень комфортабельном Фольцвагене.
        </P>
        <Img
          description="Фольцваген Каравелла и водитель Алексей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVF1A9FcsCiKhOnkO7eRKvcze_NFxauT91j0cSDlmJiGacciK5s8CmODdoIMkYMauD6OgrjCejp9lEiw6br3U9OR3gQUAQMY2oJb2hDDBBKlTQu6CSriszpwNFZXgkyYe1vp3UmfXak5gzlZFNQaqXk=w600-h450-s-no?authuser=0"
        />
        <P>
          Алексей — бизнесмен, но так же имеет массу увлечений связанных с
          активным образом жизни, он много путешествует, участвует в пеших
          ориентированиях на местности, ведёт здоровый образ жизни и является
          очень разносторонне развитым человеком с хорошим чувством юмора. Ехал
          он к своим друзьям в город Кашин.Через пол часа езды У Алексея
          возникла идея искупаться, и я его активно поддержал.
        </P>
        <Img
          description="Купаемся в озере!"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVzcT6o7j-HtaD3gNfPfhFaUkdsxwmtznD4oeFldFWtjqrMw0tIPJm7IUilkY7PxufPJaSVgba7bR0Fl1exBc2Al6Gj_IpsR22oMw2tx9gYOq_IVu7hQ9jFvU8u60okdeOQfFnc4JlpHfugUGabE9c_=w600-h450-s-no?authuser=0"
        />
        <P>
          Там же мы приготовили обед и откушали отличной каши с замечательным
          названием «Талкан». Кстати каша офигенная, заваривается кипятком и
          нереально вкусная и сытная.
        </P>
        <Img
          description="Каша «Талкан-шифа», очень вкусная!"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUrnyvFtJ55CGc2pzUhEuzUEhIskS9CYGn95xawg1pNrR6OUdlXR4cpP323pI0CsHKSk2o2LUjphlP6raecvbsBbn7PeClHqgeYm6Yt2LSvL75ZQtqPC98UxGDyjclk42dK924RDqOMi7vKw1_fAsy7=w600-h450-s-no?authuser=0"
        />
        <P>
          Алексею эту кашу как то давно посоветовал один его друг и с тех пор он
          подсел на неё, в хорошем смысле конечно))). Далее мы встряли в адовую
          пробку близ Высшнего Волочка. Было принято решение ехать в объезд.
          Алексей ехал в город Кашин. В Кашине мы оказались ближе к вечеру и
          боялись что возникнут проблемы с автостопом в тех местах, но Алексей
          вывез нас за город и удача не заставила себя ждать….
        </P>
        <P bold indent={false}>
          Машина #3 Тойота тундра, 500л.с. 220км
        </P>
        <P>
          Не успев достать рюкзаки из машины Алексея я увидел поток автомобилей
          и сразу начал их стопить, и тут же остановился этот монстр с 500 л.с
          под капотом, мало кому из автостопщиков улыбается удача прокатиться в
          таком «звере»))
        </P>
        <P>
          Константин — водитель этой машины занимает высокую должность в
          Московском метрополитене и параллельно развивает несколько своих
          собственных предприятий. Сразу скажу, что 220 км с ним пролетели по
          ощущениям минут за 20, несмотря на то что средняя скорость была 100 км
          в час.
        </P>
        <Img
          description="Костя, Панда и Тойота Тундра"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXI9oTcd0d-SIoag0cZlpSudWbe2_to7mANRsmaTRmPAsCvMg5Fn6CzwnAjqo2wZv6AEOvgXN0yz3mJdv1zOASMDUA3znR1eRw0tZ7q672n4cYyBCXR8X3BDrcGpQ0bCghCxIzqlAQ0rw8omJXnF7qx=w600-h450-s-no?authuser=0"
        />
        <P>
          Пока мы двигались в сторону восточного выезда из Москвы Костя
          рассказал нам несколько очень интересных бизнес планов, реализация
          которых на слух настолько проста и элегантна , что возникает ощущение,
          что стать богатым проще простого, и да , чувство юмора Константина это
          отдельный момент, ржали мы всю дорогу в голос, и получили такой заряд
          позитива , что хватило до самого г. Владимира. Добросил нас Константин
          до г. Балашиха, там мы оказались к ночи, дальше нас ждал ночной
          автостоп…
        </P>
        <P bold indent={false}>
          Машина #4,5,6,7,8
        </P>
        <P>
          Последние 200км до г. Владимира нам дались тяжелее всего, наступила
          ночь и машины стали ехать с бешенной скоростью не успевав
          отреагировать на нас, стоящих на краю дороги. Выручали только одетые
          специально сшитые автостопные куртки, с множеством светоотражающих
          элементов. В итоге спустя минут 20 остановился первый водитель, имя
          его я вспомнить не смогу, но сам он из Кыргизстана, приехал в Москву
          подзаработать и остался, живёт там уже 10 лет, с ним мы проехали 2 км.
        </P>
        <P>
          Дальше нас подобрал и провез ещё один гость столицы из Алжира —
          Эдуард,в прошлом чемпион по дзюдо, провёз он нас 20 км.
        </P>
        <P>
          Следующими были двое местных ребят на шахе, которые ехали к девчонкам
          в Электросталь на свиданку в 2 часа ночи, у одного из них была сломана
          челюсть и он больше мычал чем говорил)), довезли они нас до отворота
          на Электросталь — около 20 км.
        </P>
        <P>
          Далее мы зависли на час около выезда с заправки…. Пробыв там целый час
          — нам все таки улыбнулась удача. Ребята, которые нас забрали сказали ,
          что видели нас, но не успели перестроиться с левого ряда и им пришлось
          делать круг на ближайшем развороте (а он был не близко, как я потом
          заметил) и возвращаться назад…проехали с ребятами мы ещё 20-30 км.
        </P>
        <P>
          И наконец последним нашим водителем до г. Владимира стал Стас,
          дальнобойщик ехавший из Краснодара в Нижний Новгород. Прибыли мы в г.
          Владимир в 4:30 утра, уставшие, но довольные, там нас и встретил в
          заранее оговоренном месте Никита, он же админ группы «Вписки
          Владимир».
        </P>
        <Img
          description="Утро во Владимире"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUTQfq4jtkvTjBAcFohpmeRqLkSj801e4SdkJ91Ldw8aK5nIU3QIuFl_NnPQFYeX4qZ_esHAtrrDIrjXcEjiHbxJNL34W-iyAnerDClrYP4S1BrzTH3zDpXmRARp2SQN1UEVACc0bg9Fw4ZtUPEtDPF=w600-h450-s-no?authuser=0"
        />
        <P>
          Никита приютил нас у себя и показал город, но об этом в следующей
          части путешествия.
        </P>
        <P> ….End</P>
      </PageWrapper>
    </>
  );
}
