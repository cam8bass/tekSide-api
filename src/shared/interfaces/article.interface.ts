import { articleCategories } from "../types";

interface ArticleDescriptionInterface {
  processor: string;
  ram: string;
  graphicCard: string;
  harkDisk: string;
  system: string;
  wifi: boolean;
}

export interface ArticleInterface {
  createdAt: string;
  title: string;
  img: string;
  price: number;
  category: articleCategories;
  availability: boolean;
  description: ArticleDescriptionInterface;
}
