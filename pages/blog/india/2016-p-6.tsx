import Img from "@/components/blog/blog-components/img/img";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function IndiaNaPoezdah2016P2() {
  const { title, description, img } = getArticleItems(24);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P introduction>
          Текст в этом посте написан Ольгой от её же лица, и немного
          отредактирован и дополнен мной (Стасом) =)
        </P>
        <H>Возвращение в Дели</H>
        <P>
          Поезд в Дели должен был прибыть еще к часу дня, но по традиции
          опоздал. В итоге на месте мы были только к пяти вечера. Хорошо еще,
          что не было никаких планов на этот день. Вечер мы заняли прогулкой по
          Main Bazaar. Хорошо поторговавшись с местными барыгами, мы прикупили
          немного вещей и сувениров.
        </P>
        <List
          title="Вот сводка цен после торга:"
          disc
          listItems={[
            "Шлепки пляжные — 150 рупий",
            "Штанцы — аладдины — 200рупий",
            "Юбку — 250 рупий",
            "Футболка с красивым рисунком — 100 рупий",
            "Пара сережек и браслеты за 200 рупий",
            "Шнур для зарядки айфона — 100 рупий",
          ]}
        />
        <P>
          В общем, как вы поняли, цены радуют))) Ради интереса подошли
          посмотреть прикольный рюкзак, в России такой будет стоить тысячи три
          рублей, нам же его готовы были в итоге отдать за 800, только бы мы
          купили.
        </P>
        <P> На следующий день мы поехали смотреть Акшардхам.</P>
        <Img
          description="Акшардхам, Дели"
          src="https://lh3.googleusercontent.com/pw/AMWts8DX7r5UY40uKhDx1dM1OYDfvxu-psyBVwY3fpsLmx1huewE6MlMtFi1iIYmL8hG_A_kXW7gVGnPnvzGfyuqjVN2GjUhuk63cbMzEqaWm1lR6ATBm6nePXyRw2PMWRPtFmg1ayCypDsaaE05blEWlWYE=w1200-h801-s-no?authuser=0"
        />
        <P>
          Акшардхам — это индуистский храмовый комплекс в г. Дели. Вошёл в Книгу
          Рекордов Гиннеса как самый грандиозный индуистский храм в мире.
          Открытие храма состоялось в 2005 году. Его строительство велось в
          течение 5 лет с участием 7 тысяч мастеров из Раджастхана, Ориссы и
          Бенгалии. Строительство обошлось в 500 млн долларов США, собранных за
          счёт добровольных пожертвований.
        </P>
        <P>
          Высота храма составляет 42 м, ширина и длина 94 и 106 метров. Он
          украшен 234 колоннами, 9 куполами, 20 четырёхгранными шихкарами и
          более 20 тыс. фигур. По периметру здания располагаются фигуры 148
          слонов. В центре расположена трёхметровая статуя Нилкантха Варми,
          почитаемого как воплощение Сваминараяна. Вики(с)
        </P>
        <P>
          Сказать, что это место нас впечатлило — ничего не сказать, мы были в
          шоке от размаха этого монумента, полёта фантазии архитектора.
          Акшардхам — это живое доказательство того, что индийцы не разучились
          строить великие постройки. Количество мелких и изящных деталей внутри
          бесконечно огромно!Цвета подобраны с безупречным чувством вкуса. А
          самое плохое в этом всём — то, что на территории комплекса запрещено
          вести видио и фото съёмку. Кадры, которые тут размещены были сделаны с
          ближайшего виадука.
        </P>
        <P>
          Не менее интересны бронзовые статуи в честь великих людей Индии,
          живших как в древние времена, таки относительно недавно. Эти статуи
          стоят вдоль аллеи левее и правее пальм(см фото выше).
        </P>
        <P>
          Потом мы поехали в Хумаюн Томб, но мы немного просчитались с деньгами
          и у нас не хватило денег, чтобы заплатить за вход, но приехали мы не
          напрасно, рядом с гробницей есть отличный бесплатный парк, который
          можно посмотреть на фотографиях ниже.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8AZTJ-YCDUp85QcuG33CqwUvUTCJE4RU2DiPD6v866mLzObn-eb_L_mhZvqsUPwMTMLh7CGIexki1shzMgz14X36kKihdQ9W05hNd5AQ_pACZm0kfEbps8EG_JfZm6aE1D5wcuj1iyyk7w1_W1TcKS9=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8B2P-EcJSdwhz8mQoCG1CBz_CQJ1MPrgv7AfnXkTSNKppsIk-s12NxfA6ixJ3flqVjIVZw8zGz2BnbJA7dELHrFxeIbTT1S49k2sROBBIdFCL52BedF5GrbCOoGuY_XUbkRsI-8gE6CDoqnTc_PLtGR=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8AT7wSez0bKd7Kcw4WdWuYGOu_gV8pyjwpiMam4uv4M4yBKf7WPDDDTGxw5ZLjBd8mw_Yrfe4D27eWbY9KBSl6kg2K-6ffU-JcMYTs5VBys0t0A0_jxBR-pwUx3x39tPkVL0Sx44vAyoPjV7Wqcg8Yr=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8C6GqmI43awXkirdfTTAEAN9kxR4ihr4T9HGBFcquupEIRIbKFiDcYsNjo1cBZ1K00C7GfwrnCBGmWDR-tIPqlEg_slYOyjnCwisQuVilqCaYZfP5-e3cSl22WMP-3ePExL7_c8j_XKOYS6JeBAnehP=w1200-h801-s-no?authuser=0"
        />
        <P>
          Не верится, что в центре Дели есть такие тихие и умиротворённые места.
          В середине дня тут практически не было людей.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXq7o0_NR31OZOySnsFViDlspH1A6P0_sml0idCh_LoUAKpHMVFAzdMlBPS6y73GI9okJhXs6ekISIvJTtth6YrFqtnz42UkwQjO4PbvAynqNx-uB-FBbxq301A2mNYdbBYY6GyNTyBRSpqCbqpy4DR=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Cj6gkrIakzsch2d3wogC809Ky2lCYHChqba-P-O3HpY88Z19zAcg9NJwnTENE5FgU8Ska6pwK-ir186_Uv1cy-Yb3aPbvwrXvRRK_w-KgPYZPb6HdZ1evP2fHlX31E2zi9R2qJOgzDkJ-ldOkLV5Fz=w1200-h844-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8DM8euo_-SyfxM_CQZYzYM9SR9meB4QdvAdZnCCKOHfUrTg3d5I2pgXkElSZBrEy1b8UvHuGLvKHHewBC21ZgLPxqdbiu05mYIF0LMSsSUf12ItPOdo6Hg64FgY7J2JJAwu2frZHKCDco6A1x36CJWy=w1200-h801-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8C6k84uzNsn15Eey3ZHKVN97LrdvjiX_tBUl4co4Jb6b1X142BWcxJ0-k1c5L_oAt-xVVZ81ulfclwI5bh1W4H4JnnZw9t9uQVwuDF8u-SAPV3vuqGXu1G_4yMI9qlFbBuI3obBZWhVdAFkKWDWwZ_p=w1200-h801-s-no?authuser=0"
        />
        <P>
          Хочется заметить, что парки в Индии намного интереснее и ухоженнее чем
          у нас, в России, несмотря на общий хаос и беспредел.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8Cd0o-gi1Nt3S5zJ7mSEMe8rZzDcEqOYGraQOd_tRl2jHTgRXnbLISz3fab7LoQAxo63KdVZgBv2Ievxh1WP5JCbu9fl9KlICwHAxBk001_uYpKdoEKds7h6U6DBQopKSFws5hjCZo71LDDQcHUsQ7v=w1200-h801-s-no?authuser=0"
        />
        <P>
          Напоследок мы доехали до Индиан гейтс, правда почему-то они были
          отцеплены спецназом и людей туда не пускали..
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8CQeFYY8UUePMX_DbdjC5ui9JI1Vzf-XExVUYe9rGLuMi3nYgbhRsws9CKnIUsJHFxEs19Rtv244JdC3WH_FRcKpuuYnQAHCCP9bTS8w9TmCdktpV3jWOrYNqu8qoWjHufqQqiO_XuJq57uZaBv3beE=w1200-h801-s-no?authuser=0"
        />
        <P>
          Идя пешком до метро через городские кварталы мы увидели вот такое
          смешное сочетание плакатов)
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AMWts8DvxEmaofkVrGKnk05VtYqMMnovYTDqhpJpJOsO6vpCT5gj01Lw-Euq8AKKfz4kGkUipGvIeVK5igXEKRLu4sEBvWai_KEdmDXHstXAVJHqRXNgtX79nVngE5CxQytYyLat-PBuXzuWTRe3b-qzT6Z4=w1200-h801-s-no?authuser=0"
        />
        <P>
          Собственно в Дели мы вернулись чтобы вылететь из местного аэропорта в
          ГОА. Билеты у нас были были куплены ещё в России, нам же оставалось
          только доехать до терминала и сесть в самолёт.
        </P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
