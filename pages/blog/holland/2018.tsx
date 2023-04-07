import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function NaPolDnyavAmsterdam() {
  const { title, description, img } = getArticleItems(15);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Пролог</H>
        <P>
          Этот отчёт является завершающей частью большой поездки{" "}
          <A intend="all" href="/blog/france/2018-p-1">
            <P as="span" color="green">
              Париж
            </P>
          </A>
          &#129042;
          <A intend="all" href="/blog/sri-lanka/2018-p-1">
            <P as="span" color="green">
              Шри-Ланка
            </P>
          </A>
          &#129042;
          <A intend="all" href="/blog/emirates/2018-p-1">
            <P as="span" color="green">
              ОАЭ
            </P>
          </A>
          &#129042; Амстердам.
        </P>

        <H>Несколько часов в Амстердаме</H>
        <P>
          После длинного перелёта из ОАЭ мы с Олей наконец-то приземлились в
          международном аэропорту города Амстердам. Было 6:30 утра, а до вылета
          на Родину у нас еще оставалось около шести часов свободного времени.
          Чтобы не сидеть всё это время в аэропорту мы решили прогуляться по
          утреннему февральскому Амстеру. От аэропорта в центр города можно
          добраться на поезде всего за 15-20 минут.
        </P>
        <P>
          Когда мы вышли на пирон вокзала Amsterdam centraal было уже половина
          восьмого утра.
        </P>
        <Img
          description="Вокзал Amsterdam centraal"
          src="https://lh3.googleusercontent.com/pw/AMWts8AG32yv-0aod8uX2n9QHNCU6Ks9-16BuBdQjpHK4lxL5VoASXgq431FSTIMh8osJp5xJ_kWA92o54a8tvxvJQhlskvYY0smtgVp9tgEBNHkd8nZ9ilxrJkuN_TfHuhUZMmDkc8gw9j-3j_ARvQkPAeh=w1250-h834-s-no?authuser=0"
        />
        <P>
          Мы решили не терять время и кратчайшим маршрутом направились в центр
          города через пешеходный тоннель.
        </P>
        <Img
          description="Тоннель от вокзала в город"
          src="https://lh3.googleusercontent.com/pw/AMWts8CnGwaMq8Xbhw_gMcvBj3mCwfVom_RYIHfurYDkROxoYk0m_vgddwSgROE6UZBVbg44PYHu0QNkRisJLZefFV-9IOV9XgStV30hOnlVu-rq_iLLXJFr__5hlxxyG9z519s4R32x4Vh9SlB7AY7jlkcX=w1250-h834-s-no?authuser=0"
        />
        <P>
          В это время суток, да и года, туристов на улице практически нет.
          Местные спешат на работу, катаются трамваи, все кафе закрыты…
        </P>
        <Img
          description="Церковь Святого Николая"
          src="https://lh3.googleusercontent.com/pw/AMWts8ANJbEh4bTXyO5Ei-9h4Jofc3LJMmX0SXDIphB1JLIl6t8LDX2KqWsfPQ3OEm46fe8-sOgu44eNkxxJbgQEAIN-5WR8KmvCLGvjXpugvaCUYDxLcCcoF-MjWbaGJdp8rsxiaok1wpHcw2YhVjcIBrJX=w1250-h834-s-no?authuser=0"
        />
        <Img
          description="Народ идёт на работу"
          src="https://lh3.googleusercontent.com/pw/AMWts8CPyH2biB1SjKHdXk9dsqyrDuDRH1k3Q9jGvXO6lfmb_QwMbQJ6RcuEELmquAoR-Mslb1Qyho_l4MtYzGMgVlZRuBITUR27owWlj1R8L1YaZ5mV2h3X1Yp3RXycOsv-_CbTV6zyO16lffxHVihbZ4v8=w1250-h834-s-no?authuser=0"
        />
        <P>
          Зайдя вглубь исторического центра нас окружили традиционные для
          Амстердама узкие домики плотно пристроенные друг к другу и отделённые
          от точно таких же каналами.
        </P>
        <Img
          description="Вид в сторону церкви Аудекерк"
          src="https://lh3.googleusercontent.com/pw/AMWts8C0msU6l6TajquRg6ckXRVzWW4tN5Fxex7B1ahg2ngFN0R6OowZncAeXwNhGFy7nydzu6UlpDE768c4mZLScRRp5gwDxQgKo_5KKYfcn4cOSqiMU26WDwW2P1kcj7AuYvGFzMHNPtflpXv97iiYXq1m=w1250-h834-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CVnFT9AOhYXpTTCMgbnwOKHopnkA0hW2s3O4KtwfISyPbW5dsE5K0MA1HljUT-jn-DrKu3C1bftqXt_OxXgntdyCb-ySE17KlSQW-LKc2pW9lk9JkavUd5mafM1_IRSx6nHdQuhCR9nNrmdMET2KEj=w1250-h822-s-no?authuser=0"
        />
        <P>
          Наверное в Амстердаме самое большое количество велосипедов. В Европе в
          принципе любят этот тип транспорта, но в Амстере их особенно много.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8BSA86vaxjLcMvRaa40KulSnTwdw4JAzdjytJ09fgXS5afnpdZ_HMV2YgWHjPuAwzCsqHZhGULZ4t0PVZQ2W2gzbkNxQo_R477NZVRa0Ybi6_BaKa66vb1LicjeYA0vrgPhXHfeRRGY4S65nnmwayn9=w1250-h834-s-no?authuser=0"
        />
        <P>
          Температура воздуха в этот день была довольно прохладной, особенно
          если учесть то, что мы прилетели из Эмиратов, а до этого провели почти
          две недели на Шри-Ланке. Несмотря на то, что мы одели всё тёплые вещи,
          которые у нас были — это не помешало нам замёрзнуть.
        </P>
        <P>
          Вскоре мы вышли к старейшей готической церкви Амстердама — Аудекерк.
        </P>
        <Img
          description="Церковь Аудекерк"
          src="https://lh3.googleusercontent.com/pw/AMWts8AgUepqr0CyocIpnL1lwoGzDj0NfbZ_h29fvPtlnwvaOWNrTzhRwCfBwMuI7ogmYLzi1laUPBP-PK7PQixmDEvfpClic2SKWsXqTSjlURqiYuubai1GnMaYEwjeAdYoRyHxwDMh6j76XuTdc4p3qMk7=w1250-h834-s-no?authuser=0"
        />
        <P>
          Развернувший от неё на 180 градусов можно увидеть церковь Святого
          Николая
        </P>
        <Img
          description="Вид в сторону церкви Святого Николая"
          src="https://lh3.googleusercontent.com/pw/AMWts8Bmp5yuzvdKNH7AJX5zQx2AnnD4MtRemsqool_Xz4XiwjblxVnucPlizwYFr2NTLggf59ob3dowuya70sOZtaQr3W7DZMqi5xsoOCxTlwgAeR0vw8-qf3o4HTuNJlUFwGM_Os1fExqnj_wb6cmYQxtr=w1250-h834-s-no?authuser=0"
        />
        <P>
          Примерно в восемь утра начали отзванивать колокола, а мы к этому
          моменту уже уже ушли по узким улочкам к богатому зданию ювелирного
          магазина на старинной улице Рокин, перед которым расположена странная
          скульптура в виде не целой женской головы))
        </P>
        <Img
          description="Странная голова"
          src="https://lh3.googleusercontent.com/pw/AMWts8Bzc2F3Rs9enoKrFSmTk4iFlOgodA-3fEqKpxiZo_w5f6o_FDxTJYVlHlIDaws-v_wcZkzT7XVQb1p3uMLQOHQgK2Z3b-rwgA0_DQFaEBat-q6aTHK_5C6b0W4qZyz0BeV1aqgfu9ub67gYWsVSCC8y=w1250-h837-s-no?authuser=0"
        />
        <P>
          По местным переулкам можно бродить очень долго, смотреть по сторонам,
          искать что-то интересное. Но что может быть интереснее чем вкусно
          покушать?) Жаль, что это заведение было еще закрыто))
        </P>
        <Img
          description="Вкусняшки"
          src="https://lh3.googleusercontent.com/pw/AMWts8DIDHR8KhUdos7IobhIFe_wroOQz3_QaDEpPhoH6Ts-93ey8MWSfr9wu5Ri-UjJzIhLiYIEdw8i3-6uCwFddMaLHp6IPHTS_GjkuEtVasbBZgbVWkkY3MhRaMx67R2PNNxQ_FWvsT2XHrNlA98Fefq-=w1250-h834-s-no?authuser=0"
        />
        <P>
          Несколько часов пролетели незаметно и нужно было возвращаться назад в
          аэропорт…
        </P>
        <Img
          description="Реки и каналы Амстердама"
          src="https://lh3.googleusercontent.com/pw/AMWts8D2attI2pZ_WEDZZ-ZDUuPMd9yfZk8AxOUeYYvvcqEh0mG46l2WKfRySy0w-f0ZJ3DL6jJXVVA6x0tKHn-dcDS3jTBY9p7-FEHT21hEmK7fBu0GDiBPrA3j4H5l0H0dkDSxeWgsl-kSgvt8mw3ST8y3=w1250-h834-s-no?authuser=0"
        />
        <P>
          Ехать ли в Амстердам в феврале — вопрос спорный. Но если вдруг вы
          оказались тут, например, транзитом и у вас есть в запасе около 6-ти
          часов — то можно провести это время гораздо интереснее чем, сидя в
          аэропорту залипая в телефоне)
        </P>
        <P>
          На этой ноте наше путешествие подошло к концу. Не смотря на то, что
          оно длилось чуть меньше двух недель — по своей насыщенности и
          увиденному за это время поездка определённо останется одной из самых
          запоминающихся в моей жизни=)
        </P>
        <P>
          Из всего вышесказанного(по всем частям поездки) можно сделать вывод,
          что рецепт классного путешествия прямо пропорционален времени и силам
          на подготовку к этому путешествию, хотя я не отрицаю, что иногда и
          абсолютная неподготовленность и спонтанность могут добавить остроты
          ощущений и разбавить собой атмосферу происходящего)
        </P>
        <P>Всем путешествий!</P>
        <P>…End</P>
      </PageWrapper>
    </>
  );
}
