import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function MerryChristmasP1() {
  const { title, description, img } = getArticleItems(35);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <P>
          Предыдущую часть мойно найти по{" "}
          <A href="/blog/sweden/2015-p-2">этой ссылке</A>.
        </P>
        <H>Таллин </H>
        <P>
          Познакомьтесь, это Рома! Похоже, что это первый человек из всех
          когда-либо мной встреченных, который любит зелёный цвет больше чем я))
          Так как Рома уже неплохо знал Таллин, а я там ещё не был — мы решили,
          что по самым интересным местам мы пройдём вместе.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWdHwcWq4Rbx4_Bbnrp8_k-_Tvg7WDM8R-NWma2OtysqYyTUuxNiabV1jvHGPZnSPYwDW4vdhTv3uLUfWx_-knJPPtKGuI6Ekim6r_7UpEucttOo8Ayz-Za6aTFoJVcslbpvUjWXibGv4Om8JEmhBAa=w1200-h803-s-no?authuser=0"
        />
        <P> Первым делом Рома повёл меня в квартал «Ротерманни»</P>
        <P>
          Исторический квартал «Ротерманни» расположен в самом сердце Таллина,
          между старым городом, портом и площадью Виру. Это самый атрактивный
          квартал города, где бок о бок соседствуют получившие новую функцию
          старые промышленные здания и современная архитектура.
        </P>
        <Img
          description="Квартал «Ротерманни»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWA6ktrZ-arQedt7C3Jq77eaU3Eww29hxv6pX_L8Cnq-b0PQ9F2b2BJ9Z3-lGdnW2v-HrFOfpFvr82Hc5iVjailGs5lLKcPOBTGK9-M3fdXVRZWgdeRaMsmMl5RAs3PRP81bfsgKs4ylGoELWL-1liK=w1200-h675-s-no?authuser=0"
        />
        <Img
          verticalImg
          description="Квартал «Ротерманни»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaUG7Tl1SIHoHSqjmrMBR7LPbLAjIDN969_Itge1JvccOcqRwwuCHNysBC6R9gkQtJSkRVxybdGqFr2p_1kZpD8NJ1Yt_DtTPc5cK-yHZ1DxJsuD5DSkUfnZaJ8maaocVZl0xhxZdBu_eUGawIpJuact=w758-h969-s-no?authuser=0"
        />
        <Img
          verticalImg
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaWLFSRTPQtHjDgtIxsxmr5_nRO0rulKU6qArdYMPU8xbfjGigY9Bve_T8oi2dm-A5snUttGNA9SvrWjUBPiyYGrDZ27qkK_Pxem6lMtN7BeSMlgM03HyPVweg8HB1ryoNwQwNF0zO0RHlrdkZjQqrlP=w647-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaUX1xnBvbv-ZVwoIfcpMXfznPiA0ZO75G8Ty5VTTalQ41aOh4T0juimpJyqzmpDSHAmXXeRhNMXHH5uJB4-clAVHnNdlMXiuBk_pMhkHCVh22VQYXK4XcrsnzCJow2jBO8fZNHwFb7LFxdtjJLygooO=w1200-h785-s-no?authuser=0"
        />
        <P>
          Архитектура здесь очень «хайтековская», фотографии получаются, живые,
          динамичные и весьма объёмные!
        </P>
        <Img
          description="Квартал «Ротерманни»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaW69WLuAxLFwb3hQT5116ODRQJJYhCYhaTo8UK5mOk6tr4UnuvTkXXXMLbawkSQeyQbxb_004cW4u3byoiFJC4j4ZEY2WKLurlwNoB3GpIn_y6eMW4xaKphiUt2ZlDHgOpbYYkcm-skuSpwMsvQmRW1=w1200-h801-s-no?authuser=0"
        />
        <P>
          Местами всплывают образы из японских аниме, где города будущего и
          нанотехнологии были воздвигнуты прямо на руинах старого мира…
        </P>
        <Img
          description="Квартал «Ротерманни»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWFWPOztK-XL0iunw0TQl2g-11j5TmU0NIpK_gFlqHOITDr_dcDP6vSH-OtpocoWARL74MCmYcPcC6q3avBtvwCTKQqp-Eg3GrgyppF1I-xuXeAUlovP7Qmnw00zPFAPklYu5zCpXcRb00TT7O6rf7Z=w1200-h801-s-no?authuser=0"
        />
        <P>
          А некоторые здания с первого взгляда выглядят вполне обычно, но
          приглядываясь начинаешь замечать странные детали… окна цвета
          марганцовки, деревья на крыше…
        </P>
        <Img
          verticalImg
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaU-p4MCKJpv-lxOvLvW8iAXhBbol_p7KhEF-JBtoVhGKFpv41_6y9kUUlf06FdcyYquiE-bLLx2Mi8jDXJYO_NuibzkAwePS5JEabyboOu0sO37NSGnd3ZAl5Vd4zUYyBekr233NiuuR8Gh-l3e7-bG=w668-h969-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVTHRV2L9wQW7NgjHWX5H4EU7Zvo6C02Qb-kO0hC2XoJPGk4IdLYSS88J7BWwX316QQ7x6DEGBNMU_9MPI0V7NzMpjAg8x6_XukcFI7BIlQyhsa2Iwz4IfTF6F2vTQtzsB0sljOGH2Z-CQt83uQGPe3=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Квартал «Ротерманни»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaWkUou81ViRDp7xpL3WZI8wY2gqu3QcRGRL1ixBELT950NweUaI6cV4TbBhYm2y6LNrGoLxlqdPlxuc9fpunZLCiG58aAXTAKBegYp73skxqyjsEyBLM4fh82inVtS5d7avrGslgAgStUhTPs9oqgZX=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Квартал «Ротерманни»"
          src="https://lh3.googleusercontent.com/pw/AJFCJaXg2i5LFIdc-fDJEjnGldnkqWoq1rrAzrJDrcHTB4cRLcNsbisCEq4vWIXQ_JOX0Py6bwC4qSKfaMwImyOHoIvYZnj8QNwDbdRuKXOdMRa_OdT-GSrzsK7DYjZ1G9WIzRqyN3n4BLAyFNBlQLGXBHkE=w1200-h823-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaXjNSgK0-Ld1XiU8TmwI-v4yMJAwoZF2wu3nf0KqkjFG_EmqGW630zvnGEhsuVHODmF_6Jp3SyXRZQmYqr4KoS4t3EeFyapEhjJIPGtpHU8IxPr4gmx6AYbA3__YJyLUbYSmvYPFz3_67p1Wn0ygE_3=w1200-h819-s-no?authuser=0"
        />
        <P>После «Ротерманни» мы пошли в старый город.</P>
        <Img
          description="Таллин, район старого города."
          src="https://lh3.googleusercontent.com/pw/AJFCJaVNtRhOFWyCkxghaC4D2mE94pACJJwDK-gDjuc9_XUXFpilYorRgaHGGDmM4I4Yp_iXk6DDswr36V5eikGTWkq_0aQbtSJaDg5ZSCE7KdUDPFdHlPAnLCzY5v8m7nKfH4y4PdcuYHlBqIIMUl_A4rrJ=w1200-h801-s-no?authuser=0"
        />
        <P>
          Посреди площади за не большим деревянным заборчиком лежал олень,
          наврное северный, но я не разбираюсь. Чукча лучше знает, он
          разбирается.
        </P>
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaVD7XcgzRMaNRwAbZWcz_fPRRP4tjL3aVrTRFTqjEq8gQ3Mv3FE7fR8Aa-OpQRjGQCI8ZS_ILh4L7b5G_JHDeZKwQdbTQ5MD-Obt2GWSURLx4FMGIr67qYAsiZEu8LYn5rPzGbbBcISDePNbVM8gQUy=w1200-h868-s-no?authuser=0"
        />
        <P>
          Гуляя по улочкам старого города так или иначе выходишь к замку, по
          совместительству одной из самых лучших обзорных точек на город.
        </P>
        <Img
          description="Таллин, район старого города."
          src="https://lh3.googleusercontent.com/pw/AJFCJaWNeMl9zT8LQSpf8TLJVOu6gCgNQg2w2NbdXCrJbuBZKQasjngbHCkFtLznUTCAmrcKaX4n7Bkx0Cpq8J15RBrOYEct4uGUEqKU3O8bc_rcG21_KnYGgPq9-H6cPa1q5Hn4knHzHtAJWhmg9FFf2yR3=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Таллин, район старого города."
          src="https://lh3.googleusercontent.com/pw/AJFCJaXa5nUhNJSXzvI71B4sfrOUzCo-8AJZ9pYBpMWwfRKbGZ91Kds6c1IkDsMuZUOpeJdzWRuBbZEOVbHNcb1DEz-uIPGvjBcG7Ghm1O7m8C_S7gE2isWBPcK6ekvBksdr1Qa6ESvssmV39J2zuhPddeRl=w1200-h801-s-no?authuser=0"
        />
        <Img
          description="Таллин, район старого города."
          src="https://lh3.googleusercontent.com/pw/AJFCJaUMoBl67xDdmlraEgmD2JmkUzhg-vI-tpLOe2ESOjKi_XYkBn4FAalEze5A4jvsBNJ7SIDY02s_lwHHC3V3OYC4cBKeQm6wAN-ne7OIzQIK9aPl2budVQhMmJt5mWq8hkaZz187XZ89m_3y3N90oj92=w1200-h747-s-no?authuser=0"
        />
        <Img
          description=""
          src="https://lh3.googleusercontent.com/pw/AJFCJaV70vUGPQ3HpNPb7SbW9GJQnE91al1RwUKfU5eSIRo2Yw4IdOlOybbhd2XSfNUv33isXdRM_ur-txugZ_NrhqMjlUV-7QbvJnJ6sQNM56OPurO2hqO8bdaeG4B7RK8G6hQhOOx-kuLrl7IAni-X-fhd=w1200-h693-s-no?authuser=0"
        />
        <Img
          description="Таллин, район старого города."
          src="https://lh3.googleusercontent.com/pw/AJFCJaWzxCQn--I9elNDZ3-JT6r2yPmpif5E0AVwl3YGZrGBz51TbxJOqr_oaH0ZxnzFwhHwYVVqCahyFlUtvRRUqzyIY2KhKUEfHPlb6MBZgnCbPuiihx29pHf2gj2sOL3kynkl_E21Y1lmsGWwrr56K8nW=w1200-h801-s-no?authuser=0"
        />
        <P>
          Погуляв ещё немного — нужно было возвращаться назад. Время, отпущенное
          на прогулку подходило к концу и посмотреть что-либо ещё мы не
          успевали.. впереди была дорога домой…В Питер мы приехали к одиннадцати
          вечера, и я успел на метро до закрытия.
        </P>
        <P>
          В целом поездка вышла отличная и очень продуктивная, хоть 80% времени
          мы были то в автобусе, то на пароме — мне удалось посмотреть основные
          достопримечательности и составить своё представление о Таллине,
          Стокгольме и Деревне шведского Деда Мороза, но в будущем, конечно,
          будет неплохо вернутся…летом=)
        </P>
        <P> …Еnd</P>
      </PageWrapper>
    </>
  );
}
