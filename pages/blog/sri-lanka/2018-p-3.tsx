import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SriLanka() {
  const { title, description, img } = getArticleItems(12);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Национальный парк Хортон-Плейнс</H>
        <P>
          Как я уже писал в прошлой части отчета, которую можно найти{" "}
          <A href="/blog/sri-lanka/2018-p-2" intend="all">
            тут
          </A>
          , этим утром нас ждал очень ранний подъём. Проснулись мы до рассвета,
          было 5:30 утра, а так как мы находились в горной части Шри-Ланки
          погода была прохладной. Для того, чтобы не замёрзнуть во время езды на
          скутере — мы решили надеть все тёплые вещи, которые у нас были. Уже
          перед самым отъездом из отеля к нам вышел хозяин и предложил попить
          чаю. Хочется сказать, что это был один из самых тёплых приёмов для
          нас. Хозяин отеля всячески пытался показать искренне доброе и
          внимательное отношение, и как нам с Олей кажется — он специально
          проснулся с утра пораньше, чтобы мы перед отъездом смогли попить с ним
          чай, так как он был в курсе о нашем раннем старте. Но к сожалению
          времени у нас было в обрез и как бы нам не хотелось задержаться и не
          обидеть хозяина — мы должны были как можно скорее выдвигаться в путь.
        </P>
        <P>
          Чтобы добраться до Хортон-Плейнс нам нужно было преодолеть 38
          километров по серпантинам за два с половиной часа, потому что после
          9:00 обрыв с которого открывается великолепный вид на долину начинают
          закутывать облака и разглядеть что-либо становится проблематично. Плюс
          ко всему мы должны были пройти пешком около четырёх километров. Полный
          маршрут на день выглядел так:
        </P>
        <Img
          description="Общий маршрут этого дня"
          src="https://lh3.googleusercontent.com/pw/AMWts8B85QRHZRGV2YCw3C3muVJGumD1etyd-Bqbg5BWrFsb-28LsgkRNiAwe3NAMXxDSZYAkC86zuzY51L_sJ4zOWQjuup5wAQjQfOikPK6tuYcjah0BuaQcheOlPF9TBPDiW7gg06lyGtZfDE83YwFP19K=w1058-h629-s-no?authuser=0"
        />
        <P>
          Дорога до Хортона оказалась очень интересной и живописной и условно
          разделена на две части. Сначала мы ехали вдоль деревень и огромной
          воинской части, а после начали набирать высоту, и кажется куда уж
          выше?…а есть куда…
        </P>
        <Img
          description="Дорога в Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8AzxFvFqUjn1q7xPVsuupxvay1Z_MDCjuyl0a1iiuvAqy-w1rlz4JdT9VMez5_hXgb4aI1V7NZr9Tb4hocW6hgjqd2pDYPd2cKXqVyybSNdqTaliCOzqvNhytAcnhrvfT11k2zTADaXnjHVIADiUdcz=w1250-h834-s-no?authuser=0"
        />
        <P>
          Мотороллер еле справлялся но затаскивал нас всё выше и выше. Дорога в
          Хортон довольно узкая и среднего качества, я бы даже сказал немного
          «убитая», но просто божественно красивая! Ощущение, что ты попал в
          Шотландию, вокруг высоченные хвойные деревья с толстыми стволами, нет
          кустов, но при этом местность холмисто-гористая, на земле ровный ковер
          из опавших рыжих иголок за многие десятки лет, повсюду лёгкий туман и
          серпантины!
        </P>
        <P>
          В конце концов мы выехали на плато и набор высоты закончился. Дальше
          мы прошли некий контрольный пункт на въезде в заповедник, заплатили по
          3500 рупий (1300 рублей) за человека и через пару километров уже были
          на начале тропы.
        </P>
        <Img
          description="Дорога в Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8DREKlNcxmOoIazsJEm-w9Ik2Y8nWwm8TPRD1GG8oZxDhsEc6Bxiy_kkvooIa8V75uQ6Y-qUeZegeWYEolig6eEov99OwVEZOlSPLcRp9OBwnmkeEsvE1WLVfVUZTSGOuIAJOYfNpGzPLslvGIhvzVn=w1250-h834-s-no?authuser=0"
        />
        <P>
          Маршрут в парке кольцевой, а общая длина около восьми километров.
          Сначала лучше всего идти на обрыв, а закончить маршрут осмотром
          водопада. На главной развилке маршрута есть схема расположения
          достопримечательностей, так что заблудится не получится.
        </P>
        <Img
          description="Маршрут в парке Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8Cmllu9Fj9gVLTAOb8Xfo7INrJ1ksTGwvHZf8eZu3Xh_whIsHUD-OnOoL7226wauBNTwBePwxXQyehE6dzHF0eo-Ov3-dne_KtMYkygX4Cxcqdq4oxZ2Ox7rCahvdicu9ScHX65YmTO_8YyeTIuYnan=w1250-h859-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8COZJmT2WkEfs1_cKlCGMPljQoHGQSDG6hjScWyXZNe6D17PS7iLiDFLSBNiJMlzZaAkRnvdYRUwm9W25EZsUc634DagQYpCoE9QovMi7le-Uw9CzgBjLaAiSwEp9YaG5eXtVbOXtNxBzkiIOuXHncu=w1250-h865-s-no?authuser=0"
        />
        <P>
          До обрыва «mini WORLD’S END» идти примерно пол часа. Кстати, забегая
          вперед скажу, что самый лучший вид будет не на точках обзора,
          предусмотренных для туристов, это такие деревянные подмостки, а на
          холме, который будет сразу около «малого Конца света».
        </P>
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8AP6r597h915TVE29LNb75PWS4Uv7UygY0ihM6JSk06iHHaFsK5WNn1YjDpE4ijIxF5z5us_AZBvXj1NJWbUUHxdghkZMPi9qEgVgCtNHbpyOFBWvL_LDcysXWjDrYrJlkpbFR-3hnGhDbnBLjWbh-z=w1250-h808-s-no?authuser=0"
        />
        <P>
          На фотографии ниже виден тот самый холм с которого открывается лучший
          вид на долину(самый высокий), от малого Конца света к нему ведёт
          хорошо протоптанная тропа.
        </P>
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8BDr32s7KWaoopGtQM_0qvGM2lO7L_zDE8HudwIZX13nbdIzqqf_TVDa7rorQVKaKykPecZia_fJf-xwNADktAukGt5_kAqpaixJ01jHAFZlzYzStJKX5sZEqYQodV6cjCEJiLwHwQW2roriviaritk=w1250-h807-s-no?authuser=0"
        />
        <P>
          Вид на долину очень красивый, но к сожалению фотография в данном
          случае не передаёт вообще ничего. Свет был очень резкий, а по другому
          тут не снять, т.к. солнце выходит из за холма довольно поздно и
          находится уже высоко, а до того как оно выйдет — долина в тени и
          ничего не видно…
        </P>
        <Img
          description="Парк Хортон-Плейнс, «Конец света»"
          src="https://lh3.googleusercontent.com/pw/AMWts8BhahC0DN05BWVyB_aYhac40wkmPZMqCW38yuUgFH2Dv7d75QVKLG2HkWtmRws5mhhgFAj8S8jnfGL32BXutveWEXivJnuSC7y-bUXVgw_WT_C8p539sMhOQY893j7imNqKzDORq81P5orw8q49bf_Q=w1250-h834-s-no?authuser=0"
        />
        <P>
          Это было нашей первой точкой остановки и тут мы наконец-то
          позавтракали печеньками и бананами, которые купили предыдущим
          вечером)))
        </P>
        <P>
          Дальше мы пошли по маршруту к водопаду Baker’s fall. Маршрут красивый
          и необычный, преобладающий цвет растительности — желтый, а из флоры в
          основном трава, деревьев не много.
        </P>
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8CumwzFhi27KUILDmXsk-MVGplhAF7eUTrPeCbIeuCmYn8lbt3URZDHjUMi_7bwHDT2nlkv3l10Tlw1hG3N2oXoNdTX6ezwXOxzTZhm4wYjX8-5iHM2CWq2KL9M34rMfHJ1R10mVgTv3mcH7Wg49xr8=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8AvgijY2cbz5WvQe0j_EN1vFKM4ltzE3npvZcw5FlurjG30YanVR75emn4CjgmYBbvIu-j5gRS8ar5rxepGu9sS2d8UH2dmC6UuOfLS6EG6KiCpb6Cb4aESDTwPzqyCxgxHnxS4lVb037JeWt361aUo=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8DcWIOYfgbK22wnukNJLoCCtC-f6s6H_ThRhfBq-DOKYvGoWYXI9iv2rALX1Iq6kvvQd1054crZFMVOhMefkcZs2l3DJ3zjE0miINcsHboGkgeNB7hxOC7rBn3Z4iblYoPBt_MAIaP4-QRLXGazGTHK=w1250-h795-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8ArsZcl1_yT1DJv96CHAy8q3mpZPIJ4wEdLKpgafkriTXl3UgrGJO1e4OmxBH4oi1ev8kh6zltiRGvxeJm-cKCeNNrEq8NXwLQcQ3yfgJyR9IDnegRNpS6joJq8b5OcCpvLlyEP3lBRTTMEDOqzLNz7=w1250-h785-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8BBvVp44qZEuI60BRWO1ek2CV4IVsnzxx2fC1sErMSyaD7C040GVkfFhxNU29_OQqFDgLwQXk5ol5RQbwb5SxsOD5dncmfxDkNldj10FfDgpLY9A_pvF_vVp0IKFQQwhGngLxaDLvblvP_fO8J-8Nk8=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8BR5PT7agJx-Wh9-ZBxG8HRfefqnt6uAqAxz8EhAjJ1wCwnvdhptclmeTZ9iEoF0P_74KnKmJcgojdX83pcShzEwAn9n8rsio55KhG_Ax6tlY3jaDUr-H_fqBEP9cEo69JdADFIO6EqQFQTH82qtII5=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8CCNtW1mNrNk7m6D6dD5bz8z1ijvzxs8lldr_ifoodVIMzrm_HmBjyXD_2ezqMV2SYsbhAqGFZFy1dUdVv7-zSNer1B1h_KGnrg-bTDWU7NL6pqP8no-BoC-eiBquQlS7XWUhuAqE4xF05pCXBZSYBG=w1250-h807-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, путь к водопаду"
          src="https://lh3.googleusercontent.com/pw/AMWts8AwwJS6CIySL02ikbf6r_oFJtB-X_Ix9Rp_So15YirXU5voAx-Roh53x5dW_fdbWjAFipbFr5IEMvbItIlnX5iBBda6CnK0sraikUnzknuDIjxZOJ0YpGXK5vb2WQHZIH2lLjKzYe0JLUVbxpjOVjpM=w1250-h834-s-no?authuser=0"
        />
        <P>
          Маршрут от обрыва до водопада занимает около 30-40 минут неспешной
          прогулки и сопровождается совсем нетипичными для Шри-Ланки видами, по
          крайней мере я точно не ожидал увидеть что-либо подобное. Хочется так
          же сказать, что и климат в этих местах сильно отличается от всего, что
          мы видели раньше.
        </P>
        <P>
          Шум водопада был слышен еще до того как мы его увидели. К нему
          оборудован спуск и там так же есть смотровая площадка. Водопад не
          очень большой, например некоторые водопады Карелии на порядок выше
          Бэйкер фолла, да и в процессе путешествия нам попадались экземпляры
          превышающие его по высоте в несколько раз=)
        </P>
        <Img
          description="Парк Хортон-Плейнс, водопад Бэйкер фолл"
          src="https://lh3.googleusercontent.com/pw/AMWts8C0VKsMZg3FVrZz7O4Gw_Ox325lpDpSmb-lg6joPZ3BC8Vh2PKa96S8U25M8ZZpBWuIpm9eCetqm_8A9rwEa_x8AufxxWirKtLsZGNrWU3JDs9Tp_NQajbDax128BkwvRwR7eBDuEJ91p04LUE9NtiZ=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, водопад Бэйкер фолл"
          src="https://lh3.googleusercontent.com/pw/AMWts8Az4hHO_PPSZ7N_h1ikmVB8d-PEX0MqXb6g4dpiP5_x8q9M_-R0CG7zOP1qPSg2f_U0VRoxZRdd2V3EtY7W0YGqlF7NSApnMGe_Jz8F_QrDs6AlTlwVE5FXCt-LD0_zuIOTVDKrpTwCmMJeFnTQNLDr=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Парк Хортон-Плейнс, водопад Бэйкер фолл"
          src="https://lh3.googleusercontent.com/pw/AMWts8AEg04WKOka7RPhq6_mdVLJzt9WXbTnBaHcX4SwZEv6kSEsXEkP62Px1QEiR95T1pCbqb8aaWk8GRzRiU1_i87cPdunIEZ0VfdpXECseA9nSkBlQjV7ZmLiRFgFK34N1l_ZgI8spvQw7n5vERak9-Gk=w1250-h834-s-no?authuser=0"
        />
        <P>
          После водопада тропа начинает закольцовывать маршрут по Хортону, но
          еще несколько красивых видов парк подарит идущим)))
        </P>
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8CAbGEj07WSvFhDMHZ6H6RXfRgtrmDt3wutBNVMyZ_avCGLQxj1qSxIV8qFTeV1HjWeRjlthmCOaM5n9P8Ry8Y9OSMul6KsdZYnrjcx0Tsjxquy7lbA47WA_4RVP_5CVTAk81dUhBq8oZAvZCE-LWO2=w1250-h842-s-no?authuser=0"
        />
        <P>
          Завершается маршрут мощёной дорогой, а на пригорке в лесу находится
          контрольный пункт. Кстати в парке очень следят за чистотой. На входе
          каждого туриста проверяют и забирают всякий мусор, а например печеньки
          убирают в специальные бумажные пакеты, чтобы даже мысли не было
          выбросить полиэтилен где-нибудь под кустом.
        </P>
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8Da-O9Ix7fkA8YpJPAee6ZpLZbof0rT_jvoK5ZR2nSm1R9bffk8TdVS-AeuYRot-x2EQLeOE70brtvh3Q1nNngLqz92DJXO9dqMajUQsIw5PZH2iQ2nhnp77k8UONAlOfqUWxbOGNtWgSbMhkkkI0Zw=w1250-h834-s-no?authuser=0"
        />
        <P>
          Кульминацией того, чем могло удивить нас это место стали олени… Олени
          в 800км от экватора, в месте, которое по сути тропики, но если
          оглядеться — то это больше похоже на среднюю полосу нашей планеты с
          умеренным климатом))
        </P>
        <Img
          description="Парк Хортон-Плейнс, местный олень"
          src="https://lh3.googleusercontent.com/pw/AMWts8C3tSWU4X9N9s70azqPC5uqVxAT1-athrTampKFUjesYTo8MWA1ZyoL3eTuP3XQ0ZxJUl_lnv4hK9ucBTwTxUxxWxTsozoM_vVSE2mkvxHmUd123SuWXnE5JGt_elRePaCS0R5INBaoWQ6j_LQLKR88=w1250-h899-s-no?authuser=0"
        />
        <P>
          Если показать это фото любому человеку и спросить :»Как думаешь, где
          это снято?» то я не думаю, что кто-либо ответит -«в Шри-Ланке» ))
          Кстати оленей в парке очень много, но к нам подошел только один,
          видимо самый прикормленный) Оля скормила ему целую пачку сырного
          крекера))
        </P>
        <P>
          После полудня мы выдвинулись в сторону пика Адама, о нём подробнее я
          расскажу в следующей части отчета. Из Хортона мы выезжали уже по
          другой дороге и ехали в сторону Нувара-Элии.
        </P>
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8AvHPY6VZ5i_2aUR99jgoc4IRvRBEazv7fJ9dEv4-OeKewqQbjkS3YZNL6UYPKpmufaVaq6jAQu1SId2VAkjyCOXRvm9EzFb4YqYn_Wt01NUPThBbZMQJmp6-20nubYzu4HegB8gcTRUVcklt9egM6i=w1250-h797-s-no?authuser=0"
        />
        <P>
          После небольшой потери высоты снова начались хвойные и прямые деревья.
        </P>
        <Img
          description="Парк Хортон-Плейнс"
          src="https://lh3.googleusercontent.com/pw/AMWts8CU1C2J8VmfD17FoXgTe-8fblanExRXRu857Y0Gq80YoylPn-VBJCegsZtrFDtpSWCdWqqDBslVlDEBS5nJRXtxF6HwzYBtzZMv-dttypupW3B9-bV5_3AC-MNv0tkMst4Krou6xSUNzBlkmNWZ4RgD=w1250-h779-s-no?authuser=0"
        />
        <P>
          Ближе к Нувара-Элии мы проезжали очень живописные луга, на которых
          паслись обыкновенные коровы, а на возвышенностях стояли ветряки.
        </P>
        <Img
          description="Луга возле Нувара-Элии"
          src="https://lh3.googleusercontent.com/pw/AMWts8AsxYPqtHAPgJs2vCZNBkIDPiqTukABmE10J5pScZKFxtzVWbylCjU61Cnppy3HRTXEfSU-ZhjrlK0WHLMGMAMCHeCfCye02UGPeoGhgptB0cmLt2zkBFolmSQFrnqan-9rReAGugeKFn4yyhhgiKl0=w1250-h790-s-no?authuser=0"
        />
        <Img
          description="Озерцо возле Нувара-Элии"
          src="https://lh3.googleusercontent.com/pw/AMWts8AlnWv_WfvcWI_PXh6vtlHskUrZx46cjpy3tWE3NXzme1k5d845haQ2iN67wDmiJaeiPAG99RLa_45WQAEBEl7sQSK_nmfHmkmwV_YYqXmLqOa7yBpdbfDvBuiaIWNY8UGY5QVahhvpkChmfj0UIill=w1250-h798-s-no?authuser=0"
        />
        <P>Потом были плантации, сначала овощные и фруктовые…</P>
        <Img
          description="Плантации возле Нувара-Элии"
          src="https://lh3.googleusercontent.com/pw/AMWts8D2unU3nH9CwwIS0t12J23SawRUGMVhFvjayXPLeRcjGUOw5b6NTKvXP-rlOaHckoea4Ol4asMZu1y1qSIGF2a-eNP7VRazqhbPC1hbtzv4c-l2tDdK0DRGRgoKH0G--d-GajL-MhuAPocBQoOSaGua=w1250-h798-s-no?authuser=0"
        />
        <P>…а после снова чайные =)</P>
        <Img
          description="Чайные плантации"
          src="https://lh3.googleusercontent.com/pw/AMWts8BTF72bYTYaUEI3bj-VCCDhA9YEO8U1-SudIhqU4enriFKcptdKCylfL6_utZTt27t9nKAkAWx8aEOmCziJxAEjk5jOr6uOpOZ1u8I1wg7VyfJf8YwMEWPweD543Q4cAtJ6D6Nt5ZvfeN-ZN30-IEAK=w1250-h798-s-no?authuser=0"
        />
        <Img
          description="Чайные плантации"
          src="https://lh3.googleusercontent.com/pw/AMWts8Bu1Oom0gdxDHXHjS97QavVKClVJ6NS9HnjDF8E2ZvzxyysTIOvBAwbuQYXoL_M5V4Cv8sHeo1yzz50Oq3NNiWFlFjl3BWs9x5uaXm1vNjjtWPFNNQH9SC6u5PhsZDUS5PUUMTKF3rgDmAgYVVhIoV8=w1250-h798-s-no?authuser=0"
        />
        <Img
          description="Чайные плантации"
          src="https://lh3.googleusercontent.com/pw/AMWts8BC77nca8KwNvMpcE4eaSNVhW-gqrmAzSooJCMDPLLaI1JR9skUqo99xfA8OGx0f47mdd3mIf9JjeqgHyZImVEYTNyKhwo17oU1vO5l5h7cr59u_bIq2HNb51SjiPOSLQyqaYAbrKLZw_FJH0MC2G5-=w1250-h834-s-no?authuser=0"
        />
        <P>
          Ближе к пику Адама местность становится резко гористой, а ландшафт
          меняет привычный пологий облик на более рваный и суровый.
        </P>
        <Img
          description="Горная часть Шри-Ланки"
          src="https://lh3.googleusercontent.com/pw/AMWts8CD8VPlUy_ZQfa0ybio9cKwdQReAfWyDsUGgWGQznMpNqBODafAapimX8esDiF1zizjU3C-eGYipHQKC5FALh8tBsen0kTh2CdXPcN7ru98GcfAMlexDyHi7tbfGYVQfAi8n1eJy22vnfJhaiqOkfsa=w1250-h798-s-no?authuser=0"
        />
        <Img
          description="Горная часть Шри-Ланки"
          src="https://lh3.googleusercontent.com/pw/AMWts8CpR-lDYNl1idYJgMxvsNj4kmQEarqGbkpAAojKFMZRFBTPI6b7r1Q3opE7Y6DQG_t2WJyuJhzldwIUllbfzHgpIdoBFy45QuAuDvDD16bhdK_yzv1tF2nYpqVgawEYMjCemIqR4Q4XnLgeZKGePp7d=w1250-h810-s-no?authuser=0"
        />
        <P>
          К месту, где начинается тропа на пик Адама мы добрались еще до
          темноты. Там у нас уже был забронирован отель. Нам необходимо было
          лечь спать как можно раньше, потому что впереди нас ждал новый рекорд
          раннего подъёма. На этот раз будильник был установлен на 3 утра! Это
          было нужно для того, чтобы успеть забраться на вершину горы к
          рассвету. Если очень кратко — то восхождение включает в себя пять
          тысяч двести ступеней с общим набором высоты в один километр! Об этом
          и о своих ощущениях я расскажу в следующей части =)
        </P>
        <P>…End</P>
      </PageWrapper>
    </>
  );
}
