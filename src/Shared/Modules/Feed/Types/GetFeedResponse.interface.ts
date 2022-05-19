import { ArticleInterface } from "../../../Types/Article.interface";

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
