type Country = Array<
  "Россия" | "Марокко" | "Бельгия" | "Голландия" | "Испания" | "Индия" | "ОАЭ"
>;
type TravelType = Array<"Классический" | "Двухколёсный" | "Урбан">;
type Continent = Array<"Европа" | "Азия" | "Африка" | "Америка">;

type Scheme = {
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
    title: "Автостоп по Африке",
    description: "Часть - 1",
    img: "https://lh3.googleusercontent.com/sbEu36xWu21Y_HKl2hmldbP8VDcV7jk2HitVhZSM1bSzCoP4NFm5a5icc4RFb6UWQh3379-OtPzFD_Ti7zHwH6YNP92OB7fni5wCMKTKPkadJ-D-eyVBpj_UNVamakhIF3hDBIbZT_hhiEGeK3_RtZ3gH0u7knyvoad3W6JRX4pM-10s7xx6sZTkUQuv4CIBVO_AY075mAQrijNaXnFLZiKTASmx5flrEwUuxLsOnSGaqivCH-wZNyeqKIfJ3cxmucFYioPxADMFN6DbkP1KrgdeinI8tkPkxFoRPewpFudku3hgQKJD0IOdu4ZspgYdmKovnclOuROqNEagVz437LU0ziwozIYYM1o7fKrjqt6_rXdimOjHWHvcJS-fFBXYlcBqVAQexXrJZ5U9gMGmD-xJthEv_M1BMj9BghBUnZcY9Ti9QKQzitTFDVZHFWViqqbM1B82Llb8nPbzqht4hTNufdF8U_9AlNHyahWtnObQH5MhHHHGCCJ4MLR8GRMUfndlp3RlHiT4CBG0IkYS8xRWwuA4YzV2pENNMdo2y8aoTQnANxFB9zqXKxwLvT4oNfbqdxGvcQfnqHT5Xrm5PJUPdDJ9mOBXszEcW5YoJ7tFOsya-JtjbYiEHgk5CqnheLqoFp7WhEuMN_5h4tClk71euYMiCVj86CGYD1q0V5IQnPdk7fHCTDKLClGVzjPowUODDy08V2aifJkebEGl7yX0dVKNpoqFRMi4AMVnUjkc7OHt_ne7GmhUhTYUaDC8lpBd1TChSyNN4B-TG8YguE4N8FGLVfs6pDz08x1o-MXHSYbJG_hT9fgoTLLSSLHWDdSAC5nPEiBaLXh_E0I00OC2akBji8DHa567ZCrlJizEq4VDPLofEPOQQi4rha_OyKPvy4Jw4Q2mMzk0qFMLsyDgf9IQNE5FPfWhjkX-8MZKQCsS=w1406-h969-s-no?authuser=0",
    countries: ["Марокко"],
    continent: ["Африка"],
    travelType: ["Классический"],
    travelDate: "12.2011",
    articleLink: "/blog/morocco/2011-p-1",
  },
  {
    title: "Автостоп по Африке",
    description: "Часть - 2",
    img: "https://lh3.googleusercontent.com/sGWw4tTTaKagWbIKpCbh9ToBvheVbqvVoG5TjT6Z2w1HAycCGSFvaPbrFhemFiJeOZlnfyIbcBBM0m0PfxENHW409idhCPTC-b7QDWPJMJtSLgI1Y3f4LF9xflFhBNVmMAWRiT5xg0ene-oR9EZmdo7nsHOq2gwCb9VHBaZtTZX1KSmHnZMOTbmJIGuMCbM1-YApYC-r7mAm8rdFSLEB4u1KbFZpMIkNUIptA--0k3OaaNxjj3V2HVPIHHD0vP3a3aDhsxClrK6dnfLtteMfptiV-riMyQb5A6tihvhOiwvmsosP48JDSPrlVoxb2mXqwOKXRF6ZJgx5bdxVB4YVJS5L38j0Kk8tw6BzFCu1ixCW6T8VciJCaZNEW4kJ_CKK8O8NcgGZcP4W1gIVG0Hp0ml9jWjYTeW8s-_8HGFf0OCKm2OIuJX1s5HpC0OJQzDNI3vzEQp3gEyTvUeUjDuKBD-hagcE-11WC35HIiZQu_a7_GDD6w73PFrtjomPULgyCIwF0vSBpMwyUI1zsMSg3yogawHxj76khmKprBvlQsX7u0RGak3vTXlxaXTjIhQCCuogcEVUjdAuSgIKV1zpaACOq71gZmc6MOKmcexCkBVrU04pSGaZbA5JWfcZV8YfLakfRH_ZW-qHmpicZuQfw6peWy0Od_-ZzTBM-MM301fsEHMVbZ1__Y7ymrvDpMEYXKbbUydSGbIQkbOFrlk1vcRMw5FojVdQzE-qGwNtgyuqDS1Brur1-ZaUtR-4kK8arhFbC3qPjWrgkVc6uQ4zP14Nz-n6Q0ZSnYqrQSIxjMyQN3jo05WWIDf26sOGvQzx_actlojsOKhh7JvFBGq_szoJE9Jvuz3CseiIq4uUMAJy2yK4QLb9uHIEMkAZKTxpxPnzsyOzCW9nHvStek8YZYYUngBeLhgpjuk3J9mT8lBYUg6W=w1479-h969-s-no?authuser=0",
    countries: ["Марокко"],
    continent: ["Африка"],
    travelType: ["Классический"],
    travelDate: "12.2011",
    articleLink: "/blog/morocco/2011-p-2",
  },
];
