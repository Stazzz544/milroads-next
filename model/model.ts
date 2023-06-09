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
  | "Эстония"
  | "Финляндия"
  | "Швеция"
  | "Польша"
  | "Италия"
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
  {
    id: 19,
    title: "Индия на поездах, Дели (2016)",
    description: "часть - 1",
    img: "https://lh3.googleusercontent.com/pw/AMWts8A8W70WOsoAZEc5iYLLEHiAaHXurGpQPdDgH4dpnwzlWVkO4jWZe1wAvN3GBydXuAcp0Us0BO62iiXYzVtCbjJ0nzxA7Jqxf1Cm0IAvU7sUGYQERhWghPgMqm4Plj3T3uRGyX-1KpO2URAUdhxJQ3iO=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-1",
  },
  {
    id: 20,
    title: "Индия на поездах, Джайпур (2016)",
    description: "часть - 2 ",
    img: "https://lh3.googleusercontent.com/pw/AMWts8AK97YwET5RNoG5_7D7VKxQ33OTyJyAzSPb4nGcT6xCjRj18uzXYZUU7dZuTYhbxb5jfRSFx_euPR9RfCKibnQKyIlH4pq4Rz5AbGL5aRP9AhTeI3ZHcQi1joahHEVA6B87xgXrK_scICyHav9rGWyG=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-2",
  },
  {
    id: 21,
    title: "Индия на поездах, Агра (2016)",
    description: "часть - 3 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWcn0oNzwV5RunL4Zkq5N1TQCUmYlq_C2NZY_O-IrNjVjcVwyWUoGE-3Rm5B9CknlI4ZtQWFPfbgyaVbFg3lCiIWnNzEdHXo4Qc6n0USCfXQAIjO2pt7Qx684taxiWW4pbLqTP7XX6em4hG2_SEILqp=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-3",
  },
  {
    id: 22,
    title: "Индия на поездах, Кхаджурахо (2016)",
    description: "часть - 4 ",
    img: "https://lh3.googleusercontent.com/pw/AMWts8D9uuGomGY4QTG01jFmI0lyTLh67WPNkY3Vd2JwfFOVplOL13-_vLpsPZf1zY3UjZYts98K3X2zGq4imZAVaf3ZFrKuS8xO3REo0QRhJqivFD--48khQCe-5da7LhVTIa8sZqNdoFtURdEhD5WEMyN4=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-4",
  },
  {
    id: 23,
    title: "Индия на поездах, Варанаси (2016)",
    description: "часть - 5 ",
    img: "https://lh3.googleusercontent.com/pw/AMWts8COAVt7MWZ7bpFSbS6xTijWFwur4C5epu3yed29C5xviFAv2T80i5bAuGS7fkVIsna7gCuYLOr2_1Mpvt4xhkPxGNCVwuFQ8B7miNxoTqJfIOr1NNbU7liKhKv-pAI8ItBxG0Rpphc5qCheY30GcVKZ=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-5",
  },
  {
    id: 24,
    title: "Индия на поездах, возвращение в Дели (2016)",
    description: "часть - 6 ",
    img: "https://lh3.googleusercontent.com/pw/AMWts8CUqat6r9tgagDxfNuSOt-CDFeNUKnuScHn2R2d4WNSysciiymRgLulnQsiw60CHsuXIA1akw89Do9ihRgsviXgpQM_ZS5eAnudoxMrDMkrnYvFiGj_Tx9241vvXxHDvqS9God_4cv5rxYA2FzmAs1J=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-6",
  },
  {
    id: 25,
    title: "Индия на поездах, Гоа (2016)",
    description: "часть - 7 ",
    img: "https://lh3.googleusercontent.com/pw/AMWts8CuI-_MnelHttX2YbXJV039fIUXXDploz-sLdXPNmqJs9c0lv_SToGuTFtDw6dBlehGkRT2R82iS097kntighRtr2Lx0cqN8VrYAcnjQIuI-Vh3_jyErCey3-3ZV2uw4q9GUHICnqiYXuVESC-Ok6PK=w1200-h801-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2016",
    articleLink: "/blog/india/2016-p-7",
  },
  {
    id: 26,
    title: "И снова Индия на поездах, Гоа (2017)",
    description: "часть - 1 ",
    img: "https://lh3.googleusercontent.com/pw/AMWts8CkfuAZFiHMENgdhuZXyUeOMcoPnZutemnEyhAsF82AUilgqlssdpMeJUjN8E3oJ2ebCx1vOLgQzz5kI29gck3syrGfaicdGjbW8yJjuTG8Afys1ocGSp4s16P1EiUouxqZGmwz9195xinB-Dt6Wv7b=w1250-h800-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-1",
  },
  {
    id: 27,
    title: "И снова Индия на поездах, Удайпур  (2017)",
    description: "часть - 2 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVY5OVQyLouYtLWFZhIsLYYiyccsla3OEHzvu_BMG--N0pvYpt3GmWnU4sxnPY6ZnAMsvlAQReCx0B9RkRdrL8oTzUGTGkIa8J2XTDGR4GDlk2Gw-FD7rXeVXVJ9UkX8a_hocahOjPgKeTUC0BXtGgY=w1250-h807-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-2",
  },
  {
    id: 28,
    title: "И снова Индия на поездах, Южный Гоа  (2017)",
    description: "часть - 3 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXJpbW90clznzbFF-vQVndFJPe6UWasGVEaqBEb42ePJyAYH2RYJcDeM4Kwv0P7YTYgjTSc4UvBkh6B0wgP0NW6-FxxrRn6fobZ77Xys-8CxM28v1nav6ngJ6BbRjQ8-KiN_VWXgbTk8BMcscpv4bf4=w1250-h834-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-3",
  },
  {
    id: 29,
    title: "И снова Индия на поездах, Хампи   (2017)",
    description: "часть - 4 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU7TFKgI2mrfHGQogWVu7FlAkn1Fde2-FJa0NB2asGkHSPtnBKq8GApkRokm7nc1kwdyt0oPrg_a4-jwLAOUwca3636gpcf1F3wafF45Kcd38GQ6wqjbp5VgHP3ncu-udPunDQWYWCEucnpIpKH-r83=w1250-h734-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-4",
  },
  {
    id: 30,
    title: "И снова Индия на поездах, Бадами    (2017)",
    description: "часть - 5 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUigrE50iWNRfMh_cimAuQp8hEn876vu0sFT0v7M6WVzdRW9s111-Xe65djlFpXpVKrwvP4-YakVM_wotn2ruy8n9Sy4rJXiI3ip-oKfn447tMIHFQhKXQC2gPTETNnsPa3lprfl0UV9wmPziAW2OMc=w1250-h834-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-5",
  },
  {
    id: 31,
    title: "И снова Индия на поездах, Биджапур     (2017)",
    description: "часть - 6 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVEPJHe57VUBFrRn3h5HujCGfHdeaOq1Dn6ZfIOPQYjbZcx-soYRgGldp9F_qiChI62FWShLNdq4oLUyLyoWUY5Kwjr_eBCTseJBp2Qkn7ojlOQE4v8wfoev2STnXqfeifuKHtqlvOupXnexGcrh021=w1250-h779-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-6",
  },
  {
    id: 32,
    title: "И снова Индия на поездах, Северный Гоа     (2017)",
    description: "часть - 7 ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUEYD6eDSj1xYS17wD8sDeN_xjANUymwYdEhjmxg8MPONKQDR9PfiaoPpJdTYqkjIyJ1kXLymEgYiNx2TXM_K0ZtKn5qJy0qfDS8ONMfWI05bsCiHRbD8NLeCzOtLAfwmNp9ZluBwgfnTOVpDLnGe1i=w1250-h834-s-no?authuser=0",
    countries: ["Индия"],
    continent: ["Азия"],
    travelType: ["Классический"],
    travelDate: "12.2017",
    articleLink: "/blog/india/2017-p-7",
  },
  {
    id: 33,
    title: "Merry Christmas! Tomteland",
    description: "часть - 1",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXZxp0MEytWuP8bv9PQcu5p8EgWW5Dy2EjrvsK95pWmM4GrcedHvFbmipUidlk6O1cBQsDv_JcyuYQazcLxe_PwjgV5JD5cJn0Mqgp46tMrhhV3Ypkki6bcHvGtNketW_EFiyrUzx7JYusL72qfjkaI=w1200-h699-s-no?authuser=0",
    countries: ["Швеция", "Финляндия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "01.2015",
    articleLink: "/blog/sweden/2015-p-1",
  },
  {
    id: 34,
    title: "Merry Christmas! Стогкольм",
    description: "часть - 2",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVfJ3WRqc9xPvQaxjqnAqc12uHpqnmofRDPjXqae2VbaAFkHypTfo0WZ84lU_aYrpEufBpAWa_qNryPFC0NL4j02YbTRLnOOjkSVWCOe3nEEbwvVGUsgTxHE5tVG9--uJU_sI2K995FLkGb4a_Omb9O=w1200-h801-s-no?authuser=0",
    countries: ["Швеция"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "01.2015",
    articleLink: "/blog/sweden/2015-p-2",
  },
  {
    id: 35,
    title: "Merry Christmas! Таллин ",
    description: "часть - 3",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXa5nUhNJSXzvI71B4sfrOUzCo-8AJZ9pYBpMWwfRKbGZ91Kds6c1IkDsMuZUOpeJdzWRuBbZEOVbHNcb1DEz-uIPGvjBcG7Ghm1O7m8C_S7gE2isWBPcK6ekvBksdr1Qa6ESvssmV39J2zuhPddeRl=w1200-h801-s-no?authuser=0",
    countries: ["Швеция"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "01.2015",
    articleLink: "/blog/estonia/2015-p-3",
  },
  {
    id: 36,
    title: "Сноубордический трип в Татры",
    description: "часть - 1\nБрест, Краков",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXE7Svcv1fx9T5Gs7qr2k6tFoR3Q0ndgBTJelVQOwKaJkDC32pcedN48l_oCapOY1HKc_A4SG2Rd2_Jq0DnB2FC9BBC0Pmd96uy_ZJ2pI3SLxJcrugtDMt-3wTDdg9pRYUDTKoiYxBaxjzBoTGCFf03=w958-h634-s-no?authuser=0",
    countries: ["Польша"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/poland/2014-p-1",
  },
  {
    id: 37,
    title: "Сноубордический трип в Татры",
    description: "часть - 2\nВеличка, Высокие татры",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWMbqJoGvUrDJKEIbiU9W4TCbmHvS6cjbJ7WABkKwEmod1sXblydo3CdiX8smCuvfz35wBqROZYXpdoXks0ZNL3SzHty_5P_Ui0-2yvl1BssTSOk5IAoNxjsvbmjEf__ULDAsKPgc5Qnj6IcAaolEHh=w958-h634-s-no?authuser=0",
    countries: ["Польша"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/poland/2014-p-2",
  },
  {
    id: 38,
    title: "Италия, пицца и паста трип",
    description: "часть - 1 - Милан",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVEr_0mmvtRUawbIQzEeqtsnycnhIjG-ssjwLrmOgve6e3wsSwXY4Y7lrHEOaQVRV8NrV5yOxFEI531B6oPtkHC7Ss-4ydw-fjQ_WlofDSbZ7ZOxummoizyVt-w8S76hdg0_m05dvolahYi_E8YUH_v=w1250-h833-s-no?authuser=0",
    countries: ["Италия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/italy/2013-p-1",
  },
  {
    id: 39,
    title: "Италия, пицца и паста трип",
    description: "часть - 2 - Флоренция",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUoh3Pv1esRm9TFDyA-8F7CM3V9u39aw9PsFH5GzyFg_mFsBXGwSWgZeoN1JWEOzghxSMHnz7q5964K2ruk_4IylF7HgjM_IEKQwdVOWsEGlK4lGn_BxiPoFA6ZzZPYQsABT1KUVCA8-r1dp3RGWqa_=w1250-h833-s-no?authuser=0",
    countries: ["Италия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/italy/2013-p-2",
  },
  {
    id: 40,
    title: "Италия, пицца и паста трип",
    description: "часть - 3 - Монтериджони",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaV41QkODXScGlL6ZJNcY8H5twviKCM0MHChgzeIgjnSD1S5WJFpCM7ibLbbuproTZDS2xAm5INGZAspkwtEVyzaxQ4seJ55JVZfCEengSMW0LGmgqwtXtHUCleWMlcXAnWdb0Wu9G8ZZGF72QDqtBu9=w958-h638-s-no?authuser=0",
    countries: ["Италия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/italy/2013-p-3",
  },
  {
    id: 41,
    title: "Италия, пицца и паста трип",
    description: "часть - 4 - Сиена",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXjK_b-KgyUpe1r9_v7ktPd3iZcrv52q9ltPh_pilivDo5BQCePS1KJfS4VaejvLDdjujSsnNfKwdaS2GAhN6OM7-bveQcOkekBqJyagkC2BxUPUEgvDNeJHU8Lyws3H9IV3Uykdqcl2i-zldzMnSPx=w958-h638-s-no?authuser=0",
    countries: ["Италия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/italy/2013-p-4",
  },
  {
    id: 42,
    title: "Италия, пицца и паста трип",
    description: "часть - 5 - Рим",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU8hXzWESM0qyNwe6I1UeKrL94ThartqJ8rqg-IyvLzxqhi4P0QBtolz0URHHQHqaZYcmO7UFq095Kgrye79Tg7t4KFNaRxvbCy-2uY44BVtr7gi-ds5tkJdSVVn6baGqvadj2AyfQohLCy02NHV3Uc=w958-h687-s-no?authuser=0",
    countries: ["Италия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/italy/2013-p-5",
  },
  {
    id: 43,
    title: "Италия, пицца и паста трип",
    description: "часть - 6 - Ватикан",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVmMmuOmznLJ4kxuh-bEqNRQHVZP0AyEB7ZnvPuxeO6ncIJseRlBLH39hDH9uFog-ZkPTFCReup16MjOMV1cEnplBhpV3QR9FJ3qxUITuJL38fzXhp5l6846PmfFEcEVl-ndf8rKjZusQ5jA-Jo9iVU=w958-h638-s-no?authuser=0",
    countries: ["Италия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2014",
    articleLink: "/blog/italy/2013-p-6",
  },
  {
    id: 44,
    title: "Вокруг Ладоги за 3 дня",
    description: "Карелия и Ленобласть",
    img: "https://sun9-76.userapi.com/impf/c628531/v628531388/5b50/nTmUX5wGX7o.jpg?size=1250x834&quality=96&sign=effe197b706956263f9678c84c7a281e&type=album",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2015",
    articleLink: "/blog/russia/2015-ladoga",
  },
  {
    id: 45,
    title: "Русский север",
    description: "Хибины и Мурманск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXzLmp3pY05K9iylxfoGM6S_5L__dgicViCePHwwPHiP2yOpgqtGGpT8stXEm6SX6ygisSPCzPhYxiCsTLUu9Y-Z9phdGGBqQMf5X2ClHo_5NUjrngwt0UdcIQV6KbYzMYyFVRf3NU5XcZMGRaJTsOb=w1920-h867-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "03.2015",
    articleLink: "/blog/russia/2015-murmansk",
  },
  {
    id: 46,
    title: "Автостопом до Владивостока",
    description: "часть - 1 - Поехали!",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVQYwPaHULE3Fz2HmSrpRMtEV19eDNM5saeRsTSBqEwYEXKqWq6DyyffAGElY6gOiq7yHP5O3H9xqodNWDaHJAHsWjWsWtjq9QY-vQ3J1D9_F3CanlXK-RCVupYBuKSgSliBMJrX4VcL-12f-tLIgG9=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-1",
  },
  {
    id: 47,
    title: "Автостопом до Владивостока",
    description: "часть - 2 \nДва дня во Владимире",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVABkEfUNyqqLaSJpAN4OXy5ZNwHNpnMkF2wpJUHOxKjlhU5AXMoUO_zmIgo9YszOMBSbgk6Tp9G636sHcZ9cSa384KauTmEGfKsHQoELO6WNAp0CuUN1djrF5aepihVGzr1_7cDK7goQH1hUvRF-t0=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-2",
  },
  {
    id: 48,
    title: "Автостопом до Владивостока",
    description: "часть - 3 \nАвтостоп Владимир — Казань",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWYd9AePhnPkW56SLbe8ANtXNDfTjCd7eS6kmGvWFS_7HWPFzHNBD_MGfNVzBuKlxs51mcz_QK6hdwo4Q-V0LT9nUhpEOERFezWq-GKJiN8NzpaDdgGa4RVvQ5N535dPtSeXG1749zFoQoyUuvzCojd=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-3",
  },
  {
    id: 49,
    title: "Автостопом до Владивостока",
    description: "часть - 4 - Казань",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWUKcB6olVk-rjDilL421zc6irsha7cb9Nz98mYQfm9TMTbf3TDGoqUDZxfndTWGaJf9zDiN4uNN13ICRUDTk26OZk4TdBuJZdiLjQS7AzOtPQtD2D5j1GngemB0GCZVOYxm4nn8QXZ8z2Y3FOpG8ZY=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-4",
  },
  {
    id: 50,
    title: "Автостопом до Владивостока",
    description: "часть - 5 \nПермь, через Ижевск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWK-C6a3InWdfYjKsYdcoExRrF4EygAKTEBrOy_m49f_aiZVVMWT6hVY-KIO3sxPCH7lhuKgWc_HS8eJjwIHLNl9UOae6q7wbUX8OCQhhwwLyb5XlO4pgeTvndSZ2CJjLrGVwuXNXxaeQ8mY0ln5rM6=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-5",
  },
  {
    id: 51,
    title: "Автостопом до Владивостока",
    description: "часть - 6 - Пермь",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU1riz8PiMxjMHUVdgexorq9SmxHdw3KJppDIvrb10cxSYbqrjfiuUT3KyzqAP1Pqc2BT_Yq2cQBMFa-Diyr5DCdikk0x0ZbVbVa_VwDrIwjNls83g-N96s30PPrFwjWw6aTxuTHWTHIDUNhaD052O4=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-6",
  },
  {
    id: 52,
    title: "Автостопом до Владивостока",
    description: "часть - 7 \nПермь — Татарск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXjSXLhhKwvxiajdymCsK2FBLFXtteTTddXLuWLbaAj0toWcVGeXCCG7p1EaiYK6_nl5QLR9bJgRHMF7jAnd1SLMhOeR9-uTpMUKMGUwp8pIxrpOfHr4zxE22Jn84pcuzXjNq0Wyr72eLYtnTUO51jp=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-7",
  },
  {
    id: 53,
    title: "Автостопом до Владивостока",
    description: "часть - 8 - Татарск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaU5jUwV_t5-wXyvpVlXYcSJxs5rmtWg1NlngFN5kg_yBMeCHQhgmOoESZ4pF6IJzhTpxbkR7CddFgGbplQJKWS4S_Rwc2et0RwuTTbuPG6NUVoi-w-d2u2qD8hU6kRUJh_dZ6COzWl_r892-5H3jH6o=w1050-h615-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-8",
  },
  {
    id: 54,
    title: "Автостопом до Владивостока",
    description: "часть - 9 - Новосибирск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVr1vVe3LTtuLPJfLaTz3jweI6pVmgtLLn1LHFNUPMPJdogvc06DQPmMC4hiW_B_i-fISYIuiXXzf0GCAbX8oNEAeDElQutqEgHhMY41Cb8dk32o0Vgd67z-a6EDxpuozLX4BXofeOImGzEh-j6XcAK=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-9",
  },
  {
    id: 55,
    title: "Автостопом до Владивостока",
    description: "часть - 10 \nНовосибирск — Красноярск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXLHPlKe46LXELN0KAps-3xPTOZciIWm775H5-cg48zYQxTtF4N9VjvlITvo4s2qucoqUaPoZ3wFiO3R_qhEQe0UQlzcDpMWTXPu2LKblGwqBFE4dfNJijWm1hx3LpVhO3aBq5LXk7z8WqjvA7tSRW5=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-10",
  },
  {
    id: 56,
    title: "Автостопом до Владивостока",
    description: "часть - 11 - Красноярск ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaXVo-nXHSM2eFYohkfxvbKZAf-Y6zXrg50DwTLz8q68DZlXiEftJ5OU16alKZNHwcw9jccwLqWExWEqyNsYN8VNxaggaLPq3oCn0WKviWBuIjKcRInpUmq5283ddAWTAgprDuGRQipyPgyUuB8k2nlk=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-11",
  },
  {
    id: 57,
    title: "Автостопом до Владивостока",
    description: "часть - 12 \nКрасноярск — Иркутск ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVdsUZG0cuF0maah5bO-sQ_ZU3sto1aoHttdPkBF5MtBC3otqN1b0ZediQSbzEQCxxIwQqk3CQAy8nUFNaa0J6IuDzeNPT0JXlQyoTvLn6XsDE0xHoWUV5ve8ffRrrciRvpScbJynVZsqdDTGBJrkFX=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-12",
  },
  {
    id: 58,
    title: "Автостопом до Владивостока",
    description: "часть - 13 \nИркутск — Байкал ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWi67lKQOnn9qUXP_BPvubHxnBv_YuaAuq157UhTmrRCa7OakqOPYxFq-mRgc3ssUvo7pbdO5Ru27wB47opPsJiTv_fTfsI74t0lYWFteuxw2-jnqSyXyD-37NbXSo5JspyAFsybuN8nup0YmO84dSy=w1050-h639-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-13",
  },
  {
    id: 59,
    title: "Автостопом до Владивостока",
    description: "часть - 14 \nБайкал — Улан-Удэ",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVP8deAWK-9BVHbuEqZ2Y2eM1kiesbvbLZvIORC4FaHtXmL46o0VjGy9jQkFDdU4spsPmEwBMUU-i7rqFI91ethlOJm0689gfKpDuAotRX-si8rnXB-SPuGpCC6J5MdVe0ork3mruj25MekSi2Aad1E=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-14",
  },
  {
    id: 60,
    title: "Автостопом до Владивостока",
    description: "часть - 15 \nУлан-Удэ — Хабаровск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaVanvp6-uykIgIWQgry0ZpToeIxtwQOQufnKHwSL8cHVH2lj6XieXKxZ_ikkJAlnuBUhnjj3vLY1D9dVFprTX_ClRltkDeg20u6vQKMd7kzRDS0nsxizIZPDN9LzPs07uvVAknW5zF1uO4whTTEIhSA=w1826-h945-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-15",
  },
  {
    id: 61,
    title: "Автостопом до Владивостока",
    description: "часть - 16 - Хабаровск",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaWniFBEOee_cYYvRpBAzb-7ZEuZP_g7eskJ2y_fW__DmNdRSKwlcaMPK9zJg5KGmZXd40WH4gr14171jmG3_6CTQwZ7RDfIXFsONbRmNY9cofXm72eqh53KR7XFvzki7bnapW3WqU9l6oGiSZAOIfp6=w1050-h695-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-16",
  },
  {
    id: 62,
    title: "Автостопом до Владивостока",
    description: "часть - 17 \nХабаровск - Владивосток",
    img: "https://lh3.googleusercontent.com/pw/AJFCJaUBVdONpeB77JIpe5ylnKmi_klEFGmvzHbfq77fY02eahCgLb0O76ociaHuMOyU8x-ebtYoM2AlDuGwNox350TAMtIPB6BZyidhjw6_dgayzS2x7QnBOqoLsIgI2NLPrQYOrFrZawTb2EKQ-pcmTFci=w960-h497-s-no?authuser=0",
    countries: ["Россия"],
    continent: ["Европа"],
    travelType: ["Классический"],
    travelDate: "06.2014",
    articleLink: "/blog/russia/2014-spb-vladivostok-p-17",
  },
];
