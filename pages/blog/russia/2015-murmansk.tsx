import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function Ladoga2018() {
  const { title, description, img } = getArticleItems(45);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P introduction>
          Хочу сказать огромное спасибо за организацию этой поездки своим
          друзьям — Натали и Сантосу.
        </P>
        <P>
          В начале марта мне позвонила Натали и предложила поехать с ними в
          Хибины на недельку. Бюджет был минимальный, что-то в районе 15-ти
          тысяч на всё про всё с каждого…) Всего в нашей компании было 7 человек
          из которых 5 поехали на машине, а я и ещё одна девушка, Анютка — на
          поезде))
        </P>
        <P>
          {" "}
          По приезду в г.Апатиты нас с Аней забрали на машине и отвезли на
          арендованную квартиру в Кировске. Вообще это хорошая практика —
          снимать квартиру на большую компанию, получается гораздо дешевле чем
          самый бюджетный отель. Плюсом ещё было то, что наш дом был чуть ли не
          самый ближайший к Горнолыжному склону, а одной из целей нашей поездки
          — были покатушки на сноубордах и на лыжах, ведь Хибины — один из самых
          лучших горнолыжных курортов в России.
        </P>
        <P>
          Кировск очень интересный город, доминирующая часть домов тут
          панельного типа, построенные ещё в СССР. Сам город расположился на
          берегу озера большой Вудъявр, а с других сторон его окружают горы.
        </P>
        <Img
          description="Кировск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUDjiVGu4MUHWB_MaoD69Xu6ZQkKZmAAql-7H3O5aY72-VnbDGEbf4rRRl3Yh3fxFZ3-i_XXlxthGQ9Dki37-O8EZPUmGOEMeunzFUZntjuU1sj-O_61-Giyda-o9LzC6J-cfdBpxNuZxGS5a4NCc-c=w1771-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          В городе доминирует отечественный автопром, причём состояние
          автомобилей очень близко к идеальному. Видимо из-за того, что большую
          часть года тут холодно, а на дороги не сыпят соль — автомобили как бы
          консервируются и не гниют…Встречаются и довольно интересные с точки
          зрения стайлинга машинки:
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUsFiwdIGo16EWsSearvwIDZ5DwDSHB8rQZZLENZVLUe-COCkNT54qgDW1Ivi0ZvUxKULh9kgvRL1cCLMLefQDGv6ij_2hE_e9N0LHqrVnes-Udk8utD2rBLij-BVxaAhT4qJrAVAOADrI_PxkV0CGI=w1667-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          А это вид на микрорайон Кукисвумчорр, назван он так в честь
          одноимённой горы под которой он расположен, в переводе с саамского —
          означает «горный массив у длинной долины».
        </P>
        <Img
          description="Микрорайон Кукисвумчорр"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVCfvS3Nfkoa_ELsNPLrXUFbexAspxFSHfaCc9P0CAuQQEJdeNK_zA9_hq1XagYP3OlxAUdP88ot1bq6rFfOO73dRpwcj4I8lgOM0CBLcCfESVfQWW9uD2puL0tT6ow0f2Hyw8jP5wY3Y_0hzL6hxOU=w1452-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Там же находится горнодобывающий комплекс. Кстати рекомендую зайти в
          музей, он находится недалеко от главной площади Кировска, там
          представлена огромнейшая коллекция камней и минералов, которые
          добываются в этих горах, а так же вы сможете узнать о способах добычи
          и многом другом.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVij0YTYzIF9Y72PI3Wf-byJG_hIIOO2dZBNTlt28HjzsTGJBSPmuVuTL1rqYbAnuk0hpkDKwXz8-1T8WpLQGedO4lZWaytZL25IxnvixMoAjmZLYgJiC1CGnsCOkwsDjI8pC3eCC6Z-m70tN-KUTFP=w1730-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Ещё одной местной достопримечательностью является заброшенный
          железнодорожный вокзал. По одной из версий этот вокзал должны были
          построить в г. Кирове, но что-то напутали с чертежами и в итоге
          тупиковая ветка-ответвление получила полноразмерный вокзал
          рассчитанный на большой пассажиропоток.
        </P>
        <Img
          description="Бывшее здание вокзала, Кировск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVfMj9PHjBgjejwV67RWFeT6tKgazJkKFys228H9tNDLPA-bXxXC3cF9xJGZ8XyOwcbl3KoWzGxb1omHcrxTdi7pOlq-Fgw2CVRy6Z0rwElCK8aBTfOOpcP-MaspPVoh2UjQBpx_xsv2EhvC2AOA5LC=w1520-h969-s-no?authuser=0"
        />
        <Img
          verticalImg
          description="Бывшее здание вокзала, Кировск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXh-bhjqh8dRvetGyuLBJu0IC9jGIAjbLnj1oRm7uwjfrmKvqtqasBQDQuG2rmJfnR09eaqXk4RGk4WwoFknYsdZs47E_93HkyFOgWk5XO6xzniXZtnA7JNs8D4mYr0kSmQjXX-7TzzYWHGWxnthCBr=w647-h969-s-no?authuser=0"
        />
        <Img
          description="Бывшее здание вокзала, Кировск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUUVEkaFVpEmjW8_231gf7XGPUqbQch-AcQf6xKYMT4kzLS-U-NTmSVMVWStkRCgTLvVI6RMrYOTM5OD5O_TxJGZvvraUgkPY2vm2ZOeeASneG8bpRPT879kGJ0BaRtYeUNQiuv-fcUslJFPw2J_1Vr=w1451-h969-s-no?authuser=0"
        />
        <Img
          description="Бывшее здание вокзала, Кировск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVE2fF1APEvDnMuTUUV8eOsYTk6PEm0kFDkaw2fVSvljFFUK1tTDm6b9_uiG9jzLU1GsgG1qXyUZAHupKIr2Z8e6aD6ze3X4k4HZmsblf7IIwqLZ64sq4epCj6EzfT3BKvWEEVMD4w1xSBzM5byozN3=w1452-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Визитной карточкой этих мест является северное сияние! Никто из нашей
          компании его раньше не видел, вернее я видел очень слабое северное
          сияние в Карелии, но если сравнивать с местными явлениями — можно
          сказать ,что и я ничего не видел)))
        </P>
        <List
          title="Чтобы увидеть сияние во всей красе — нужно:"
          listItems={[
            "1. Следить за прогнозом солнечных сияний",
            "2. Уехать как можно дальше от города",
            "3. Безоблачное небо",
          ]}
        />
        <P>
          Кстати в это день была очень сильная вспышка на солнце и сияние было
          видно даже в Питере, о чём свидетельствовали многочисленные фотографии
          в соц сетях и сюжеты в новостях.
        </P>
        <Img
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWE_BpjBNMBpmgc2oX7GvhJVsViYlDWTZW7DULZsqpdK1B02SWWD0qMYnSZZcP06-3utdHFruZ1bxpLVJE6_Ebp2m3uQfVudMbNtlMQpBNq6JyNonF5EKt0sKmh8ecTDZe9Z48LypKwkCGfknbw6xeC=w1452-h969-s-no?authuser=0"
        />
        <Img
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVqQLGYIIU6EQSZlBHPbJwtvHazBGVc15jVXHOC6T5RPoi2BpKYWaQme1-47YOvzqV5gv3udu8uxLFuOh3RaYKQzRa-tI-yPqnLu5hjhE-UYFjx-Lx3vmMro3zjGcv5bYAnAbFvJXcqGrjnkJ4K6s_z=w1571-h969-s-no?authuser=0"
        />
        <Img
          verticalImg
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXNd2bpbrySGlvG1PLvUSh8u3oNz4JQDtDhqrqz3560QEOFmQ9g89H-Zpw0SnbwPMInWEuKsDIBBTFyvM77aDhEULPs0BPZcEt5FCLRj9UeMs378kiC119XyerguqHpI8AmUWqFHews5ExU8tFuPXKx=w647-h969-s-no?authuser=0"
        />
        <Img
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVNbqLmg3eHbwIBWAmVXzYOZ5tbJAzIqmz3ujzIZgB67TtZ90J-MSIANScUV7-cFwTadcwKz-N_j3Y7Heg1kynn6Nmoz_63h8SFijTdQ8wfRt7zM3U3_iVUUIW5V1MqRuZ4KXbvJnwcvusr83rngjgE=w1422-h969-s-no?authuser=0"
        />
        <Img
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXbIVVPEB5YfU2OGBpfad1MZ1HWaQpyG1HLRAjc1NfXQDlwxU0UaoqwYbmuOYGRQU_L9rsvcrSTvtTVEz-w8XQ5peRLwSciT3Ky129IggsbygI3Zsmsb6GkNfsuB81u3c_iu__75K3wA9NDHilmKtxu=w1452-h969-s-no?authuser=0"
        />
        <Img
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaV3BA3nVzF734w82LmtMhQbjYaDCjG1R-GbHcLamxxUcRwA0SvHqKK2JhcU9cuIwlDoKavmw5BgPZHAouvgHgV0L1elMqjCg15RWce7o35T4bNRw797veZXahCxqTq6Jo1FaiEspJE6xpy1lw2hIZlY=w1729-h969-s-no?authuser=0"
        />
        <Img
          description="Северное сияние в Кировске"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXdL9hFvnLPsQE2iGE_2UsFwlEkPX4OpKLVq9co9mL-Dtw-MqACfRukNTIIj5gYeUuyQk3lRAurhPLpNdclIyUrORPdSIUGHDJz__jnfuUZGEC_qPhbOq-_GrFB5h_OHvWpGBlTK8MNGbSIv3y6a6yu=w1494-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Со стороны города горы выглядят очень красиво, но им определённо не
          хватает какой-то свободы от заводов, и железнодорожных веток ,
          горнолыжных подъёмников и света городских огней…. Нужно брать
          снегоходы и мчать в сердце Хибин!
        </P>
        <Img
          description="Хибины в марте"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUE0Gf71yIEz0FbxEAc0mQBsuOkkDgKV-Qtgq6o05U2RsifPN8VGGAwWfJKUwP6b9AfTPax4RcsnoQkT-ofIRlCg8RsxN8ujqd6ww_6l83yPuHMRz6yc-vK8b-1j1iv5WmO2ZOgwhcHFoSiBqAJz4kg=w1667-h969-s-no?authuser=0"
        />
        <Img
          description="Хибины в марте"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUR8QSTMRDdKkNls2jATIDYI5bKohZbbD4F0iaTSJwG5ctPPxuXGsXnWStyUFT-5Xr4m7EXg54hy9A_NOpVmzk89Sf3jm4yvbpO6uxW2bNws5Fq8AzGFdEUdpCZsmaDNAPGTH5JLbbMpJpmLbrQpeMU=w1706-h969-s-no?authuser=0"
        />
        <P>
          Так как на календаре уже была весна, хоть и самое начало, но в воздухе
          уже чувствовалось какое-то тепло, солнце совсем легонько припекало, а
          зелёный мох на фоне бело-голубого снега особенно сильно поднимал
          настроение!
        </P>
        <Img
          description="Хибины в марте"
          src="https://lh3.googleusercontent.com/pw/AJFCJaX_BlEm1L8lsiw8l3LwKV_9tKqUxN--0z0eY-NCfQo1kbOYVgVSrOJi7Ei6vbtemvIQXky9JHEaaUASQ3Mcf1-dMDAW2y7DEwPcljoe4n-Gmq2HQSlLLhlFoN2IM0udb6BKEjKrtYZoCELC1BTNpBbM=w1667-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Прогулка на снегоходах была рассчитана на 50 км , чтобы сэкономить —
          вы брали снегоходы из расчёта 2 человека на 1 снегоход. От точки
          старта до середины маршрута я вёз Анютку, а обратно она катала меня))
        </P>
        <Img
          verticalImg
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXlnJ-E8uiOX0j7AMijNGRRjSBodyVnN7K32Qqn2YwKNGVAaGXylB1i-bILTxj_mDrksjxSTwQTd72LlysTypPM5vfCcLmzK1JbzkjBExuh8TpoJilx5LghujpcewkqmvG9sbKRDf25nedxcaD6ZhDY=w692-h969-s-no?authuser=0"
        />
        <Img
          description="Хибины в марте"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWBmhhr94zDhRtrEc6OUrbi2hLkYKCfg_7mHB5trwW-M2YI-aQo6rvxM3fOH4Z3LbKehZa060s2bnXP-F91Mr5LyPcpKI3Z02Dyw6th-4maYI6c2xmG8dJ669tuZdyDKxhCnjW9JEA_y0ETopfouqTt=w1667-h969-s-no?authuser=0"
        />
        <Img
          description="Хибины в марте"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU4pbZZmcPkGBhQx4cAtR1uxdX4VwlQfZZxtnCTEZmeFgCaGr1Xp3hG-fM2HYdKrWZG4tW45e-ZQwDcao4fuwl5DmQltLR4mPzEsrwyxMGBLaMeRI0im16Kl36aiHXD8iVNVmcNyCDe_yrqzBj5umMb=w1667-h969-s-no?authuser=0"
        />
        <P> А это Натали и Сантос, позируют)</P>
        <Img
          description="Хибины в марте"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUyaeYQVVXg272jDGstWErq1BgK1HWsdgVKhvPeBNZHArdGQyztj2o9zTLcl3u7eAvfkGA0qraLGMFjpJwRoPtSbEnbU0VzlAqT5kD-0Pj3j_fFFONzi4em5ho3cqFZAsyKD7dPOpdVO3BBSLCStX4G=w1452-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVnOZpK_9_IIP6YuAAkEF8MNcFckbcUDp9qzchsV3buU4K10NMt9y7cPc2xdemWwF1P9B7MSMaWIWl59ryELU0oMWAiDJHcwolU05wCdJYSrLvNrGRPjWFt3MsaVEhpo4goLI8NvcSLu888JJaPs_1g=w660-h969-s-no?authuser=0"
        />
        <P>Несколько панорам, сделанных из более чем 10-ти кадров.</P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVOMozBioB2J5YQ7vszn29AoKbieOGzHlYxtNKWCkXusLH0FU4X1gboaVb6RtO0zlKWJccOfJ8z8gzBjNol-YyIBEK5TRu-fcl5JNHy0WAH5jX80V0OocsKfcTD8J2pRDzfcQOtQNFhPopCaMc03KXs=w1867-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWjWKS_s01rRYeM9hA8eQ9CkNKP68r3E3St5VRrihS_REJz2OEFCEf2AO1Nhwt2ZivXt5tX7gkUhZGM7L94swGjAYXVxKLdv6JqFSnwXnLwX2vQJy2YmET_uMGSOGLPZ8r5CAYnlyH6Nb2QegdRpAkW=w1920-h841-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXzLmp3pY05K9iylxfoGM6S_5L__dgicViCePHwwPHiP2yOpgqtGGpT8stXEm6SX6ygisSPCzPhYxiCsTLUu9Y-Z9phdGGBqQMf5X2ClHo_5NUjrngwt0UdcIQV6KbYzMYyFVRf3NU5XcZMGRaJTsOb=w1920-h867-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVifTvOIxw-p-yjxywfjsMJPHabE9P_KL4SeFmdaw9pUVqc1g7pvkNx3XroWGxzVfLn8AOQS-9ZYw0DEfHY2LYfGDZ9BrBk8fqpJw9OeN3Bsm46mTtbnZK15xdv_WJnQK6FbDnbp2D0IhKTJnqumGuX=w1695-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWAt7KMAxWZn99C21DjZUEuQGjvg3n6hPjvuQjhv5poew2BiQXSdIl42IG8W8LvJnGgQvx5UBOtLmxr2C22T5gRjiN4h8vl_oQbmGtcxYGebz9mrLHG7zArOEWFffyRfT9otCCBJCtXGAHNgnviv2lM=w1561-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Принять участие в подобной прогулке легко и просто. В Кировсе на
          каждом углу висят объявления о покатушках на снегоходах(летом на
          квадроциклах), так что звоните и договариваетесь, так же можно без
          труда найти такие же предложения в интернете. Покатушки курирует
          ответственный за снегоходы, тот с кем вы будете связываться. Умений
          никаких не требуется, снегоходы все с автоматической коробкой передач,
          кстати легко разгонялись до 80 км в час. Маршруты и цену предлагает
          организатор. Мы выбрали маршрут от Кукисвимчорра до базы спасателей,
          которая находится в самом сердце Хибин.
        </P>
        <P> На этой фотке замёрзшее озеро «Сердцевидное».</P>
        <Img
          description="Замёрзшее озеро «Сердцевидное»."
          src="https://lh3.googleusercontent.com/pw/AJFCJaV4l6BMKN8p6AJI-HRj2uMqPbep35JiTybsMvgWDWWdrFr9ZqLLJRdzBCB88MY_h5lGRwvOjMHD19XPIZcN-4B-0d3kGsEK-hfbCT9s-d0YDrpt013JsF16dJfx_wUcCUIdMrqcCZuNjpi7DHcGafYV=w1452-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Очень многие туристы предпочитают лыжные походы в Хибины, а летом тут
          просто сказочный треккинговый туризм. На базе спасателей было очень
          людно, тут можно перекусить, выпить пива и даже сходить в баню.
        </P>
        <Img
          description="Хибины, база спасателей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVyHpRkVbT4TCQ7-nUFr-8gB0nU8N570sxifmzkcu1DsRkpJNdJUsJiS-Jfn5yiNqD4HG_DyzTjV8fUjj1oYq84AMEaI8dGy0OIxer9ViemP_L4Ekclqm3yyMOaFSe66eMvt6INOA0CV_pSmjIJSoJ1=w1825-h969-s-no?authuser=0"
        />
        <Img
          description="Хибины, база спасателей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUuXsRGyylK9sBj_CJ_blAAxZ2-9T2WD6ASvxIKYsFxsYG7WT4u5mugsZlJmxMjCD8mnaJuKhFMB_WdXG0VHNzzcAwhPxky-pezLjg9PZU7nFdh6elaUWNlxqk7LJfKQ0yMtpMFUfYkeYTshcweJYzF=w1452-h969-s-no?authuser=0"
        />
        <Img
          description="Хибины, база спасателей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaU6vWi1bGGUnCFe3PIukAo0f9ewbchL5QKYRRGAeDKcAnGdRXCtdLdhbJIX1o3dUiws6MIomWoQZ7lKfBWo0Pf4chsFUthAdSopnmZpfT9o1WyS0w97nO23AgCaHCYoHBFjiGc_ly0UYVyVXDsRwF6F=w1452-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaX5j95sPZeRPw1dX5wLLV-xT9o4ZLvpDqv6-aZrz7bZEZAH54W4wBLrQ2UVlyyBWopA94QyWv9semLVQYfS3FmMdTziQuu80WcjWpzIDKNGuLzwqS-OD83NsA5Ddh4GmpdHRDl8pem_gPt_zBTGu6s8=w1452-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXmz9YN7wx943r8hem4GnBF9oWa31UhObEyhaP64k-dG96CkuFflWF4fVp0iyKdPf1qXAaoe8TyLl5t2k1pFLQgD3lwLO4eE30d2ybcyv6TQqdnMIJtHSt62atQvUzUmLBr_3DIWW9nQw6qM9NDqMf_=w1439-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          На базе очень хорошо выполнен навигационный столб, заблудиться
          невозможно!
        </P>
        <Img
          description="Хибины, база спасателей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVS9xkE4ugNe-56h7DvXTK6LEI0r6hbYl8AMNP6_e-pMtBKBgQyrqLa6ntsC0M-KpQDfK6aGmptQ3QhmA1Bah2qM2bKqIHjVlwwxU7XH4d4rPzta24iZf7hwSBdwLeUgJ5de_hOx9tH9SrU_OsWXgMD=w1451-h969-s-no?authuser=0"
        />
        <Img
          description="Хибины, база спасателей"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUJRfcllUJ04LVjkjYb1Z1QqXkaq4pCXG8t_R_Kz7Y2qbWetsolgwxtBeMorYPUoELrwbi9q2M1kArY_fy6iqGtqfXgK9TvF42h9ZxKSyvrJGPnHpd_dOFz520Alg3uowYwhErMwkmKEk5ZtQ0iHVtx=w1308-h969-s-no?authuser=0"
        />
        <P> И конечно же местные мохнатые собаки!</P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWt6ww1cW0ubJV3C7ITNOKvrRcJTY_sQWCkWhRnnGWa4_v3-9BDRC51ksE-V2_8eVQQ3MIRz32I6Zh9cPt5leOI9VYw3kag5wLRAyJWFxKMfWz6lbX2Ucfzh1NfuwBnoJLLbqjOEaaVeBJxzT94IyJc=w1452-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Кировск находится всего в 200 километрах от Мурманска и грех не
          заехать в самый большой в мире город за северным полярным кругом.
        </P>
        <Img
          description="На пути к Мурманску"
          src="https://lh3.googleusercontent.com/pw/AJFCJaVT4RynXdvU-tyc8IFD3x5NfdSKF8clIc8ZXeUb1Vyv0Y7AyY75NnQ8aMIVhktZO5oS0N55TI39quXpbl8E-v8VjldUxsfef5rshuI6K-VB2ZFakB4AC_dbendH4Mel0zjAyq67Hq8GKYN280_jauFp=w1641-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Как оказалось в этот день должно было случится не полное солнечное
          затмение, и произойти это собитие должно было как раз на половине
          нашего пути в Мурманск.
        </P>
        <P> На улице резко потемнело…</P>
        <Img
          description="Солнечное затмение под Мурманском"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXy0-95chDi5OUpJ4umr8TFjPojAREb4l8CK5J_RH6eK5wXstQLmVa-KtqHZXvm97LINqFW-CFmnYSyUkvXCixEve0kXDcbFyQzUMxK6jKykz6u0Qt13tmZYZRBJx1kmTH2yvLx5pieAZpLJKlRLBxm=w1452-h969-s-no?authuser=0"
        />
        <P> Через облака солнечный диск напоминал месяц.</P>
        <Img
          description="Солнечное затмение под Мурманском"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUqoWOH5xs8pD3bWS5IhI9des59qOoSm2JPDvoRBK-Az7DukIUdO0CJo9ZhrveaaoasthL-7oXKaTCTrRMBjKuD2A4YT7-yiDaZ6vB0zZTbJPe6prz_lFnD7z26wZ7QArQq1T-dgAEvxIlv7yacakMf=w1551-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          По приезду в Мурманск первым делом мы отправились в морской порт, как
          многие знают — вода тут не замерзает благодаря остаткам тёплого
          течения Голь
        </P>
        <Img
          description="Морской вокзал, Мурманск"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXTNzwBQaSp35GKzP-9Qs9yztoHr9tO4VNlRmjf66xX7DYgg8PWlFecjtPvH2rUhLQnJSUJVo30Ud-JmpZNXPsDVowCGBACi70_WgWCHLpMqPyhq-VJpA1QkA77a80V02cnx7p7kHQFAewCHRqo9SXC=w1735-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          В этом же порту пришвартован первое в мире надводное судно с ядерной
          силовой установкой. А вы знаете, что этот гигант был спущен на воду в
          1957 году?) Это вам не жигули, которые за 10 лет сгнивают от зимней
          соли, это постоянно находящееся в морской воде судно!
        </P>
        <Img
          description="Первое в мире надводное судно с ядерной силовой установкой"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXYUxqrU6iv6WxN-FRhxJF1zmIb4fkURQSxosFihyn8C-U31k6xzpTUqGJvYRd6jPqMSOuawjp8FeraaoKxZz3yyrGrM2IjBl4rhm2UXG5zXe5nj4wetTB2LzAgFC0U1xgn9seh7khy2uo-47RfJrmK=w1735-h969-s-no?authuser=0"
        />
        <P> Малая часть верфей.</P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVLq06vdYcSpdaY843LGrOnf5EiBCsciEQVLU04ZwhYbgUypjeEPEcXmdh6ipXJif3J3rK4A_EdeGgoopL5VzjyW0HMT09PvqULNlp-AoapsX943uBy1brawnXJfwsaqmPrdjSunJj5Ss0kzz9PNabe=w1735-h969-s-no?authuser=0"
        />
        <P>
          Мемориал «Защитникам Советского Заполярья в годы Великой Отечественной
          войны» («Алёша»). Говорят, что отсюда открывается отличный вид, но к
          моменту нашего приезда поднялась пурга, причём довольно сильная, в
          Питере такое бывает редко. В общем кроме памятника мы нечего не
          увидели, придётся приехать ещё раз…Лучше летом)
        </P>
        <Img
          verticalImg
          description="Мемориал «Защитникам Советского Заполярья в годы Великой Отечественной войны» («Алёша»)"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUSf2mlU2_XCHD_HAygyU0C31Yu50caNZ3oKiwnMKts5VuYaS5-x2X9-5RJdgNY3r-gaJYT3jcDCnsYifDUlG2xmgGZ69xNNnlBytlrr9MoQpi355kpNLSrChyJAWn9Pp91ff7Hne_KgBUvJaiTtKp_=w647-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          В Мурманске много красивых памятников на военную и около военную
          тематику, один из них — памятник «Умеющим ждать» или «Женщине, ждущей
          своего моряка».
        </P>
        <Img
          verticalImg
          description="Памятник «Умеющим ждать» или «Женщине, ждущей своего моряка»."
          src="https://lh3.googleusercontent.com/pw/AJFCJaXjb933RvTNQjKHh7I_TCfpJ6_3QExt3pI_M7mzURNcGkJHwTFYlc84Q2CfGFHEjFFCSg3F6P3DHFW_HM4EZDxIkclfeMU0C21ZQz1udpOtxruhE8QovWTneAzS-uLuz6xvS5XQ0_3XNINRl8K0mMMB=w647-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          Вид с сопки мемориала «Алеша», видно, честно говоря немного…пурга…
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUUsfx-s8OZ_WzyDn1zSA6Nd9R2Z-DaX07fx_SrqlWui7_mmCVCQ6uCJK2qQbg8coXeKA30dYNS5luB8IQUxSL2ckYPCmo_4pABKWcRkGsvFUYZMR5YWeUXvf2Vd9SLV1ydS3dOK_85iAKGc1vnrzUq=w1452-h969-s-no?authuser=0"
        />
        <P>
          {" "}
          А эта панорама была сделана ещё на подъезде к Мурманску, погода в тот
          момент ещё не предвещала нечего снежного и сыпучего)))) Справа сам
          Мурманск, а слева новый мост, говорят это был очередной долгострой, но
          благодаря ему теперь не нужно тратить время на многокилометровый
          объезд.
        </P>
        <Img
          description="Панорама Мурманска"
          src="https://lh3.googleusercontent.com/pw/AJFCJaW1ApLRXKrDwGsEVWqd2Csh7jsSuhlE-1WSTxK4wugclqUzpsQEcPN8UpsgmsdgMzT71kWhsbPtP1A1kkWtLXUo7jWeagJesEMcpvdw1VkFjtZSQwbKXDZKvpjaL5lJI3nEhV0Kj8gDIKz9Fqx1mQ0Q=w1920-h846-s-no?authuser=0"
        />
        <P>
          {" "}
          Путешествуйте не только летом, но и зимой. Горы покрытые снегом не
          уступают в красоте горам покрытым травой, но зима открывает новые
          интересные возможности, которые не доступны летом! Всем путешествий!
        </P>
        <P> …End</P>
      </PageWrapper>
    </>
  );
}
