import { PopularTagType } from "../../../Types/PopularTag.type";

export interface PopularTagsStateInterface {
  popularTags: PopularTagType[] | null;
  isLoading: boolean;
  errors: string | null;
}
