import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Ladoga2018() {
  const { title, description, img } = getArticleItems(44);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P introduction>
          Хочу сказать огромное спасибо Алёне Лазаревой. Ты отличный водитель,
          организатор и очень хороший человек!
        </P>
        <P>
          О поездке вокруг ладожского озера я задумывался уже давно, но это были
          лишь задумки и примерный день старта, Для такой поездки, чтобы
          посмотреть всё по максимуму — нужно было 3 дня подряд и должно быть
          тепло. Идеально сюда вписывался июнь с его праздником(12 июня). Дальше
          стояла задача найти себе отчаянного напарника(цу) с автомобилем, так
          как у меня на тот момент машины не было. Составить мне компанию
          вызвалась Алёнка, так же, во время подготовки к поездке она помогла
          найти кучу интересных мест, расположенных на маршруте.
        </P>
        <P> Так выглядел конечный маршрут, цветами маршрут разделён на дни.</P>
        <Img
          verticalImg
          description="Трехдневный маршрут вокруг Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUATDqe6FHg1U9MpKnRZVnrwJ_qqS2m4SKffdbcHXXf9ObdbWq3M6qAz28Tsu0zm1XgprYx6zGD2SJxvyLYE1gKpmkrqZ-LEPTzqgHoOgyaZpvNA6jK4wORG4Zybmc8iTA5qRowg9Ty9Dnp0SEbiV_z=w831-h811-s-no?authuser=0"
        />
        <H>День первый</H>
        <P>
          Всё началось в 6 утра, нужно было выехать как можно дальше за границы
          города пока не проснулись дачники, Алёнка подобрала меня и мы
          выдвинулись. Первым местом у нас на пути была Тиверская крепость, Её
          координаты 60.836111, 29.816944. Находится она, а точнее её остатки
          прямо на берегу реки Вуоксы. Честно сказать от крепости мало что
          осталось, немного каменной кладки, да пожалуй и всё. Если сильно не
          приглядываться- то можно ничего и не заметить, но места тут красивые,
          чувствуется влияние Карелии, хотя до её границы оставалось ещё около
          60-ти километров.
        </P>
        <Img
          description="река Вуокса"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWvLxev7f8gVdqVOcOsRM8uqa9zOErLjWnZPl-CzpSHRmYIh7_guV58hkEDMcx3Cir5QnORykOntF_5bQJVzXPV82Eu3X3_1c-FEmYcZatrYauyIKL_ZS6sOGkdzpMLI_5ZBeSbIxZ_-u-N2QDOgjH4=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="река Вуокса"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUdkLq1BmkQSrbRoH6GNkTFqndl2V1sSzZR7sqYQHy3lCKMWV03GjF3WHXKG8Dd7tNcGdnwT4ctsQatC1P32vROicVMO1JGEky1xMqM3nXJNHWqUGMsW0IOZzIVzHnZ806vEPNjsSezuV2y7YaaL9fC=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Река Вуокса"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU1Mozq_D7RJTma5jZ7u1ZsosFNRYUhGe5stbRkDfDiK5le4dJ1YPeU8o2jJTHokc7cu6sT29CjOwRsKYtUMutD9gsVxwJB8DS6qgedjd-4a677tGokvw41fBuSNWsZNMGqNNTcqDSCoqonCosjCimt=w1250-h834-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVhB0ltsygIOIeam4mesobx2xhrUB-XvGWzgYYNmJpAm4VSykzP3pxxv-1iD2FYwICOgKNrlEah-525agzUHY4d_OJH0mrNCuWTumj57uaIOj1seMlwGysV9S9d8UoKFPMwTJOWILRTxt1HT1gu5o8K=w1250-h834-s-no?authuser=0"
        />
        <P>
          Следующим местом была церковь в посёлке Васильево — Храм Андрея
          первозванного на Вуоксе. Очень красивое место, рекомендую посмотреть,
          далеко идти не нужно, находится возле дороги.
        </P>
        <Img
          description="Храм Андрея первозванного на Вуоксе"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXgmhkcY035ZtIdVLvYH-BOX6ftBvvUba6eIELc1DP6H7ewe3IyDmVZ49cbO_1Nf5NPrPjZaxD64bRTmaHKzjUBYwNz5zh4HhoB3ZgFcFrVe7I6ahHbgmfD57mc7qSIn9OB2C6KGAvNMjfY4nhtcz0t=w1250-h834-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUkfbQOG7zReE4oRCx0p1qlQ9Q8YrZjfMfQkE-igIFILSND-lc5nvMeWR6slPSeIKgBrKmHWFCIxlob_UL4TO__hKWxOEjaZY_1c5S1Y1yM5awshcjS0psAXQcx2LHi_zEzEgC69oBocdTTjHuKZPb8=w1250-h792-s-no?authuser=0"
        />
        <P>
          Отдохнув немного на пирсе, выпрямив спины после 90-та километров
          сидения в машине мы поехали дальше, а дальше был знаменитый,
          действующий карьер в Кузнечном и не менее известная ещё со времён СССР
          — тропа Хо Ши Мина!
        </P>
        <P>
          Чтобы попасть на тропу — сначала нужно пройти вдоль всего карьера,
          масштабы его захватывают, на фото ниже например запечатлён вполне себе
          не маленький трактор с ковшом)))
        </P>
        <Img
          description="Карьер в Кузнечном, Ленинградская область"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXLNZiJrlelE8kQABYmdA5spCBzbMbjkOBBpRjf3e0blMakERkYmCY3oPcxZJJUzF5e6lgMCg6qV9yRW0ZYzkNsRyBcYaWwrlRTGXQdFbi1OfaliLVCaly-z0Ctn-znwNPYdz9voVYgW7V7ULxE7O_M=w1250-h834-s-no?authuser=0"
        />
        <P>
          По дорогам вокруг карьера наматывают круги Белазы. Кстати иногда на
          карьере взрывают породу, поэтому приготовьтесь к возможному
          камнепаду))
        </P>
        <P> Несколько панорам карьера ниже:</P>
        <Img
          description="арьер в Кузнечном, Ленинградская область"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWYFgw3KfROjwbXs2ALZ8Gu2Axp-9Kd5IJWrqPZMMBT_Xoog3eI415YBswLwZ9IHvUJjiRPw5fCXiZiJH_vO3woml8rcLrkp4jpsOU8pkgZwZYRitGuZclo907TCTCajhkLVpb_Ap3pPah-cdZqQ5RN=w1832-h969-s-no?authuser=0"
        />
        <Img
          description="Карьер в Кузнечном, Ленинградская область"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVIJdB522HEhq-TMSKa4lC8YuzT9C2UasdGgJans1UtGNJjwSoOa3oSldpzV1layAREQWS5-D8QKo50WciWAAN0nb8Pugupg4gIohB5q7sZePCZbdnq5Z42hjCE9wFe2bTcDQ0JcoWBgDMdGSoVQj2f=w1650-h969-s-no?authuser=0"
        />
        <P>
          Обойдя карьер сложно будет не заметить этот знак и кучу стоптанной
          обуви, это и есть начало тропы Хо Ши Мина:
        </P>
        <Img
          verticalImg
          description="Тропа Хо Ши Мина"
          src="https://lh3.googleusercontent.com/sdv8WGiPLwhV-4LBJvf_513_UJgwv87FUEyP76W6da4es41C4G2xH0LQJwfeJCFYBvn0iLJGngNgCXzU1_G2O5rpI3uLqwrmDDY4_KyC_lR5wXE6EdcJeNsRTAoqVG2zqrrCgvOXNBpHZEvVp22EkyI9Qb8rb8hwJJi1nUqxBZnegT2a2smbfK4V8hIyOiziBvEGUxY16qitjAMJjhzKy-OGwV-9uYd6o-ymCNcMt-7nCQ8QZ9wu17x8w_uU2KCmaOKx1D2Y9XlvhHFSAIQt26wAyDUpbuXCFppyRbyZZf0MOMjpEPwOj7k8u2pg3Nk1EE1uRfQIuvPVZKUTr95TStfKvhNQqNw30_oLa2zw68tuKa3SpG5k3L4MSJwTqy-ATe71eKi25If8HJQMAF8hcVBH6Urzwuc0foUvIcgdls0mpHhuK0OySZxe6Rj8NEQntSd8thUgp7RXj_DibybxHD_DGHf1UlTuv7abIjH-1H52pd2kTmlgy4wud0ViJSMfgouLRtBGbdyz3bprgwNpgcZnAV5L0GIwLMyuXoeGMAr2t7voUF-W0y7m0xlvngtvM5kNt7Vu3-zzGlX1zgeDEtESsNozIpfWmKVUglwZYqnsxvagHHKERk-zSoAgfDIhnu1I-KQ0N2PIeVXybww-X_71R1LSbURrqFo8ECJvS-vHGcPy_EVwkOJoHct__oJJ4tvMyYr0rE6ANKBnaBvOs5Cnbq8RYHUXQZr8UmYm424B8EKTlB-6S16SNK90dIt_VAuGhp5_KStzEJ01_yBDK6hRi19wHL2w56CuvGVsOqGtQMLvtp2f4UY0ICzWwuJxa_6H6QKKtRXZ1VfckvxsDjrdEvHKyyB2fETlwGOb0r1AbpDs-W8HwlMLWyXe1RgsleEj_OP_hdBAfGOFxtHL4bgNRdMvrvf8ZdeZxP46WFTw=w647-h969-s-no?authuser=0"
        />
        <P>А вот почему эта тропа так называется:</P>
        <Img
          description="Тропа Хо Ши Мина"
          src="https://lh3.googleusercontent.com/JrNZ8AS4CbdfXp7uEyUDfPJqUO_vR56XszMFf8ZWGyLGRmo4x2jQLF3Dw_LonYv3vCvzqeeCFqpYPlhVPNDVZ5FwntQFUtrdRSsz7btmvIE1f927SJ-VucEk-7cdOV9Bvu0w6BfDNwolerfbY6V0KPo03ml-A-f9g83auj15gsXXSgtVe0AioCdW2PHsi_CJdrnnhrY_OWLBnwhAJWzwCK4m-zNUVMbxoGI74LvrbA9O6C8DjOtG2igV31sMrBwcITtQweRl72gzNp842bBpsdyBzWSIjHqM4mcRowxKmcmSTf2MeagS52VVRZzy-I-jr9EXIyskki31NDj4Ao_NItYpw0yp7i2M8gsB8HTFpTlY1aZawQVM_r8sPlwuiK2-hbEeN3LV-k1lo882hlgstNtm6aEhOsDcaE6rlrgePOg8pOEaxoWUJvqUUm9mJVh4xcqf3fB29Rww8XGd0bUAQV2poygbSjM4tVzxklELIAHQVQJ3YJ4ckRcgFdu5ZBdvmUhXj3IjJtke325erRZttXI4RMjuA9I1YayN5HVVEVIq8Ml8t0wTxRuFeE_cBh4BJTJDsvWV_cAuMrcQXLtvS5TJQUPHeqo-dKZFL2VXlw22Bq0yoNz7B0FVrKf-ZpRARwZk2Iso-MCFBc-Tn8PAfh94NsYbmjf8jAfB_PFW1BRS5MwQ1xBaqNcCepaTZNJz0exSk24NCScSKHlvFa5VvHxawafzzvbOxfUohsm4tBf4_fYRkDV8qclUoTAthfgVEhcc4hqffQwH0NILfiUPczj4YZeA1ds_bXM17UHdnXVa-ZZUdTVKztmSReGfFERerWArs-m_0ROp4pxfr-yK44u0vY0En3EYW9lwGitNACAEZi7Mfa6WtcTIy9DH14kdmRPAyaLdSreOfMHtDM0VYsAk0bPw3_-dXj_wJ6aB7B04=w1250-h834-s-no?authuser=0"
        />
        <P>
          На пути очень много разных цветов, в том числе и занесённых в красную
          книгу…
        </P>
        <Img
          description="Тропа Хо Ши Мина"
          src="https://lh3.googleusercontent.com/umV9FnyKTrrhk0rQrxf0tyT8_ANGO_MJC959dkhdJhu56dh411b5erxhpY3MfKQ4phuE79C4DL_CJJAhkP0ks_54fN5x_820tbFxX8VAkJpmLDWg3jUlqSpPHPHlCnSKr6vV7KMHx2ulLuF36xx978nHE481-4lsPRSVVJ3vxFXGRJIEOFdBRfQ8j2Bc5M0eGAL1bAxxH2jxnNtUysDcyCQH69_cptGubr2Heg62ZRc6iNdJBQyQwrH2YPkCYnz0KxOGHCyDjMTHy8CXQzNcq63jFY1KwdqE5-ehAGHq_1XZ3oV1Xq7M3jA_8pk6MWKzKmxYdHJheMGJXhfqwMXEe1Qza2Cen5J9GDjPW7w__BOhsCkAJReKInnTjXZ6pSEaP-3j-dRgdvK_jMj6B-iWFNKVxzg55o2EGxLqkYp4UjzFbUYdNoAlg20BSpHRcgyhIdcGl1_Q4-XdRU4J4fqVWgx8efl6_iR_idAwFw8AdDjHbsotXdT4CDZQWdl3kg-QIfJg839DsWz7aUH7_3x_Y1Q6jFJVWx_sisE82fljmAZKRTYe1zlz-FcZMbho_KIMag84bXu0UGe5SxldOchci64Xckzy7YKPQdCpfmM4xpEJiN4zqs5n1mecxhiefBVFQ7EsAqjV1YYBsTatInx12asW-XTqefR7ytQNXszioyTqcB2tKrpuViaoknzJjmTEOyBRpS-J7Nkf5Gn0ma9wlmbVjkypz97jjvugIYjtQFW0hWFNHsSGrjNfXsA87iNhdMA9aeptJcSTUUlBsDApIZfslHCqbztZjT6hXXnCbSfsBaJ3nQFNjs9yNBL4VnEdGqOr6cdN8gPrnQFLKStsH6flG9TtRsWxjxI9RtXsE-ElWGEjxJlgCoZhOmvZIL7xiGRId20PDX7tdOLyIWHaljSeHWcUMYLrObA88Cuo-ekd=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Озеро «Ястребиное»"
          src="https://lh3.googleusercontent.com/EOPDws9n_eOKuF1cD0IPbaNkHYZ9P-igWtJF3cJuYGPNo2Cb2rIvgvM7VyhauAO5JIQaS2_B3ktgd7SCgaBYdNpOkXvuUYX8BKZaPf2b_4V9L4x8j9NMz2D_t1QsrAP6cg-v-ITG4w7xjCNG2MUDHIqiW7412us3X_pTJX71_d7jpzk9FsnifTIQgS50RrAVoRyOAuEgZbwB-hy6Ms_L366nZaT0ueQOZ-G_4mEdrLj8KPNrBWcYZufgUD359Krc0yQlql1oRbFcefBB9Q2IFDPkwm6fjPpgFUHyP65fDy_sAD4aQnxbQ9C8stRV1juOAtSqE5qyREjWHb46KMxrkcJvipfI1t3jy-Z4nfrsqdtDk416kUOWHq0aQlWe156YXJYDtjOlou6TFRdZHee7U8PkiLBsTO7UrcO3he5okLeoELFHV6DHcnSack-s7zSQVlkJmih-hmppy0Xd0Rf6cJs56pscB3cphgUG6YFSTCBFU7WzsrVNWA9rurIILFZe1_tLJd661tnzSSWbypihYaHvpKKB4xbr7WfQ6UuUqV1i7cEzp9PncwtPljUdq_jsPbMIR5Z9mw_EJx4glDSl4GVTf9Q0mkmI-MUmchJUZIDEoWx_Re2NI73vBwkNvSW35d_xhY9jY_gmX1_uiQtPtuNbHqHWYNaM54cU9odEK3eMgzEUpBImynbye4_nTFFJ5yydMkizPJfSJmwBah0uHnPkgJYzjC_IQvmYZqkDS3EIPuBsGsNVe-IdUrMobpBkyrfQPFPpPV5d1n1_BAQPUWFA_2p-IgbQ9xuz2krc-k9P8kBYgKvXvBDhYEFKzRJ8kcUCYLM30tKlF_c9Bh70Cf9s-2deLm3lckZC_Dp1cpCbZT-eWG1CgffjXI6JfyAt1fp6YQ8zf3ojaQLYbxYhFsIcRW0XLdyMBEHVEdDPUMvj=w1250-h834-s-no?authuser=0"
        />
        <P> Тропа выводит к знаменитому озеру «Ястребиное».</P>
        <P indent={false}> Вот что говорит Вики по этому озеру: </P>
        <P>
          Ястреби́ное — озеро в северной части Карельского перешейка в
          Приозерском районе Ленинградской области. Озеро расположено вблизи
          границы с Республикой Карелия, в 10 км от железнодорожной станции
          посёлка Кузнечное. Озеро находится во впадине между крутыми гранитными
          уступами оконечности Балтийского щита, возвышающимися до 50 м. Скала
          Парнас является популярным местом скалолазания. Ястребиное имеет
          сильно вытянутую с севера на юг форму, длина около 2 км. Ястребиное
          озеро и его окрестности (включая озёра Пестово, Глухариное и
          Проточное) являются охраняемым природным памятником «Озеро
          Ястребиное». До переименования после Великой Отечественной войны
          носило название Хауканярви.
        </P>
        <Img
          description="Озеро «Ястребиное»"
          src="https://lh3.googleusercontent.com/m-xYVMJCMlOTunYbDhNq3h_izXmyOfgHvpj9r-dXNfFez0MnTFYZQ5gtqDOQM14675qfClC-9MjW21ZPiTuxHHTYJWZ37dkhQy8MJLF83fspreEAEM4rPw_mBo4DXxqD9GYT2v1kFDFp4eQGQ4FFeeet2wgvLa7h6vZjj2TCUk1DddBF_WsUzogbqg7LqB639rZyAISWx-REpkI6p0vtH82ndeRUvZunwwZq24OnGPe04BmG7VHRTQ_xsGnxYWLg5uKRy9eC74T7TT8gRfQ9d1mozIuYuofTFPQOBSOCsd2yafgdcPGcH9JWPm2niidtCZLjCTnqwBKolQNIwNaeqM_P5x8uuE2lCuK6xC-D0joaocfvgFc9u7kZLkYt-dn2SDYfAhsppp9i9Sce9nD8UmTx8FAhydx6ZXiScBQJVPhDpvOpd93ym370LkhFhZlTUxaAy7ljbJBQTvCZC50rvnINpArz8OEMKeVsXKD4YLHepO8_NUxt_Rw2TxjqFLd9HyoVuVHIHqx8T8eiKrfiIuybSyaoeN3JjJDuQs6Wdy1Ym4p3tEQOo_0c4YjWHf5xtr6s-lzXQkewsE48UIreZIx4PfuscWzP2aGVeH_O_Ty140SQhuCHgC4P7JmQEeBfoSUy16Gcg7Dxlu9uI_xClLeicH2CZ9dfzxm-R1hhbcY-S_Y1CUitgTP6dd17nrkqaUhRgTsgEqKUXE4AKlbqBTm37l1HOyTjR3vmRRq5wf1DPEisMEK00wSL66c442CiPEMijoTuB640aruYYTM35h7TT0GIKpyb7_MP0s0ox5OA6F8Qm0epBlL8HZMQr8adxHP0sh3TNG82hBErxEkrT_S4oXZ_Fo_-vHDr8IJogEDaGsbP3QMC--fAET2KIlxNADy_CsCg04j8Jf8kjvdivXrbpkmus8kwm_k1PsduwZup=w1250-h834-s-no?authuser=0"
        />
        <P>
          Вообще нормальные люди едут сюда с палатками, чтобы провести тут все
          выходные. Здесь очень много оборудованных стоянок — это заслуга
          туристов, так же тут очень чисто и умиротворённо, потому, что озеро
          находится далеко от цивилизации и на машине к нему не подъехать, так
          что на какое-то время озеро будет защищено от быдло-туриста. Тут даже
          сотовый телефон не ловит.
        </P>
        <Img
          description="Озеро «Ястребиное»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUkcDs2d9-wOyLSPDSVqJZvewSkCr2PMTTew67Cc4H6q5qtOJxy79X13e6v-kc-WNgxJ0uwzpOy-ECJElWV6AxUZUGkiKoA0dzk283a3YBS83oIUW1ElBD5LNdK3YGRnLxQu2uY9nMMtcRyNIyx-Nyx=w1864-h969-s-no?authuser=0"
        />
        <P>
          Но мы — мы не нормальные, поэтому мы сходили на озеро, около 15 км в
          одну сторону, насладились видами и потопали так же назад))))Впереди
          было ещё много интересных мест!
        </P>
        <Img
          description="Озеро «Ястребиное»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUVta-C-N5cyhrZMZ1pN3ZNpHfcqozjtivOlTqa7Kp0uwRNKxXHzVr-9xn75zndFPDb3loCZFZ3YNusAq76152miUsgmmjf_4vdQHya0F75HuT_F-JyQ4wU1elfKJSgz5BOQ_KEQs_vQj8hxMWiaAEi=w1250-h834-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXP7rrQHTzAOjb1OMfXA2IR-7ujL8OyjVMEgPURL1PopNpK-m-2TEmGm3TQpOQsZwpNOaiFv0-bZurBvBIOAn2kotGt9b5Cn8lo2lph3ojsqeXCT9Omupi-UMpDyWh5Cal6WkKKJI-Kwk5K0Zm_A3UN=w1250-h799-s-no?authuser=0"
        />
        <P>
          Вечерело и нужно было искать место для привала… Поспрашивав местных —
          нам указали очень милое местечко с отличным видом, мы поставили
          палатку, собрали хвороста, поужинали и легли спать…..
        </P>
        <Img
          description="Ладожское озеро"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUlVc255XllXNUFQjtVz4CYAW6c-9AImnDVs6Ql-LpJrAfYRdQnm0UPQmTDAVeQQDaHVpDOvB1oqaFeAKJimkmPqYfe8T2sSWgFbmGiVQmRe3rf6MYfGXMT-pzXfbGg_60zyJhM3ibJqj2GvQt3Y_2W=w1250-h785-s-no?authuser=0"
        />
        <Img
          description="Ладожское озеро"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWCEQrCiVBYPD4oYmYOyu0D4UN8CiYpMy9AKcELZur3CI7pp6Nv-04xLaj8dWFBZMdLzrP3ClTpVs13eqxltkEpqMe4lzjKSV9aLusFS-cieSjAa2dZGrKzEMwVwLroUeuYYUNqSTu9n_QPZRaFKasZ=w1250-h834-s-no?authuser=0"
        />
        <H>День второй</H>
        <P>
          Проснулись, позавтракали, упаковались, в путь!)))) Северный берег
          Ладожского озера — это уже Карелия, с её обилием каменистого
          ландшафта, водопадами, шхерами и густой, северной зеленью…
        </P>
        <Img
          description="Ляскеля"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUULlumUB2Z6tASzubpXnb8rPFCDNHkY3FHiSVHl6kByzLBmy5qUK1c-QNzdBoDsrAJhRT8N83LYt2T2i1Pq-DxveGS0MCsVeFumEh16mla9VWNCveF43XYupFKNsm0J6oCha2MrhtJWVL10xpy19TD=w1250-h834-s-no?authuser=0"
        />
        <P>
          Первым местом нашего нового дня были водопады «Белые мосты», вот
          немного информации из википедии:
        </P>
        <P>
          Два водопада, которые находятся на расстоянии друг от друга 30 метров.
          Когда финны строили дорогу через реку, они решили построить мост в том
          месте, где вода срывается вертикальными водопадами. Так образовалось
          название этого места — «белые мосты». Сейчас от самих мостов остались
          только обломки, а дорога давно не используется. Но сами водопады
          по-прежнему очень красивы. Высота падающей струи достигает 19 метров —
          это одни из самых высоких водопадов в Карелии.Добраться сюда обычным
          транспортом довольно сложно, дорога разбита и лучше использовать
          машины повышенной проходимости.{" "}
        </P>
        <P>
          А теперь внимание на красную пузотёрочку, среди суровых авто с высоким
          клиренсом)) Такие мы там были одни, но Ситроенчик выдержал испытание с
          честью! Ну заслуга Алёнки тут тоже безусловно есть!)))
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVERaQi3_ei8b4LU_AG6FZbQzpWZAHT6faDstdoBviAEWujeHBPI4aM_XRhtOlJpEL4nrCqrwEzt9AdyB7yH5KXm2Ma6WmiuqtZvnQQvOx5GY1KmaaVAfwpE_tW91FjSMgMRccX-0W-EvfAI6d3-tNf=w1250-h439-s-no?authuser=0"
        />
        <P> А вот и он, сокровище Карелии — Белые мосты.</P>
        <Img
          description="Водопад Белые мосты, Карелия"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWFM6o1qH25KEdF2knq-_JGXKfaE9BmeEpId3Yp9XnnuYcCdOQyJx1Yxm2jSjnnOsdJ1ksAsojddrDK5AEoJZe3RfMxShoMkI4RMzFsOoIbnu9wMvR3AIh6hKYEcnM2FuscsBMxDwk5ayPFbXPRvoaQ=w1250-h834-s-no?authuser=0"
        />
        <P>
          Как уже было написано — рядом находится ещё один водопад, но до него
          добраться сложнее, нужно пройти по бревну, которое переброшено выше по
          течению и дальше немного пройти по тропинке прислушиваясь к шуму воды.
        </P>
        <Img
          description="Водопад Белые мосты, Карелия"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWWA_AQ6xkv7qmZ-4CO328TtitcO_84N6oTCNjr8sm-qpETjUas6IzKbH3lALKE4_x8eBLhEOmSXjFzZNjNN5XitYFWTVj0tj95brHZGHdUjmf6_Yv4fgPp3Y17K3BscuTVyFFan1ZLuRBJu3iv5CUd=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Водопад Белые мосты, Карелия (малый водопад)"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVkCoVgv7flPkPqCMqcFYBCnoOnTWDPjEuTIxiVGsgHLkHihtWkyZvNHfdEyB1eUDnGwJKqKdHeQm4NSjc-Cf_dmQTKkJUnrAIhzI6XZudh3YIlthgsynbw3sLLskpY1lsqFbEx6qVxUJ9GOETwUUkI=w1250-h861-s-no?authuser=0"
        />
        <Img
          description="Водопад Белые мосты, Карелия"
          src="https://lh3.googleusercontent.com/pw/AJFCJaV902sXNOSyjgXufnAnYkl9UgwsTRN_vyPePOEDCNUJGWoJgqdx-8zrJyrU7o2yn_uf6x2rCMrDsGcjZWdnCspnl8Eq2Oqw4uONrWR30YhdRqoIKvL-mD5U-Yhd4tX2TsRheM1L263q0cIqAdYP2KSN=w1250-h834-s-no?authuser=0"
        />
        <P>
          Хорошо отдохнув у водопадов мы поехали дальше. Дорога на севере
          Ладожского озера, на удивление, оказалась в очень приличном состоянии,
          ям не было, да и траффик был довольно редким, а виды открывались
          просто фантастические!
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUuDQZZV4BAjzrWd__X-W3mwheJc-lGaR2pOdFGKaGnq2UdpoIz5xUkZvtGK04pSygv_zQ5o75d8tdS_z75EZBjbIK6oIh3RQa5WV5BnHZNnxmAX2ROH-9ucBkKdSdzWNpQXM81YD7KrjkpwevM9Inx=w1250-h834-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVIpwGTrje1OkH-XulSOuKF1WCn-DMX8OCzS9E9yYARi522FjDon4j__pD3pSCYCym1VpvqqdJqqb4K-IOJjPABvrComRNIMR-wsd1FuUtyrtNwrf8LsVvyK0KrfgosxZmCzElB_k7CD8NOhT6ZO3fx=w1250-h834-s-no?authuser=0"
        />
        <P>
          В Карелии великое множество интересных мест, одно из них — это
          совместный проект финнов и русских. Суть проекта в том, чтобы сделать
          из руин завода, этакий туристический аттракцион. Выглядит это всё
          конечно очень здорово, повсюду стриженный газон, скамейки,
          информационные таблички, всё на очень высоком уровне, но за такое
          удовольствие нужно заплатить, для этого у входа установлена касса. Нам
          же удалось прогуляться совершенно бесплатно, так как в этот день
          проходил квест «Дорога приключений» и за всё было уплочено)))
        </P>
        <P>
          И вот немного информации из Вики касательно исторической составляющей
          места:
        </P>
        <P>
          Тулмозерский завод — чугуноплавильный завод в Олонецкой губернии,
          основанный близ деревни Колатсельга акционерным обществом «Сталь» в
          1896 году. Одним из инициаторов создания акционерного общества стал
          Великий Князь Пётр Николаевич, который получил в наследство от своего
          отца проектную документацию на завод и договора на аренду земель,
          почему в документах часто встречалось другое название завода —
          «Петровка». Доменные плавки на заводе осуществлялись с июля 1899 года
          по июль 1902 года, и не оправдали вложенных в строительство
          производства средств.{" "}
        </P>
        <Img
          description="Тулмозерский чугуноплавильный завод"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUtFvwH305JO2F1_5wLzTPdHO0Oqkh51kuKvcL5XlX16FthfJcde_Je8LRbs4XpOK3GkVhHFOBk7FB8AMSWjs_bfW_rMl1YXqn6uE3zLs3oXJp5OX5TDhOxdiRHtSLRAzT98LznkUGLP0i-XfnjL-Z-=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Тулмозерский чугуноплавильный завод"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUSo7xbe_hhwxFC_FHU0qAiE5NMVMF8jsaeRR5GW6uNFQn4OQUEsVB-hSxWcQAo5u-lleLYRG-Xqms-WxV6lihJriPwoT99YxZbSXY7D_Fy1N71nlMPBPG0pbW0-OtgMfn9Y4yjORAe6N7A3qr0aLRB=w1250-h834-s-no?authuser=0"
        />
        <Img
          verticalImg
          description="Тулмозерский чугуноплавильный завод"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUvzkeJbl37-tBko1aJXzYvl9o2UCBa1kqH1gH3fPlRru_bCQvQJNHzC9FgtI0iv7Ur7sYOH6DkknA2IMBHdLmBDjQayH2F59ugil6uHLAPmtocKl9KUbfT86qy97oj1B5KTZxNPJ6aPoxAEypMut06=w647-h969-s-no?authuser=0"
        />
        <Img
          description="Тулмозерский чугуноплавильный завод"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWjtTxXER33S-MyR0VnOeXYe19GI29ocpcm02bUySAVc23nn3-rHHHTK55CEVh6XIwpmfXQruq-ZCfx-4MnFZ59G-JaSS4o9LWE7xd4eoTGKtP-RjeRdNcZ5eh_LFTlvRk1q5B3IxIUznfiVyUtXG2Q=w1250-h834-s-no?authuser=0"
        />
        <P>
          Вот такого уровня большая часть дороги по северной части ладожского
          озера, РосАвтоДор реально работает, а не латает дырки))
        </P>
        <Img
          description="Дороги в Карелии"
          src="https://lh3.googleusercontent.com/pw/AJFCJaX5gua46b7eFlp5gYjNHEIFDqeoo1xp_hAaFOd35uA3EH8ycMam71vl0ZMYCkiu5LJjW_5NoIUE1NwjbQoCdwbTVA6gFfGE1HKQ7OtNF4rnoPqrhEDo6XUouarRra5Wqj435bxUlN3YjXMYISIWKAbl=w1250-h834-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXRFx2eY4n0MW3jGv9ozTwsxd5-5Wi0ALfG3INZiPmq5oDunmBQyQhR5Bay0CS3DbrGICgV7jTYnCrx1oKThdh9zXJJf_p0ZSV-aJRPjCQT7y8SKuDnO86CoUyBYLk2G-7CPzgP8bes4YbdxfEzEV8Z=w1250-h738-s-no?authuser=0"
        />
        <P>
          На пути неоднократно попадались заброшенные церкви, вообще их довольно
          много в Ленинградской области, как и во многих других… Особенно много
          таких церквей в Костромской области.
        </P>
        <Img
          description="Заброшенная церковь в Карелии"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUdApgYLEMWtUxEQD69vALq35ZIZdRHe9ToRQiFfSKpD4G0gTr2C4n_ODiqtuHLFhnEovUDcUc5zAOkmhbDjDC4_cBnT7da-P08Wij_YsCzw_s9jtJgQCo5IF7RVwplT04i2jW0yLjE2StXChBAdIXj=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Заброшенная церковь в Карелии"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXI5oW_JRRFsrFIIpwR1RoH6OIezzYBEEXW-Oee5K80LlGtqZKB_SgfaZgCnMAW9YteECZv0pzumhJ8LNT0GlUUnZuA7PfiR6hggNj0RI-ub1S3tH8hs4sklI_pfwhjyayawwXuxrXrP1TWeh1srUqH=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Заброшенная церковь в Карелии"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUAITJDzT6_7hjhuDALaVXXCmtFy4tGbF2mZ_zYiOZb-PKoNJLXkzBbjfbRcssBXtoXYbQZDVbr3FPUMCYY1CAleaMhGHnxTQYa3vjmw5Rj6j9x2UAikC0lBRjkr7tQSx8e1TvQLZfF5GDBBmA0hiiW=w1250-h834-s-no?authuser=0"
        />
        <P> Ладожское озеро с северной стороны.</P>
        <Img
          description="Северный берег Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWUGjGqJOPCwRwNmc8OuEITgC6HDTfnoDVqXmMbO2OIPS6t6UWFrceFkbzCidhTz8-9PquKLw3QeUDUke3RrAXxbFuFA6ZOO_D0ISGbkXw9DL7y9XRy471uEe6MqTJsvupyOKjIBpLqPWjH6CN2fOGO=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Северный берег Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXrhJ-LbJpaTmfZd8JGVFy8wCjujeHAPDHuh482oJk6i17eAZV84qgDLtt1mxjZSs9hb7JM0FK4M5XaiTQG8hmeC8boRKJ03Kv0DMnYvPjo9Xwy535-PixOaM4F6iPL06sMIo9domFFBPB_i9NSbcgw=w1250-h834-s-no?authuser=0"
        />
        <P>
          Вечерело, нужно было вставать на ночлег, да и кушать уже хотелось
          очень сильно))
        </P>
        <Img
          description="Северный берег Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXhhs6u9JE0oMWbXGGysYX79Y7qTLVlwbnUlR-WFoWwduNmHrTlNAE9bxxAKRpMD-2YPrS6ILiF-HBkiWojSDMAQWl7x3TRD9CcFOJ-M73pXXWMHWB3DBdtlTxDOgMitcfs77WoCH0Jezf53nLqd62-=w1250-h808-s-no?authuser=0"
        />
        <P>
          Для ночлега мы выбрали живописный берег ладожского озера, хвойные
          деревья, которые очень напоминали ёлки росли прямо из песка, очень
          непривычно выглядит))
        </P>
        <Img
          description="Северный берег Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVWWqPZYukGVSHmgP1HhrmpfWuTS7AlF0Qv3wjlpVqXH99C8VCKHVzPU1zdr4IhITbubZ3nxpORexYCeD8DCCaiKIUqc8uP_lUR_2rXjHP94j-lka5wEGTY5d6pPl7_DhnAtvajph6aIwGKJzVBi1IM=w1250-h834-s-no?authuser=0"
        />
        <P> Погода была отличная, тепло, солнечно, шум прибоя…</P>
        <Img
          description="Северный берег Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXEw6IY4JstnmC4mu2Db9iLXQRn9TMGKUKWX2XqM3ey0SRxhZDDT2VTWwNYy37E_R1wN0NhC-hJLvVWoaxmflO5irYRKLdOPA04kJ5tjOj49n-ejh_yA41dS0mx0UDLrhBuQc5rUn-P8xch-l0r1MJM=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Северный берег Ладожского озера"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU0pBMgSjVB3cHxC0q04QKWO2Q3nARv3jB6opjseuZab20CXj6oeM1Ff9wu2XLt0jVWA6K0dbzc66LP1laaDoqsZ0sOo9O_BLuaheHwcPdMKES2exFd7_aEsa-gyJ_04fXycysPR8WqBfk4p-mS8ee_=w1250-h834-s-no?authuser=0"
        />
        <P> А Алёнка даже искупалась по щиколотку)</P>
        <Img
          verticalImg
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXHOuY1dQedXNhbTKApvLMn1tEk4yZlcAg4mg_smTrrSmXneFzkGY7hbgvnpjprfvlaJN-5_VJ79zuXcUm3yLQ0jEZQkyS6bIrD85oEAFgouD2EB-qEOKGYhe63_HjuDSh86xfkd-Rxh4P0iRiOk7P2=w647-h969-s-no?authuser=0"
        />
        <P> Всем мир!)</P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXRLGvgH6COMzLhnH-iGN5OHPetLZhHQGoX_D-GtWF9Xog86_SOHNqTrU-G1my6O5gokydDB8ybUfvSBL5w4pme7w9x_lbVG2yUbqO3uQH5WTOPo6gCOw72EMfoSox5os5QPnj_rquFSCZgWdPPaBTn=w1250-h834-s-no?authuser=0"
        />
        <H> День третий</H>
        <P>
          На третий, завершающий, день у нас в планах было посетить ещё
          несколько мест, но удалось посетить только одно, но об этом чуть
          позже…
        </P>
        <P>
          В городе Лодейное поле есть очень высокий мост, но мало кто знал, что
          на тот момент он был открыт для посещения, т.е. не было ни единой
          преграды на пути к самой верхней части моста. Я очень люблю обзорные
          точки, а отсюда открывается очень красивые панорама.
        </P>
        <Img
          description="Мост в Лодейном поле"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXKYvB4Gr4JjWrfMrJ3YvZZC36uASVDD4l-tIXd3q2_yozGquRtZrsxUkzqXm6cKtStbCMZ5PbKlMFmBjuL5f5MRKvGIOtOBZBwHcyoDGVosZGLNUzxNqtbnQQpql118xt1mwTMKcD7i5iged29GEag=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мост в Лодейном поле"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU8UGuGmy6k8OAgWZE02i8QX8gIiyUw-DYD-YcqNTVAVGFhtOOQXBCLzYn6QQwmoo2IG2AJ0xhooTWkjhs7mXM0185E0Cng1E5vEb50NajwDuFn9uBd5HGglwAZpJz6zh_UmSZh5GgfmLeDYQofcvFY=w1250-h684-s-no?authuser=0"
        />
        <Img
          description="Мост в Лодейном поле"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWIxG29tKmuFfbjskuOwyXdytvmFzlPWcZYGZW9DPp12EEaLLoxBsQuDG2DCIxdPrehPYnfYDJWUludBOgzOWYq8nDiMkEGcO41LUm2TsX4lKgbjIAS4-1oPcaI-yR94CeUhLFjJLcondf-odIHE8zT=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Мост в Лодейном поле"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUMoBYISjC5TpFk1TJeO2vVruc3HJ7jmmA6WWVf3arqT02ZJd7yzn3gQzn2glkNxin3cEJTdnszEZ2sjdl1HXUQRYzjLtedD_1zUPTD4xjT6NBlhh447_1ZamK21lDYUcezALO6Z2NH78mUxlFfjR5r=w1823-h969-s-no?authuser=0"
        />
        <Img
          verticalImg
          description="Мост в Лодейном поле"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWsleKi5uud1qnPNtJcLzTuDD-fWAV_pv4uHgGV6bUmkW6IKGU3ZK9courVQvIm-YnG_U3U8B5_iwQ52owPAIa-U45xUAIDtsvwGtNDEBFl8hluhPI9QmS34N1npRygpZMLOJWcwonl1EM9dhbAUts9=w647-h969-s-no?authuser=0"
        />
        <P>
          Кстати наверху почему-то очень много мошкары, поэтому находится там
          больше 20-ти минут крайне сложно, сжирают живьём!
        </P>
        <Img
          description="Мост в Лодейном поле"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU42O-jfX9I7QDOGpBEVv9mXQJyBmnFGU1J4hPzUAU8Eup5TkLB1dIIJfpY1yIUrSEAsTP20CKrALmQqKXW23p_3OQsuDe8AeWwTVhh-PvsBkW3QeWARJllO8cAGGaKgzkPNk6GIMdFLoHK2blERmlC=w1573-h969-s-no?authuser=0"
        />
        <P>
          Ну а дальше по плану мы должны были поехать на Свирский маяк, но за
          десяток километров от него у нас отвалилось сцепление, манжетка
          выжимного приказала долго жить. Увы но последние 100 км до Питера мы
          ехали уже в кабине другой машины, а стойкий, но вымотанный за эти три
          дня француз отдыхал на «спине» эвакуатора.
        </P>
        <P>
          Как говорится — бывает всякое, и это далеко не самое худшее окончание
          путешествия, все же живы, здоровы, почти все запланированные места
          были посещены, сделана куча фотографий, да и вызов эвакуатора за 100
          км от Питера оказалось не таким уж и дорогим.{" "}
        </P>
        <P> Всем путешествий!</P>
        <P>…End</P>
      </PageWrapper>
    </>
  );
}
