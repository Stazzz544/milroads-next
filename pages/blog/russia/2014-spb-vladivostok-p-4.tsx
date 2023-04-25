import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SpbVladivistok4() {
  const { title, description, img } = getArticleItems(49);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P>
          Казань — это место не похожее на среднестатистический , а уж тем более
          провинциальный город. Казань — это современный мегаполис, чистый,
          ухоженный, с отлично развитой инфраструктурой. Тут очень много
          достопримечательностей, как исторического характера, так и
          современного.
        </P>
        <Img
          verticalImg
          description="дворец бракосочетания, он же центр семьи «Казан»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU1k4SWxDkqb53SM1HPyjszY_TRQN3HDDaIruu59yG6TRDNbvFlgf2EZdgJXEOzI3Hlxwu6BC-3QPaEi5RJnbqCLef3iU3HOZx6CFJ0lA--WsqLTtuG6rRGtSlwKCvDjYSsYbvHTBemDKHMKmZZZplS=w701-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          В автобусах и метро информацию объявляют на трёх языках, на остановках
          присутствуют карты города с отмеченными маршрутами автобусов, так что
          не один турист не потеряется.
        </P>
        <Img
          description="Вид с набережной, Казань"
          src="https://lh3.googleusercontent.com/pw/AJFCJaV1bE72F_WV7W7GWiSvWQ5ZhCn9RiWTy6Us4RcG_rmrsTjTZWgaEmywUlN4sfmqYrEYAA3xTmWktut89_ULBdX5Ue58Z-b4nbH5qSYMQxfXnoC9T8rejwJjxw2EgJhD9XZXamQ6lqwhCv7LWGnal-K7=w1050-h512-s-no?authuser=0"
        />
        <P>
          {" "}
          С набережной открывается вид на Кремль и город, выглядит всё очень
          аккуратно и красиво.
        </P>
        <Img
          description="Вид с набережной, Казань"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUHSO20dz4s_NdWII860X_T7VZW7EfSvF0hqCrI_jpLnb3h8B1rIWLhTvJiAJQ8bzD3sT5DgaA61iCwUvP3Qimd8LsDaxT6DKYOISvldLS4r8jsGOeA2b-FMlBtlIJE-KcSNZXqi67MSmMwrvgu-aM5=w1050-h587-s-no?authuser=0"
        />
        <P>
          {" "}
          Город богат красивой архитектурой гармонично сочетающей в себе
          современный стиль и историческую часть города. Почему-то я не увидел
          не одного панельного квадратного дома коих в Питере на окраине каждый
          второй, если не первый. Да и погода в Казани странная в хорошем
          смысле, смотришь на небо, кажется, что вот вот пойдёт дождь, но через
          10 минут тёмно-синие кучевые облака куда-то деваются и остаётся только
          голубое солнечное небо….
        </P>
        <Img
          description="Дворец Земледельцев, Казань"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWUKcB6olVk-rjDilL421zc6irsha7cb9Nz98mYQfm9TMTbf3TDGoqUDZxfndTWGaJf9zDiN4uNN13ICRUDTk26OZk4TdBuJZdiLjQS7AzOtPQtD2D5j1GngemB0GCZVOYxm4nn8QXZ8z2Y3FOpG8ZY=w1050-h695-s-no?authuser=0"
        />
        <P>
          {" "}
          На территории кремля находится куча музеев, православный храм и
          мечеть, но в отличии от храма в мечети можно фотографировать.
        </P>
        <Img
          description="Мечеть Кул-Шариф"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVB9S9e_jEuba8DPOV3s3Mn9AMoHYDT_iR24vmFaa25arQl1KJPKZpzKyrx4zAm60VFrrkSgVkXLU81unBLQ3bt1ZJjN7CwuNjs8X-Tr9Pbwl3wzPvGXTM7FOQFyq_cGzfDfmLH5yPjZ07-2NAYsn9e=w1050-h695-s-no?authuser=0"
        />
        <P> Мечеть Кул-Шариф — главная мечеть республики Татарстан и Казани.</P>
        <Img
          description="Мечеть Кул-Шариф"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXmpGjwvB-vmjl--9U3OkXOdOq8_LIHZac_unBUmGGJA546PsaXqHq_AGqaW6kkDxbuilP4vQAc-03hFLXG5DH6iXkIrTwFewS4W7m1wp8Salq6LEy3PNL8A5y5PK_FMz2mWh94IGGeL_-Tnzmfo1y-=w1050-h695-s-no?authuser=0"
        />
        <P>
          Мечеть изнутри выглядит не менее красиво и дорого чем снаружи.
          Роспись, подборка цвета, ковры…. Очень поразил Коран, представленный в
          этой же мечети, линии текста настолько ровные и тонкие, все одного
          размера, узоры симметричны, что создаётся впечатление, будто он
          напечатан на дорогим лазерном принтере, а не написан вручную,
          человеческой рукой.
        </P>
        <Img
          description="Мечеть Кул-Шариф"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXFHN2JaDbS7VtMh_nnHTzVS-xrdE-7E-1tI34s-yyOR6zeeGBqShPKnWs81nDK5H2uo17_COkQ86dGkRXU_J8SZp1UGS4RIlxOcri0DSLZZCJC616fLmuxHgQjcW1feQlUhfOAns3NNanSbQzuE411=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Мечеть Кул-Шариф"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXFHN2JaDbS7VtMh_nnHTzVS-xrdE-7E-1tI34s-yyOR6zeeGBqShPKnWs81nDK5H2uo17_COkQ86dGkRXU_J8SZp1UGS4RIlxOcri0DSLZZCJC616fLmuxHgQjcW1feQlUhfOAns3NNanSbQzuE411=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Мечеть Кул-Шариф"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXiH6F-t0pX_hHZWsQ7UWkCQ_D0-4DliTSWw1mGddfTCWgapagOBD2Xm3Ho2AWiaiBGXqzeDvx90fJXgi1nAISmcI9id4gOO6GeZK5YINPHxm2frHz6yv8Ax-emW3_brZ3xKSI1HdJys0q0BVT6F5XC=w1050-h695-s-no?authuser=0"
        />
        <Img
          description="Мечеть Кул-Шариф"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU9_w-_Bpr1UQres2d4XBE1YDyH1f-u8CE4qWDG_JCC1RYHnyt4w8YEso4VCoAD35_i1kR1Igl91lFAiRUU1wU62EV9mPQ_tGRrmP_5M_XuebPFQnvVQBFvvGlxVHYA6q-CESVTeKATqwAxigm6HC3t=w1050-h695-s-no?authuser=0"
        />
        <P>
          {" "}
          Так же в Казани есть аквапарк, который нам все рекомендовали на каждом
          шагу. Аквапарк действительно неплохой, но подпортило впечатление, что
          из больших горок работали только те, на которые нужно брать резиновые
          кольца, лодки и прочую лабуду, а обычные горки в стиле сел и поехал в
          этот день были закрыты.. Ну и адовые очереди… Чтобы попасть на самую
          крутую горку нам пришлось простоять пол часа , не меньше… Из
          положительных моментов — можно было сплавится по речке с выходом на
          улицу, откуда открывался живописный вид на город и в частности кремль
          Хочется отдельно сказать о людях которые нам встречались.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXow8vEDnZXhIcOwOLnempfIrKHnXK72UOmUEFg6_KKTw-J5ldzUNpGVOh3zgK5KwMOlE6chYTqe7wKVGAQthN0hXII0ufW1ZPmcz6okmyukXwWJ4_rW0dp3qHRPGVKQXLgaNn_ej_Q8ldHcXNS8hoX=w1050-h675-s-no?authuser=0"
        />
        <P>
          {" "}
          Этого корейца зовут Фойко, он сам подошёл ко мне и попросил меня
          сфотографироваться с ним, чтобы я ему потом прислал это фотку на
          почту, честно говоря, даже не знаю зачем ему это))
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXd-rLVHfGql9hw5f9IlL7sSW5QbCI2volGujWiim-YKAKBf93q0nGDQlh964dDWjJ7xB6-y9WpXvtbuqNwUrzpeJGClnlrlNLTKX8GlyRpn1b-h4Ib8vS1d1GloPjq85_w6iE8Wa7o2W1eOOYcnzQ5=w1050-h719-s-no?authuser=0"
        />
        <P>
          {" "}
          Жители города очень вежливые и радушные люди, а девушка, которая нас
          приютила — Айсулу — просто чудо!) Мало того, что встретила нас по
          приезду на трассе на такси с утра пораньше, привезла домой, накормила,
          напоила , спать уложила, так еще доверила свои ключи от квартиры.
          Спасибо Тебе огромное за доверие и за тёплый приём!){" "}
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUAp1flQ_nDJzCJs46I3ybkIPFa8l8IhLq3Skg6uriYDN9sA4QVC_d_gTYGqjIOXQ1vXolJLN6zLRyFLT0AYQINb7iZJCC3Ph2lxiDBhv9Jgffr5kzt8dyBbG4Ds_ZRefQ9zTRf1IXLp1MzRkae5ldY=w1050-h695-s-no?authuser=0"
        />
        <P>
          {" "}
          В Казани мы провели три дня и нас снова ждала дорога. Впереди были
          1180 км пути до г. Пермь. Там нас ждали родственники Веры: папа,
          бабушка и сестрёнка.
        </P>
        <P> Продолжение следует.</P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
