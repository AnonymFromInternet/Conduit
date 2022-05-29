import { createListenerMiddleware } from "@reduxjs/toolkit";

import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from "../Store/Slices/PopularTags.slice";
import { PopularTagsService } from "../Services/PopularTags.service";

export const getPopularTagsListener = createListenerMiddleware();

getPopularTagsListener.startListening({
  actionCreator: getPopularTagsAction,
  effect: async (action, listenerApi) => {
    PopularTagsService.getPopularTags()
      .then((response) => {
        listenerApi.dispatch(getPopularTagsSuccessAction(response.data.tags));
      })
      .catch(() => {
        listenerApi.dispatch(
          getPopularTagsFailureAction("error by getting popular tags")
        );
      });
  },
});
