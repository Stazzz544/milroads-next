type Country = Array<
  | "Россия"
  | "Марокко"
  | "Бельгия"
  | "Голландия"
  | "Испания"
  | "Индия"
  | "ОАЭ"
  | "Мексика"
  | "Франция"
  | "Шри-Ланка"
  | "Абхазия"
>;
type TravelType = Array<"Классический" | "Двухколёсный" | "Урбан">;
type Continent = Array<"Европа" | "Азия" | "Африка" | "Америка">;

type Scheme = {
  id: number;
  title: string;
  description: string;
  countries: Country;
  img: any;
  travelType: TravelType;
  travelDate: string;
  continent: Continent;
  articleLink: string;
};

export const scheme: Scheme[] = [
  {
    id: 1,
    title: "Автостоп по Африке: Марокко",
    description: "Часть - 1",
    img: "https://lh3.googleusercontent.com/sbEu36xWu21Y_HKl2hmldbP8VDcV7jk2HitVhZSM1bSzCoP4NFm5a5icc4RFb6UWQh3379-OtPzFD_Ti7zHwH6YNP92OB7fni5wCMKTKPkadJ-D-eyVBpj_UNVamakhIF3hDBIbZT_hhiEGeK3_RtZ3gH0u7knyvoad3W6JRX4pM-10s7xx6sZTkUQuv4CIBVO_AY075mAQrijNaXnFLZiKTASmx5flrEwUuxLsOnSGaqivCH-wZNyeqKIfJ3cxmucFYioPxADMFN6DbkP1KrgdeinI8tkPkxFoRPewpFudku3hgQKJD0IOdu4ZspgYdmKovnclOuROqNEagVz437LU0ziwozIYYM1o7fKrjqt6_rXdimOjHWHvcJS-fFBXYlcBqVAQexXrJZ5U9gMGmD-xJthEv_M1BMj9BghBUnZcY9Ti9QKQzitTFDVZHFWViqqbM1B82Llb8nPbzqht4hTNufdF8U_9AlNHyahWtnObQH5MhHHHGCCJ4MLR8GRMUfndlp3RlHiT4CBG0IkYS8xRWwuA4YzV2pENNMdo2y8aoTQnANxFB9zqXKxwLvT4oNfbqdxGvcQfnqHT5Xrm5PJUPdDJ9mOBXszEcW5YoJ7tFOsya-JtjbYiEHgk5CqnheLqoFp7WhEuMN_5h4tClk71euYMiCVj86CGYD1q0V5IQnPdk7fHCTDKLClGVzjPowUODDy08V2aifJkebEGl7yX0dVKNpoqFRMi4AMVnUjkc7OHt_ne7GmhUhTYUaDC8lpBd1TChSyNN4B-TG8YguE4N8FGLVfs6pDz08x1o-MXHSYbJG_hT9fgoTLLSSLHWDdSAC5nPEiBaLXh_E0I00OC2akBji8DHa567ZCrlJizEq4VDPLofEPOQQi4rha_OyKPvy4Jw4Q2mMzk0qFMLsyDgf9IQNE5FPfWhjkX-8MZKQCsS=w1406-h969-s-no?authuser=0",
    countries: ["Марокко"],
    continent: ["Африка"],
    travelType: ["Классический"],
    travelDate: "12.2011",
    articleLink: "/blog/morocco/2011-p-1",
  },
  {
    id: 2,
    title: "Автостоп по Африке: Марокко",
    description: "Часть - 2",
    img: "https://lh3.googleusercontent.com/sGWw4tTTaKagWbIKpCbh9ToBvheVbqvVoG5TjT6Z2w1HAycCGSFvaPbrFhemFiJeOZlnfyIbcBBM0m0PfxENHW409idhCPTC-b7QDWPJMJtSLgI1Y3f4LF9xflFhBNVmMAWRiT5xg0ene-oR9EZmdo7nsHOq2gwCb9VHBaZtTZX1KSmHnZMOTbmJIGuMCbM1-YApYC-r7mAm8rdFSLEB4u1KbFZpMIkNUIptA--0k3OaaNxjj3V2HVPIHHD0vP3a3aDhsxClrK6dnfLtteMfptiV-riMyQb5A6tihvhOiwvmsosP48JDSPrlVoxb2mXqwOKXRF6ZJgx5bdxVB4YVJS5L38j0Kk8tw6BzFCu1ixCW6T8VciJCaZNEW4kJ_CKK8O8NcgGZcP4W1gIVG0Hp0ml9jWjYTeW8s-_8HGFf0OCKm2OIuJX1s5HpC0OJQzDNI3vzEQp3gEyTvUeUjDuKBD-hagcE-11WC35HIiZQu_a7_GDD6w73PFrtjomPULgyCIwF0vSBpMwyUI1zsMSg3yogawHxj76khmKprBvlQsX7u0RGak3vTXlxaXTjIhQCCuogcEVUjdAuSgIKV1zpaACOq71gZmc6MOKmcexCkBVrU04pSGaZbA5JWfcZV8YfLakfRH_ZW-qHmpicZuQfw6peWy0Od_-ZzTBM-MM301fsEHMVbZ1__Y7ymrvDpMEYXKbbUydSGbIQkbOFrlk1vcRMw5FojVdQzE-qGwNtgyuqDS1Brur1-ZaUtR-4kK8arhFbC3qPjWrgkVc6uQ4zP14Nz-n6Q0ZSnYqrQSIxjMyQN3jo05WWIDf26sOGvQzx_actlojsOKhh7JvFBGq_szoJE9Jvuz3CseiIq4uUMAJy2yK4QLb9uHIEMkAZKTxpxPnzsyOzCW9nHvStek8YZYYUngBeLhgpjuk3J9mT8lBYUg6W=w1479-h969-s-no?authuser=0",
    countries: ["Марокко"],
    continent: ["Африка"],
    travelType: ["Классический"],
    travelDate: "12.2011",
    articleLink: "/blog/morocco/2011-p-2",
  },
  {
    id: 18,
    title: "Автостоп по Африке: Марокко",
    description: "Часть - 3",
    img: "https://lh3.googleusercontent.com/pw/AMWts8Df-Zv25IQjA5zIW8J31oDhziDSp4Ig7_5ReW5N6sAmhb5xi_96HbdlCSlf8vId8pMBR4Ejom5kARk_vCfrnE0FV7SPIlDF4zq48ZEe-uzH6j7KpnqdRNI_R64v3x14DQ5-gIeNg4-1QeWNlOWrReeu=w1292-h969-s-no?authuser=0",
    countries: ["Марокко"],
    continent: ["Африка"],
    travelType: ["Классический"],
    travelDate: "12.2011",
    articleLink: "/blog/morocco/2011-p-3",
  },
  {
    id: 3,
    title: "Майя, пирамиды и сеноты, Юкатан 2018",
    description: "Часть - 1",
    img: "https://lh3.googleusercontent.com/pw/AMWts8AAlMA36xzV7sac5naeMLWzM_ek2Y2PABapeejxaDI6TIncHtx_4sqm4OOoAtPWS_JRdofvE06PL6qnz5xHaWcxG0E2mp-r9SgOHgjM5MYtrjBEzggizQAxgTFFBBspuPgoq5SzFbuiSvVeHd6bAZVG=w1250-h834-s-no?authuser=0",
    countries: ["Мексика"],
    continent: ["Америка"],
    travelType: ["Классический"],
    travelDate: "06.2018",
    articleLink: "/blog/mexico/2018-p-1",
  },
  {
    id: 4,
    title: "Майя, пирамиды и сеноты, Юкатан 2018",
    description: "Часть - 2",
    img: "https://lh3.googleusercontent.com/pw/AMWts8BrD3CqU25EQPpITtNnvYpmPrXVuJTx-ZhAU-jax-2Ah5ISGCOMnsuqhV88HT_42eEbs9t5EOH01NK8g-s38ksI_D2S9PKf8VOpnyAKO3dF95HVeoEQqyHOj3SK8ibxhKW-56pCqkqPmkFxsPBncmvT=w1250-h834-s-no?authuser=0",
    countries: ["Мексика"],
    continent: ["Америка"],
    travelType: ["Классический"],
    travelDate: "06.2018",
    articleLink: "/blog/mexico/2018-p-2",
  },
  {
    id: 5,
    title: "Майя, пирамиды и сеноты, Юкатан 2018",
    description: "Часть - 3",
    img: "https://lh3.googleusercontent.com/pw/AMWts8D48-iTs0ncCzRNvhE6_KCE2vw9JID5MuvmvalW-VIKUBqp-nqzubdxPNGJfvgApyvQXJ_JPIMsBI0wyEBUmR9dDhobeqT3YP_iQiaef2b7RJVpm1akb2-2zexWv_7SwKgw8TXZJbxEKY64pdPEV3DY=w1250-h834-s-no?authuser=0",
    countries: ["Мексика"],
    continent: ["Америка"],
    travelType: ["Классический"],
    travelDate: "06.2018",
    articleLink: "/blog/mexico/2018-p-3",
  },
  {
    id: 6,
    title: "Майя, пирамиды и сеноты, Юкатан 2018",
    description: "Часть - 4",
    img: "https://lh3.googleusercontent.com/pw/AMWts8Djrehk0IPhsTCks41w9_hHOAJwSdDFsExkvkjvoRZ-B38WPXvIHGAbF_pDoNunNB7ugWqNALGMfB6wjWjWKfrn8QSuGL8JmY102_iR5l-h2_ULLs7P2dHtpyXW3GxVrM5_Vc7I_lxVJ5eqImJ1vdeW=w1250-h834-s-no?authuser=0",
    countries: ["Мексика"],
    continent: ["Америка"],
    travelType: ["Классический"],
    travelDate: "06.2018",
    articleLink: "/blog/mexico/2018-p-4",
  },
  {
    id: 7,
    title: "Один день в ОАЭ",
    description: "Часть - 1 - Шарджа",
    img: "https://lh3.googleusercontent.com/pw/AMWts8D8CVN_mHUSUnQB5Qapc8HVhoLa6Oh1_gZ8PrZ5stsAvfc6qQDlHrXNHuLVQw6rxwZlkKIM8GcdM8oc_gg222QVyKLt1NbZW9CQYegaqRVudfFMxctPUYYvZCz6tJX_aDCALgTOMQE9MC8J30AjviCa=w1250-h834-s-no?authuser=0",
    countries: ["ОАЭ"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/emirates/2018-p-1",
  },
  {
    id: 8,
    title: "Один день в ОАЭ",
    description: "Часть - 2 - Дубай",
    img: "https://lh3.googleusercontent.com/pw/AMWts8BfB8J4EGNYSmkiVjIxW0IZv2f7y3fQ0WQ_lebkLtNG7R5qTNPJzAa-PZV_DGAKjgvwCneNLj-jbT1Pf-GhQJBIRthNUR9rfZ9DxjrgdsZZYF7JNltE2nSmxJKJmNCqEQ90uKTxlMbSxrQKYShNq-2F=w1250-h791-s-no?authuser=0",
    countries: ["ОАЭ"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/emirates/2018-p-2",
  },
  {
    id: 9,
    title: "Один день в Париже",
    description: "Под небом зимнего Парижа город будто обездвижен(с)",
    img: "https://lh3.googleusercontent.com/pw/AMWts8AkEgELuMinIfoVV-9j5a_7r_Li_xB77DCamit9WqZnaplcGIQuShpjWCopHo54fZSEO3DBJH3jXLId_nBZz57G3rGbfINgZrSAaDBgczGLiMtW9vxtG6tmUnox93qUkCu1NDIfGzKQCd8hwi_ce03A=w1250-h834-s-no?authuser=0",
    countries: ["Франция"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/france/2018-p-1",
  },
  {
    id: 10,
    title: "Тысяча километров на скутере по Шри-Ланке",
    description: "Часть - 1",
    img: "https://lh3.googleusercontent.com/pw/AMWts8CrUsofq2sEiyEhRlY6Al3HHcPvkKbuCrjiqmN85vN0nDr6LAX1VSyBGMltbCRLlpR3rpA66Z7AqxH9M-8h8Yx1kgToZeNwOad1gkSQ0n-ZNWW3uQidt-Dstm77TbSzKTr8UORBmoqaeiJZuWCLGjyU=w1250-h779-s-no?authuser=0",
    countries: ["Шри-Ланка"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/sri-lanka/2018-p-1",
  },
  {
    id: 11,
    title: "Тысяча километров на скутере по Шри-Ланке",
    description: "Часть - 2",
    img: "https://lh3.googleusercontent.com/pw/AMWts8CY9DJNpfcSOlt9g8xBFxu_sPeEGoAFZY2SckMuPQR_T6c6N-NVyv9j9s4w1yzd_RS7qtGRarVOiJdHHPj9L-jY7ayz-3wL6pFc8cq-_W0sp1tPxYO2XbZGTAgptma_d0NkJr0ZB4n_FzpUUcL-b0H7=w1250-h834-s-no?authuser=0",
    countries: ["Шри-Ланка"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/sri-lanka/2018-p-2",
  },
  {
    id: 12,
    title: "Тысяча километров на скутере по Шри-Ланке",
    description: "Часть - 3",
    img: "https://lh3.googleusercontent.com/pw/AMWts8Bu1Oom0gdxDHXHjS97QavVKClVJ6NS9HnjDF8E2ZvzxyysTIOvBAwbuQYXoL_M5V4Cv8sHeo1yzz50Oq3NNiWFlFjl3BWs9x5uaXm1vNjjtWPFNNQH9SC6u5PhsZDUS5PUUMTKF3rgDmAgYVVhIoV8=w1250-h798-s-no?authuser=0",
    countries: ["Шри-Ланка"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/sri-lanka/2018-p-3",
  },
  {
    id: 13,
    title: "Тысяча километров на скутере по Шри-Ланке",
    description: "Часть - 4",
    img: "https://lh3.googleusercontent.com/pw/AMWts8AauF0-l8KHfZPt_rGbis5ZAWwmyOVk9iVn77m-1yr6onSLCeF4gIr-fd8Tbb3TpDFan1bg5O556-wun8qDHPBkTfHNqeqzWp2hctYWmOcnSype5q7QLqFPBhUtT41gKdBInEXZ8B7EKjByGjACFEBN=w1250-h799-s-no?authuser=0",
    countries: ["Шри-Ланка"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/sri-lanka/2018-p-4",
  },
  {
    id: 14,
    title: "Тысяча километров на скутере по Шри-Ланке",
    description: "Часть - 5",
    img: "https://lh3.googleusercontent.com/pw/AMWts8CEvSSh_WE56bt0iKubH3SnWknWgUXxM7LMyjQxwNnb-3TP2EnlM_MKf_g0xCpKsCOGueDewuASQvTeDHg4fvf7zGtph4nP-QNeWgguzuWkx6b3oTTcqOmZOclZod0tRfV0yXWMmddQM_ul8jZ3I8zb=w1250-h844-s-no?authuser=0",
    countries: ["Шри-Ланка"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/sri-lanka/2018-p-5",
  },
  {
    id: 15,
    title: "На пол дня в Амстердам",
    description: "Не туристический сезон",
    img: "https://lh3.googleusercontent.com/pw/AMWts8BSA86vaxjLcMvRaa40KulSnTwdw4JAzdjytJ09fgXS5afnpdZ_HMV2YgWHjPuAwzCsqHZhGULZ4t0PVZQ2W2gzbkNxQo_R477NZVRa0Ybi6_BaKa66vb1LicjeYA0vrgPhXHfeRRGY4S65nnmwayn9=w1250-h834-s-no?authuser=0",
    countries: ["Голландия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2018",
    articleLink: "/blog/holland/2018",
  },
  {
    id: 16,
    title: "5 дней в Абхазских горах",
    description: "Палатка, автостоп и чистый горный воздух",
    img: "https://lh3.googleusercontent.com/pw/AMWts8AF9GUV8KdUzjJC4W7sJxbg6iyxhhRj5pzq6yOFeD5qCCJ39myrHRpKJcK52_xrBEepTbCvnhhaHu13ZhW4L64G8IR4tFQcz_3SEfQ9Opxi82_A6XWqoRAz3kQaXqI4zH0eZUjiKiNuQcIZYTHcMeqE=w1200-h800-s-no?authuser=0",
    countries: ["Абхазия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "08.2013",
    articleLink: "/blog/abhasia/2013-p-1",
  },
  {
    id: 17,
    title: "Путешествие по городам Абхазии",
    description: "Гагра, Пецундра, Сухум, Монашеское ущелье",
    img: "https://lh3.googleusercontent.com/pw/AMWts8DMf528J74NWdXE9TE1Qg4GCHSORc1duvMSSwYlIu3fZBITRV3JGJhNwF-EM8xt_U58MIxND13I2E7YFXkeGlqjMi8Hn2moKsH8xYW9yBlaohWGvTMobasHnDWjKzPFSy1sysKXf3zPhs-FXj-BQFzj=w1250-h830-s-no?authuser=0",
    countries: ["Абхазия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "08.2013",
    articleLink: "/blog/abhasia/2013-p-2",
  },
  //19
];
