import Img from "@/components/blog/blog-components/img/img";
import { A } from "@/components/blog/blog-components/link/link";
import List from "@/components/blog/blog-components/list/list";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import { P } from "@/components/blog/blog-components/paragraph/paragraph";
import { H } from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function SriLanka2018P5() {
  const { title, description, img } = getArticleItems(14);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Пляжи Шри-Ланки</H>
        <P>
          Последние несколько дней мы решили отдохнуть, как это делает
          большинство нормальных туристов, а именно валяться на пляже, много
          есть в кафешках и ничего не делать. Для этого мы встали пораньше и
          поехали на скутере в деревню Тангалла(Тангалле), которая находится в
          70-ти км от нашего текущего места дислокации.
        </P>
      </PageWrapper>
    </>
  );
}
