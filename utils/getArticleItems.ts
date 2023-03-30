import { scheme } from "@/model/model";

export const getArticleItems = (id: number) => {
  const article = scheme.find((article) => article.id === id);

  return {
    title: article?.title || "",
    description: article?.description || "",
    img: article?.img || "",
  };
};
