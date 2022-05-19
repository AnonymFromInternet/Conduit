import { ProfileInterface } from "./Profile.interface";

export interface ArticleInterface {
  author: ProfileInterface;
  title: string;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  updatedAt: string;
}
