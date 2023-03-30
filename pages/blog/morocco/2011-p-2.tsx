import Img from "@/components/blog/blog-components/img/img";
import PageWrapper from "@/components/blog/blog-components/page-wrapper/page-wrapper";
import P from "@/components/blog/blog-components/paragraph/paragraph";
import H from "@/components/blog/blog-components/title/title";
import { getArticleItems } from "@/utils/getArticleItems";

export default function AvtostopPoAfrikeMorokko2() {
  const { title, description, img } = getArticleItems(2);

  return (
    <>
      <PageWrapper src={img} title={title} part={description}>
        <H>Марракеш — Эссуэйра</H>
        <P indent>
          {`Проснулись мы рано утром и сразу же отправились в кафе, чтобы
          позавтракать и подконнектиться к местному вай-фаю. Честно говоря в
          этот момент я ещё не знал куда именно мы поедем и даже примерного
          направления. Когда я спросил об этом Олю, она предложила поехать к
          океану. Я подумал, что это отличная идея, ведь я до этого ни разу не
          видел океан))) Вообще само по себе это путешествие было очень
          сумбурное и странное и самое главное — совершенно неподготовленное с
          точки зрения маршрута.`}
        </P>
        <Img
          description="Кафе в Марракеше"
          src="https://lh3.googleusercontent.com/vOcwdxmsuyswNn_g2DgN2mKBYDwpH6GAmwcxeIVdlQgVn3DuqFTpLRyxAWUs24RTpkSrxZc_Z_D5iBPj-TclUo5xvlgRmv2IvsPr-v5m4KIAgMmXFziDeZSPdYzj78l2Oh8j-24pyMheXyZYAMyBqL4GTK7B2CLHPMIzFMDyoR22kBZSjAQZiuDdk09DMBy6kELP_p9LWMe8_RmJurEhCF7fT1oHtnhQeMZqPRsrDyK3Vgvh8iXEHXjBQG-HUOyjpIPqZi6kgQofwyfcYNiSm9XK5Fdo5stX-krHWprlOkQ-FLH3yTX7gPE4a4V3qNSdATTxYvyivaP1OO6Mr_dPg0SaXxh8I_He_KoU6B3fVGnaKEcs-IILpvAe9YLCx1V-Bj5KUTX9F5hxkCdlyb335fu9Mf_eSsvs2EUhcVOTk0XX2o7SctNFvMznn1_3FYiBi27OjI1lxvshhHFwAPbRZYDVY3fON27ZbuAfuui_BewMbAPGjf7_1wwS4mB1StR8ziK4Onh6_Puw_lEd-23AtWCx_iGr-45hCCtgcmEkxX4_FtMiB8h1_vcR2H3N2nXmCn3SqTi30hahawq8wt0Fh85KRkK3Z2a3mGWANRyeGSbvYhYfiAKayXvj-zNZmECWrimsqLXsGQ61V8UVYbsrjbBQM-A58Xbb3wMF6ALeqlBmIrTrmQlu83foRbUp_T5aVMvYpbwhGxIkd_SiziSMEvpms7Pf9nc6MfjGkJvjWcl9Jm6iH8-oD_MF2VzZB6bbNu6hYv2l0VMlSZmczpcVc4HHnpGh2rc3-sWKnmTsii5SGeSww0GKiA7e1edBhIAArW-DteKnfgpRp7Uk5cZfUxWAzvSczg2U3GDnh6noHv87lq6_wA0gTjyWWgF6u07ylMvX7qfDr6dAH5J4eHJzGZis-bFc95OMn7gSRdmDPdpsguo-=w1336-h969-s-no?authuser=0"
        ></Img>
      </PageWrapper>
    </>
  );
}
